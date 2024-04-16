import InputForm from "../components/InputForm";

const MainPage = () => {
  return (
    <div className=" w-screen h-screen bg-lightGrayish flex flex-col gap-16 justify-center items-center">
      <div className=" text-veryDark text-lg uppercase font-custom">
        <h2>S&nbsp;p&nbsp;l&nbsp;i</h2>
        <h2>T&nbsp;t&nbsp;e&nbsp;r</h2>
      </div>
      <InputForm />
    </div>
  );
};

export default MainPage;
