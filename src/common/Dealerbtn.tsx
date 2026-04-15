"use client";

import type { JSX } from "react";
import { Link } from "react-router-dom";

export default function LearnMoreButton({
  title,
  href,
}: {
  title?: string;
  href: string;
}): JSX.Element {
  return (
    <Link
      to={href}
      className="group relative inline-flex items-center overflow-hidden rounded-full bg-[#00a9ae] py-1 ps-2 pe-1 font-medium text-white transition-transform duration-200 ease-out hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 origin-left scale-x-0 bg-[linear-gradient(90deg,#8ac43f_0%,#86dc5e_100%)] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
      />
      <span className="relative z-10 flex items-center justify-center gap-2 px-4">
        {title}
      </span>
    </Link>
  );
}
