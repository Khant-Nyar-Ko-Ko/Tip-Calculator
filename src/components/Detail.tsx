
const Detail = () => {
  return (
    <div className=" w-[350px] bg-veryDark m-10 rounded-lg h-[330px]">
        <div className=" flex gap-5 justify-around items-center pt-10 pb-5">
            <div>
                <p className=" text-md text-white font-custom">Tip Amount</p>
                <span className=" text-sm text-lightGrayish font-custom">/ person</span>
            </div>
            <div>
                <h3 className=" text-3xl text-green-300">$0.00</h3>
            </div>
        </div>
        <div className=" flex gap-5 justify-around items-center pb-10 pt-5">
            <div>
                <p className=" text-md text-white font-custom">Total</p>
                <span className=" text-sm text-lightGrayish font-custom">/ person</span>
            </div>
            <div>
                <h3 className=" text-3xl text-green-300">$0.00</h3>
            </div>
        </div>
        <button className=" w-[320px] px-2 py-3 bg-cyan-700 mx-4 rounded text-lightGrayish mt-10">Reset</button>
    </div>
  )
}

export default Detail