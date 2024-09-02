import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const { data: platforms } = useGenres();
  return platforms?.results.find((g) => g.id === id);
};

export default useGenre;
