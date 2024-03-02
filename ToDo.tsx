import React, { FormEvent, useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Route, useHistory, useParams } from 'react-router';
import { UpdateTodoById, createToDoList, getElementById } from '../Service/Todolist';

type RouteParams = {
    id:string;
}

type Todo = {
  
  title : string,
  description : string,
  status : string;
}


const ToDo :React.FC= () => {

  const history = useHistory();

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  
  const {id} = useParams<RouteParams>();

  const saveOrUpdate = (e:FormEvent) => {

    e.preventDefault();

    const t = {title, description, status};

    if(id){
      UpdateTodoById(Number(id), t)
      .then((response) => history.push("/Todo"))
      .catch((error) => console.log(error))
    }
    else{
      createToDoList(t)
      .then(() => 
      history.push("/Todo"))
      .catch((error)=>console.log(error));
    }

  }

  useEffect(
    () => {
      if(id){
      getElementById(Number(id))
      .then((response) =>{
        setTitle(response.data.title);
        setDescription(response.data.description);
        setStatus(response.data.status);
      })
    }
    },[id]
  )
  
  function pageTitle(){
    if(id) {
      return <h2 className='text-center'>Update Todo</h2>
    }else {
      return <h2 className='text-center'>Add Todo</h2>
    }
  }

  return (
    
    <Container>
      <Row>
        <Col>
        <Form >

          {pageTitle()}

        <Form.Label>Title</Form.Label>
          <Form.Control
        type="text"
        placeholder="Title Name" value={title} onChange={(e) => setTitle(e.target.value)}/>

       <Form.Label>Description</Form.Label>
        <Form.Control
        type="text"
        placeholder="Write description"  value={description} onChange={(e) => setDescription(e.target.value)}/>

       <Form.Label>Status</Form.Label>
        <Form.Control
        type="text"
        placeholder="status" value={status} onChange={(e) => setStatus(e.target.value)}/>

    </Form>
    </Col>
    </Row>
    <Button type='submit' variant='primary' onClick={(e)=>saveOrUpdate(e)}>Submit</Button>
    </Container>
  )
  }

export default ToDo