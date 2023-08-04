import MainLayoutClient from "@/components/ClientLayouts/MainLayoutClient";


const MainLayout = ({ children }) => {
  
  return (
    <div>
      <MainLayoutClient>{children}</MainLayoutClient>
    </div>
  );
};

export default MainLayout;
