import NavBarItem from "./NavBarItem";
import { Suspense } from "react";

export default function NavBar() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6">
      <Suspense fallback={<div>Loading...</div>}>
        <NavBarItem title="Trending" param="fetchTrending" />
        <NavBarItem title="Top Rated" param="fetchTopRated" />
      </Suspense>
    </div>
  );
}
