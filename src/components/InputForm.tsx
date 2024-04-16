import { useEffect, useState } from "react";
import Detail from "./Detail";

const InputForm: React.FC = () => {
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const [numPeople, setNumPeople] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [finalTipAmount, setFinalTipAmount] = useState(0);
  const [finalTotalAmount, setFinalTotalAmount] = useState(0);
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  useEffect(() => {
    calculateTipAmount(parseInt(numPeople));
    calculateTotalAmount(parseInt(numPeople));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numPeople, tipPercentage]);

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue !== "" && parseFloat(inputValue) > 0) {
      setBill(inputValue);
    }
  };

  const handleTipButtonClick = (percentage: number) => {
    const billAmount = parseFloat(bill);
    if (!isNaN(billAmount)) {
      setTipPercentage(percentage);
      calculateTotalBill(billAmount, percentage);
      setSelectedButton(percentage);
    } else {
      console.log("Invalid bill amount");
    }
  };

  const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const billAmount = parseFloat(bill);
    const customPercentage = parseFloat(e.target.value);
    if (!isNaN(customPercentage) && customPercentage >= 0) {
      setTipPercentage(customPercentage);
      calculateTotalBill(billAmount, customPercentage);
    }
  };

  const handleNumPeople = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue !== "" && parseFloat(inputValue) >= 0) {
      setNumPeople(e.target.value);
    }
  };

  const calculateTotalBill = (billAmount: number, tipPercentage: number) => {
    const tipAmount = billAmount * (tipPercentage / 100);
    const total = billAmount + tipAmount;
    setTipAmount(tipAmount);
    setTotalBill(total);
  };

  const calculateTipAmount = (num: number) => {
    const calcTip = tipAmount / num;
    const roundedTip = parseFloat(calcTip.toFixed(2));
    setFinalTipAmount(roundedTip);
  };

  const calculateTotalAmount = (num: number) => {
    const calcTotal = totalBill / num;
    const roundedTotal = parseFloat(calcTotal.toFixed(2));
    setFinalTotalAmount(roundedTotal);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const billAmount = parseFloat(bill); // Parse bill amount to a float
    if (!isNaN(billAmount)) {
      calculateTotalBill(billAmount, tipPercentage);
    } else {
      console.log("Invalid bill amount");
    }
  };

  return (
    <div className=" w-screen md:w-3/5 bg-white h-screen md:h-[400px] rounded-3xl md:rounded-xl shadow-lg md:flex">
      <div>
        <form onSubmit={handleSubmit}>
          <div className=" flex flex-col gap-7 md:gap-10 px-10 py-5">
            <div className=" flex flex-col gap-1">
              <label htmlFor="number" className=" font-custom text-veryDark">
                Bill
              </label>
              <input
                className=" w-[300px] md:w-[350px] px-4 py-2 bg-veryLightGrayish text-veryDark font-custom placeholder-darkGrayish focus:outline-none focus:ring-2 focus:ring-btn "
                type="number"
                placeholder="$                             0"
                value={bill}
                min={1}
                onChange={handleBillChange}
              />
            </div>
            <div className=" flex flex-col gap-3">
              <p className=" font-custom text-veryDark">Select Tip %</p>
              <div className=" grid grid-cols-2 md:grid-cols-3 gap-3">
                {[5, 10, 15, 25, 50].map((percentage, index) => (
                  <button
                    onClick={() => handleTipButtonClick(percentage)}
                    key={index}
                    className={`px-4 py-2 md:w-[110px] rounded  font-custom ${
                      selectedButton == percentage
                        ? "bg-btn text-veryDark"
                        : "bg-veryDark text-white"
                    } active:bg-cyan-700 active:text-green-500`}
                  >
                    {percentage}%
                  </button>
                ))}
                <input
                  className=" md:w-[110px] md:text-right text-veryDark px-4 py-2 bg-veryLightGrayish font-custom placeholder-darkGrayish focus:outline-none focus:ring-2 focus:ring-btn"
                  type="number"
                  placeholder="Custom"
                  onChange={handleCustomTipChange}
                />
              </div>
            </div>
            <div className=" flex flex-col gap-1">
              <label htmlFor="number" className=" font-custom text-veryDark">
                Number of People
              </label>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[550px] left-[345px]"
                width="13"
                height="16"
              >
                <path
                  fill="#9EBBBD"
                  d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"
                />
              </svg> */}
              <input
                className=" w-[300px] md:w-[350px] px-4 py-2 text-veryDark bg-veryLightGrayish font-custom placeholder-darkGrayish focus:outline-none focus:ring-2 focus:ring-btn"
                type="number"
                placeholder="                             1"
                value={numPeople}
                min={1}
                onChange={handleNumPeople}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="">
        <Detail tipAmount={finalTipAmount} totalAmount={finalTotalAmount} />
      </div>
    </div>
  );
};

export default InputForm;
