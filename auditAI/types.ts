
export interface Offer {
  id: string;
  name: string;
  description: string;
  speed: string;
  price: string;
  keyBenefits: string[];
}

export interface Argumentation {
  offerId: string;
  argumentId: string;
  text: string;
  type: 'benefit' | 'objection_handling' | 'closing';
}

export interface CallTranscription {
  callId: string;
  fileName: string;
  agentName: string;
  dateTime: string;
  duration: string;
  transcript: string;
  detectedOfferId?: string;
}

export interface AuditResult {
  callId: string;
  score: number;
  vicesOfLanguage: string[];
  mandatoryArgumentsFound: string[];
  mandatoryArgumentsMissing: string[];
  objectionsHandled: string[];
  feedback: string;
  status: 'excellent' | 'good' | 'needs_improvement' | 'poor';
}

export type AppView = 'dashboard' | 'knowledge' | 'ingestion' | 'pipeline' | 'auditor';

export interface AppState {
  offers: Offer[];
  argumentations: Argumentation[];
  transcriptions: CallTranscription[];
  auditResults: AuditResult[];
  activeView: AppView;
  isProcessing: boolean;
}
