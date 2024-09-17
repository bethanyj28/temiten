import styled from 'styled-components';
import dayjs from 'dayjs';

interface Props {
  datetime: string;
}

const StyledDiv = styled.div`
  position: fixed;
  inset: 0px;
  width: fit-content;
  height: fit-content;
  max-width: 100vw;
  max-height: 100dvh;
  margin: auto;

  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`
const StyledDate = styled.div`
  font-size: 1.5em;
  margin-bottom: 10px;
`

const StyledTime = styled.div`
  font-size: 2em;
  font-weight: bold; 
`

const ShowTime: React.FC<Props> = ({ datetime }) => {
  const date = dayjs(datetime)
  const dateString = date.format('dddd, MMMM D, YYYY')
  const timeString = date.format('hh:mm A')
  return (
    <StyledDiv>
      <StyledDate>{dateString}</StyledDate>
      <StyledTime>{timeString}</StyledTime>
    </StyledDiv>
  );
}

export default ShowTime;
