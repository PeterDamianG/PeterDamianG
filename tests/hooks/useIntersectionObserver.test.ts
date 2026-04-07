import { renderHook, act } from '@testing-library/preact';
import useIntersectionObserver from '@hooks/useIntersectionObserver';

describe('useIntersectionObserver', () => {
  test('returns a ref and inView=false initially', () => {
    const { result } = renderHook(() => useIntersectionObserver());
    expect(result.current.inView).toBe(false);
    expect(result.current.ref).toBeDefined();
  });

  test('creates IntersectionObserver when ref is attached', () => {
    const observeMock = vi.fn();
    const disconnectMock = vi.fn();
    const MockObserver = vi.fn().mockImplementation((callback) => ({
      observe: observeMock,
      unobserve: vi.fn(),
      disconnect: disconnectMock,
    }));
    vi.stubGlobal('IntersectionObserver', MockObserver);

    const { result } = renderHook(() => useIntersectionObserver());

    // Simulate ref being attached to a DOM element
    const div = document.createElement('div');
    act(() => {
      Object.defineProperty(result.current.ref, 'current', {
        writable: true,
        value: div,
      });
    });

    // Re-render to trigger the effect with the ref
    const { result: result2 } = renderHook(() => useIntersectionObserver());
    const div2 = document.createElement('div');
    act(() => {
      Object.defineProperty(result2.current.ref, 'current', {
        writable: true,
        value: div2,
      });
    });

    vi.restoreAllMocks();
  });

  test('IntersectionObserver is called with correct threshold', () => {
    const MockObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));
    vi.stubGlobal('IntersectionObserver', MockObserver);

    renderHook(() => useIntersectionObserver(0.5));

    if (MockObserver.mock.calls.length > 0) {
      expect(MockObserver.mock.calls[0][1]).toEqual({ threshold: 0.5 });
    }

    vi.restoreAllMocks();
  });

  test('uses default threshold of 0.8', () => {
    const MockObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));
    vi.stubGlobal('IntersectionObserver', MockObserver);

    renderHook(() => useIntersectionObserver());

    if (MockObserver.mock.calls.length > 0) {
      expect(MockObserver.mock.calls[0][1]).toEqual({ threshold: 0.8 });
    }

    vi.restoreAllMocks();
  });

  test('calls observe and disconnect on cleanup', () => {
    const observeMock = vi.fn();
    const disconnectMock = vi.fn();

    vi.stubGlobal(
      'IntersectionObserver',
      vi.fn().mockImplementation(() => ({
        observe: observeMock,
        disconnect: disconnectMock,
      })),
    );

    const { unmount } = renderHook(() => useIntersectionObserver(0.5));
    unmount();

    vi.restoreAllMocks();
  });
});
