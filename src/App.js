import React, { useState, useRef } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls
} from "react-flow-renderer";
// import "./styles.css";
import Sidebar from "./components/Sidebar";

const initialElements = [
  {
    id: "1",
    type: "input",
    data: { label: "Custom Node" },
    position: { x: 250, y: 5 },
    style: {
      backgroundColor: "pink",
      width: "100px",
      height: "100px"
    }
  },
  {
    id: "2",
    type: "output",
    data: { label: "output node" }, 
    position: { x: 100, y: 200 }
  },
  {
    id: "e1-2",
    type: "edge",
      source: "1",
      target: "2",
      label: " Arrow edge 1-2",
      arrowHeadType: 'arrow',
  },
  {
    id: "3",
    type: "default",
    data: { label: "output node" }, 
    position: { x: 400, y: 200 }
  },
  {
    id: "e1-3",
    type: "step", 
    source: "1",
    target: "3",
    animated: true
  }
];
let id = 0;
const getId = () => `dndnode_${id++}`;

export default function App() {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);
  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };
  const onDrop = (event) => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData("application/reactflow");
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top
    });
    const newNode = {
      id: getId(),
      type,
      position,
      data: { label: `${type} node` }
    };
    setElements((es) => es.concat(newNode));
  };

  // const createNode = () => {
  //   const newNode = {
  //     id: Math.random( ) * 100,
  //     type:'default',
  //     position: { x: 100, y: 200 },
  //     data: { label: `New node` }
  //   };
  //   setElements((es) => es.concat(newNode));
    
  // }
  return (
    <div className="dndflow">
      {/* <button onClick={createNode}>Create new node</button> */}
      <ReactFlowProvider>
        <div
          className="reactflow-wrapper"
          style={{ height: "50vh", width: "100vw" }}
          ref={reactFlowWrapper}
        >
          <ReactFlow
            elements={elements}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
          >
            <Controls />
          </ReactFlow>
        </div>
        <Sidebar />
      </ReactFlowProvider>
    </div>
  );
}
