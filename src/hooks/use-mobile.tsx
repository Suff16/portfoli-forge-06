import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768; // Breakpoint untuk mobile (di bawah 768px)

export function useIsMobile(): boolean {
  // State diinisialisasi dengan nilai awal dari window.innerWidth
  // Ini mencegah error saat rendering di sisi server (SSR) jika window tidak tersedia
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    return window.innerWidth < MOBILE_BREAKPOINT;
  });

  useEffect(() => {
    // Pastikan kode ini hanya berjalan di sisi client (browser)
    if (typeof window === 'undefined') {
      return;
    }

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // 1. Terima 'event' sebagai argumen dengan tipe MediaQueryListEvent
    const onChange = (event: MediaQueryListEvent) => {
      // 2. Gunakan event.matches untuk mendapatkan status boolean (true jika cocok, false jika tidak)
      setIsMobile(event.matches);
    };

    // Gunakan addEventListener dengan fungsi onChange yang sudah benar
    mql.addEventListener("change", onChange);
    
    // Set nilai awal saat komponen pertama kali dimuat, untuk sinkronisasi
    setIsMobile(mql.matches);

    // Cleanup listener saat komponen di-unmount
    return () => mql.removeEventListener("change", onChange);
  }, []); // Dependency array kosong agar hanya berjalan sekali saat mount

  return isMobile;
}