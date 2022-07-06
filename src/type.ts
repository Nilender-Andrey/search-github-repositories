export type SearchResultType = {
  id: number;
  name: string;
  html_url: string;
  visibility: string;
  forks: number;
};

export type ResponseDataType = {
  total_count: number;
  items: SearchResultType[];
};
