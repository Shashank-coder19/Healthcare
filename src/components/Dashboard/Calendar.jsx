import calendarAppointments from "../../data/calendarAppointments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong, faLeftLong } from "@fortawesome/free-solid-svg-icons";
import AppointmentCard from "./AppointmentCard";

const Calendar = () => {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date("2021-10-25"); // Assume today is 25th Oct 2021
  const todayStr = today.toISOString().split("T")[0];

  const startDate = new Date(today);
  startDate.setDate(today.getDate() - today.getDay());

  const generateWeekDates = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      days.push({ date, dayIndex: i });
    }
    return days;
  };

  const { month, dates, appointments } = calendarAppointments;

  const appointmentTimeSlots = new Set(
    appointments.map((a) => `${a.date}_${a.time}`)
  );

  const todayAppointments = appointments.filter((a) => a.date === todayStr);
  const upcomingAppointments = appointments.filter((a) => a.date > todayStr);

  const upcomingAppointmentSlots = new Set(
    upcomingAppointments.map((a) => `${a.date}_${a.time}`)
  );

  const convertTo12h = (time24) => {
    const [h, m] = time24.split(":");
    const hour = parseInt(h, 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12;
    return `${hour12}:${m} ${ampm}`;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h3 style={{ color: "#031caa" }}>{month}</h3>
        <div className="calendar-nav">
          <button>
            <FontAwesomeIcon icon={faLeftLong} />
          </button>
          <button>
            <FontAwesomeIcon icon={faRightLong} />
          </button>
        </div>
      </div>

      <div className="calendar-grid">
        {generateWeekDates().map(({ date, dayIndex }) => {
          const day = date.getDate();
          const weekday = weekDays[date.getDay()];
          const timeSlots = dates[dayIndex] || [];

          const dateStr = date.toISOString().split("T")[0];
          const isToday = dateStr === todayStr;

          return (
            <div
              key={dayIndex}
              className={`calendar-day ${isToday ? "today-highlight" : ""}`}
            >
              <div className="day-label">{weekday}</div>
              <div className="day-date" style={{ color: "#031caa" }}>
                {day}
              </div>

              {timeSlots.map((time) => {
                const slotKey = `${dateStr}_${time}`;
                const isTodayAppointment = appointmentTimeSlots.has(slotKey);
                const isUpcomingAppointment = upcomingAppointmentSlots.has(slotKey);

                return (
                  <div
                    key={time}
                    className={`time-slot 
                      ${isTodayAppointment ? "active-slot" : ""} 
                      ${isUpcomingAppointment ? "upcoming-highlight" : ""}
                    `}
                  >
                    {convertTo12h(time)}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {todayAppointments.length > 0 && (
        <>
          <h4 className="today-title">Today’s Appointments</h4>
          <div className="appointments-row">
            {todayAppointments.map((appointment, index) => (
              <AppointmentCard
                key={appointment.id}
                data={appointment}
                index={index}
              />
            ))}
          </div>
        </>
      )}

      <h4 className="upcoming-title">Upcoming Schedule</h4>

      <div className="appointments-row">
        {upcomingAppointments.map((appointment, index) => (
          <AppointmentCard
            key={appointment.id}
            data={appointment}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
