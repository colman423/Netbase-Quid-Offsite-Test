import styled from 'styled-components';
import Header from './Header';
import SecondHeader from './SecondHeader';
import Content from './Content';
import Footer from './Footer';


const Layout = styled('div')`
  display: flex;

`;


function Card() {
  return (
    <Layout>
      <Header />
      <SecondHeader />
      <Content />
      <Footer />
    </Layout>
  )
}

export default Card;
