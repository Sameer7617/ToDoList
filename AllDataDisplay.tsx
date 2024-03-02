import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { deleteTodoById, getAllTodoList, statusComplete, statusIncomplete } from '../Service/Todolist';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


type TodoList = {
    id: number;
    title: string;
    description: string;
    status: string;
}

const AllDataDisplay = () => {

    const [Todo, setTodo] = useState<TodoList[]>([]);
 

    const history = useHistory();

    const addTodo = (id:number) => {
      history.push(`/add-Todo`)
    }

    const updateTodo = (id:number) => {
      history.push(`/update-Todo/${id}`)
    }

    const removeTodo = (id:number) => {
      deleteTodoById(id)
      .then(() => displayTodo())
      .catch((error) => console.log(error));
    }

    const complete = (id:number) =>{
      statusComplete(id).then(() => displayTodo())
      .catch((error)=> console.log(error));
    }

    const InComplete = (id:number) => {
      statusIncomplete(id)
      .then(() => displayTodo())
      .catch((error) => console.log(error)); 
    }

    const displayTodo = () =>{
      getAllTodoList().then((response:any)=>{
        setTodo(response.data)
        console.log(response.data.status);
    }).catch((error:any) => console.log(error));
    }

    useEffect(() => displayTodo(), []);

  return (
    <>
    {/* Adding to Button */}
    <Link to='/add-Todo' className='btn btn-primary mb-2 m-10'>Add Todo</Link>

    {/* Table Displaying All Data */}
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Tilte</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

      {
  Todo.map((data) => (
    <tr key={data.id}>
      <td>{data.title}</td>
      <td>{data.description}</td>
      <td>{data.status? "Correct":"Incorrect"}</td>
      <td>
        <Button variant= 'info' onClick={() => updateTodo(data.id)}>Update</Button>{' '}
        <Button onClick={() => removeTodo(data.id)} variant='danger' >Delete</Button>{' '}
        <Button variant = 'success' onClick={()=>complete(data.id)}>complete</Button>{' '}
        <Button variant = 'warning' onClick={() => InComplete(data.id)}>Incomplete</Button>{' '}
        
      </td>
    </tr>
  ))
} 
      </tbody>
    </Table>
    </>
  )
}

export default AllDataDisplay


