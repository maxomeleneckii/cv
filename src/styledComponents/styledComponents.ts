import styled from 'styled-components';

export const MainWrapper = styled.main`
  display: flex;
  padding: 0;
  flex-wrap: nowrap;
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const SectionLeft = styled.section`
  display: flex;
  flex-direction: column;
`;

export const SectionRight = styled.section`
  display: flex;
  flex-direction: column;
  flex: 0 0 320px;
  background-color: #f4f4f4;
  @media (max-width: 767px) {
    flex: 0 0 100%;
  }
`;

export const ListItemCustom = styled.li`
  padding: 0px;
  margin-left: 15px;
`;
