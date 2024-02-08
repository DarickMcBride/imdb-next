import React from "react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto p-3 space-y-4">
      <h1 className="text-2xl font-medium text-amber-600">About</h1>
      <h2 className="font-bold">Our Mission</h2>
      <p className="ml-4">
        At IMDb Clone, we’re passionate about cinema. Our mission is to provide
        a seamless and enjoyable experience for movie lovers, whether you’re
        looking for information about your favorite films, discovering new
        releases, or exploring classic gems.
      </p>
      <h2 className="font-bold">What Sets Us Apart</h2>
      <ul className="flex flex-col space-y-4 ml-4">
        <li>
          <b>Accurate and reliable movie data: </b>We take pride in sourcing our
          movie information from <strong>The Movie Database (TMDB)</strong>.
          TMDB is a trusted and authoritative platform, ensuring that you get
          the most reliable content. Whether it’s release dates, cast lists, or
          plot summaries, you can count on IMBd Clone to provide accurate
          details.
        </li>
        <li>
          <b>Comprehensive movie database: </b>Our extensive movie database
          covers a wide range of genres, languages, and eras. From Hollywood
          blockbusters to indie darlings, we’ve got it all.
        </li>
        <li>
          <b>User-friendly interface: </b>We’ve designed IMBd Clone with
          simplicity in mind. Navigate through movie details, cast and crew
          information, and user reviews effortlessly.
        </li>
        <li>
          <b>Powered by TMDB: </b>We leverage the power of The Movie Database
          (TMDB) API to bring you accurate and up-to-date information. TMDB is a
          trusted source for movie data, ensuring that you get the most reliable
          content.
        </li>
      </ul>
    </div>
  );
}
