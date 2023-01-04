import styled from 'styled-components';

export const MainWrapper = styled.main`
  display: flex;
  padding: 0;
  flex-wrap: nowrap;
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ListItemCustom = styled.li`
  padding: 0px;
  margin-left: 15px;
`;
