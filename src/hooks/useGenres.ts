import { useQuery } from "@tanstack/react-query";
import genre from "../data/genre";
import ms from "ms";
import APIClient from "../services/api-client";
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genre,
  });

export default useGenres;
