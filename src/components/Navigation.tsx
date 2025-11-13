import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, Code2, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Mencegah scroll di body saat menu mobile terbuka
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Logo />
            <DesktopNav />
            {/* Tombol pemicu sekarang diletakkan di luar MobileMenuDrawer */}
            <button
              className="md:hidden text-foreground z-50"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Buka Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Render komponen Side Drawer dan Backdrop-nya */}
      <MobileMenuDrawer isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </>
  );
};

// --- Sub-Components ---

const navLinks = [
  { name: "Beranda", path: "/" },
  { name: "Proyek", path: "/#projects" },
  { name: "Timeline", path: "/#timeline" },
];

const Logo = () => (
  <a href="/" className="flex items-center gap-2 group">
    <Code2 className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-12" />
    <span className="text-xl font-bold text-foreground">
      Yusuf Saputrah
    </span>
  </a>
);

const DesktopNav = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const getLinkClass = (path) => {
    const isActive = (path === '/' && location.pathname === '/' && location.hash === '') ||
      (path.startsWith('/#') && location.hash === path.substring(1));
    return `relative px-3 py-2 rounded-lg transition-colors duration-300 ${isActive
      ? "text-primary font-medium"
      : "text-muted-foreground hover:text-foreground"
      }`;
  };

  return (
    <nav className="hidden md:flex items-center gap-2">
      {navLinks.map((link) => (
        <a key={link.name} href={link.path} className={getLinkClass(link.path)}>
          {link.name}
        </a>
      ))}
      <div className="w-px h-6 bg-border mx-2"></div>
      <Button asChild>
        <a href="/#contact">Hubungi Saya</a>
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="rounded-full"
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </nav>
  );
};

// --- Komponen Baru untuk Mobile Menu ---

const MobileMenuDrawer = ({ isOpen, setIsOpen }) => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/* Backdrop (latar belakang redup) */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Panel Menu yang menggeser */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-background border-l border-border z-50 transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 flex justify-between items-center border-b border-border">
            <span className="font-semibold">Menu</span>
            <button onClick={() => setIsOpen(false)} aria-label="Tutup Menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col p-4 space-y-2 flex-grow">
            {[...navLinks, { name: 'Kontak', path: '/#contact' }].map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="px-4 py-3 text-lg font-medium text-muted-foreground hover:bg-muted rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="p-4 border-t border-border">
            <Button
              variant="ghost"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-full justify-start gap-2"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span>Ganti Tema</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;