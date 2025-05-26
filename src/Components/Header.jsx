import { useState } from "react";
import { Bell, Plus } from "lucide-react";

const Header = () => {
  const [showName, setShowName] = useState(false);

  const toggleName = () => {
    setShowName(!showName);
  };

  return (
    <header className="header">
      <h1 className="header-title">Healthcare.</h1>

      <div className="header-content">
        <div className="header-bar">
          <input
            type="search"
            placeholder="Search..."
            className="search-input"
          />
        </div>

        <div className="header-actions">
          <Bell className="notification-icon" />
          <div className="user-profile" onClick={toggleName}>
            <div className="user-avatar">JD</div>
          </div>
          <button className="add-button">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Toggle card below user avatar */}
      {showName && (
        <div className="user-card">
          John Doe
        </div>
      )}
    </header>
  );
};

export default Header;
