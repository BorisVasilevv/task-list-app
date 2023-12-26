import {useTasks} from "../hooks/useTasks";
import styled from "styled-components";
import {Task} from "./Task";
import {useState} from "react";


const Container = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    width: 50vw;
`;

const TaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Input = styled.input`
    margin-bottom: 20px;
`;

export const TaskList = () => {
    const {tasks} = useTasks()
    const [searchValue, setSearchValue] = useState('');

    if (!tasks) {
        return null;
    }

    const onSearchInputChange = (event) => {
        setSearchValue(event.nativeEvent.target.value);
    }

    const filteredTasks = filterTasks(tasks, searchValue);

    return (
        <Container>

            <Input value={searchValue} onChange={onSearchInputChange} />
            <TaskContainer>
                {filteredTasks.map((task, index) => {
                    return <Task key={index} name={task.name} />
                })}
            </TaskContainer>

        </Container>
    );
}

const filterTasks = (tasks, searchValue) => {
    return tasks.filter((el) => {
        const isNameMatch = el.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
        return isNameMatch;
    });
}