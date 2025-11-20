import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import GlobalOverlay from "./components/SidebarAndPopUp/GlobalOverlay"

function App() {

  return (
    <>
      <Header />
      <GlobalOverlay />
      <Outlet />
    </>
  )
}

export default App