import SmoothScroll from "@/components/SmoothScroll";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
