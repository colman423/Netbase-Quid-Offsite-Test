import Tab from './Tab';

function TabContainer(props) {
  const { tabCnt, onTabClick, children, ...others } = props;

  return (
    <div {...others}>
      {children.map( (child, idx) => {
        if( child && child.type === Tab ) {
          return <Tab key={idx} tabCnt={tabCnt} onTabClick={onTabClick} {...child.props} />
        }
        else return child;
      })}
    </div>
  )
}

export default TabContainer;
