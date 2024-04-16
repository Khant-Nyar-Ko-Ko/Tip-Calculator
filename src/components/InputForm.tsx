import { useEffect, useState } from "react";
import Detail from "./Detail";

const InputForm: React.FC = (props: React.SVGProps<SVGSVGElement>) => {
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
    if (inputValue !== "" && parseFloat(inputValue) >= 0) {
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
    if (inputValue !== "" && parseFloat(inputValue) >= 1) {
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
    <div className=" w-3/5 bg-white h-[400px] rounded-xl shadow-lg flex">
      <div>
        <form onSubmit={handleSubmit}>
          <div className=" flex flex-col gap-10 px-10 py-5">
            <div className=" flex flex-col gap-1">
              <label htmlFor="number" className=" font-custom text-veryDark">
                Bill
              </label>
              <input
                className=" w-[350px] px-4 py-2 bg-veryLightGrayish text-veryDark font-custom placeholder-darkGrayish focus:outline-none focus:ring-2 focus:ring-btn "
                type="number"
                placeholder="$                             0"
                value={bill}
                onChange={handleBillChange}
              />
            </div>
            <div className=" flex flex-col gap-3">
              <p className=" font-custom text-veryDark">Select Tip %</p>
              <div className=" grid grid-cols-3 gap-3">
                {[5, 10, 15, 25, 50].map((percentage, index) => (
                  <button
                    onClick={() => handleTipButtonClick(percentage)}
                    key={index}
                    className={`px-4 py-2 w-[110px] rounded  font-custom ${
                      selectedButton == percentage
                        ? "bg-btn text-veryDark"
                        : "bg-veryDark text-white"
                    } active:bg-cyan-700 active:text-green-500`}
                  >
                    {percentage}%
                  </button>
                ))}
                <input
                  className=" w-[110px] text-veryDark px-4 py-2 bg-veryLightGrayish font-custom placeholder-darkGrayish focus:outline-none focus:ring-2 focus:ring-btn"
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
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                className=" absolute top-[585px] left-[345px]"
                color=" gray"
                {...props}
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" />
              </svg>
              <input
                className=" w-[350px] px-4 py-2 text-veryDark bg-veryLightGrayish font-custom placeholder-darkGrayish focus:outline-none focus:ring-2 focus:ring-btn"
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
