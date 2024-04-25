import { reactive } from "vue";

export const store =reactive ({
    searchText:'',
    foundMovies: [],
    moviesGenres: [],
    foundSeries: [],
});