import { createWorkflow, createStep } from '@mastra/core/workflows';
import { z } from 'zod';

// Step 1: Research the topic
const researchStep = createStep({
  id: 'research-topic',
  description: 'Research the given topic using Perplexity AI',
  inputSchema: z.object({
    topic: z.string(),
    contentType: z.enum(['article', 'trend', 'news', 'tutorial']).default('article'),
    tone: z.enum(['professional', 'casual', 'inspiring', 'informative']).default('professional'),
    scheduledTime: z.string().optional()
  }),
  outputSchema: z.object({
    research: z.string(),
    sources: z.array(z.string()),
    keyInsights: z.array(z.string()),
    topic: z.string(),
    contentType: z.string(),
    tone: z.string(),
    scheduledTime: z.string().optional()
  }),
  execute: async ({ inputData, mastra }) => {
    const researchAgent = mastra.getAgent('researchAgent');
  
    const prompt = `Research the topic: "${inputData.topic}" for a ${inputData.contentType} focused on LinkedIn content. 
                   Provide comprehensive research with recent trends, statistics, and insights that would be valuable for creating engaging LinkedIn content.`;
  
    const response = await researchAgent.generate(prompt);
  
    return {
      research: response.text || 'Research completed',
      sources: [],
      keyInsights: [],
      topic: inputData.topic,
      contentType: inputData.contentType,
      tone: inputData.tone,
      scheduledTime: inputData.scheduledTime
    };
  }
});

// Step 2: Generate LinkedIn content
const generateContentStep = createStep({
  id: 'generate-content',
  description: 'Generate viral LinkedIn post from research',
  inputSchema: z.object({
    research: z.string(),
    sources: z.array(z.string()),
    keyInsights: z.array(z.string()),
    topic: z.string(),
    contentType: z.string(),
    tone: z.string(),
    scheduledTime: z.string().optional()
  }),
  outputSchema: z.object({
    linkedinPost: z.string(),
    hashtags: z.array(z.string()),
    topic: z.string()
  }),
  execute: async ({ inputData, mastra }) => {
    const contentAgent = mastra.getAgent('contentAgent');
  
    const prompt = `Based on this research about "${inputData.topic}":
  
Research: ${inputData.research}
Key Insights: ${inputData.keyInsights.join(', ')}

Create a viral LinkedIn post that:
1. Starts with an engaging hook
2. Provides valuable insights
3. Uses a ${inputData.tone} tone
4. Includes a call-to-action
5. Uses appropriate hashtags
6. Is optimized for LinkedIn engagement

Content Type: ${inputData.contentType}

Please format the response as a complete LinkedIn post with hashtags included at the end.`;

    const response = await contentAgent.generate(prompt);

    // Extract hashtags from the generated content
    const content = response.text || '';
    const hashtagRegex = /#[\w]+/g;
    const hashtags = content.match(hashtagRegex) || [];

    return {
      linkedinPost: content,
      hashtags: hashtags.map(tag => tag.substring(1)), // Remove # symbol
      topic: inputData.topic
    };
  }
});

// Create the main workflow
export const contentGenerationWorkflow = createWorkflow({
  id: 'content-generation-workflow',
  description: 'Complete workflow for researching and creating viral LinkedIn content',
  inputSchema: z.object({
    topic: z.string().describe('Topic to research and create content about'),
    contentType: z.enum(['article', 'trend', 'news', 'tutorial']).default('article'),
    tone: z.enum(['professional', 'casual', 'inspiring', 'informative']).default('professional'),
    scheduledTime: z.string().optional().describe('ISO string for scheduled posting')
  }),
  outputSchema: z.object({
    linkedinPost: z.string(),
    hashtags: z.array(z.string()),
    topic: z.string()
  })
})
.then(researchStep)
.then(generateContentStep)
.commit();
