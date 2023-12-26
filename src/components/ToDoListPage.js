import React from "react";
import {useState} from 'react';
import {TaskList} from "./TaskList";
import {AddAlert} from './Alert/AddAlert'
import { SearchRow } from "./Search";
import {AddNewTask} from './AddTask/AddNewTaskElem'
import styled from "styled-components";

const Container =styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`

function ToDoListPage() {
  // Добавляем состояние для поискового запроса
  const [searchValue, setSearchValue] = useState('');

  // Функция для обновления поискового запроса
  const handleSearchInputChange = (value) => {
    setSearchValue(value);
  }
  return (
    <Container>
        <SearchRow onSearchChange={handleSearchInputChange}/>
        <AddAlert>
          <AddNewTask/>
        </AddAlert>
        <TaskList searchValue={searchValue}/>
    </Container>
  );
}


export default ToDoListPage;
