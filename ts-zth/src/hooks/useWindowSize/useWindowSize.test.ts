import { renderHook, act } from '@testing-library/react-hooks';
import { useWindowSize } from 'hooks';

describe('Hooks > useWindowSize', () => {
  it('{ width, height }', () => {
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      result.current.width;
      result.current.height;
    });

    expect(result.current.width).toBe(1024);
    expect(result.current.height).toBe(768);
  });
});
