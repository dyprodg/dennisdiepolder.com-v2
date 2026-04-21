import Link from "next/link";

export const metadata = {
  title: "Page Not Found — Dennis Diepolder",
  description: "The page you are looking for could not be found.",
  robots: { index: false, follow: false },
};

export default function RootNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          background: "#09090b",
          color: "#fafafa",
          padding: "24px",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 520 }}>
          <p
            style={{
              color: "#10b981",
              fontSize: 14,
              marginBottom: 16,
              letterSpacing: "0.05em",
            }}
          >
            404
          </p>
          <h1
            style={{
              fontSize: 40,
              fontWeight: 700,
              marginBottom: 16,
              lineHeight: 1.1,
            }}
          >
            Page not found
          </h1>
          <p
            style={{
              color: "#a1a1aa",
              fontSize: 16,
              marginBottom: 32,
              lineHeight: 1.6,
            }}
          >
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              background: "#10b981",
              color: "#fff",
              borderRadius: 6,
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            Go home
          </Link>
        </div>
      </body>
    </html>
  );
}
