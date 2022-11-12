import './App.css';
import Frame from './components/Frame';
import * as Components from "./components";

function App() {
  return (
    <div className="App">
      <Frame {...Components.SideNav01.meta}>
        <Components.SideNav01.Component />
      </Frame>      
      <Frame {...Components.HyperplexMenu01.meta} 
        style={{ 
          backgroundColor: "rgba(20, 20, 20)", 
          display: "flex", 
          flexDirection: "column",
          justifyContent: "center" }}>
          <Components.HyperplexMenu01.Component />
      </Frame>
      <Frame {...Components.WideSideNav01.meta}>
        <Components.WideSideNav01.Component />
      </Frame>
      <Frame {...Components.RatingSection.meta} style={{ height: "750px" }}>
        <Components.RatingSection.Component />
      </Frame>
    </div>
  );
}

export default App;
