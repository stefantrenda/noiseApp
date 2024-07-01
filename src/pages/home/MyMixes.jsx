/* eslint-disable react/prop-types */
import addIcon from '../../assets/Images/Add.svg';
import playIcon from '../../assets/Images/Play.svg';
import pauseIcon from '../../assets/Images/Pause.svg';
import shareIcon from '../../assets/Images/share.svg';

const MyMixes = ({ savedMixes, playMix, stopMix, currentlyPlayingMixId, setCurrentlyPlayingMixId }) => {

  const handlePlayPauseClick = (mixId) => {
    if (currentlyPlayingMixId === mixId) {
      stopMix(mixId);
      setCurrentlyPlayingMixId(null);
    } else {
      if (currentlyPlayingMixId !== null) {
        stopMix(currentlyPlayingMixId);
      }
      playMix(mixId);
      setCurrentlyPlayingMixId(mixId);
    }
  };

  return (
    <div className="w-1/2 flex flex-col bg-deepPurple border border-darkBlue rounded-[25px]">
      <div className="flex items-center justify-between py-6 mx-auto w-[85%]">
        <div className="flex flex-col">
          <span className="text-limeGreen text-2xl">My mixes</span>
          <span className="text-lightGray">Craft soundscapes matching your mood</span>
        </div>
      </div>
      <hr className="border-b border-darkBlue" />
      <div className="flex flex-col items-start justify-start py-6 mx-auto w-[85%] h-[308px]">
        {savedMixes.length > 0 ? (
          savedMixes.map((mix) => (
            <div key={mix.id} className="flex w-full bg-[#201E38] rounded-tr-[8px] rounded-br-[8px] h-16">
              <div className="flex justify-center items-center w-2/3 gap-6 border-l-[3px] border-[#D9EAAB]">
                <img
                  src={currentlyPlayingMixId === mix.id ? pauseIcon : playIcon}
                  alt={currentlyPlayingMixId === mix.id ? "Pause" : "Play"}
                  className="w-9 h-9 cursor-pointer"
                  onClick={() => handlePlayPauseClick(mix.id)}
                />
                <div className="flex flex-col gap-1 py-2">
                  <p className="mb-0 text-lightGray text-sm">{mix.name}</p>
                  <p className="mb-0 text-[#8480AF] text-xs">
                    {mix.sounds.map(s => s.name).join(', ')}
                  </p>
                </div>
              </div>
              <div className="flex w-1/3 justify-end items-center pr-4">
                <img src={shareIcon} alt="shareIcon" className="w-9 h-9" />
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-[8px] bg-[#201E38] flex flex-col justify-center items-center gap-4 h-full">
            <img src={addIcon} alt="addIcon" />
            <div className="w-[50%] text-center flex flex-col justify-center items-center gap-1">
              <p className="text-lightGray text-sm">Add new mixes</p>
              <p className="text-xs text-[#8480AF]">
                Select 2 or 3 sounds, then click the Save new mix button to create your custom soundscape.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyMixes;
