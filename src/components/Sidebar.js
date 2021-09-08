import React from 'react';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <>
    <div style={{margin:"0 auto", width:"300px"}}>
    <div style={{display:"flex", flexDirection:"column", margin:"0 auto", width:"300px", alignItems:"center"}}>
      <div style={{margin:"0 auto",}}>Drag and drop, to create Nodes: </div>
      <div style={{border: "2px solid blue", width:"100px", height:"20px", padding:"10px", marginTop:"10px"}} onDragStart={(event) => onDragStart(event, 'input')} draggable>
        Input Node
      </div>
      <div style={{border: "2px solid black", width:"100px", height:"20px", padding:"10px", marginTop:"10px"}} onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Default Node
      </div>
      <div style={{border: "2px solid pink", width:"100px", height:"20px", padding:"10px", marginTop:"10px"}} onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Output Node
      </div>
      </div>
      </div>
    </>
  );
};