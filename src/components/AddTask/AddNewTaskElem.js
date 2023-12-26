import styled from 'styled-components'
import {useState} from "react";
import {useAddNewPhone} from "../../hooks/useTasks";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    padding: 20px;
    gap: 10px;
`;

export const AddNewPhone = () => {
    const {addNewPhone: addNewPhoneToLS} = useAddNewPhone()

    const [name, setName] = useState('');

    const onInputChange = (event) => {
        setName(event.nativeEvent.target.value);
    }

    const addNewPhone = () => {
        addNewPhoneToLS({
            name
        });
    }

    return (
        <Container>
            <input value={name} onChange={onInputChange} placeholder={'Задача'} />
            <button onClick={addNewPhone}>Сохранить</button>
        </Container>
    )
}