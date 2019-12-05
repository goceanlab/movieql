import { getMovies, getSuggestions, getMovie } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    suggestions: (_, { id }) => getSuggestions(id),
    movie: (_, { id }) => getMovie(id)
  }
};

export default resolvers;
