import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keepr — Your files, your storage, your rules",
  description:
    "Keepr is an open-source, self-hostable personal file & media store. Your own private Drive that runs on your own S3-compatible bucket.",
  metadataBase: new URL("https://keepr.example.dev"),
  openGraph: {
    title: "Keepr — Your files, your storage, your rules",
    description:
      "An open-source, self-hostable file & media store that lives in your own object storage bucket.",
    type: "website",
  },
};

// Set the initial theme before paint to avoid a flash of the wrong color scheme.
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('keepr-theme');
    if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', t);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
