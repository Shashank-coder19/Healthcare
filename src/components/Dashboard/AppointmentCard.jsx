import { Clock } from "lucide-react";

const AppointmentCard = ({ data, index }) => {
  const isEven = index % 2 === 0;
  const bgColor = isEven ? "#031caa" : "#f3f4f4";
  const textColor = isEven ? "#ffffff" : "#000000";

  return (
    <div
      className="appointment-card"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="appointment-header">
        <img src={data.icon} alt="icon" className="appointment-icon" />
        <h3 className="appointment-title">{data.title}</h3>
      </div>
      <p className="appointment-time">
        <Clock size={14} /> {data.time}
      </p>
      <p className="appointment-doctor">Dr. {data.doctor}</p>
    </div>
  );
};

export default AppointmentCard;
