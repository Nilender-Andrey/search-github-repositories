import { ResponseDataType } from '../type';

export async function fetchSearch(request: string): Promise<ResponseDataType> {
  const url = `https://api.github.com/search/repositories?q=${request}&per_page=10&page=1`;

  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
    },
  });

  const data = await response.json();

  return data;
}
