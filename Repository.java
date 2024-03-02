package com.gl.todolist.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gl.todolist.entity.todolist;

public interface Repository extends JpaRepository<todolist, Integer> {

}
