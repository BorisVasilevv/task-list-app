import {useState} from 'react';
import styled from 'styled-components'
import {Modal} from './components/Modal'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
`;

const AddButton = styled.div`
    border: solid black 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    font-size: 20px;
    line-height: 20px;
`;

export const AddAlert = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showAlertButtonClick = () => {
        setIsModalVisible(true)
    }

    const closeAlert = () => {
        setIsModalVisible(false);
    }

    const renderModal = () => {
        if (!isModalVisible) {
            return null;
        }

        return (
            <Modal close={closeAlert}>
                {props.children }
            </Modal>
        );
    }

    return (
        <>
            {renderModal()}
            <Container>
                <AddButton onClick={showAlertButtonClick}>Добавить</AddButton>
            </Container>
        </>
    )
}
