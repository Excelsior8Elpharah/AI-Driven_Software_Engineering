
import React, { useState, useCallback } from 'react';
import { AppState, AppView, CallTranscription, AuditResult, Offer, Argumentation } from './types';
import { DEFAULT_OFFERS, DEFAULT_ARGUMENTS } from './constants';
import Dashboard from './components/Dashboard';
import KnowledgeBase from './components/KnowledgeBase';
import Ingestion from './components/Ingestion';
import Pipeline from './components/Pipeline';
import Auditor from './components/Auditor';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    offers: DEFAULT_OFFERS,
    argumentations: DEFAULT_ARGUMENTS,
    transcriptions: [],
    auditResults: [],
    activeView: 'dashboard',
    isProcessing: false,
  });

  const setView = (view: AppView) => setState(prev => ({ ...prev, activeView: view }));

  const updateOffers = (offers: Offer[]) => setState(prev => ({ ...prev, offers }));
  const updateArgumentations = (args: Argumentation[]) => setState(prev => ({ ...prev, argumentations: args }));
  
  const addTranscriptions = (newTranscriptions: CallTranscription[]) => {
    setState(prev => ({
      ...prev,
      transcriptions: [...prev.transcriptions, ...newTranscriptions]
    }));
  };

  const addAuditResults = (results: AuditResult[]) => {
    setState(prev => ({
      ...prev,
      auditResults: [...prev.auditResults, ...results]
    }));
  };

  const renderView = () => {
    switch (state.activeView) {
      case 'dashboard':
        return <Dashboard state={state} />;
      case 'knowledge':
        return (
          <KnowledgeBase 
            offers={state.offers} 
            argumentations={state.argumentations} 
            onUpdateOffers={updateOffers}
            onUpdateArgs={updateArgumentations}
          />
        );
      case 'ingestion':
        return (
          <Ingestion 
            onTranscribed={(t) => addTranscriptions(t)}
            isProcessing={state.isProcessing}
            setIsProcessing={(p) => setState(prev => ({ ...prev, isProcessing: p }))}
          />
        );
      case 'pipeline':
        return (
          <Pipeline 
            state={state} 
            onAudited={(results) => addAuditResults(results)}
            setIsProcessing={(p) => setState(prev => ({ ...prev, isProcessing: p }))}
          />
        );
      case 'auditor':
        return <Auditor state={state} />;
      default:
        return <Dashboard state={state} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <Sidebar activeView={state.activeView} setView={setView} />
      <main className="flex-1 overflow-y-auto p-8 relative">
        {state.isProcessing && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 font-semibold text-slate-700">Processando Inteligência Artificial...</p>
            </div>
          </div>
        )}
        <div className="max-w-7xl mx-auto">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;
