import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export function useLenis(
  options: Partial<ConstructorParameters<typeof Lenis>[0]> = {},
) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      autoRaf: true,
      ...options,
    });

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return lenisRef.current;
}
