import './App.css'

function Drum({value, onDrumClick}){
  return (
    <button className="drum-pad" id={value} onclick={onDrumClick}>
      {value}
    </button>
  )
}
function handleClick({letter}){


}

function App() {

  return (
      <div id="drum-machine">
          <div className="button-panel">
          <div className="button-row">
          <Drum value="Q" onDrumClick={()=>handleClick("Q")} />
          <Drum value="W" onDrumClick={()=>handleClick("W")} />
          <Drum value="E" onDrumClick={()=>handleClick("E")} />
          </div>
          <div className="button-row">
          <Drum value="A" onDrumClick={()=>handleClick("A")} />
          <Drum value="S" onDrumClick={()=>handleClick("S")} />
          <Drum value="D" onDrumClick={()=>handleClick("D")} />
          </div>
          <div className="button-row">
          <Drum value="Z" onDrumClick={()=>handleClick("Z")} />
          <Drum value="X" onDrumClick={()=>handleClick("X")} />
          <Drum value="C" onDrumClick={()=>handleClick("C")} />
          </div>
        </div>
        <div id="display"></div>
        <div className="control-panel"></div>
      </div>
  )
}

export default App

/* 
requirements:
- need nine drum pad buttons
  - clickable, and can use keys to click them w/ same result
  - when clicked different sounds play
- use html audio elements with src being an audio source,
  - classes of clip
  - id corresponding to the letter key
- also when each is clicked, need to display text in 
  #display element w/ the name of the sound
  */

  //onclick -> button changes colors? darker version?
  // on/off switch and volume control