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
          justifyContent: "center",
          background: "#0B0F0E",
          padding: "0 90px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: "#10B981",
            opacity: 0.12,
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#10B981",
            marginBottom: 28,
          }}
        >
          Full-Stack Developer · Lahore, Pakistan
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 82,
            fontWeight: 700,
            color: "#F4F6F5",
            lineHeight: 1.1,
            letterSpacing: -2,
            maxWidth: 900,
          }}
        >
          I build software that businesses actually rely on.
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 44,
            fontSize: 28,
            color: "#94A3A0",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#10B981",
            }}
          />
          Hassan Shafiq
        </div>
      </div>
    ),
    { ...size }
  );
}
