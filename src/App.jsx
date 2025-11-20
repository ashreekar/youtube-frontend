import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import { useDispatch, useSelector } from "react-redux"
import Popup from "./components/SidebarAndPopUp/Popup";
import CreateVideo from "./components/Popups/CreateVideo";
import { toggleOverlay } from "./states/overlaySlice";

function App() {
  const dispatch = useDispatch();
  const popup = useSelector(state => state.overlay.open);
  return (
    <>
      <Header />
      {
        popup && <Popup popupkey="video" closePopup={() => dispatch(toggleOverlay())}>
          <CreateVideo />
        </Popup>
      }
      <Outlet />
    </>
  )
}

export default App