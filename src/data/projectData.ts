import { ProjectItem } from "../models/types";

import tvspelse from '../assets/tv-spel.se.jpg';
import bellanapoli from '../assets/bella-napoli.jpg';

export const projectData: ProjectItem[] = [
    {id: 1, title: "Tv-spel.se", url:"https://typescripttitanswebshop.netlify.app", imageUrl:tvspelse, description: "E-commerce demo site made with Typescript, and Sass"},
    {id: 2, title: "Bella Napoli", url:"https://restaurantbellanapoli.netlify.app", imageUrl:bellanapoli, description: "Restaurant booking demo site made with React, Typescript, Sass"},
]