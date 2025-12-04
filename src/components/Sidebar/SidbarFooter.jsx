import React from 'react'

function SidbarFooter() {
    const primaryLinks = [
    "About",
    "Press",
    "Copyright",
    "Contact us",
    "Creators",
    "Advertise",
    "Developers",
  ];

  const secondaryLinks = [
    "Terms",
    "Privacy",
    "Policy & Safety",
    "How YouTube works",
    "Test new features",
  ];

  return (
    <div className="text-xs text-gray-600 px-4 py-4 select-none">

      <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
        {primaryLinks.map((item) => (
          <div
            key={item}
            className="hover:underline cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
        {secondaryLinks.map((item) => (
          <div
            key={item}
            className="hover:underline cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>

      <p className="text-gray-500 mt-2">© 2025 Google LLC</p>
    </div>
  )
}

export default SidbarFooter