export const parseUrl = (path) => {
  const url = new URL(`http://localhost:8080${path}`);
  return {
    searchFull: url.search,
    pathname: url.pathname,
    date: url.searchParams.get('date'),
    search: url.searchParams.get('search') || '',
  };
};
