import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm md:flex-row">
        <p className="opacity-70">© {new Date().getFullYear()} Evolution</p>
        <nav className="flex items-center gap-4 opacity-80">
          <Link href="/about">About</Link>
          <Link href="/mystable">MyStable</Link>
          <Link href="/own">Own</Link>
          <a href="/debug">Debug</a>
        </nav>
      </div>
    </footer>
  );
}