import React from 'react';

const ActivityChart = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const activityData = [20, 25, 30, 35, 40, 30, 25]; // Example data

  return (
    <div className="activity-chart-container">
      <h4 className="chart-title">Weekly Activity</h4>
      <div className="chart-bars">
        {activityData.map((value, i) => (
          <div key={i} className="bar-group">
            <div
              className="bar"
              style={{ height: `${value}px` }}
            >
              <span className="bar-tooltip">{value}</span>
            </div>
            <span className="bar-label">{days[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;
