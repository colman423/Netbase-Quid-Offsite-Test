import styled from 'styled-components';
import cx from 'classnames';
import Button from './Button';

function Tab(props) {
  const { tabIdx, tabCnt, onTabClick, ...others } = props;
  return ( 
    <Button 
      className={cx('tab', {'active': tabIdx==tabCnt})} 
      onClick={() => onTabClick(tabIdx)} 
      {...others} 
    /> 
  )
}

export default Tab;
