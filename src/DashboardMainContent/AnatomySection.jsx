import bodyImage from '../assets/human-body-frontal-removebg-preview.png';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-container">
        <div className="body-image-container">
          <img src={bodyImage} alt="Body" className="body-image" />

          {/* Static Indicators – NO hover */}
          <div className="health-indicator heart-indicator">Healthy Heart</div>
          <div className="health-indicator lungs-indicator">Lung Issue</div>
          <div className="health-indicator teeth-indicator">Healthy Teeth</div>
          <div className="health-indicator bone-indicator">Bone Status</div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
