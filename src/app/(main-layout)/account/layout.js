import DashboardSideBar from "@/components/Shared/DashboardSideBar/DashboardSideBar";

const DashBoardLayout = ({ children }) => {
  return (
    <section className="flex gap-4">
      <DashboardSideBar />
      <div>{children}</div>
    </section>
  );
};

export default DashBoardLayout;
