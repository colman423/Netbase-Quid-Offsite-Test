import styled from 'styled-components';

const Layout = styled('div')`
  text-align: center;
  background-color: #4e4a4a;
  text-transform: uppercase;
  padding: 4px 0px;
`;

const FooterText = styled('div')`
  font-weight: 700;
  color: #ffffff;
  font-size: 12px;
`

function Footer(props) {
  return (
    <Layout>
      <FooterText>Footer</FooterText>
    </Layout>
  )
}

export default Footer;
