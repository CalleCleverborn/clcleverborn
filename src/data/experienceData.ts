import { DiCss3, DiGit, DiHtml5, DiJsBadge, DiMysql, DiReact, DiPhp, DiSass, DiNodejsSmall } from 'react-icons/di';
import { ExperienceItem } from '../models/types'; // Importing the type

export const experienceData: ExperienceItem[] = [
  { id: 1, Icon: DiHtml5, label: 'HTML' },
  { id: 2, Icon: DiCss3, label: 'CSS' },
  { id: 3, Icon: DiSass, label: 'Sass'},
  { id: 4, Icon: DiJsBadge, label: 'JavaScript' },
  { id: 5, Icon: DiReact, label: 'React' },
  { id: 6, Icon: DiMysql, label: 'MySQL' },
  { id: 7, Icon: DiGit, label: 'Git' },
  { id: 8, Icon: DiPhp, label: 'PHP'},
  { id: 9, Icon: DiNodejsSmall, label: 'Node.js'}
];

