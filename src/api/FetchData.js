export const FetchData = async (setFetchData, setIsLoading) => {
  try {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=all');
    const resJson = await res.json();
    setFetchData(resJson);
    setIsLoading(false);
  } catch (err) {
    return err;
  }
};
