import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import Button from './Button';

const Layout = styled('div')`
  text-align: center;
  background-color: #4e4a4a;
  text-transform: uppercase;
  padding: 4px 0px;
`;

const FooterText = styled('span')`
  font-weight: 700;
  color: #ffffff;
  font-size: 16px;
`

function Footer(props) {
  return (
    <Layout>
      <FooterText>Footer</FooterText>
    </Layout>
  )
}

export default Footer;
