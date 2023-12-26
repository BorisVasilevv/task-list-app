import {useTasks} from "../hooks/useTasks";
import styled from "styled-components";
import {Task} from "./Task";


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


export const TaskList = ({ searchValue }) => {
    const {tasks} = useTasks()

    if (!tasks) {
        return null;
    }
    let filteredTasks;
    if (!searchValue) {
        filteredTasks = tasks;
    }
    filteredTasks = filterTasks(tasks, searchValue);

    return (
        <Container>
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