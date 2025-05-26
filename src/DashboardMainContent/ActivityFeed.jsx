import { activityData } from "../data/healthData";

const ActivityFeed = () => {
  const maxValue = Math.max(...activityData.map((item) => item.value));

  return (
    <div className="activity-section">
      <div className="activity-header">
        <h3 className="activity-title">Activity</h3>
        <div className="activity-legend">
          <div className="legend-item">
            <div className="legend-dot active"></div>
            <span>Active</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot inactive"></div>
            <span>Inactive</span>
          </div>
        </div>
        <div className="legend-item">
          <div className="legend-dot active"></div>
          <span>4 Appointments on this week</span>
        </div>
      </div>

      <div className="activity-chart">
        {activityData.map((item, index) => (
          <div key={index} className="chart-bar">
            <div
              className={`bar ${item.value > 60 ? "active" : "inactive"}`}
              style={{ height: `${(item.value / maxValue) * 100}%` }}
            />
            <span className="bar-label">{item.day}</span>
          </div>
        ))}
      </div>

      <div className="activity-footer">
        <div className="activity-time">
          <span className="activity-time-label">This Week</span>
          <span className="activity-time-value">4h 32m</span>
        </div>
        <div className="activity-time">
          <span className="activity-time-label">Last Week</span>
          <span className="activity-time-value">3h 18m</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
