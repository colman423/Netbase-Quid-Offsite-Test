import styled from 'styled-components';
import Card from './Card';

const Layout = styled('div')`
  text-align: center;
  padding-top: calc( 50vh - 150px );
`

function App() {
  return (
    <Layout>
      <Card />
    </Layout>
  );
}

export default App;
