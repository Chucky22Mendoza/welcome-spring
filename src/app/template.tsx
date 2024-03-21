import PageTransition from "@/components/PageTransition";
import Player from "@/components/Player";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageTransition>
      {children}
      <Player />
    </PageTransition>
  );
}
