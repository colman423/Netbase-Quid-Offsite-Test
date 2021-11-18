import { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import SecondHeader from './SecondHeader';
import Content from './Content';
import Footer from './Footer';

const Layout = styled('div')`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 300px;
`;

function Card() {
  const [secondHeaderShow, setSecondHeaderShow] = useState(true);
  const [tab, setTab] = useState(0);

  const hideSecondHeader = () => {
    setSecondHeaderShow(false);
    alert('press the question icon!');
  }

  return (
    <Layout>
      <Header 
        showSecondHeader={() => setSecondHeaderShow(true)}
      />
      { !!secondHeaderShow && <SecondHeader
        tabIdx={tab}
        onTabClick={(tabIdx) => setTab(tabIdx)}
        hideSecondHeader={hideSecondHeader}
      /> }
      <Content />
      <Footer />
    </Layout>
  )
}

export default Card;
