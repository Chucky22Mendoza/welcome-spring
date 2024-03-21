import Player from "@/components/Player";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Player />
    </>
  );
}
