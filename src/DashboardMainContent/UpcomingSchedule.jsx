import { MoreHorizontal } from 'lucide-react';
import { appointments } from '../data/healthData';

import HospitalIcon from "../assets/hospital-svgrepo-com.svg";
import OphthalmologistIcon from "../assets/observation-vision-svgrepo-com.svg";
import CardiologistIcon from "../assets/heart-suit-svgrepo-com.svg";
import NeurologistIcon from "../assets/brain-svgrepo-com.svg";

const UpcomingSchedule = () => {

  const getIconImage = (iconName) => {
    switch (iconName) {
      case 'Hospital':
        return <img src={HospitalIcon} alt="Hospital" width={24} height={24} />;
      case 'Ophthalmologist':
        return <img src={OphthalmologistIcon} alt="Eye" width={24} height={24} />;
      case 'Heart':
        return <img src={CardiologistIcon} alt="Heart" width={24} height={24} />;
      case 'Brain':
        return <img src={NeurologistIcon} alt="Brain" width={24} height={24} />;
      default:
        return null;
    }
  };

  return (
    <div className="upcoming-section">
      <div className="upcoming-header">
        <h3 className="upcoming-title">Upcoming</h3>
        <MoreHorizontal className="more-icon" />
      </div>

      <div className="flex flex-col gap-8">
        <div className="day-section">
          <div className="day-header">
            <h4 className="day-title">Thursday</h4>
            <span className="day-count">{appointments.thursday.length} appointments</span>
          </div>
          <div className="flex-iteme">
            {appointments.thursday.map((appointment) => (
              <div key={appointment.id} className="appointment-item">
                <div className="appointment-item-icon">
                  {getIconImage(appointment.icon)}
                </div>
                <div className="appointment-item-info">
                  <h5 className="appointment-item-title">{appointment.title}</h5>
                  <p className="appointment-item-time">{appointment.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="day-section">
          <div className="day-header">
            <h4 className="day-title">Saturday</h4>
            <span className="day-count">{appointments.saturday.length} appointments</span>
          </div>
          <div className="flex-iteme">
            {appointments.saturday.map((appointment) => (
              <div key={appointment.id} className="appointment-item">
                <div className="appointment-item-icon">
                  {getIconImage(appointment.icon)}
                </div>
                <div className="appointment-item-info">
                  <h5 className="appointment-item-title">{appointment.title}</h5>
                  <p className="appointment-item-time">{appointment.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
