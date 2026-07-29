import { paths } from "./components/icons";

export type MockItem = { name: string; color: string; iconPaths: string[] };
export type Feature = {
  title: string;
  body: string;
  tint: string;
  ink: string;
  iconPaths: string[];
};
export type Step = { n: string; title: string; body: string };
export type Faq = { q: string; a: string };

export const mockItems: MockItem[] = [
  { name: "Folder", color: "var(--teal-500)", iconPaths: paths.folder },
  { name: "Photos", color: "var(--teal-500)", iconPaths: paths.folder },
  { name: "shot.png", color: "var(--brand-500)", iconPaths: paths.image },
  { name: "notes.pdf", color: "var(--red-500)", iconPaths: paths.pdf },
  { name: "clip.mp4", color: "var(--amber-600)", iconPaths: paths.video },
  { name: "song.mp3", color: "var(--teal-600)", iconPaths: paths.audio },
];

export const features: Feature[] = [
  {
    title: "Resumable uploads",
    body: "Presigned S3 multipart uploads send bytes straight from your browser to your bucket — large files resume instead of starting over.",
    tint: "var(--accent-subtle)",
    ink: "var(--accent-subtle-text)",
    iconPaths: paths.upload,
  },
  {
    title: "5 GB quota, live meter",
    body: "Store any file type up to a per-user 5 GB quota, with a live \u201cspace remaining\u201d meter that updates as you go.",
    tint: "var(--teal-50)",
    ink: "var(--teal-700)",
    iconPaths: paths.gauge,
  },
  {
    title: "Nested folders",
    body: "Create, move, and rename folders freely. Folders are metadata-only, so reorganizing costs zero storage calls.",
    tint: "var(--accent-subtle)",
    ink: "var(--accent-subtle-text)",
    iconPaths: paths.folder,
  },
  {
    title: "In-browser preview",
    body: "Open images, PDFs, video and audio full-screen, with keyboard navigation — no downloads required.",
    tint: "var(--teal-50)",
    ink: "var(--teal-700)",
    iconPaths: paths.eye,
  },
  {
    title: "10-day Trash",
    body: "Delete is a soft delete. Restore anything within 10 days; after that it\u2019s purged automatically.",
    tint: "var(--accent-subtle)",
    ink: "var(--accent-subtle-text)",
    iconPaths: paths.trash,
  },
  {
    title: "Private by design",
    body: "A private bucket, presigned downloads, invite-gated signup, and revocable sliding sessions — no public links.",
    tint: "var(--teal-50)",
    ink: "var(--teal-700)",
    iconPaths: paths.shield,
  },
  {
    title: "Admin console",
    body: "Manage roles, set per-account quotas, and review an audit trail for the self-hosted instance you actually run.",
    tint: "var(--accent-subtle)",
    ink: "var(--accent-subtle-text)",
    iconPaths: paths.star,
  },
];

export const steps: Step[] = [
  {
    n: "1",
    title: "Deploy with Docker",
    body: "Run Keepr on your own host or a $6 DigitalOcean droplet — a single Docker Compose stack, no external services to wire up.",
  },
  {
    n: "2",
    title: "Point it at your bucket",
    body: "Add credentials for any S3-compatible bucket — Cloudflare R2, MinIO, or AWS S3. Your files never leave your storage.",
  },
  {
    n: "3",
    title: "Invite users & upload",
    body: "Send invite-gated signups from the admin console, then start uploading. Every file is owner-scoped and private.",
  },
];

export const faqs: Faq[] = [
  {
    q: "Is it really free?",
    a: "Yes. Keepr is open source — self-host it for free, forever. The hosted demo is there to try before you deploy your own.",
  },
  {
    q: "Where are my files stored?",
    a: "In your own S3-compatible bucket (Cloudflare R2, MinIO, or AWS S3). The bucket stays private; downloads only work through short-lived presigned links.",
  },
  {
    q: "Can I invite others?",
    a: "Yes — Keepr is multi-user with invite-gated signup. The admin console lets you manage roles and set a per-account quota.",
  },
  {
    q: "Is there sharing?",
    a: "Not yet. Today every file is private to its owner. Shareable links are on the roadmap — coming soon, but not something we claim ships today.",
  },
];
