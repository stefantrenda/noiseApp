import { useState, useEffect } from "react";
import MyMixes from "./MyMixes";
import SoundLibrary from "./SoundLibrary";
import Timer from "./Timer";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [selectedSounds, setSelectedSounds] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioPlayers, setAudioPlayers] = useState({});

  // const handleSelectSound = (soundName, soundFileUrl) => {
  //   setSelectedSounds(prev => {
  //     const isAlreadySelected = prev.includes(soundName);
  //     if (isAlreadySelected) {
  //       const newPlayers = { ...audioPlayers };
  //       newPlayers[soundName]?.pause();
  //       delete newPlayers[soundName];
  //       setAudioPlayers(newPlayers);
  //       return prev.filter(name => name !== soundName);
  //     } else if (prev.length < 3) {
  //       const newAudio = new Audio(soundFileUrl);
  //       newAudio.loop = true;
  //       if (isPlaying) newAudio.play();
  //       setAudioPlayers(players => ({ ...players, [soundName]: newAudio }));
  //       return [...prev, soundName];
  //     }
  //     return prev;
  //   });
  // };

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

  // const togglePlayPause = () => {
  //   setIsPlaying(!isPlaying);
  // };

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
