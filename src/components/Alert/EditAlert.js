import React, { useState } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
`;

const TaskInput = styled.input`
  /* Ваши стили для инпута */
`;

const CloseButton = styled.button`
  /* Ваши стили для кнопки закрытия */
`;

// Компонент модального окна для редактирования задачи
export const EditAlert = ({ task, isOpen, onClose, onSave }) => {
    
    const [taskName, setTaskName] = useState(task ? task.name : '');

    if (!isOpen) return null;

    return (
        <ModalBackground onClick={onClose}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={onClose}>X</CloseButton>
            <TaskInput
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            />
            <button onClick={() => onSave(task.id, taskName)}>Сохранить</button>
        </ModalContainer>
        </ModalBackground>
    );
};