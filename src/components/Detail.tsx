import { useNavigate } from "react-router-dom"

interface DetailProps{
    tipAmount : number,
    totalAmount : number
}

const Detail: React.FC<DetailProps> = ({tipAmount, totalAmount}) => {

    const navigate = useNavigate();

    const handleResetClick = () => {
        navigate(0); // Assuming you want to navigate to route 0
    };

    
  return (
    <div className=" w-[350px] ms-5 md:ms-0 bg-veryDark md:m-10 rounded-lg md:h-[330px]">
        <div className=" flex gap-5 justify-around items-center pt-7 md:pt-10 md:pb-5">
            <div>
                <p className=" text-md text-white font-custom">Tip Amount</p>
                <span className=" text-sm text-lightGrayish font-custom">/ person</span>
            </div>
            <div>
                <h3 className=" text-3xl text-green-300">  {isNaN(tipAmount) ? "$0.00" : `$${tipAmount.toFixed(2)}`}</h3>
            </div>
        </div>
        <div className=" flex gap-10 justify-around items-center pb-7 md:pb-10 pt-5">
            <div>
                <p className=" text-md text-white font-custom">Total</p>
                <span className=" text-sm text-lightGrayish font-custom">/ person</span>
            </div>
            <div>
                <h3 className=" text-3xl ps-3 text-green-300">{isNaN(totalAmount) ? "$0.00" : `$${totalAmount.toFixed(2)}`}</h3>
            </div>
        </div>
        <button onClick={handleResetClick} className=" w-[300px] p-2 bg-btn hover:bg-green-700 mx-7 rounded text-veryDark font-custom uppercase hover:text-white md:mt-10  mb-5 md:mb-0">Reset</button>
    </div>
  )
}

export default Detail