import Dashboard_Sidebar from "../components/Dashboard_sidebar";
import { useState } from "react";
import UsersTab from "../components/UsersTab";
import BooksTab from "../components/BooksTab";
import { useNavigate } from "react-router";
import ReservationsTab from "@/components/reservationsTab";

function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Books");

  const handleTabChange = (tab) => {
    if (tab === "Home") {
      navigate("/");
    } else {
      setActiveTab(tab);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Users":
        return <UsersTab />;
      case "Books":
        return <BooksTab />;
      case "Reservations":
        return <ReservationsTab />;
      default:
        return <BooksTab />;
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-4 ">
      <div>
        <Dashboard_Sidebar
          setActiveTab={handleTabChange}
          activeTab={activeTab}
        />
      </div>
      <div className="col-span-3 p-4">
        <h1 className="text-2xl font-bold mb-4 font-poppins">
          {activeTab} Of Lendify
        </h1>
        {renderTabContent()}
      </div>
    </div>
  );
}

export default Dashboard;