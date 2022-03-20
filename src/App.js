import './App.css';
import Quiz from './components/quiz';
import quizObj from './constants'; // delete

function App() {
  // TODO: delete console log
  console.log(quizObj, 'quizObj');
  return (
    <div className="App">
      <p>
        Eyup me duck
      </p>
      <Quiz />
      {/* TODO: Add footer
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          made by ninypops
        </a>
      */}
    </div>
  );
}

export default App;
