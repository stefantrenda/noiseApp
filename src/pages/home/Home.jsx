import MyMixes from "./MyMixes";
import SoundLibrary from "./SoundLibrary";
import Timer from "./Timer";

const Home = () => {
  return (
    <div className="flex flex-col gap-6 w-[60%]">
      <SoundLibrary />
      <div className="flex w-ful gap-6">
          <Timer/>
          <MyMixes />
      </div>
    </div>
  );
};

export default Home;
