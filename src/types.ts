export interface LeftSectionDataType {
  title: string;
  date: string;
  position: string;
  company: string;
  description: { text: string; textLink?: string; url?: string }[];
}

export interface RightSectionDataType {
  title: string;
  adress?: string;
  telegram?: string;
  email?: string;
  skype?: string;
  github?: string;
  discord?: string;
  skills?: string[];
  languages?: string[];
}
