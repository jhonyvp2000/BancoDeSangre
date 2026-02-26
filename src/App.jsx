import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout';
import Home from './pages/public/Home';
import Requirements from './pages/public/Requirements';
import ProcessTimeline from './pages/public/ProcessTimeline';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route element={<PublicLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/process" element={<ProcessTimeline />} />
          <Route path="/appointments" element={<div style={{ padding: '5rem', textAlign: 'center' }}><h2>Agendar Citas (Pronto)</h2></div>} />
          <Route path="/locations" element={<div style={{ padding: '5rem', textAlign: 'center' }}><h2>Ubicaciones (Pronto)</h2></div>} />
          <Route path="/campaigns" element={<div style={{ padding: '5rem', textAlign: 'center' }}><h2>Campañas (Pronto)</h2></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
