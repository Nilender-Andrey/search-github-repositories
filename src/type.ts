export type SearchResultType = {
  id: number;
  name: string;
  html_url: string;
  visibility: string;
  forks: number;
  created_at: string;
};

export type ResponseDataType = {
  total_count: number;
  items: SearchResultType[];
};
