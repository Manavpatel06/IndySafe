import React from 'react';
import { Layout } from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { EmergencyPage } from './pages/EmergencyPage';
import { HazardsPage } from './pages/HazardsPage';
import { AlertsPage } from './pages/AlertsPage';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <ChatProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/emergency" element={<EmergencyPage />} />
          <Route path="/hazards" element={<HazardsPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
        </Routes>
      </Layout>
    </ChatProvider>
  );
}

export default App;