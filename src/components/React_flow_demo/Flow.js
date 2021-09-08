import cls from './Flow.modules.scss'
import React from 'react';
import ReactFlow from 'react-flow-renderer';

const elements = [
  {
    id: '1',
    type: 'input',
    label: 'Input Node',
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    ports: {
      'in': {
        id: 'in',
        type: 'input',
        label: 'In',
        x: 0,
        y: 0,
        width: 10,
        height: 10,
      },
      'out': {
        id: 'out',
        type: 'output',
        label: 'Out',
        x: 100,
        y: 100,
        width: 10,
        height: 10,
      },
    },
  }
];

export default function Flow() {
  return (
    <div className={cls.flow}>
      <ReactFlow
        elements={elements}
        // nodeTypes={[
        //   {
        //     type: 'input',
        //     name: 'Input Node',
        //     color: '#00ff00',
        //     ports: [
          />
          </div>
  )
}
