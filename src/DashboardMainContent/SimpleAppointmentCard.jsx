import TeethIcon from "../assets/flat-tooth-part-2-svgrepo-com.svg";
import Physiotherapy from "../assets/Physiotherapy-removebg-preview.png";

const SimpleAppointmentCard = () => {

    return (
        <div className="calendar-section Appointment Cards">
            {/* Static Appointment Cards */}
            <div className="flex-iteme">
                <div className="appointment-card dentist">
                    <div className="appointment-icon"><img src={TeethIcon} alt="TeethIcon" width={25} height={25} /></div>
                    <div className="appointment-info">
                        <h4 className="appointment-title">Dentist</h4>
                        <p className="appointment-time">09:00 - 11:00</p>
                        <p className="appointment-doctor">Dr Cameron Williamson</p>
                    </div>
                </div>

                <div className="appointment-card physio">
                    <div className="appointment-icon"><img src={Physiotherapy} alt="Physiotherapy" width={25} height={25} /></div>
                    <div className="appointment-info">
                        <h4 className="appointment-title">Physiotherapy Appointment</h4>
                        <p className="appointment-time">11:00 - 12:00</p>
                        <p className="appointment-doctor">Dr Kevin Djosro</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleAppointmentCard;
