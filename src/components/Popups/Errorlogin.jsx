function Errorlogin({ title, description, customUrl }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center py-2">
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>

      <div className="flex flex-col gap-6 mt-3 overflow-y-auto pb-6">

        <div className="flex flex-col gap-1">
          <p className="text-2xl font-semibold">Description</p>
          <p className="text-sm text-gray-800">{description}</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-2xl font-semibold">More Info</p>

          <p className="text-sm text-gray-800">{customUrl}</p>

        </div>

      </div>
    </div>
  );
}

export default Errorlogin;