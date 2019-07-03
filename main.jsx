import React from "react";
import ReactDOM from 'react-dom';
import { render } from "react-dom";

/* Handbook for outlining keys
 Things to add:
  -Notes in key
  -About each key: mood, song examples, etc.
  -Chord generator
  -Back button
  -About each chord: function, what it usually replaces, moods created
  
Questions:
  Should each note be a single .html or make it all in the code?
  Should the circle of fifths be on the homepage?

*/

/*
 Temporary Redux Reducer, Store, Dispatchers
*/
const notes = [
  'A',
  'A#',
  'B',
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
];

const explain = [
  { note: "A",
    major: "Joyful, Pastoral, Declaration of Love, Innocent Love, Satisfaction with the current state of affairs. Optimistic. Belief in Heaven and reuniting with lost loved ones. Youthful and cheerful. Trusting in the spirit of the divine.",
    minor: "Tender, Plaintive, Pious, Womanly, Graceful in character. Capable of soothing.",
    majorSongs: "Eric Clapton - Cocaine, Oasis - Wonderwall, Adele- Someone Like You, Michael Jackson - Billy Jean",
    minorSongs: "The Animals - House of the Rising Sun, Led Zeppelin - Stairway to Heaven, Cat Stevens - Wild World"
    },
  { note:"A#",
    major: "Joyful, Quaint, Cheerful. Love, clear conscience, hopeful aspirations for the future and a better world. Optimistic and able to take control in order to ensure peace.",
    minor: "Terrible, the Night, Mocking. The garment of night, surly, blasphemous, turning away the world and the divine. Preparations for the end. Pessimism and giving up. Belief in darkness.",
    majorSongs: "The Police - Roxanne, Prince - Purple Rain, Chuck Berry - Johnny B. Good",
    minorSongs: "Rhianna - Umbrella"},
  { note: "B",
    major: "Harsh, Strong, Wild, Rage. Uncontrolled passions. Angry, Jealous, Fury, Despair, Burdened with negative energy. Prepared to fight.",
    minor: "Solitary, Melancholic, Patience. The key of patience, calmly waiting for fate, destiny, and the submission to providence and karma.",
    majorSongs: "Guns 'N Roses - November Rain, Foo Fighters - Learn to Fly",
    minorSongs: "The Eagles - Hotel California, Metallica - One"},
  { note:"C",
    major: "Innocently Happy. Completely pure. Simplicity and naivety. The key of children. Free of burden, full of imagination. Powerful resolve. Earnestness. Can feel religious.",
    minor: "Innocently Sad, Love-Sick. Declarations of love and lamenting lost love or unhappy relationships. It is languishing and full of longing, a soul in search of something different.",
    majorSongs: "Calvin Harris - Feel So Close, Bon Jovi - Dead or Alive, almost any Taylot Swift song",
    minorSongs: "Survivor - Eye of the Tiger, Jimi Hendrix - Along the Watchtower"},
  { note:"C#",
    major: "A leering key, degenerating into grief and rapture. It cannot laugh, but it can smile; it cannot howl, but it can at least grimace its crying.--Consequently only unusual characters and feelings can be brought out in this key.",
    minor: "Penitential lamentation, intimate conversation with God, the friend and help-meet of life; sighs of disappointed friendship and love lie in its radius.",
    majorSongs: "The Killers - Mr. Brightside, Guns 'N Roses - Sweet Child O' Mine",
    minorSongs: "One Republic - Counting Stars, Lady Gaga - Just Dance, Linkin Park - One Step Closer"},
  { note:"D",
    major: "The key of triumph, of Hallejuahs, of war-cries, of victory-rejoicing. Thus, the inviting symphonies, the marches, holiday songs and heaven-rejoicing choruses are set in this key.",
    minor: "Melancholy womanliness, the spleen and humours brood.",
    majorSongs: "Red Hot Chili Peppers - Under the Bridge, Nirvana - Lithium",
    minorSongs: "Santana - Black Magic Woman, Rage Against the Machine - Killing in the Name of"},
  { note:"D#",
    major: "The key of love, of devotion, of intimate conversation with God.",
    minor: "Feelings of the anxiety of the soul's deepest distress, of brooding despair, of blackest depresssion, of the most gloomy condition of the soul. Every fear, every hesitation of the shuddering heart, breathes out of horrible D# minor. If ghosts could speak, their speech would approximate this key.",
    majorSongs: "Green Day - Longview, Iggy Azalea - Fancy",
    minorSongs: "Stevie Wonder - Superstition, Nirvana - Dumb"},
  { note:"E",
    major: "Noisy shouts of joy, laughing pleasure and not yet complete, full delight lies in E Major.",
    minor: "Naïve, womanly innocent declaration of love, lament without grumbling; sighs accompanied by few tears; this key speaks of the imminent hope of resolving in the pure happiness of C major. ",
    majorSongs: "The Beatles - Day Tripper, Pixies - Where is My Mind",
    minorSongs: "Oasis - Wonderwall, The White Stripes - Seven Nation Army"},
  { note:"F",
    major: "Complaisance & Calm.",
    minor: "Deep depression, funereal lament, groans of misery and longing for the grave.",
    majorSongs: "Tom Petty - Free Fallin', The Beatles - Yesterday",
    minorSongs: "Aerosmith - Dream On, Nirvana - Smells Like Teen Spirit"},
  { note:"F#",
    major: "Triumph over difficulty, free sigh of relief utered when hurdles are surmounted; echo of a soul which has fiercely struggled and finally conquered lies in all uses of this key.",
    minor: "A gloomy key: it tugs at passion as a dog biting a dress. Resentment and discontent are its language.",
    majorSongs: "Smash Mouth - All Star, Jimi Hendrix - Foxxy Lady",
    minorSongs: "NA"},
  { note:"G",
    major: "Everything rustic, idyllic and lyrical, every calm and satisfied passion, every tender gratitude for true friendship and faithful love,--in a word every gentle and peaceful emotion of the heart is correctly expressed by this key.",
    minor: "Discontent, uneasiness, worry about a failed scheme; bad-tempered gnashing of teeth; in a word: resentment and dislike.",
    majorSongs: "Frank Sinatra - Fly Me to the Moon, Radiohead - Creep",
    minorSongs: "Eiffel 65 - Blue (Da Ba Dee), Rhianna - Love the Way You Lie"},
  { note:"G#",
    major: "Key of the grave. Death, grave, putrefaction, judgment, eternity lie in its radius.",
    minor: "Grumbler, heart squeezed until it suffocates; wailing lament, difficult struggle; in a word, the color of this key is everything struggling with difficulty.",
    majorSongs: "Rarely used",
    minorSongs: "Rarely used"}];
