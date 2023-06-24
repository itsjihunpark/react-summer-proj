import { useState } from "react";
import "./App.css";
function App() {
  const [widgets, setWidgets] = useState([]);
  //event handlers
  function handleOnDrag(e, widgetType) {
    const widget = { name: widgetType };
    e.dataTransfer.setData("widgetType", widgetType);
  }
  function handleOnDrop(e) {
    const widgetType = e.dataTransfer.getData("widgetType");
    setWidgets([...widgets, widgetType]);
  }
  function handleDragOver(e) {
    e.preventDefault();
  }

  return (
    <div className="App">
      <div className="widgets">
        <div
          className="widget"
          draggable
          onDragStart={(e) => handleOnDrag(e, "Widget A")}
        >
          Widget A
        </div>
        <div
          className="widget"
          draggable
          onDragStart={(e) => handleOnDrag(e, "Widget B")}
        >
          Widget B
        </div>
        <div
          className="widget"
          draggable
          onDragStart={(e) => handleOnDrag(e, "Widget C")}
        >
          Widget C
        </div>
      </div>
      <div className="page" onDrop={handleOnDrop} onDragOver={handleDragOver}>
        {widgets.map((widget, index) => {
          return (
            <div className="dropped-widget" key={index}>
              {widget}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
