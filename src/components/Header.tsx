type HeaderProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  children: React.ReactNode;
};

export default function Header({ mobileMenuOpen, setMobileMenuOpen, children }: HeaderProps) {
  return (
    <header className="border-b border-zinc-200 sticky top-0 bg-white z-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Vaibhav</h1>
          <p className="text-zinc-600 text-sm mt-1">Software Developer</p>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-zinc-600 hover:text-zinc-900"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-200 px-6 py-4 bg-white">
          {children}
        </div>
      )}
    </header>
  );
}
