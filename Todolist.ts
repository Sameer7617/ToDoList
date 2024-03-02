import axios from "axios";

const baseURL = 'http://localhost:8080/api/todo';

export const createToDoList = (TodoList:any) => axios.post(baseURL, TodoList);

export const getAllTodoList = () => axios.get(baseURL); 

export const getElementById = (id:number) => axios.get(baseURL + '/' + id);
 
export const UpdateTodoById = (id:number, TodoList:any) => axios.put(baseURL + '/' + id, TodoList);

export const deleteTodoById = (id:number) => axios.delete(baseURL + '/' + id);

export const statusComplete = (id:number) => axios.put(baseURL + '/statusCompleted/' + id);

export const statusIncomplete = (id:number) => axios.put(baseURL + '/statusIncomplete/' + id);