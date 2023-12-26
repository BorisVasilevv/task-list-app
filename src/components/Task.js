import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-beetwen;
    border: solid black 1px;
    border-radius: 5px;
    padding: 10px 15px;

`;

const Name = styled.div`
    font-size: 16px;
    font-weight: bold;
`;

export const Task = ({name}) => {
    return (
        <Container>
            <Name>{name}</Name>
        </Container>
    );
}