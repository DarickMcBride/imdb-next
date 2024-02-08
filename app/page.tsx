import Results from "./components/Results";
import Movies from "./components/Results";

const API_KEY = process.env.API_KEY;

interface SearchParams {
  genre: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const genre = searchParams.genre || "fetchTrending";

  //fetch movie data
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  //convert to json
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  const moviesData = data.results;
  //console.log(moviesData);

  return (
    <div>
      <Results results={moviesData} />
    </div>
  );
}
