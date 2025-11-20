import React from 'react'

function Popup({ children, popupkey, closePopup }) {
    const fields = {
        video: "fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/20",
        download: "",
        share: ""
    };

    return (
        <div className={fields[popupkey]}>
            {/* Popup Box */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center gap-4">
                {children}

                <button
                    onClick={closePopup}
                    className="px-3 py-2 rounded-full bg-gray-200 hover:bg-gray-300"
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default Popup;