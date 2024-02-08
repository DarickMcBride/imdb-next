import Link from "next/link";
import { Result } from "./Results";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }: { result: Result }) {
  const releaseDate = result.release_date
    ? new Date(result.release_date).toLocaleDateString()
    : null;
  const firstAirDate = result.first_air_date
    ? new Date(result.first_air_date).toLocaleDateString()
    : null;

  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          alt="movie card"
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-00"
        />
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="test-lg font-bold truncate">
            {result.title || result.name}
          </h2>
          <p className="flex items-center ">
            {releaseDate || firstAirDate}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
