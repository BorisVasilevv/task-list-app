import styled from "styled-components";
import { useDeleteNewTask } from "../hooks/useTasks";


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    border: solid black 1px;
    border-radius: 5px;
    padding: 10px 15px;

`;

const MyButton = styled.div`
    font-size: 14px;
    border: solid black 1px;
`;

const Name = styled.div`
    font-size: 16px;
    font-weight: bold;
`;

export const Task = ({ task, onTaskClick }) => {
    const { deleteTask } = useDeleteNewTask();

    const handleSubmitDelete = (event) => {
        event.stopPropagation();
        deleteTask(task.id);
      };

    return (
        <Container onClick={() => onTaskClick(task.id)}>
            <Name>{task.name}</Name>
            <MyButton onClick={handleSubmitDelete}>Удалить</MyButton>
        </Container>
    );
}

