type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  url: string;
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
};
