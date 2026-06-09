import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import GoalsPage from './pages/GoalsPage';
import CharacterPage from './pages/CharacterPage';
import CalendarPage from './pages/CalendarPage';
import MyInfoPage from './pages/MyInfoPage';
import SettingsPage from './pages/SettingsPage';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <div className="app-shell">
          <main className="app-main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/goals" element={<GoalsPage />} />
              <Route path="/character" element={<CharacterPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/myinfo" element={<MyInfoPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
          <Nav />
        </div>
      </AppProvider>
    </BrowserRouter>
  );
}
