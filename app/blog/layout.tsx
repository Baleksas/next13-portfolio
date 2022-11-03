/* eslint-disable @next/next/no-head-element */

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
