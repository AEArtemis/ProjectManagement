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
import { Calendar } from './components/pages/Calendar';
import { Projects } from './components/pages/Projects';
import { Tickets } from './components/pages/Tickets';
import { Help } from './components/pages/Help';
import { TicketDetail } from './components/pages/TicketDetail';
import Layout from './components/Layout';
import { Signup } from './components/pages/Signup';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        {/* Protected routes with Sidebar */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/account" element={<Account />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/team" element={<Team />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/tickets/ticket-detail" element={<TicketDetail />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/help" element={<Help />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
