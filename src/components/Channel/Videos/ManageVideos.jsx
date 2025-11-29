import { useState } from "react"
import MangeVideoState from "./MangeVideoState"
import UpdateVideo from "./UpdateVideo"
import DeleteVideo from "./DeleteVideo"

function ManageVideos({ closePopup, videos = [], setvideoChanged,setvideoDeleted }) {
  const [videostage, setStage] = useState(0);

  if (videostage === 1) {
    return <UpdateVideo videos={videos} closePopup={closePopup} setvideoChanged={setvideoChanged} />
  }

  if (videostage === 2) {
    return <DeleteVideo videos={videos} closePopup={closePopup} setvideoDeleted={setvideoDeleted} />
  }

  return (
    videostage === 0 && (<MangeVideoState setStage={setStage} closePopup={closePopup} />)
  )
}

export default ManageVideos