import React from "react";
import Keyboard from './Keyboard';


function DrumPad({play, sounds, power}) {

  return power
    ? sounds.map((sound) => <Keyboard play={play} sound={sound} key={sound.id}/>)
    : sounds.map((sound) => <Keyboard play={play} sound={{...sound, src:"#", id: ''}} key={sound.id}/>)
}

export default DrumPad;
