import addIcon from "../../assets/Images/Add.svg";

const MyMixes = () => {
  return (
    <div className="w-1/2 flex  flex-col bg-deepPurple  border border-darkBlue rounded-[25px]">
      <div className="flex items-center justify-between py-6 mx-auto w-[85%]">
        <div className="flex flex-col">
          <span className="text-limeGreen text-2xl">My mixes</span>
          <span className="text-lightGray">
            Craft soundscapes matching your mood
          </span>
        </div>
      </div>
      <hr className="border-b border-darkBlue" />
      <div className="flex items-center justify-between py-6 mx-auto w-[85%] min-h-[308px]">
        <div className=" rounded-[8px] bg-[#201E38] flex flex-col justify-center items-center gap-4 h-full">
          <img src={addIcon} alt="addIcon" />
          <div className="w-[50%] text-center flex flex-col justify-center items-center gap-1">
            <p className="text-lightGray text-sm">Add new mixes</p>
            <p className="text-xs text-[#8480AF]">
              Select 2 or 3 sounds, then click Save new mix button to create
              your custom soundscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyMixes;
