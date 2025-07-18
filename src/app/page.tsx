function NavLink({ children, href }: { children: React.ReactNode, href: string }) {
  return (
    <a href={href} className="text-lg font-semibold hover:text-primary hover:underline focus:underline focus:outline-none transition-all duration-300">
      {children}
    </a>
  );
}

function NavSeparator() {
  return (
    <div className="w-[2px] h-8 bg-foreground"></div>
  );
}

export default function Home() {
  return (
    <>
      <section className="w-full h-screen flex flex-col gap-16 justify-center items-center text-foreground">
        <div className="p-4 rounded-2xl border-4 border-foreground skew-2 shadow-2xl bg-white">
          <h1 className="text-6xl font-bold mb-4">unsupervised</h1>
          <p className="text-lg">hacking community</p>
        </div>

        <div className="space-x-8 flex items-center">
          <NavLink href="/about">about</NavLink>
          <NavSeparator />
          <NavLink href="/articles">articles</NavLink>
          <NavSeparator />
          <NavLink href="/contact">contact</NavLink>
        </div>
      </section>
    </>
  );
}
