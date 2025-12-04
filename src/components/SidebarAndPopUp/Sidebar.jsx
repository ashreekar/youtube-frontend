import { useRef } from "react";

function Sidebar({ children, sidebarKey, closePopup }) {
  const positions = {
    user: "top-2 right-16",
    create: "top-12 right-16",
  };

  // same as popup but a sidebar with only 2 configurations
  // here have style for psotioning of elemets
  const sideRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (sideRef.current && !sideRef.current.contains(e.target)) {
      closePopup();
    }
  };

  return (
    <div
      onClick={handleOutsideClick}
      className="fixed inset-0 z-40 bg-transparent pointer-events-auto"
    >
      <div
        ref={sideRef}
        onClick={(e) => e.stopPropagation()} 
        className={`pointer-events-auto flex min-h-24 min-w-28 rounded-md bg-white gap-4 flex-col fixed z-50 ${positions[sidebarKey]}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Sidebar;