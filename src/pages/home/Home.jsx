import { useState, useEffect } from "react";
import MyMixes from "./MyMixes";
import SoundLibrary from "./SoundLibrary";
import Timer from "./Timer";
import { Button } from "@/components/ui/button";


const Home = () => {
  const [selectedSounds, setSelectedSounds] = useState([]);
  console.log("Home  selectedSounds", selectedSounds)
  const [savedMixes, setSavedMixes] = useState([]);
  console.log("Home  savedMixes", savedMixes)
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioPlayers, setAudioPlayers] = useState({});
  const [showTooltip, setShowTooltip] = useState(false);
  console.log("Home  showTooltip", showTooltip)


  const handleSelectSound = (soundName, soundFileUrl, defaultVolume = 0.5) => {
    setSelectedSounds((prev) => {
      const existingIndex = prev.findIndex((sound) => sound.name === soundName);
      if (existingIndex !== -1) {
        // Sound is already selected, stop and remove it
        prev[existingIndex].audio.pause();
        let newSounds = [...prev];
        newSounds.splice(existingIndex, 1);
        return newSounds;
      } else if (prev.length < 3) {
        // Add new sound with audio object and default volume
        const newAudio = new Audio(soundFileUrl);
        newAudio.loop = true;
        newAudio.volume = defaultVolume;
        if (isPlaying) newAudio.play();
        return [
          ...prev,
          { name: soundName, audio: newAudio, volume: defaultVolume },
        ];
      }
      return prev;
    });
  };

  const handleVolumeChange = (soundName, volume) => {
    setSelectedSounds((prev) =>
      prev.map((sound) => {
        if (sound.name === soundName) {
          sound.audio.volume = volume;
          return { ...sound, volume: volume };
        }
        return sound;
      })
    );
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    selectedSounds.forEach((sound) => {
      if (!isPlaying) {
        sound.audio.play();
      } else {
        sound.audio.pause();
      }
    });
  };

  const handleSaveMix = () => {
    console.log("Clicked");
    if (selectedSounds.length > 0) {
      const newMix = {
        id: savedMixes.length + 1,
        name: `Mix ${savedMixes.length + 1}`,
        sounds: selectedSounds,
      };
      setSavedMixes([...savedMixes, newMix]);
    } else {
      setShowTooltip(true)
    }

  };

  

  useEffect(() => {
    Object.values(audioPlayers).forEach((player) => {
      if (isPlaying) {
        player.play();
      } else {
        player.pause();
      }
    });
  }, [isPlaying, audioPlayers]);

  useEffect(() => {
    return () => {
      Object.values(audioPlayers).forEach((player) => {
        player.pause();
        player.src = "";
      });
    };
  }, []);

  return (
    <div className="flex flex-col gap-6 w-[60%] z-10">
      <SoundLibrary
        handleSelectSound={handleSelectSound}
        selectedSounds={selectedSounds}
        handleVolumeChange={handleVolumeChange}
        onSaveMix={handleSaveMix}
        showTooltip={showTooltip}
        setShowTooltip={setShowTooltip}
      />

      <Button onClick={togglePlayPause}>
        {isPlaying ? "Pause" : "Play"} sounds
      </Button>
      <div className="flex w-full gap-6">
        <Timer />
        <MyMixes />
      </div>
    </div>
  );
};

export default Home;
