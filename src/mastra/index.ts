import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { contentAgent } from './agents/content-agent';
import { researchAgent } from './agents/research-agent';
import { contentGenerationWorkflow } from './workflows/content-workflow';


export const mastra = new Mastra({
  agents: { 
    contentAgent,
    researchAgent 
  },
  workflows: { 
    contentGenerationWorkflow 
  },

  logger: new PinoLogger({
    name: 'LinkedIn-AI-Tool',
    level: 'info',
  }),
});

