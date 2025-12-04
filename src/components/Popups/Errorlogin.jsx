function Errorlogin({ title, description }) {
  //  a popup to display login or create account errors
  return (
    <div className="flex flex-col h-full items-center w-full">
      <div className="flex justify-center items-center py-2">
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>

      <div className="flex flex-col gap-6 items-center mt-3 overflow-y-auto pb-6 w-full">
        <div className="flex flex-col gap-1 w-full items-center">
          <p className="text-lg font-semibold text-gray-500">Description</p>
          <p className="text-xl font-bold text-black">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Errorlogin;