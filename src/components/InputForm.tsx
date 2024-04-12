import Detail from "./Detail";

const InputForm = () => {
  return (
    <div className=" w-3/5 bg-white h-[400px] rounded-xl shadow-lg flex">
      <div>
        <form action="">
          <div className=" flex flex-col gap-10 px-10 py-5">
            <div className=" flex flex-col gap-1">
              <label htmlFor="number" className=" font-custom text-veryDark">
                Bill
              </label>
              <input
                className=" w-[350px] px-4 py-2 bg-veryLightGrayish text-veryDark font-custom placeholder-darkGrayish focus:outline-none focus:ring-2 focus:ring-grayish "
                type="number"
                placeholder="$                             0"
              />
            </div>
            <div className=" flex flex-col gap-3">
              <p className=" font-custom text-veryDark">Select Tip %</p>
              <div className=" grid grid-cols-3 gap-3">
                <button className=" px-4 py-2 w-[110px] rounded text-white font-custom bg-veryDark active:bg-cyan-700 active:text-green-500">
                  5%
                </button>
                <button className=" px-4 py-2 w-[110px] rounded text-white font-custom bg-veryDark active:bg-cyan-700 active:text-green-500">
                  10%
                </button>
                <button className=" px-4 py-2 w-[110px] rounded text-white font-custom bg-veryDark active:bg-cyan-700 active:text-green-500">
                  15%
                </button>
                <button className=" px-4 py-2 w-[110px] rounded text-white font-custom bg-veryDark active:bg-cyan-700 active:text-green-500">
                  25%
                </button>
                <button className=" px-4 py-2 w-[110px] rounded text-white font-custom bg-veryDark active:bg-cyan-700 active:text-green-500">
                  50%
                </button>
                <input
                  className=" w-[110px] text-veryDark px-4 py-2 bg-veryLightGrayish font-custom placeholder-darkGrayish focus:outline-none focus:ring-2 focus:ring-grayish"
                  type="number"
                  placeholder="Custom"
                />
              </div>
            </div>
            <div className=" flex flex-col gap-1">
              <label htmlFor="number" className=" font-custom text-veryDark">
                Number of People
              </label>
              <input
                className=" w-[350px] px-4 py-2 text-veryDark bg-veryLightGrayish font-custom placeholder-darkGrayish focus:outline-none focus:ring-2 focus:ring-grayish"
                type="number"
                placeholder="                             0"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="">
        <Detail />
      </div>
    </div>
  );
};

export default InputForm;
