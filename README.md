# LinkedIn Content Generation AI

A powerful AI-powered content generation system built with the Mastra framework that creates viral LinkedIn posts through intelligent research and content optimization.

## 🎯 Overview

This project demonstrates how to create an AI-powered content generation system that:

- **Researches topics** using Perplexity AI for real-time, accurate information
- **Generates viral LinkedIn posts** optimized for engagement and reach
- **Implements content psychology** principles for maximum impact
- **Uses workflow orchestration** to streamline the content creation process
- **Integrates multiple AI models** (Google Gemini) for specialized tasks

## 🏗️ Architecture

The system is built with a modular architecture consisting of:

### 🤖 Agents
- **Content Creation Agent**: Specialized in creating viral LinkedIn posts using psychological principles and platform optimization (uses Google Gemini 2.5 Pro)
- **Research Agent**: Gathers comprehensive information using Perplexity AI for real-time data and insights (uses Google Gemini 1.5 Pro)

### 🔄 Workflows
- **Content Generation Workflow**: Orchestrates the complete process from research to final content creation with two sequential steps

### 🛠️ Tools
- **Perplexity Research Tool**: Integrates with Perplexity AI for comprehensive topic research with fallback mock data

## 🚀 Features

### Content Creation Agent
- **Viral Post Framework**: Implements proven psychological principles for maximum engagement
- **Hook Optimization**: Creates compelling opening lines that stop the scroll
- **Platform Optimization**: Tailored specifically for LinkedIn's algorithm and user behavior
- **Content Psychology**: Uses high-arousal emotions and social currency principles
- **Mobile-First Design**: Optimized for mobile reading with proper formatting
- **No Markdown/Emojis**: Uses Unicode symbols and text formatting only

### Research Agent
- **Real-time Data**: Uses Perplexity AI for current information and trends
- **Comprehensive Analysis**: Gathers statistics, quotes, and expert opinions
- **Source Verification**: Ensures information comes from reliable sources
- **Trend Identification**: Spots emerging topics and industry developments

### Content Generation Workflow
- **Two-Step Process**: Research → Content Creation
- **Quality Assurance**: Ensures research-backed, engaging content
- **Flexible Input**: Supports various content types and tones
- **Hashtag Extraction**: Automatically extracts hashtags from generated content

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mastra
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

4. **Configure API keys**
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   PERPLEXITY_API_KEY=your_perplexity_api_key_here  # Optional
   ```

## 🔧 Configuration

### Required API Keys

- **OpenAI API Key**: Required for content generation
  - Get it from: [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)

- **Perplexity API Key**: Optional for enhanced research capabilities
  - Get it from: [https://www.perplexity.ai/settings/api](https://www.perplexity.ai/settings/api)
  - If not provided, the system will use mock research data

## 🎮 Usage

### Development Mode
```bash
pnpm dev
```

### Using the Workflow

The content generation workflow can be triggered with the following parameters:

```typescript
const result = await contentGenerationWorkflow.execute({
  topic: "AI in marketing",
  contentType: "article", // 'article' | 'trend' | 'news' | 'tutorial'
  tone: "professional", // 'professional' | 'casual' | 'inspiring' | 'informative'
  scheduledTime: "2024-01-15T10:00:00Z" // Optional
});
```

### Output Format

The workflow returns:
```typescript
{
  linkedinPost: "Complete LinkedIn post content...",
  hashtags: ["ai", "marketing", "technology"],
  topic: "AI in marketing"
}
```

## 📁 Project Structure

```
mastra/
├── src/
│   └── mastra/
│       ├── agents/
│       │   ├── content-agent.ts      # LinkedIn content creation agent (Gemini 2.5 Pro)
│       │   └── research-agent.ts     # Research and data gathering agent (Gemini 1.5 Pro)
│       ├── workflows/
│       │   └── content-workflow.ts   # Main content generation workflow
│       ├── tools/
│       │   └── perplexity-tool.ts    # Perplexity AI integration with fallback
│       └── index.ts                  # Main Mastra configuration
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

## 🧠 Content Psychology Principles

The system implements proven psychological principles for viral content:

### Hook Creation
- **Curiosity Gaps**: Creates incomplete information that demands completion
- **Pattern Interrupts**: Breaks typical LinkedIn content patterns
- **Specific Numbers**: Uses concrete data for credibility
- **Emotional Triggers**: Leverages high-arousal emotions

### Content Structure
- **One Message Rule**: Focuses on a single core idea per post
- **Mobile Optimization**: Short paragraphs (8-15 words) for readability
- **Visual Breaks**: Uses Unicode symbols strategically (●, ★, →, ▪)
- **Narrative Arc**: Beginning → Middle → End structure

### Engagement Optimization
- **Dwell Time**: Content designed to keep readers engaged
- **Comment Quality**: Encourages meaningful conversations
- **Social Currency**: Makes readers look intelligent when shared
- **Relatability**: Specific stories that resonate universally

## 🔄 Workflow Process

1. **Research Phase** (`research-topic` step)
   - Topic analysis using Perplexity AI
   - Trend identification and data gathering
   - Source verification and insight extraction

2. **Content Generation** (`generate-content` step)
   - Hook creation based on psychological principles
   - Content structuring for optimal engagement
   - Hashtag extraction and formatting

3. **Quality Assurance**
   - Mobile readability check
   - Platform-specific optimization
   - Engagement potential assessment

## 🛠️ Customization

### Adding New Content Types
Extend the `contentType` enum in the workflow to support new content formats:

```typescript
contentType: z.enum(['article', 'trend', 'news', 'tutorial', 'case-study', 'opinion'])
```

### Customizing Tone
Add new tone options to match your brand voice:

```typescript
tone: z.enum(['professional', 'casual', 'inspiring', 'informative', 'humorous', 'authoritative'])
```

### Extending Research Capabilities
Add new tools to the research agent for enhanced data gathering:

```typescript
tools: {
  perplexityTool,
  yourCustomTool
}
```

## 📦 Dependencies

### Core Dependencies
- `@mastra/core`: Latest version - Core Mastra framework
- `@mastra/loggers`: Latest version - Logging functionality
- `@ai-sdk/google`: ^1.0.0 - Google AI SDK for Gemini models
- `ai`: ^4.3.19 - AI SDK
- `zod`: ^3.25.67 - Schema validation

### Development Dependencies
- `mastra`: Latest version - Mastra CLI
- `typescript`: ^5.8.3 - TypeScript support
- `@types/node`: ^22.15.29 - Node.js type definitions

## 🚀 Deployment

### Local Development
```bash
pnpm dev
```

### Production Build
```bash
pnpm build
pnpm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

For issues and questions:
- Check the troubleshooting section
- Review the API documentation
- Open an issue on GitHub

## 🔗 Related Projects

- [Mastra Framework](https://mastra.ai) - The underlying AI framework
- [LinkedIn API Documentation](https://developer.linkedin.com/) - Platform-specific guidelines
- [Perplexity AI](https://www.perplexity.ai/) - Research and data gathering

---

**Built with ❤️ using the Mastra framework**
