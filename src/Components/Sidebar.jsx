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
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <h3 className="sidebar-heading">General</h3>
          <nav className="nav-list">
            {navigationItems
              .filter(item => !['chat', 'help', 'settings'].includes(item.icon))
              .map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <a
                    key={index}
                    href="#"
                    className={`nav-item ${item.active ? 'active' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="nav-icon" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
          </nav>

          {/* Tools Section */}
          <h3 className="sidebar-heading">Tools</h3>
          <nav className="nav-list">
            {navigationItems
              .filter(item => ['chat', 'help'].includes(item.icon))
              .map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <a
                    key={index}
                    href="#"
                    className={`nav-item ${item.active ? 'active' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="nav-icon" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
          </nav>
        </div>

        {/* Settings at bottom */}
        <div className="sidebar-settings">
          <a
            href="#"
            className="nav-item"
            onClick={() => setIsOpen(false)}
          >
            <Settings className="nav-icon" />
            <span>Settings</span>
          </a>
        </div>
      </div>

      {/* Toggle Button */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
    </>
  );
};

export default Sidebar;
