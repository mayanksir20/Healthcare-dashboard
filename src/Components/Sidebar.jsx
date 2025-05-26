import { useState } from 'react';
import {
  Grid3X3, History, Calendar, Clock,
  BarChart3, TestTube, MessageCircle, HelpCircle, Settings
} from 'lucide-react';
import { navigationItems } from '../data/healthData';

const iconMap = {
  dashboard: Grid3X3,
  history: History,
  calendar: Calendar,
  clock: Clock,
  chart: BarChart3,
  test: TestTube,
  chat: MessageCircle,
  help: HelpCircle,
  settings: Settings
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile toggle button */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <h3 className="sidebar-heading">General</h3>
          <nav className="nav-list">
            {navigationItems.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <a
                  key={index}
                  href="#"
                  className={`nav-item ${item.active ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)} // close sidebar on click (mobile)
                >
                  <Icon className="nav-icon" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
