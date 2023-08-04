import DashboardLayoutClient from "@/components/ClientLayouts/DashboardLayoutClient";


const DashboardLayout = ({ children }) => {
  return (
    <div>
      <DashboardLayoutClient>{children}</DashboardLayoutClient>
    </div>
  );
};

export default DashboardLayout;
