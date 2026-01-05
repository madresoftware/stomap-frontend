export function Navigation() {
  return (
    <>
      {/* mobile */}
      <header className="block lg:hidden">
        <nav className="bg-blue-400 rounded-b-3xl fixed top-0 h-16 w-full mx-auto">
        </nav>
      </header>

      {/* desktop */}
      <header className="hidden lg:block">
        <div className="fixed inset-4 z-50 pointer-events-none rounded-3xl shadow-[0_0_0_100vmax_#991b1b]"></div>

        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[50] h-20 bg-[#991b1b] w-168 xl:w-250 rounded-b-3xl">

          <div className="absolute -left-6 top-0 w-6 h-6 bg-[radial-gradient(circle_at_0%_100%,transparent_1.5rem,#991b1b_1.5rem)]"></div>

          <div className="absolute -right-6 top-0 w-6 h-6 bg-[radial-gradient(circle_at_100%_100%,transparent_1.5rem,#991b1b_1.5rem)]"></div>

          <div className="flex justify-center items-center h-full gap-8">
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
          </div>
        </nav>
      </header>
    </>
  );
}