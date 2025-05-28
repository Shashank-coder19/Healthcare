import anatomicalIndicator from '../../data/AnatomicalIndicator';

const HealthStatusCard = () => {
  const colorClasses = {
    red: {
      bg: 'bg-red',
      fill: 'fill-red',
      status: 'status-red'
    },
    yellow: {
      bg: 'bg-yellow',
      fill: 'fill-yellow',
      status: 'status-yellow'
    },
    green: {
      bg: 'bg-green',
      fill: 'fill-green',
      status: 'status-green'
    }
  };

  return (
    <div className="anatomy-card-container">
      <div className="anatomy-card-wrapper">
        {anatomicalIndicator.map((item, index) => (
          <div key={index} className="anatomy-card">
            <div className="anatomy-card-header">
              <div className={`anatomy-card-icon ${colorClasses[item.color].bg}`}>
                <img src={item.icon} alt={item.organ} />
              </div>
              <div>
                <h5 className="anatomy-card-title">{item.organ}</h5>
                <p className="anatomy-card-date">Status: 24 Oct 2023</p>
              </div>
            </div>

            <div className="anatomy-progress-bg">
              <div
                className={`anatomy-progress-fill ${colorClasses[item.color].fill}`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>

            <div className="anatomy-status-row">
              <p className={colorClasses[item.color].status}>{item.status}</p>
              <p className="text-gray-600">{item.percentage}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthStatusCard;
