export type CategoryNode = {
  id: number;
  title: string;
  slug: string;
  children?: CategoryNode[];
};
