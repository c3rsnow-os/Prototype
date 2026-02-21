// Soul System Type Definitions

export interface CharacterCard {
  // Metadata
  id: string;
  name: string;
  version: string;
  created: string;
  lastModified: string;

  // Core Identity (Static)
  description: string;
  personality: string[];
  traits: string[];
  background: string;

  // Persona Configuration
  personaLLM: {
    provider: 'openrouter' | 'huggingface' | 'llamacpp';
    model: string;
    systemPrompt: string;
    temperature: number;
    maxTokens: number;
  };

  // Factual Configuration
  factualLLM: {
    provider: 'openrouter' | 'huggingface' | 'llamacpp';
    model: string;
    systemPrompt: string;
    temperature: number;
    maxTokens: number;
  };

  // Dynamic Evolution
  memoryBank: MemoryEntry[];
  learnedPatterns: string[];
  emotionalState: EmotionalState;
  relationshipMap: RelationshipEntry[];

  // Statistics
  stats: {
    totalInteractions: number;
    averageResponseQuality: number;
    factsVerified: number;
    personaConsistency: number;
  };
}

export interface MemoryEntry {
  timestamp: string;
  type: 'conversation' | 'learning' | 'correction' | 'achievement';
  content: string;
  metadata?: Record<string, any>;
}

export interface EmotionalState {
  currentMood: string;
  confidence: number;
  engagement: number;
  lastUpdated: string;
}

export interface RelationshipEntry {
  userId: string;
  interactionCount: number;
  sentiment: 'positive' | 'neutral' | 'negative';
  commonTopics: string[];
  lastInteraction: string;
}

// Soul System Workflow Types
export interface SoulWorkflowInput {
  userQuery: string;
  characterCardId: string;
  userId: string;
}

export interface WorkflowNodeOutput {
  nodeId: string;
  timestamp: string;
  content: string;
  metadata?: Record<string, any>;
}

export interface SoulWorkflowResponse {
  finalResponse: string;
  workflowStages: WorkflowNodeOutput[];
  characterCardUpdated: CharacterCard;
  metadata: {
    totalProcessingTime: number;
    factsVerified: boolean;
    personaConsistency: number;
  };
}

// LLM Configuration Types
export interface LLMProviderConfig {
  provider: 'openrouter' | 'huggingface' | 'llamacpp';
  apiKey?: string;
  baseUrl?: string;
  timeout?: number;
}

export interface LLMRequest {
  model: string;
  messages: LLMMessage[];
  temperature: number;
  maxTokens: number;
  systemPrompt?: string;
}

export interface LLMMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface LLMResponse {
  content: string;
  finishReason: string;
  tokensUsed: number;
  model: string;
}