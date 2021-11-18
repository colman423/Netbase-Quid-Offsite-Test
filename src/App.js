import styled from 'styled-components';
import Card from './Card';

const Layout = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`

function App() {
  return (
    <Layout>
      <Card />
    </Layout>
  );
}

export default App;
