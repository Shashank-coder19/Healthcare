import {  Plus, Search } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';


const TopBar = () => {
  return (
    <header className="topbar">
      <h1 className="logo">
        <span className="blue-text">Health</span>care.
      </h1>

      <div className="search-container">
        <Search className="search-icon" />
        <input type="text" placeholder="Search" disabled />
<FontAwesomeIcon icon={faBell} size="lg" style={{color: "#031caa",}} />
      </div>

      <div className="topbar-actions">
        
        <div className="user-profile">
          <img
            src="https://i.pravatar.cc/40?img=1"
            alt="User Avatar"
            className="avatar"
          />
          <span className="username">John Doe</span>
        </div>
        <button className="add-button">
          <Plus size={20} />
        </button>
      </div>
    </header>
  );
};

export default TopBar;
