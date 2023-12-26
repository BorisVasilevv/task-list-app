import styled from 'styled-components'
import {phoneMarks, phoneModels} from "./constants";
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
    const [phoneMark, setPhoneMark] = useState('');
    const [phoneModel, setPhoneModel] = useState('');

    const onInputChange = (event) => {
        setName(event.nativeEvent.target.value);
    }

    const onPhoneMarkSelected = (event) => {
        setPhoneMark(event.nativeEvent.target.value);
        setPhoneModel('');
    }

    const onPhoneModelSelected = (event) => {
        setPhoneModel(event.nativeEvent.target.value);
    }

    const renderPhoneMarksOptions = () => {
        return phoneMarks.map((el, index) => {
            return (
                <option key={index} value={el}>
                    {el}
                </option>
            );
        })

    }

    const renderPhoneModelsOptions = () => {
        if (!phoneMark) {
            return null;
        }
        const models = phoneModels[phoneMark];
        if (models) {
            return models.map((el, index) => {
               return (
                   <option key={index} value={el}>
                       {el}
                   </option>
               );
            });
        }
    }

    const addNewPhone = () => {
        addNewPhoneToLS({
            name,
            phoneMark,
            phoneModel
        });
    }

    return (
        <Container>
            <input value={name} onChange={onInputChange} placeholder={'Имя владельца'} />
            <select onChange={onPhoneMarkSelected} value={phoneMark}>
                <option key={'default'} disabled={true} value={''}>Марка телефона</option>
                {renderPhoneMarksOptions()}
            </select>
            <select onChange={onPhoneModelSelected} value={phoneModel}>
                <option key={'default'} disabled={true} value={''}>Модель телефона</option>
                {renderPhoneModelsOptions()}
            </select>
            <button onClick={addNewPhone}>Сохранить</button>
        </Container>
    )
}