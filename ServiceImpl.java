package com.gl.todolist.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.todolist.entity.todolist;
import com.gl.todolist.exception.RecordNotFoundException;
import com.gl.todolist.repository.Repository;

@Service
public class ServiceImpl {
	@Autowired
	Repository rep;
	
	public todolist createToDoList(todolist todolist) {
		return rep.save(todolist);
	}
	
	public List<todolist> getAllTodoList(){
		return rep.findAll();
	}
	
	public todolist getElementById(int id) {
		todolist t=rep.findById(id).orElseThrow(()->new RecordNotFoundException("Id Not Found"));
		
		return t;
				}
	
	public todolist UpdateTodoById(int id, todolist todo) {
		
		todolist t = null;
		t = rep.findById(id).orElseThrow(()->new RecordNotFoundException("Id Not Found"));
		
		t.setTitle(todo.getTitle());
		t.setDescription(todo.getDescription());
		t.setStatus(todo.isStatus());
		return rep.save(t);
	}
	
	public void deleteTodoById(int id) {
		rep.deleteById(id);
	}
	
	public todolist statusComplete(int id) {
		todolist updateStatus = rep.findById(id).orElseThrow(() -> new RecordNotFoundException("Id Not Found"));
		updateStatus.setStatus(true);
		return rep.save(updateStatus);
	}
	
	public  todolist statusIncomplete(int id) {
		todolist updateStatus = rep.findById(id).orElseThrow(() -> new RecordNotFoundException("Id Not Found "));
		updateStatus.setStatus(false);
		return rep.save(updateStatus);
	}

}
