import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#05060A",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "#7C3AED",
            opacity: 0.35,
            filter: "blur(10px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            right: -100,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: "#3B82F6",
            opacity: 0.3,
            filter: "blur(10px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 120,
            right: 160,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "#EC4899",
            opacity: 0.25,
            filter: "blur(10px)",
          }}
        />

        <div
          style={{
            display: "flex",
            padding: "10px 24px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#94A3B8",
            fontSize: 24,
            marginBottom: 32,
          }}
        >
          Available for work
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 108,
            fontWeight: 700,
            color: "#EC4899",
            letterSpacing: -2,
          }}
        >
          Hassan Shafiq
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 600,
            color: "#F8FAFC",
            marginTop: 16,
          }}
        >
          Full-Stack Developer &amp; Solo Founder
        </div>
      </div>
    ),
    { ...size }
  );
}
