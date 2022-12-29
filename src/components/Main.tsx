import { useMediaQuery } from '@mui/material';
import { LeftSection } from './LeftSection';
import { RightSection } from './RightSection';
import { MainWrapper } from './styledComponents/styledComponents';

export const Main = () => {
  const matches = useMediaQuery('(max-width:767px)');
  return (
    <>
      <MainWrapper style={{ flexWrap: `${matches ? 'wrap' : 'nowrap'}` }}>
        <LeftSection />
        <RightSection />
      </MainWrapper>
    </>
  );
};
