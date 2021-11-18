import styled from 'styled-components';

const Container = styled('div')`
  height: 100%;
  position: relative;
  text-align: right;
  color: #51503d;
  background-color: #dcdcdc;
`;

const Progress = styled('div')`
  position: absolute;
  width: ${props => props.progress}%;
  background-color: #f7e700;
  left: 0;
  top: 0;
  bottom: 0;
`;

const Text = styled('span')`
  position: absolute;
  right: 8px;
  z-index: 1000;
`


function Bar(props) {
  const { progress } = props;
  return (
    <Container>
      <Progress progress={progress}/>
      <Text>{progress}%</Text>
    </Container>
  )
}


export default Bar;
