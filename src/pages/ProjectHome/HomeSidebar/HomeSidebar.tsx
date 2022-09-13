import Sidebar from "../../../components/Sidebar/Sidebar"
import Main from "./Main"
import SidebarNav from "./SidebarNav"

const HomeSidebar = () => {
  return (
    <Sidebar className="sidebar_dark">
      <Main></Main>
      <SidebarNav />
    </Sidebar>
  )
}

export default HomeSidebar