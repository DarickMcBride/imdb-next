"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function NavBarItem({
  title,
  param,
}: {
  title: string;
  param: string;
}) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Link
          className={`hover:text-amber-600 font-semibold ${
            genre === param
              ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
              : ""
          }`}
          href={`/?genre=${param}`}
        >
          {title}
        </Link>
      </Suspense>
    </div>
  );
}
