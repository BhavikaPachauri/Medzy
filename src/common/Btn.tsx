"use client";

type BtnProps = {
  title?: string;
  text?: string;
  bg?: string;
  border?: string;
  hover?: string;
  onClick?: () => void;
  as?: "button" | "span";
  type?: "button" | "submit" | "reset";
};

export default function LearnMoreButton({
  title,
  text,
  bg,
  border,
  hover,
  onClick,
  as = "button",
  type = "button",
}: BtnProps) {
  const className = `${bg} ${text || "text-white"} ${border || "border-[#017d77]"} group relative inline-flex items-center gap-2 overflow-hidden rounded-full border px-6 py-2 font-medium transition-transform duration-200 ease-out hover:-translate-y-0.5 focus-visible:-translate-y-0.5`;

  const overlay = (
    <span
      aria-hidden="true"
      className={`${hover} absolute inset-0 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100`}
    />
  );

  const label = <span className="relative z-10">{title}</span>;

  if (as === "span") {
    return (
      <span className={className}>
        {overlay}
        {label}
      </span>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {overlay}
      {label}
    </button>
  );
}
