interface Movie {
  id: number;
  original_title: string;
}

export default function Movies({
  moviesData,
}: Readonly<{ moviesData: Movie[] }>) {
  return (
    <div>
      {moviesData.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.original_title}</h2>
        </div>
      ))}
    </div>
  );
}