/*const reducerForm = (state = {
  progress: ''
}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case 'LOAD':
      newState.progress = action.text;
      break;
    case 'DONE':
      newState.progress = action.text;
      break;
  }
  return newState;
};

const formStore = Redux.createStore(reducerForm);
*/
/* 
********
Main app render
********
*/

class Handbook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frontPage: true,
      selectedNote: 0,
      showExplain: false,
      showPictures: false,
      showMajor: false,
      showMinor: false,
      showChords: false,
      addSeven: false,
      addNine: false,
      addThirteen: false
    };
    // add function binds below
    this.firstPage = this.firstPage.bind(this);
    this.handleNoteSelect = this.handleNoteSelect.bind(this);
    this.toggleExplanation = this.toggleExplanation.bind(this);
  }

  //Functions go in this area
  firstPage(){
    this.setState({
      frontPage: true
    });
  }
  
  handleNoteSelect(event){
    this.setState({
      frontPage: false,
      selectedNote: event.target.value
    });
  }

  toggleExplanation(){
    if (this.state.showExplain === true) {
    this.setState({
      showExplain: false
    });} else {
      this.setState({
        showExplain: true
      })
    }
  }

  // End of functions

  render() {
      //button collection
      const buttonBackToFront = <button onClick={this.firstPage}>Back to Main</button>;
      const buttonNoteDropdown =  <select onChange={this.handleNoteSelect}>
    <option selected disabled>Choose your key</option>
    <option value={Math.floor(Math.random() * 12)}> Random key</option>
    <option value="0">A</option>
    <option value="1">A#</option>
    <option value="2">B</option>
    <option value="3">C</option>
    <option value="4">C#</option>
    <option value="5">D</option>
    <option value="6">D#</option>
    <option value="7">E</option>
    <option value="8">F</option>
    <option value="9">F#</option>
    <option value="10">G</option>
    <option value="11">G#</option>
</select>;

    //possible issue below
    const buttonExplanation = (this.state.showExplain === false) ?
      <button onClick={this.toggleExplanation}>Show key info</button>
    :
      <button onClick={this.toggleExplanation}>Hide key info</button>;
    
      // Main render
      if(this.state.frontPage === true){
        return(
          <div>
            <h1>Songwriter's Handbook v0.1</h1>
              <p>Welcome to JustlikeJanuary's songwriter's handbook!
                <br />
                <br />
                This tool is meant to quickly reference the notes of specific keys, their chords, and chord progressions. The goal is that repeatedly seeing it will eventually lead to memorizing keys and chords while developing an understanding of when to use which. 
                <br />
                <br />
                Feel free to send suggestions and feedback to my github!
              </p>
              {buttonNoteDropdown}
          </div>
          );
      } else{
        return(
          <div>
            <h1>{"Key: " + notes[this.state.selectedNote]}</h1>
            <p>Notes in major key:</p>
            <div>
            I: {notes[this.state.selectedNote]}
            <br />
            ii: {notes[((notes.indexOf(notes[this.state.selectedNote]))+2) %12]}
            <br />
            iii: {notes[((notes.indexOf(notes[this.state.selectedNote]))+4) %12]}
            <br />
            IV: {notes[((notes.indexOf(notes[this.state.selectedNote]))+5) %12]}
            <br />
            V: {notes[((notes.indexOf(notes[this.state.selectedNote]))+7) %12]}
            <br />
            vi: {notes[((notes.indexOf(notes[this.state.selectedNote]))+9) %12]}
            <br />
            vii<sup>o</sup>: {notes[((notes.indexOf(notes[this.state.selectedNote]))+11) %12]}
            <br />
            <br />
            {(this.state.showExplain === true) ? <div><span style={{color:"blue"}}>Feeling: </span>{explain[this.state.selectedNote].major}<br /><br /><span style={{color:"red"}}>Famous Songs: </span>{explain[this.state.selectedNote].majorSongs}<br /><br /></div>
            : <div />
            }
            {buttonExplanation}
            {buttonBackToFront}
            {buttonNoteDropdown}
            </div>
          </div>);
    
}

}
}

ReactDOM.render(<Handbook />, document.getElementById('app'));


