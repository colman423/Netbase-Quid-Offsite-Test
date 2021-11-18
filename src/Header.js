import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import Button from './Button';

const Layout = styled('div')`
  text-align: center;
  background-color: rgb(62, 138, 204);
  position: relative;
  text-transform: uppercase;
`;

const HeaderText = styled('h1')`
  font-weight: 700;
  color: #ffffff;
  font-size: 16px;
`

const FloatingIcon = styled(Button)`
  position: absolute;
  right: 0px;
  top: 0px;
  bottom: 0px;
  padding: 8px 8px;
  cursor: pointer;
`

function Header(props) {
  return (
    <Layout>
      <HeaderText>Card</HeaderText>
      <FloatingIcon onClick={props.showSecondHeader}>
        <FontAwesomeIcon icon={faQuestion} color="blue"/>
      </FloatingIcon>
    </Layout>
  )
}

export default Header;
