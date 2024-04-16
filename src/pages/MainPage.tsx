import InputForm from "../components/InputForm";

const MainPage = () => {
  return (
    <div className=" w-screen h-screen bg-lightGrayish flex flex-col md:gap-16  md:justify-center items-center">
      <div className=" text-veryDark text-lg uppercase font-custom py-[50px] md:py-0">
        <h2>S&nbsp;p&nbsp;l&nbsp;i</h2>
        <h2>T&nbsp;t&nbsp;e&nbsp;r</h2>
      </div>
      <InputForm />
    </div>
  );
};

export default MainPage;
