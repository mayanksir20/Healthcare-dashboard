import { ChevronLeft, ChevronRight } from "lucide-react";
import { calendarData } from "../data/healthData";
import UpcomingSchedule from "./UpcomingSchedule";
import SimpleAppointmentCard from "./SimpleAppointmentCard";

const CalendarView = () => {
  const weekDays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  return (
    <div className="calendar-section">
      {/* Header */}
      <div className="calendar-header">
        <div>
          <h3 className="calendar-month">October 2021</h3>
        </div>
        <div className="calendar-nav">
          <ChevronLeft className="nav-arrow" />
          <ChevronRight className="nav-arrow" />
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="mb-6">
        {/* Weekdays */}
        <div className="weekdays">
          {weekDays.map((day) => (
            <div key={day} className="weekday">
              {day}
            </div>
          ))}
        </div>

        {/* Days */}
        <div className="days-grid">
          {calendarData.map((item, index) => (
            <div key={index} className="day">
              <div className="day-number">{item.day}</div>
              <div className="flex flex-col gap-1">
                {item.appointments.map((time, i) => (
                  <div key={i} className="appointment-time">
                    {time}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Static Appointment Cards */}
      <div className="Appointment-Cards">
        <SimpleAppointmentCard />
      </div>


      {/* Upcoming Schedule */}
      <div className="UpcomingSchedule">
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default CalendarView;
