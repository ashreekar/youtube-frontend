import { TiHome } from "react-icons/ti";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";

function YoutubeSidebar() {
  const componentsOnClose = [
    {
      name: "Home",
      element: <TiHome size={20} />
    },
    {
      name: "Shorts",
      element: <SiYoutubeshorts size={20} />
    },
    {
      name: "Subscriptions",
      element: <MdOutlineSubscriptions size={20} />
    }
  ]

  return (
    <div className="w-full flex flex-col">
      {
        componentsOnClose.map(component => (
          <div key={component.name}
            className='flex h-12 gap-4 rounded-lg hover:bg-gray-100 justify-items-start items-center py-1 px-3 w-full mb-3'>
            {
              component.element
            }
            <span className='text-lg font-medium'>{component.name}</span>
          </div>
        ))
      }
    </div>
  )
}

export default YoutubeSidebar