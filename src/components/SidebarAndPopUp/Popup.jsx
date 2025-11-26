import React, { useRef } from "react";

function Popup({ children, popupkey="channel", closePopup }) {
    const popupRef = useRef(null);

    const outerStyles = {
        video: "fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/30",
        channel: "fixed inset-0 flex items-center justify-center z-50 bg-black/30",
        share: "fixed inset-0 flex items-end sm:items-center justify-center z-50 bg-black/20",
        download: "fixed inset-0 flex items-center justify-center z-50 bg-black/20",
        default: "fixed inset-0 flex items-center justify-center z-50 bg-black/20",
    };

    const innerStyles = {
        video:
            "bg-white rounded-lg shadow-lg p-3 w-[90vw] h-[85vh] sm:w-[70vw] sm:h-[97vh]",
        
        channel:
            "bg-white rounded-xl shadow-lg p-4 w-[95vw] sm:w-[500px] max-h-[85vh] overflow-y-auto",

        share:
            "bg-white rounded-t-xl sm:rounded-xl shadow-lg p-4 w-full sm:w-[400px] h-auto sm:h-auto",

        download:
            "bg-white rounded-xl shadow-lg p-4 w-[80vw] sm:w-[350px] h-auto",

        default:
            "bg-white rounded-lg shadow-lg p-4 w-[80vw] sm:w-[400px]",
    };

    const handleOutsideClick = (e) => {
        if (popupRef.current && !popupRef.current.contains(e.target)) {
            closePopup();
        }
    };

    return (
        <div
            className={outerStyles[popupkey] || outerStyles.default}
            onClick={handleOutsideClick}
        >
            <div
                ref={popupRef}
                className={innerStyles[popupkey] || innerStyles.default}
            >
                {children}
            </div>
        </div>
    );
}

export default Popup;