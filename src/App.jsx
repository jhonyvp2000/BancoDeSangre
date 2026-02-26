import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout';
import Home from './pages/public/Home';
import Requirements from './pages/public/Requirements';
import ProcessTimeline from './pages/public/ProcessTimeline';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/donors" element={<Donors />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/reports" element={<div style={{ padding: '2rem' }}>Reportes (En construcción)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
