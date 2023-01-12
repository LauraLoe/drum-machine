import React, {useState} from "react";

function Controller({name, controller, off, power}) {

  const [controlSound, setControlSound] = useState(false)


  const handleClickSound = () => {
    setControlSound(!controlSound);
    controller(controlSound);
  }

  return (
    <div id="display">

      <div id="power-control">
        <p className="pt-0 mb-0">Power</p>
        <div className="switch" onClick={off}>
          <div className={power ? "select-left" : "select-off"}></div>
        </div>
      </div>

      <div id="name" className="mt-4">
        <p className="pt-0 mb-0">{power ? name : null}</p>
      </div>

      <div id="sound-control">
        <p className="pt-0 mb-0 mt-4">SwitchSounds</p>
        <div className="switch" onClick={handleClickSound}>
          <div className={controlSound ? "select-right" : "select-left"}></div>
        </div>
      </div>

    </div>
  )
}

export default Controller;
