import React, { useState, useEffect } from "react";


function Keyboard({ play, sound }) {
  const [pushStyle, setPushStyle] = useState(false);

  const downHandler = (event) => {
    if (sound.keyCode === event.keyCode) {
      play(sound.key, sound.id);
      push();
    }
  };

  const push = (() => {
    setPushStyle(true);

    setTimeout(() => {
      setPushStyle(false)
    },250);
  })


  useEffect(() => {
    document.addEventListener("keydown", downHandler);
  } );

  return (
    <div
      id={sound.id}
      className={pushStyle ? "drum-pad push" : "drum-pad"}
      onClick={() => {
        push();
        play(sound.key, sound.id);
      }}
    >
      <audio src={sound.src} id={sound.key} className="clip" />
      {sound.key}
    </div>
  );
}

export default Keyboard;
