import tooth from '../assets/icons8-tooth-96.png';
import lungs from '../assets/icons8-lungs-96.png';
import bone from '../assets/icons8-bone-96.png';

const anatomicalIndicator = [
  { organ: "Lungs", status: "Issue Detected", color: "red", icon: lungs, percentage: 30 },
  { organ: "Teeth", status: "Needs Checkup", color: "yellow", icon: tooth, percentage: 60 },
  { organ: "Bone", status: "Healthy", color: "green", icon: bone, percentage: 90 }
];

export default anatomicalIndicator;
