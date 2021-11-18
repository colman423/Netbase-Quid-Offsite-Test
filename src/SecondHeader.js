import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'
import Button from './Button';
import Tab from './Tab';
import TabContainer from './TabContainer';

const Layout = styled('div')`
  display: flex;
  background-color: #4e4a4a;
`;

const StyledTabContainer = styled(TabContainer)`
  flex: auto 1 0;
  color: #ffffff;

  .tab{
    width: 40px;
    color: white;
    padding: 8px 4px;
    text-transform: uppercase;
    font-weight: 700;

    &.active {
      background-color: white;
      color: #4e4a4a;
    }
  }
`;

const HideButton = styled(Button)`
  flex: 48px 0 1;
  border-left: 1px solid #ffffff33;
  color: #ffffff;
  font-weight: 600;
  text-transform: uppercase;
`;

function SecondHeader(props) {
  const { tabIdx, onTabClick } = props;
  
  return (
    <Layout>
      <StyledTabContainer tabCnt={tabIdx} onTabClick={onTabClick}>
        <Tab tabIdx={0}>
          All
        </Tab>
        <Tab tabIdx={1}>
          <FontAwesomeIcon icon={faTwitter} />
        </Tab>
        <Tab tabIdx={2}>
          <FontAwesomeIcon icon={faFacebook} />
        </Tab>
        <Tab tabIdx={3}>
          <FontAwesomeIcon icon={faInstagram} />
        </Tab>
        <Tab tabIdx={4}>
          <FontAwesomeIcon icon={faYoutube} />
        </Tab>
      </StyledTabContainer>
      <HideButton onClick={props.hideSecondHeader}>Hide</HideButton>
    </Layout>
  )
}

export default SecondHeader;
