import { useState, useEffect } from "react";
import MyMixes from "./MyMixes";
import SoundLibrary from "./SoundLibrary";
import Timer from "./Timer";

const Home = () => {
  const [selectedSounds, setSelectedSounds] = useState([]);
  const [savedMixes, setSavedMixes] = useState([]);
  const [currentlyPlayingMixId, setCurrentlyPlayingMixId] = useState(null);

  useEffect(() => {
    const mixesFromStorage = localStorage.getItem("savedMixes");
    if (mixesFromStorage) {
      const loadedMixes = JSON.parse(mixesFromStorage).map((mix) => ({
        ...mix,
        sounds: mix.sounds.map((sound) => ({
          ...sound,
          audio: new Audio(sound.src),
        })),
      }));
      setSavedMixes(loadedMixes);
    }
  }, []);

  const playMix = (mixId) => {
    selectedSounds.forEach((sound) => sound.audio.pause());
    setSelectedSounds([]);

    const mix = savedMixes.find((m) => m.id === mixId);
    if (mix) {
      mix.sounds.forEach((sound) => {
        if (!sound.audio.src) {
          sound.audio = new Audio(sound.src);
        }
        sound.audio.play();
      });
      setCurrentlyPlayingMixId(mixId);
    }
  };

  const stopMix = (mixId) => {
    const mix = savedMixes.find((m) => m.id === mixId);
    if (mix) {
      mix.sounds.forEach((sound) => {
        sound.audio.pause();
      });
      setCurrentlyPlayingMixId(null);
    }
  };

  const handleSelectSound = async (
    soundName,
    soundFileUrl,
    defaultVolume = 0.5
  ) => {
    if (currentlyPlayingMixId) {
      await stopMix(currentlyPlayingMixId);
      await setCurrentlyPlayingMixId(null);
    }

    setSelectedSounds((prev) => {
      const existingIndex = prev.findIndex((sound) => sound.name === soundName);
      if (existingIndex !== -1) {
        prev[existingIndex].audio.pause();
        let newSounds = [...prev];
        newSounds.splice(existingIndex, 1);
        return newSounds;
      } else if (prev.length < 3) {
        const newAudio = new Audio(soundFileUrl);
        newAudio.loop = true;
        newAudio.volume = defaultVolume;
        newAudio.play();
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

  const handleSaveMix = (mixName) => {
    if (selectedSounds.length > 0) {
      const newMix = {
        id: Date.now(),
        name: mixName,
        sounds: selectedSounds.map((sound) => ({
          name: sound.name,
          src: sound.audio.src,
          volume: sound.volume,
          audio: new Audio(sound.src),
        })),
      };
      const newSavedMixes = [...savedMixes, newMix];
      setSavedMixes(newSavedMixes);
      localStorage.setItem("savedMixes", JSON.stringify(newSavedMixes));
    }
  };

  return (
    <div className="flex flex-col gap-6 w-[60%] z-10">
      <SoundLibrary
        handleSelectSound={handleSelectSound}
        selectedSounds={selectedSounds}
        handleVolumeChange={handleVolumeChange}
        onSaveMix={handleSaveMix}
      />

      <div className="flex w-full gap-6">
        <Timer />
        <MyMixes
          savedMixes={savedMixes}
          playMix={playMix}
          stopMix={stopMix}
          currentlyPlayingMixId={currentlyPlayingMixId}
          setCurrentlyPlayingMixId={setCurrentlyPlayingMixId}
        />
      </div>
    </div>
  );
};

export default Home;
