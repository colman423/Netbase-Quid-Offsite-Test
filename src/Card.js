import { useState } from 'react';
import { toast } from 'react-toastify';
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
    toast.info('Press the question icon to show the second header.', {
      autoClose: 2500,
      position: "top-center",
      hideProgressBar: true,
    });
  }

  const showSecondHeader = () => {
    setSecondHeaderShow(true)
    toast.dismiss();
    toast.clearWaitingQueue();
  }

  return (
    <Layout>
      <Header 
        showSecondHeader={showSecondHeader}
      />
      { !!secondHeaderShow && <SecondHeader
        tabIdx={tab}
        onTabClick={(tabIdx) => setTab(tabIdx)}
        hideSecondHeader={hideSecondHeader}
      /> }
      <Content show={tab===0} />
      <Footer />
    </Layout>
  )
}

export default Card;
