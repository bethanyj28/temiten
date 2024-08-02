import styled from 'styled-components';

interface Props {
  datetime: string;
}

const StyledDiv = styled.div``
const StyledP = styled.p``

const ShowTime: React.FC<Props> = ({ datetime }) => {
  return (
    <StyledDiv>
      <StyledP>Current Time: {new Date(datetime).toLocaleString()}</StyledP>
    </StyledDiv>
  );
}

export default ShowTime;
