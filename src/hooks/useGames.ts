import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string; // slug is basically a textual id, it's better to rely on the slug because it's not going to change
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform } []
    metacritic: number
    rating_top: number
  }

const useGames = (gameQuery: GameQuery) => 
  useData<Game>('/games', {
    params : {
      genres: gameQuery.genre?.id, 
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
    } }, 
    [gameQuery]
  )
       
 export default useGames