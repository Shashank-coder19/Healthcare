import './App.css';
import Sidebar from './components/layout/Sidebar.jsx';
import CalendarView from './components/Dashboard/Calendar.jsx';
import TopBar from './components/layout/TopBar.jsx';
import AnatomySection from './components/Dashboard/AnatomySection.jsx';
import ActivityChart from './components/Dashboard/ActivityChart.jsx';

function App() {
  return (
    <div className="app-container">
      <nav className="topbar-container">
        <TopBar />
      </nav>

      <div className="body-container">
        {/* Sidebar on the left */}
        <aside className="sidebar-section">
          <Sidebar />
        </aside>

        {/* Main display area */}
        <main className="display-section">
          <div className="content-row">
            <div className="anatomy-wrapper">
              <AnatomySection />
              <ActivityChart/>
            </div>
            <div className="calendar-wrapper">
              <CalendarView />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
