import './App.css';
import Frame from './components/Frame';
import * as Components from "./components";

function App() {
  return (
    <div className="App">
      <Frame {...Components.SideNav01.meta}>
        <Components.SideNav01.Component />
      </Frame>      
    </div>
  );
}

export default App;
