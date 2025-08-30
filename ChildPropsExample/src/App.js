import Card from './components/Card';
import './App.css';

function App() {

  return (
    <div>
      <h1>React Children Props Example</h1>

      <Card>
        <h2>Title Inside Card</h2>
        <p>This content is passed as children to the Card component.</p>
      </Card>

      <Card>
        <button onClick={() => alert('Clicked!')}>Click Me</button>
      </Card>
    </div>


  );
}

export default App;
