import { renderHook, act } from '@testing-library/preact';
import useFunctionOverTime from '@hooks/useFunctionOverTime';

describe('useFunctionOverTime', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  test('calls callback after default timeout', () => {
    const callback = vi.fn();
    renderHook(() => useFunctionOverTime(callback));

    expect(callback).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(6000);
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('calls callback after custom timeout', () => {
    const callback = vi.fn();
    renderHook(() => useFunctionOverTime(callback, 3000));

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('returns count of calls', () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useFunctionOverTime(callback, 1000));

    expect(result.current).toBe(0);

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(result.current).toBe(1);
  });
});
