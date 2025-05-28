import Anatomy from '../../assets/Anatomical.png';
import HealthStatusCard from './HealthStatusCard';

const AnatomySection = () => (
  <>
    <div className='dashboard'><h2>DASHBOARD</h2>
    <div className='section'>
    <div className="AnatomySection">
    <img
      src={Anatomy}
      alt="AnatomySection"
      className="AnatomySection-image"
    />
    <div className="heart-label">Healthy Heart</div>
    <div className="leg-label">Healthy Leg</div>
  </div>
  <div className='health-status'>
    <HealthStatusCard/>

  </div>
  </div>
  </div>
  </>
);

export default AnatomySection;
