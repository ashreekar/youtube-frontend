
function Sidebar({ children, sidebarKey, closePopup }) {
    const positions = {
        user: "top-2 right-16",
        create: "top-12 right-16",
    };

    return (
        <div onClick={closePopup}
            className={`flex min-h-24 min-w-28 rounded-md bg-white gap-4 flex-col fixed ${positions[sidebarKey]}`}
        >
          {
            children
          }
        </div>
    );
}

export default Sidebar;