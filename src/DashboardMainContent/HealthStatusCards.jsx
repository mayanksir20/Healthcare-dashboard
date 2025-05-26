import { healthData } from "../data/healthData";

// Import images
import HeartIcon from "../assets/heart-svgrepo-com.svg";
import LungsIcon from "../assets/lungs-lung-svgrepo-com.svg";
import TeethIcon from "../assets/flat-tooth-part-2-svgrepo-com.svg";
import BoneIcon from "../assets/bone-skeleton-svgrepo-com.svg";
import HospitalIcon from "../assets/hospital-svgrepo-com.svg";

const HealthStatusCards = () => {
  const getOrganIcon = (organ) => {
    const name = organ.trim().toLowerCase();

    switch (name) {
      case "heart":
        return <img src={HeartIcon} alt="Heart" width={25} height={25} />;
      case "lungs":
        return <img src={LungsIcon} alt="Lungs" width={25} height={25} />;
      case "teeth":
        return <img src={TeethIcon} alt="Teeth" width={25} height={25} />;
      case "bone":
        return <img src={BoneIcon} alt="Bone" width={25} height={25} />;
      default:
        return <img src={HospitalIcon} alt="Hospital" width={25} height={25} />;
    }
  };

  return (
    <div className="health-cards">
      {healthData.map((item) => (
        <div key={item.id} className="health-card">
          <div className="health-card-content">
            <div className="flex-iteme">
              <div
                className="health-card-icon"
                style={{ backgroundColor: `${item.color}20` }}
              >
                {getOrganIcon(item.organ)}
              </div>
              <div className="health-card-info">
                <h4 className="health-card-title">{item.organ}</h4>
              </div>
            </div>
            <div className="progress-bar">
              <p className="health-card-date">{item.date}</p>
              <div
                className="health-card-progress-wrapper"
                style={{
                  width: "100%",
                  height: "8px",
                  backgroundColor: "rgba(145, 153, 150, 0.19)",
                  borderRadius: "999px",
                  overflow: "hidden",
                }}
              >
                <div
                  className="health-card-progress-fill"
                  style={{
                    width: `${item.progress}%`,
                    height: "100%",
                    backgroundColor: item.color,
                    borderRadius: "999px",
                    transition: "width 0.4s ease",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
