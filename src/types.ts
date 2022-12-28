export interface LeftSectionDataType {
  title: string;
  date: string;
  position: string;
  company: string;
  description: { text: string; textLink?: string; url?: string }[];
}

export interface RightSectionDataType {
  title: string;
  description?: {
    subtitle?: string;
    text?: string;
    rating?: number;
    ratingText?: string;
  }[];
  skills?: string[];
  languages?: string[];
}
