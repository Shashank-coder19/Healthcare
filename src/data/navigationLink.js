// src/data/navigationLinks.js
import {
  LayoutDashboard,
  History,
  CalendarDays,
  CalendarCheck2,
  BarChart2,
  FlaskConical,
  MessageCircle,
  LifeBuoy,
  Settings
} from 'lucide-react';

const navigationLinks = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "History", icon: History },
  { label: "Calendar", icon: CalendarDays },
  { label: "Appointments", icon: CalendarCheck2 },
  { label: "Statistics", icon: BarChart2 },
  { label: "Tests", icon: FlaskConical },
  { label: "Chat", icon: MessageCircle },
  { label: "Support", icon: LifeBuoy },
  { label: "Setting", icon: Settings }
];

export default navigationLinks;
