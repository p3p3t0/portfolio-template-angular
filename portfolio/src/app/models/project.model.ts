export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
  category: string;
}

