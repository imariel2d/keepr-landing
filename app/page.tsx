"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { Icon, LogoMark, paths } from "./components/icons";
import { mockItems, features, steps, faqs } from "./content";
import { siteConfig } from "./config";

export default function Page() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as
        | "light"
        | "dark"
        | null) || "light";
    setTheme(current);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("keepr-theme", next);
    } catch {}
    setTheme(next);
  }

  function copyCmd() {
    try {
      navigator.clipboard.writeText("docker compose up -d");
    } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  // Shared style objects -------------------------------------------------
  const navLink: CSSProperties = {
    color: "var(--text-secondary)",
    fontWeight: 600,
    fontSize: 14,
    padding: "8px 12px",
    borderRadius: "var(--radius-md)",
  };
  const eyebrow: CSSProperties = {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--accent)",
    marginBottom: 12,
  };
  const footLink: CSSProperties = {
    color: "var(--text-secondary)",
    fontWeight: 600,
    fontSize: 14,
  };

  return (
    <div>
      {/* NAV */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background:
            "color-mix(in srgb, var(--surface-app) 88%, transparent)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <nav
          aria-label="Primary"
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "14px 24px",
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <a
            href="#top"
            aria-label="Keepr home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "var(--text-primary)",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 20,
              letterSpacing: "-0.02em",
            }}
          >
            <LogoMark size={28} />
            <span>Keepr</span>
          </a>
          <div
            className="kp-navlinks"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              marginLeft: 12,
            }}
          >
            <a href="#features" style={navLink}>Features</a>
            <a href="#how" style={navLink}>How it works</a>
            <a href="#selfhost" style={navLink}>Self-host</a>
            <a href="#faq" style={navLink}>FAQ</a>
          </div>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              style={{
                width: 40,
                height: 40,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--surface-card)",
                border: "1px solid var(--border-default)",
                borderRadius: "var(--radius-md)",
                color: "var(--text-secondary)",
                cursor: "pointer",
              }}
            >
              <Icon paths={theme === "dark" ? paths.sun : paths.moon} />
            </button>
            <a
              href={siteConfig.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: 40,
                padding: "0 18px",
                background: "var(--accent)",
                color: "var(--text-on-brand)",
                fontWeight: 700,
                fontSize: 14,
                borderRadius: "var(--radius-md)",
                boxShadow: "var(--shadow-xs)",
              }}
            >
              Try the demo
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* HERO */}
        <section
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "clamp(48px,7vw,88px) 24px 40px",
            display: "flex",
            flexWrap: "wrap",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div style={{ flex: "1 1 380px", minWidth: "min(100%,380px)" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--surface-sunken)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-secondary)",
                fontWeight: 600,
                fontSize: 13,
                padding: "6px 12px",
                borderRadius: "var(--radius-full)",
                marginBottom: 22,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "var(--teal-500)",
                }}
              />
              Open source · self-hostable
            </div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(38px,5.4vw,60px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                margin: "0 0 20px",
                textWrap: "balance",
              }}
            >
              Your files, your storage,{" "}
              <span style={{ color: "var(--accent)" }}>your rules.</span>
            </h1>
            <p
              style={{
                fontSize: "clamp(17px,1.6vw,20px)",
                color: "var(--text-secondary)",
                margin: "0 0 32px",
                maxWidth: "34ch",
                textWrap: "pretty",
              }}
            >
              Keepr is a private, self-hostable file &amp; media store — your
              own Drive that lives in your own object storage bucket.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                alignItems: "center",
              }}
            >
              <a
                href={siteConfig.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  height: 52,
                  padding: "0 26px",
                  background: "var(--accent)",
                  color: "var(--text-on-brand)",
                  fontWeight: 700,
                  fontSize: 16,
                  borderRadius: "var(--radius-md)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                Try the demo →
              </a>
              <a
                href="https://github.com/imariel2d/keepr"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  height: 52,
                  padding: "0 22px",
                  background: "var(--surface-card)",
                  color: "var(--text-primary)",
                  fontWeight: 700,
                  fontSize: 16,
                  border: "1px solid var(--border-default)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <Icon paths={paths.star} size={18} /> Star on GitHub
              </a>
            </div>
            <p
              style={{
                fontSize: 13,
                color: "var(--text-tertiary)",
                margin: "20px 0 0",
              }}
            >
              No credit card. Invite-gated signup. Private by default.
            </p>
          </div>

          {/* MOCKUP */}
          <div
            style={{
              flex: "1 1 420px",
              minWidth: "min(100%,340px)",
              animation: "floaty 7s var(--ease) infinite",
            }}
          >
            <div
              role="img"
              aria-label="Keepr app showing a folder grid and a storage quota meter at 3.1 gigabytes of 5 used"
              style={{
                background: "var(--surface-card)",
                border: "1px solid var(--border-default)",
                borderRadius: "var(--radius-xl)",
                boxShadow: "var(--shadow-lg)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 16px",
                  borderBottom: "1px solid var(--border-subtle)",
                  background: "var(--surface-card)",
                }}
              >
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#F2635A" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#E9B44C" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#5FB98E" }} />
                <div
                  style={{
                    marginLeft: 12,
                    flex: 1,
                    height: 24,
                    borderRadius: "var(--radius-full)",
                    background: "var(--surface-sunken)",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 12px",
                    fontSize: 12,
                    color: "var(--text-tertiary)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  keepr.yourdomain.dev
                </div>
              </div>
              <div style={{ display: "flex", minHeight: 300 }}>
                <aside
                  style={{
                    width: 132,
                    borderRight: "1px solid var(--border-subtle)",
                    padding: "16px 12px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 10px",
                      borderRadius: "var(--radius-md)",
                      background: "var(--accent-subtle)",
                      color: "var(--accent-subtle-text)",
                      fontWeight: 700,
                      fontSize: 13,
                    }}
                  >
                    <Icon paths={paths.folder} size={16} sw={1.8} /> My files
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 10px",
                      borderRadius: "var(--radius-md)",
                      color: "var(--text-secondary)",
                      fontWeight: 600,
                      fontSize: 13,
                    }}
                  >
                    <Icon paths={paths.clock} size={16} sw={1.8} /> Recent
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 10px",
                      borderRadius: "var(--radius-md)",
                      color: "var(--text-secondary)",
                      fontWeight: 600,
                      fontSize: 13,
                    }}
                  >
                    <Icon paths={paths.trash} size={16} sw={1.8} /> Trash
                  </div>
                  <div style={{ marginTop: "auto", paddingTop: 14 }}>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: "var(--text-tertiary)",
                        marginBottom: 7,
                        letterSpacing: "0.02em",
                      }}
                    >
                      3.1 GB of 5 GB
                    </div>
                    <div
                      style={{
                        height: 7,
                        borderRadius: "var(--radius-full)",
                        background: "var(--surface-sunken)",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: "62%",
                          height: "100%",
                          borderRadius: "var(--radius-full)",
                          background:
                            "linear-gradient(90deg,var(--teal-500),var(--brand-500))",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        fontSize: 10.5,
                        color: "var(--text-tertiary)",
                        marginTop: 6,
                      }}
                    >
                      1.9 GB remaining
                    </div>
                  </div>
                </aside>
                <div
                  style={{
                    flex: 1,
                    padding: 16,
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill,minmax(84px,1fr))",
                    gridAutoRows: "min-content",
                    gap: 12,
                    alignContent: "start",
                  }}
                >
                  {mockItems.map((it) => (
                    <div
                      key={it.name}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 8,
                        padding: "12px 6px",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--border-subtle)",
                        background: "var(--surface-card)",
                      }}
                    >
                      <div
                        style={{
                          width: 34,
                          height: 34,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: it.color,
                        }}
                      >
                        <Icon paths={it.iconPaths} size={30} sw={1.6} />
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "var(--text-secondary)",
                          fontWeight: 600,
                          maxWidth: "100%",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {it.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POSITIONING STRIP */}
        <section
          style={{ maxWidth: 1180, margin: "0 auto", padding: "8px 24px 24px" }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px 28px",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-tertiary)",
              fontSize: 13.5,
              fontWeight: 600,
            }}
          >
            <span>S3-compatible storage</span>
            <span aria-hidden="true">·</span>
            <span>Cloudflare R2 · MinIO · AWS</span>
            <span aria-hidden="true">·</span>
            <span>Docker deploy</span>
            <span aria-hidden="true">·</span>
            <span>ASP.NET Core + Angular</span>
          </div>
        </section>

        {/* FEATURES */}
        <section
          id="features"
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "clamp(56px,7vw,88px) 24px",
            scrollMarginTop: 72,
          }}
        >
          <div style={{ maxWidth: 640, marginBottom: 48 }}>
            <div style={eyebrow}>Features</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(28px,3.6vw,40px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                margin: "0 0 14px",
              }}
            >
              Everything a personal drive needs — and nothing it doesn&apos;t.
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "var(--text-secondary)",
                margin: 0,
                textWrap: "pretty",
              }}
            >
              The features below are what ships today. No fluff, no lock-in.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
              gap: 20,
            }}
          >
            {features.map((f) => (
              <div
                key={f.title}
                style={{
                  background: "var(--surface-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-lg)",
                  padding: 26,
                  boxShadow: "var(--shadow-xs)",
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "var(--radius-md)",
                    background: f.tint,
                    color: f.ink,
                    marginBottom: 18,
                  }}
                >
                  <Icon paths={f.iconPaths} size={24} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 18,
                    margin: "0 0 8px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: 14.5,
                    color: "var(--text-secondary)",
                    margin: 0,
                    textWrap: "pretty",
                  }}
                >
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="how"
          style={{
            background: "var(--surface-canvas)",
            borderTop: "1px solid var(--border-subtle)",
            borderBottom: "1px solid var(--border-subtle)",
            scrollMarginTop: 72,
          }}
        >
          <div
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              padding: "clamp(56px,7vw,88px) 24px",
            }}
          >
            <div style={{ maxWidth: 640, marginBottom: 48 }}>
              <div style={eyebrow}>How it works</div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(28px,3.6vw,40px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                Running your own Keepr takes three steps.
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
                gap: 20,
              }}
            >
              {steps.map((s) => (
                <div
                  key={s.n}
                  style={{
                    background: "var(--surface-card)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-lg)",
                    padding: 28,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "var(--radius-full)",
                      background: "var(--accent)",
                      color: "var(--text-on-brand)",
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: 17,
                      marginBottom: 18,
                    }}
                  >
                    {s.n}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 18,
                      margin: "0 0 8px",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14.5,
                      color: "var(--text-secondary)",
                      margin: 0,
                      textWrap: "pretty",
                    }}
                  >
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SELF-HOST BAND */}
        <section
          id="selfhost"
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "clamp(56px,7vw,88px) 24px",
            scrollMarginTop: 72,
          }}
        >
          <div
            style={{
              background: "var(--gray-900)",
              borderRadius: "var(--radius-xl)",
              padding: "clamp(32px,5vw,56px)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 40,
                alignItems: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div style={{ flex: "1 1 340px", minWidth: "min(100%,320px)" }}>
                <div
                  style={{
                    ...eyebrow,
                    color: "var(--brand-300)",
                    marginBottom: 14,
                  }}
                >
                  Open source
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "clamp(26px,3.4vw,38px)",
                    lineHeight: 1.12,
                    letterSpacing: "-0.02em",
                    margin: "0 0 16px",
                    color: "#F4EFE7",
                  }}
                >
                  Self-host it in one command. No vendor lock-in.
                </h2>
                <p
                  style={{
                    fontSize: 16,
                    color: "var(--gray-300)",
                    margin: "0 0 28px",
                    maxWidth: "44ch",
                    textWrap: "pretty",
                  }}
                >
                  Deploy with Docker, point it at your own S3-compatible
                  bucket, and you own the whole stack — code, data, and storage.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 14,
                    alignItems: "center",
                  }}
                >
                  <a
                    href={siteConfig.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      height: 48,
                      padding: "0 22px",
                      background: "var(--accent)",
                      color: "var(--text-on-brand)",
                      fontWeight: 700,
                      fontSize: 15,
                      borderRadius: "var(--radius-md)",
                    }}
                  >
                    Try the hosted demo
                  </a>
                </div>
              </div>
              <div style={{ flex: "1 1 320px", minWidth: "min(100%,300px)" }}>
                <div
                  style={{
                    background: "var(--gray-950)",
                    border: "1px solid var(--gray-800)",
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 14px",
                      borderBottom: "1px solid var(--gray-800)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 12,
                        color: "var(--gray-400)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      bash
                    </span>
                    <button
                      type="button"
                      onClick={copyCmd}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        background: "transparent",
                        border: "1px solid var(--gray-700)",
                        color: "var(--gray-300)",
                        fontSize: 12,
                        fontWeight: 600,
                        padding: "5px 10px",
                        borderRadius: "var(--radius-sm)",
                        cursor: "pointer",
                      }}
                    >
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <pre
                    style={{
                      margin: 0,
                      padding: 20,
                      fontFamily: "var(--font-mono)",
                      fontSize: 13.5,
                      lineHeight: 1.8,
                      color: "#F4EFE7",
                      overflowX: "auto",
                    }}
                  >
                    <span style={{ color: "var(--gray-500)" }}>
                      # clone, configure your bucket, then:
                    </span>
                    {"\n"}
                    <span style={{ color: "var(--teal-300)" }}>docker</span>{" "}
                    compose up -d
                  </pre>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 20,
                    marginTop: 18,
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ color: "var(--gray-300)", fontSize: 13 }}>
                    <span style={{ color: "#F4EFE7", fontWeight: 700 }}>
                      Docker
                    </span>{" "}
                    deploy
                  </div>
                  <div style={{ color: "var(--gray-300)", fontSize: 13 }}>
                    <span style={{ color: "#F4EFE7", fontWeight: 700 }}>
                      Your
                    </span>{" "}
                    bucket
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                right: -80,
                top: -80,
                width: 280,
                height: 280,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(42,157,143,0.30), transparent 70%)",
              }}
            />
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          style={{
            maxWidth: 820,
            margin: "0 auto",
            padding: "clamp(40px,6vw,72px) 24px",
            scrollMarginTop: 72,
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(28px,3.6vw,40px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: "0 0 32px",
              textAlign: "center",
            }}
          >
            Questions, answered.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((q) => (
              <details
                key={q.q}
                style={{
                  background: "var(--surface-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                }}
              >
                <summary
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "20px 24px",
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 16.5,
                    color: "var(--text-primary)",
                  }}
                >
                  {q.q}
                  <span
                    aria-hidden="true"
                    style={{
                      flex: "none",
                      color: "var(--text-tertiary)",
                      fontSize: 22,
                      fontWeight: 400,
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </summary>
                <div
                  style={{
                    padding: "0 24px 22px",
                    fontSize: 15,
                    color: "var(--text-secondary)",
                    textWrap: "pretty",
                  }}
                >
                  {q.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CLOSING CTA */}
        <section
          id="demo"
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "clamp(40px,6vw,64px) 24px clamp(64px,8vw,96px)",
            scrollMarginTop: 72,
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(135deg, var(--accent-subtle), var(--surface-canvas))",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-xl)",
              padding: "clamp(40px,6vw,72px) 32px",
              textAlign: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <LogoMark size={48} />
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(30px,4vw,46px)",
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                margin: "18px auto 16px",
                maxWidth: "18ch",
                textWrap: "balance",
              }}
            >
              Keep your files where they belong — with you.
            </h2>
            <p
              style={{
                fontSize: 18,
                color: "var(--text-secondary)",
                margin: "0 auto 32px",
                maxWidth: "44ch",
                textWrap: "pretty",
              }}
            >
              Spin up the hosted demo in seconds, or self-host your own in one
              command.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                justifyContent: "center",
              }}
            >
              <a
                href={siteConfig.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  height: 54,
                  padding: "0 30px",
                  background: "var(--accent)",
                  color: "var(--text-on-brand)",
                  fontWeight: 700,
                  fontSize: 17,
                  borderRadius: "var(--radius-md)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                Try the demo / Sign up →
              </a>
              <a
                href="https://github.com/imariel2d/keepr"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  height: 54,
                  padding: "0 24px",
                  background: "var(--surface-card)",
                  color: "var(--text-primary)",
                  fontWeight: 700,
                  fontSize: 17,
                  border: "1px solid var(--border-default)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <Icon paths={paths.star} size={18} /> View on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid var(--border-subtle)",
          background: "var(--surface-canvas)",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "36px 24px",
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 18,
            }}
          >
            <LogoMark size={28} /> Keepr
          </div>
          <nav
            aria-label="Footer"
            style={{ display: "flex", flexWrap: "wrap", gap: "8px 22px" }}
          >
            <a href="#" style={footLink}>GitHub</a>
            <a href="#" style={footLink}>Docs</a>
            <a href="#" style={footLink}>Terms</a>
            <a href="#" style={footLink}>Privacy</a>
          </nav>
          <p
            style={{
              color: "var(--text-tertiary)",
              fontSize: 13,
              margin: 0,
              flexBasis: "100%",
              textAlign: "center",
              paddingTop: 8,
              borderTop: "1px solid var(--border-subtle)",
            }}
          >
            Self-hosted &amp; open source · Your files, your storage, your rules.
          </p>
        </div>
      </footer>
    </div>
  );
}
