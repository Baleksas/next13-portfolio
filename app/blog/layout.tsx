/* eslint-disable @next/next/no-head-element */
"use client";

import { Box } from "@mui/system";
import ".././globals.css";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box width={4 / 5} m="auto" bgcolor={"red"}>
      <span>
        This is my blog page. I came up with blog idea when I was exploring
        Next.js 13 and wanted to document what I learn and visualize it to
        understand it in depth. I believe, that research and reflection are
        important skills for a Software Developer.
      </span>
      {children}
    </Box>
  );
}
