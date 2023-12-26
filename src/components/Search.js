import {useTasks} from "../hooks/useTasks";
import styled from "styled-components";
import {useState} from "react";


const Container = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    width: 60vw;
    gap: 10px;
`;

const TaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Input = styled.input`
    margin-bottom: 20px;
`;

export const SearchRow = ({ onSearchChange }) => {
    const [searchValue, setSearchValue] = useState('');

    const onSearchInputChange = (event) => {
        const newValue = event.nativeEvent.target.value;
        setSearchValue(newValue);
        onSearchChange(newValue);
    }

    return (
        <Container>
        <h1>Поиск</h1>
            <Input value={searchValue} onChange={onSearchInputChange} />
        </Container>
    );
}

