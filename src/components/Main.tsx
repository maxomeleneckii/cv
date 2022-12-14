import { Stack } from '@mui/material';
import styled from 'styled-components';

const MainWrapper = styled.main`
  display: flex;
  padding: 24px;
`;
const Section = styled.section``;

export const Main = () => {
  return (
    <>
      <MainWrapper>
        <Section>
          <Stack direction="row" spacing={2}>
            {/* <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item> */}
          </Stack>
        </Section>
        <Section>2</Section>
      </MainWrapper>
    </>
  );
};
