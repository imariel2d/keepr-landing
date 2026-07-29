import React from "react";

type IconProps = {
  paths: string[];
  size?: number;
  sw?: number;
};

/** Minimal stroke-based icon, matching the Cove/Keepr line style. */
export function Icon({ paths, size = 20, sw = 2 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

/** Keepr logo mark — geometric cloud, teal fill with a terracotta rim. */
export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Keepr"
    >
      <path
        d="M20 44a11 11 0 0 1-1.2-21.9A15 15 0 0 1 47 26.5 10 10 0 0 1 46 44H20Z"
        fill="#2A9D8F"
      />
      <path
        d="M18.8 22.1A15 15 0 0 1 47 26.5"
        stroke="#E8703A"
        strokeWidth={4}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// Reusable icon path sets ------------------------------------------------

export const paths = {
  sun: [
    "M12 3v1", "M12 20v1", "M4.2 4.2l.7.7", "M19.1 19.1l.7.7", "M3 12h1",
    "M20 12h1", "M4.2 19.8l.7-.7", "M19.1 4.9l.7-.7",
    "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
  ],
  moon: ["M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"],
  star: ["M12 3l2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8Z"],
  folder: ["M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"],
  clock: ["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z", "M12 7v5l3 2"],
  trash: [
    "M4 7h16", "M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",
    "M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13",
  ],
  image: ["M4 5h16v14H4Z", "M4 15l4-4 4 4 3-3 5 5", "M9 9a1.2 1.2 0 1 0 0 .01"],
  pdf: ["M6 3h8l4 4v14H6Z", "M14 3v4h4"],
  video: ["M4 5h16v14H4Z", "M10 9l5 3-5 3Z"],
  audio: ["M9 18V6l10-2v12", "M9 15a3 3 0 1 0 0 .01", "M19 13a3 3 0 1 0 0 .01"],
  upload: ["M12 16V4", "M7 9l5-5 5 5", "M4 20h16"],
  gauge: ["M12 3a9 9 0 1 0 9 9", "M12 12l5-5", "M12 3v3"],
  eye: [
    "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z",
    "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
  ],
  shield: ["M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6Z", "M9 12l2 2 4-4"],
};
