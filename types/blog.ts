export interface Blog {
  id: string;
  title: string;
  description: string;
  publishedOn: string;
  isDeleted: boolean;
  image: string;
  author: string;
  richText: string;
}

export interface BlogComponentInterface {
  blogData: Blog;
}
