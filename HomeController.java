package com.gl.todolist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gl.todolist.entity.todolist;
import com.gl.todolist.service.ServiceImpl;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/todo")
public class HomeController {
	
	@Autowired
	ServiceImpl service;

	@PostMapping
	ResponseEntity<todolist> createToDoList(@RequestBody todolist todo) {
		todolist tdl = service.createToDoList(todo);
		return new ResponseEntity<todolist>(tdl, HttpStatus.CREATED);
	}
	
	@GetMapping
	ResponseEntity<List<todolist>> getAllTodoList(){
		List<todolist> list = service.getAllTodoList();
		return new ResponseEntity<List<todolist>>(list, HttpStatus.OK);
	}
	
	@GetMapping("{id}")
	ResponseEntity<todolist> getElementById(@PathVariable("id") int id) {
		todolist t = service.getElementById(id);
		return new ResponseEntity<todolist>(t, HttpStatus.OK);
	}
	
	@PutMapping("{id}")
	ResponseEntity<todolist> UpdateTodoById(@PathVariable("id") int id, @RequestBody todolist todo) {
		todolist t = service.UpdateTodoById(id, todo);
		return new ResponseEntity<todolist>(t, HttpStatus.OK);
		
	}
	
	@DeleteMapping("{id}")
	ResponseEntity<todolist> deleteTodoById(@PathVariable("id") int id) {
		service.deleteTodoById(id);
		return new ResponseEntity("Todo deleted Successfully !!!!", HttpStatus.OK);
	}
	
	@PutMapping("/statusCompleted/{id}")
	ResponseEntity<todolist> statusComplete(@PathVariable("id") int id){
		todolist t = service.statusComplete(id);
		return new ResponseEntity<todolist>(t, HttpStatus.OK);
	}
	
	@PutMapping("/statusIncomplete/{id}")
	ResponseEntity<todolist> statusIncomplete(@PathVariable("id") int id){
		todolist t = service.statusIncomplete(id);
		return new ResponseEntity<todolist>(t, HttpStatus.OK);
	}

}
