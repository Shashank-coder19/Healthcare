import tooth from '../assets/icons8-tooth-96.png';
import muscle from '../assets/icons8-muscle-80.png';

const calendarAppointments = {
  month: "October 2021",

  dates: {
    0: ["08:00", "12:00", "16:00"], // Sunday
    1: ["09:00", "13:00", "17:00"], // Monday
    2: ["10:00", "14:00", "18:00"], // Tuesday
    3: ["08:30", "11:30", "15:30"], // Wednesday
    4: ["09:15", "12:15", "16:15"], // Thursday
    5: ["10:45", "13:45", "17:45"], // Friday
    6: ["09:30", "12:30", "15:30"]  // Saturday
  },

  appointments: [
    {
      id: 1,
      icon: tooth,
      title: "Dentist",
      date: "2021-10-25",  // example date assigned to details (Monday)
      time: "09:00",
      doctor: "Amit Kumar"
    },
    {
      id: 2,
      icon: muscle,
      title: "Physiotherapy Appointment",
      date: "2021-10-25", // same example date for details
      time: "13:00",
      doctor: "Ramesh Gupta"
    },
    {
      id: 101,
      icon: tooth,
      title: "Dentist",
      date: "2021-10-27",
      time: "09:00",
      doctor: "Amit Kumar"
    },
    {
      id: 102,
      icon: muscle,
      title: "Physiotherapy",
      date: "2021-10-28",
      time: "13:00",
      doctor: "Ramesh Gupta"
    },
    {
      id: 103,
      icon: tooth,
      title: "Follow-up Dental",
      date: "2021-10-29",
      time: "10:00",
      doctor: "Amit Kumar"
    }
  ]
};

export default calendarAppointments;
