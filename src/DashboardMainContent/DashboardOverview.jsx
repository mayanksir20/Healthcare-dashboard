import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import ActivityFeed from "./ActivityFeed";
import React from "react";

const Dashboard = () => {

  return (
    <div className="dashboard-wrapper">
      <Header />
      <div className="main-dashboard">
        <Sidebar />
        <main className="dashboard-content">
          {/* Main Row */}
          <div className="dashboard-row">
            {/* Left Column */}
            <div className="dashboard-left">
              <div className="header-bar">
                <h2 className="dashboard-title">Dashboard</h2>
                <p class="calendar-week">
                  This Week{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-left nav-arrow"
                    aria-hidden="true"
                    style={{ position: "relative", top: "5px" }}
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </p>
              </div>

              <div className="top-left">
                <AnatomySection />
                <HealthStatusCards />
              </div>
              <div className="bottom-left">
                <ActivityFeed />
              </div>
            </div>

            {/* Right Column */}
            <div className="dashboard-right">
              <CalendarView />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
