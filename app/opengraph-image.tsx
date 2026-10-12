import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#111214",
          color: "#F4F0E8",
          padding: 72,
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ width: 90, height: 1, background: "#C6A66B" }} />
          <div style={{ fontSize: 92, lineHeight: 0.95 }}>{siteConfig.name}</div>
          <div style={{ fontSize: 38, color: "#C6A66B" }}>{siteConfig.role}</div>
          <div style={{ fontSize: 30, color: "#B9B5AD", maxWidth: 720 }}>{siteConfig.tagline}</div>
        </div>
        <div
          style={{
            width: 260,
            height: 260,
            border: "2px solid #C6A66B",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 112,
            color: "#C6A66B",
          }}
        >
          SM
        </div>
      </div>
    ),
    size,
  );
}
