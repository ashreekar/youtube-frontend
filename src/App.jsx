import { Outlet } from "react-router-dom"
import GlobalOverlay from "./components/SidebarAndPopUp/GlobalOverlay"
import { lazy, Suspense } from "react"
import HeaderLoader from "./components/Loaders/Header/HeaderLoader";

const Header = lazy(() => import("./components/Header/Header"));

function App() {

  return (
    <>
      <Suspense fallback={<HeaderLoader/>}>
        <Header />
      </Suspense>

      <GlobalOverlay />
      
      <Outlet />
    </>
  )
}

export default App