import styled from 'styled-components'
import {useState} from "react";
import {useAddNewTask} from "../../hooks/useTasks";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    padding: 20px;
    gap: 10px;
`;

export const AddNewTask = () => {
    const {addNewTask} = useAddNewTask()

    const [name, setName] = useState('');

    const onInputChange = (event) => {
        setName(event.nativeEvent.target.value);
    }

    const addNewTask1 = () => {
        addNewTask(name);
    }

    return (
        <Container>
            <input value={name} onChange={onInputChange} placeholder={'Задача'} />
            <button onClick={addNewTask1}>Сохранить</button>
        </Container>
    )
}