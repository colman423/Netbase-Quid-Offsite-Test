import { Fragment } from 'react';
import styled from 'styled-components';
import Bar from './Bar';
import TERMS from './terms.json';

const Layout = styled('div')`
  flex: auto 1 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const TopTerms = styled('div')`
  color: #9d9d9d;
  font-weight: 600;
  text-align: left;
  padding: 4px;
  font-size: 12px;
  text-transform: uppercase;
`;

const Scrollable = styled('div')`
  flex: auto 1 1;
  overflow-y: auto;
  padding: 0px 4px 4px 4px;
`;

const Row = styled('div')`
  display: flex;
  padding: 8px 6px;
  font-size: 12px;
`;

const Thead = styled(Row)`
  border-bottom: 2px solid #9d9d9d;
  text-transform: uppercase;
  padding-top: 4px;
  padding-bottom: 4px;
`;

const Tbody = styled(Row)`
  font-weight: 500;
`

const Terms = styled('div')`
  flex: 80px 0 0;
  text-align: left;
`;

const Chart = styled('div')`
  flex: auto 1 1;
`;

const Posts = styled('div')`
  flex: 80px 0 0;
  text-align: right;
`;



function Content() {
  return (
    <Layout>
      <TopTerms>Top Terms</TopTerms>
      <Scrollable>
        <Thead>
          <Terms>Terms</Terms>
          <Chart>% of Total Posts</Chart>
          <Posts># of Posts</Posts>
        </Thead>
        { TERMS.map( (term, idx) => (
          <Tbody key={idx}>
            <Terms>
              {term.name}
            </Terms>
            <Chart>
              <Bar progress={term.count} />
            </Chart>
            <Posts>
              {term.count}
            </Posts>
          </Tbody>
        ))}

      </Scrollable>

    </Layout>
  )
}

export default Content;
