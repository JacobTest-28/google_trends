
import './App.css';

function App() {
  return (
    <div className="App">

          <button onClick={()=> {fetch(".netlify/functions/getTrends?bob=[hi,by]", {
              method: 'POST', headers: {
                  'Content-Type': 'application/json'


              },

          });} }>ha</button>

    </div>
  );
}

export default App;
