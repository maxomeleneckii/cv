import { LeftSection } from './LeftSection';
import { RightSection } from './RightSection';
import { MainWrapper } from '../styledComponents/styledComponents';

export const Main = () => {
  return (
    <>
      <MainWrapper>
        <LeftSection />
        <RightSection />
      </MainWrapper>
    </>
  );
};
