export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  category: string;
  readTime: number;
  imageUrl?: string;
}

