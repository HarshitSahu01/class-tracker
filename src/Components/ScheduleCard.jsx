import greenDot from "../assets/green_dot.png";
const ScheduleCard = ({ buildingName, buildingImage, onToggleSchedule }) => {
  return (
    <div className="flex flex-row flex-wrap">
      <div className="flex justify-center items-center ">
        <div className="max-w-[720px] mx-auto">
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img
                src={buildingImage}
                alt={buildingName}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
              <button
                className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-white text-black transition-transform hover:-translate-y-1 shadow-md"
                type="button"
                onClick={onToggleSchedule}
              >
                <img src={greenDot} alt="Available" className="w-5" />
                <span>10 rooms available</span>
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                  {buildingName}
                </h5>
              </div>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                Enter the details of the building and its schedule here.
              </p>
            </div>
            <div className="p-6 pt-3">
              <button
                className="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-medium uppercase text-white shadow-md transition-all hover:shadow-lg"
                onClick={onToggleSchedule}
              >
                View Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
