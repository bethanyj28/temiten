import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ShowTime from './ShowTime';
import EnterTime from './EnterTime';
import styled from 'styled-components';

const StyledContainer = styled.div`
  text-align: center;
`

const Home: React.FC = () => {
  const [searchParams] = useSearchParams();
  const timeParam = searchParams.get('time');

  return (
    <StyledContainer>
      {timeParam ? <ShowTime datetime={timeParam} /> : <EnterTime />}
    </StyledContainer>
  );
}

export default Home;
