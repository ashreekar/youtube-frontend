import { AiOutlineHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { Link } from "react-router-dom";

function YoutubeSidebar() {
  // youtube sidebaar component rendering
  const componentsOnClose = [
    {
      name: "Home",
      element: <AiOutlineHome className="w-6 h-6" />,
      link: "/"
    },
    {
      name: "Shorts",
      element: <SiYoutubeshorts className="w-5 h-5" />
    },
    {
      name: "Subscriptions",
      element: <MdOutlineSubscriptions className="w-6 h-6" />
    }
  ];

  return (
    <div className="w-full flex flex-col">
      {
        componentsOnClose.map(component => (
          <Link to={component?.link} key={component.name}
            className='flex h-12 gap-4 rounded-lg hover:bg-gray-100 justify-items-start items-center py-1 px-3 w-full mb-3'>
            {
              component.element
            }
            <span className='text-lg font-medium'>{component.name}</span>
          </Link>
        ))
      }
    </div>
  )
}

export default YoutubeSidebar