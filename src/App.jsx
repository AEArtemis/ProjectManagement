import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/pages/Login';
import { Dashboard } from './components/pages/Dashboard';
import { Settings } from './components/pages/Settings'; 
import { Account } from './components/pages/Account';
import { Profile } from './components/pages/Profile';
import { Tasks } from './components/pages/Tasks';
import { Analytics } from './components/pages/Analytics';
import { Team } from './components/pages/Team';
import Layout from './components/Layout';
import { Calendar } from './components/pages/Calendar';


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        
        {/* Protected routes with Sidebar */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/account" element={<Account />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/team" element={<Team />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
