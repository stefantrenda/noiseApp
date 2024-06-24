const Home = () => {
  return (
    <div className="flex flex-col w-[50%] mt-6  bg-deepPurple  border border-darkBlue rounded-[25px]">
      <div className="flex items-center justify-between py-6 px-9">
        <div className="flex flex-col">
          <span className="text-limeGreen text-2xl">Sound library</span>
          <span className="text-lightGray">
            Find serenity and focus in calm, immersive soundscapes
          </span>
        </div>
        <button className="font-medium text-veryDeepPurple bg-lightGray rounded-[100px] py-2.5 px-9 self-start">Save new mix</button>
      </div>
      <div className="flex flex-col border-t border-darkBlue py-6 px-9">
          <div></div>
      </div>
    </div>
  );
};

export default Home;
