// Central site configuration for the Keepr landing page.
// Edit values here rather than hard-coding them throughout the UI.

export const siteConfig = {
  // Link to the Keepr source repository.
  repoUrl: "https://github.com/imariel2d/keepr",

  // Feature titles surfaced on the landing page (see app/content.ts for copy).
  features: [
    "Resumable uploads",
    "5 GB quota, live meter",
    "Nested folders",
    "In-browser preview",
    "10-day Trash",
    "Private by design",
    "Admin console",
  ],
} as const;
