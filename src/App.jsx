import './App.css';
import Week from './components/Week';

function App() {
  return (
    <>
      <div>
        <Week days={[1, 2, 3, 4, 5, 6, 7]} />
      </div>
    </>
  );
}

export default App;
