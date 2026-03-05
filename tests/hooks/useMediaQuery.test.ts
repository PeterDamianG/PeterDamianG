import { renderHook, act } from '@testing-library/preact';
import useMediaQuery from '@hooks/useMediaQuery';

describe('useMediaQuery', () => {
  test('returns false when matchMedia does not match (default mock)', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));
    expect(result.current).toBe(false);
  });

  test('returns true when matchMedia matches', () => {
    vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));
    expect(result.current).toBe(true);
    vi.restoreAllMocks();
  });

  test('updates when media query change event fires', () => {
    let changeHandler: ((e: MediaQueryListEvent) => void) | null = null;
    const addEventListenerMock = vi.fn((event, handler) => {
      if (event === 'change') changeHandler = handler as (e: MediaQueryListEvent) => void;
    });
    vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: addEventListenerMock,
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));
    expect(result.current).toBe(false);

    act(() => {
      changeHandler?.({ matches: true } as MediaQueryListEvent);
    });
    expect(result.current).toBe(true);

    vi.restoreAllMocks();
  });
});
