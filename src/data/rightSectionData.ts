import { RightSectionDataType } from '../types';

export const rightSectionData: RightSectionDataType[] = [
  {
    title: 'Personal info',
    description: [
      { subtitle: 'Adress', text: 'Brest, Republic of Belarus' },
      { subtitle: 'Telegram', text: '@max_omel' },
      { subtitle: 'E-mail', text: 'max.omeleneckii@gmail.com' },
      { subtitle: 'Skype', text: 'live:.cid.161c762aafc5cf35' },
      { subtitle: 'Github', text: 'github.com/maxomeleneckii' },
      { subtitle: 'Discord', text: 'Макс(maxomeleneckii)#2645' },
    ],
  },
  {
    title: 'Skills',
    description: [
      { text: 'HTML', rating: 4.5 },
      { text: 'CSS', rating: 4 },
      { text: 'JavaScript', rating: 3.5 },
      { text: 'TypeScript', rating: 3.5 },
      { text: 'React', rating: 3.5 },
    ],
  },
  {
    title: 'Languages',
    description: [
      { text: 'Russian', rating: 5, ratingText: 'Native' },
      { text: 'English', rating: 3, ratingText: 'B1' },
    ],
  },
];
