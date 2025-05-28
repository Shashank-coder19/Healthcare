import navitem from '../../data/navigationLink.js';

const Sidebar = () => {
  

  return (
    <aside className="sidebar">
      <h2 className="sidebar-logo">General</h2>
      <nav className="sidebar-nav">
        {navitem.map(({ label, icon: Icon}) => (
          <a key={label}  className="sidebar-link">
            <Icon className="sidebar-icon" />
            <span className="sidebar-label">{label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
