import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
