import MainLayoutView from "@/components/layouts/main-layout";
import "../../styles/globals.css";

const MainLayout = ({ children }) => {  

  return (<MainLayoutView>{children}</MainLayoutView>);
};
export default MainLayout;
