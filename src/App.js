import './App.css';
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const datalist = [
  {
    id: '1',
    name: 'saddas',
  },
  {
    id: '2',
    name: 'sdasdsddsaddas',
  },
  {
    id: '3',
    name: 'asdasddsaadssadads',
  },
];
function App() {
  const [data, setData] = useState(datalist);
  return (
    <div className="App">
      <DragDropContext
        onDragEnd={result => {
          console.log(result);
        }}
      >
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {data.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.name}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
