import React, { useRef } from "react";

function Popup({ children, popupkey, closePopup }) {
    const popupRef = useRef(null);

    const fields = {
        video: "fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/20",
        download: "fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/20",
        share: "fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/20",
    };

    const handleOutsideClick = (e) => {
        if (popupRef.current && !popupRef.current.contains(e.target)) {
            closePopup();
        }
    };

    return (
        <div className={fields[popupkey]} onClick={handleOutsideClick}>
            <div
                ref={popupRef}
                className="bg-white p-2 rounded-lg shadow-lg flex flex-col items-center justify-evenly gap-2 w-[70vw] h-[90vh]"
            >
                {children}
            </div>
        </div>
    );
}

export default Popup;