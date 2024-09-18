import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: fixed;
  inset: 0px;
  width: fit-content;
  height: fit-content;
  max-width: 100vw;
  max-height: 100dvh;
  margin: auto;
`
const StyledP = styled.p``
const StyledInput = styled.input``
const StyledButton = styled.button``

const EnterTime: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const redirectToViewTime = () => {
    const utcDate = new Date(inputValue).toUTCString();
    navigate(`/?time=${utcDate}`);
  };

  return (
    <StyledDiv>
      <StyledP>Enter Time: 
        <StyledInput 
          type="datetime-local" 
          value={inputValue}
          onChange={handleInputChange}
        />
      </StyledP>
      <StyledButton onClick={redirectToViewTime}>Go</StyledButton>
    </StyledDiv>
  );
}

export default EnterTime;
