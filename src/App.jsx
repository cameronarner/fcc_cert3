import './App.css'


function App() {

  return (
      <div id="drum-machine">
          <div className="button-panel">
          <div className="button-row">
          <button className="drum">Q</button>
          <button className="drum">Q</button>
          <button className="drum">Q</button>
          </div>
          <div className="button-row">
          <button className="drum">Q</button>
          <button className="drum">Q</button>
          <button className="drum">Q</button>
          </div>
          <div className="button-row">
          <button className="drum">Q</button>
          <button className="drum">Q</button>
          <button className="drum">Q</button>
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