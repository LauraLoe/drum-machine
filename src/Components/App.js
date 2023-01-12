import React, {useState} from "react";
import DrumPad from "./DrumPad";
import Controller from "./Controller";
import '../App.css';

const sounds1 = [
  {id: 'Chord-1',
   key: "Q",
   src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
   keyCode: 81
   },
   {id: 'Chord-2',
   key: "W",
   src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
   keyCode: 87
   },
   {id: 'Chord-3',
   key: "E",
   src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
   keyCode: 69
   },
   {id: 'Shaker',
   key: "A",
   src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
   keyCode: 65
   },
   {id: "Open-HH",
   key: "S",
   src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
   keyCode: 83
   },
   {id: "Closed-HH",
   key: "D",
   src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
   keyCode: 68
   },
   {id: "Punchy-Kick",
   key: "Z",
   src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
   keyCode: 90
   },
   {id: "Side-Stick",
   key: "X",
   src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
   keyCode: 88
   },
   {id: "Snare",
   key: "C",
   src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
   keyCode: 67
   }
];

const sounds2 = [
  {id: 'Heater-1',
   key: "Q",
   src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
   keyCode: 81
   },
   {id: 'Heater-2',
   key: "W",
   src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
   keyCode: 87
   },
   {id: 'Heater-3',
   key: "E",
   src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
   keyCode: 69
   },
   {id: 'Heater-4',
   key: "A",
   src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
   keyCode: 65
   },
   {id: "Clap",
   key: "S",
   src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
   keyCode: 83
   },
   {id: "Open-HH",
   key: "D",
   src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
   keyCode: 68
   },
   {id: "Kick-n'-Hat",
   key: "Z",
   src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
   keyCode: 90
   },
   {id: "Kick",
   key: "X",
   src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
   keyCode: 88
   },
   {id: "Closed-HH",
   key: "C",
   src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
   keyCode: 67
   }
];

function App() {

  const [soundName, setSoundName] = useState("Smooth Piano Kit");
  const [soundType, setSoundType] = useState(sounds1);
  const [power, setPower] = useState(true)


  const playAudio = (key, name) => {
    const audio = document.getElementById(key);
    setSoundName(name);
    audio.currentTime = 0;
    audio.play();
  };

  const changeSounds = controlSound => {
    if (controlSound) {
      setSoundType(sounds1)
      setSoundName("Smooth Piano Kit")
    } else {
      setSoundType(sounds2)
      setSoundName("Heater Kit")
    }
  }

  const off = () => {
    setPower(!power);
  }

  return (
    <div id="drum-machine">
      <div id="drum-area">
        <DrumPad play={playAudio} sounds={soundType} power={power}/>
      </div>
        <Controller name={soundName} controller={changeSounds} off={off} power={power}/>
    </div>
  );
}

export default App;
