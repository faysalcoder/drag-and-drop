import React from 'react';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import SingleData from './SingleData';

const data =[

    {
        id:1,
        name: "faysal",
        roll: 2523
    },
    {
        id:2,
        name: "faysal",
        roll: 2523
    },
    {
        id:3,
        name: "faysal",
        roll: 2523
    },
    {
        id:4,
        name: "faysal",
        roll: 2523
    },
    {
        id:5,
        name: "faysal",
        roll: 2523
    },
    {
        id:6,
        name: "faysal",
        roll: 2523
    }
]
const data1 =[

    {
        name: "faysal",
        roll: 252
    },
    {
        name: "faysal",
        roll: 2523
    },
    {
        name: "faysal",
        roll: 25
    },
    {
        name: "faysal",
        roll: 25235
    },
    {
        name: "faysal",
        roll: 25232
    },
    {
        name: "faysal",
        roll: 25231
    }
]
const Todolist = () => {

    return (
        <DragDropContext>
      
            <div class="grid gap-4 grid-cols-3">
                <Droppable droppableId='list'>
                {
                    (provided)=>(
                        <div ref={provided.innerRef} {...provided.droppableProps}>{
                            data.map((data, index)=><Draggable draggableId={data.id} index={index}>
                            {
                              (provided)=>(
                                 <div className='w-100 p-2 m-3 border-2'
                                 {...provided.draggableProps}
                                 {...provided.dragHandleProps}
                                 ref={provided.innerRef}
                                 >
                                 <h2>{data.name} </h2>
                             </div>
                                 )
                            }
                         
         
                        
                         </Draggable>
                            )
                            
                            }</div>
                    )
                }
                </Droppable>
 
                <Droppable droppableId='list1'>
                {
                    (provided)=>(
                        <div ref={provided.innerRef} {...provided.droppableProps}>{
                            data1.map((data , index)=><Draggable draggableId={data.roll.toString()} index={index}>
                               {
                                 (provided)=>(
                                    <div className='w-100 p-2 m-3 border-2'
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                    >
                                    <h2>{data.name} </h2>
                                </div>
                                    )
                               }
                            
            
                           
                            </Draggable>
                            )
                            
                            }</div>
                    )
                }
                </Droppable>
  
  
</div>

       
        </DragDropContext>
    );
};

export default Todolist;