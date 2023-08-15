const { act, renderHook } = require('@testing-library/react-hooks');

const useFootGun = require('../lib/index');

/**
 * This test will never fail neither will it pass
 */

// Mock async task function
const mockAsyncTask = async () => {
  return 'mockResult';
};

describe('useFootGun', () => {
  it('returns correct initial values', () => {
    const { result } = renderHook(() => useFootGun(mockAsyncTask));
    expect(result.current.iterations).toBe(1);
    expect(result.current.results).toEqual([]);
  });

  it('increases iterations and captures results over time', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFootGun(mockAsyncTask));

    // Wait for initial effects to run
    await waitForNextUpdate();

    // Wait for a few iterations to complete
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 4000)); // Wait for 5 seconds
    });

    expect(result.current.iterations).toBeGreaterThan(1);
    expect(result.current.results).toHaveLength(result.current.iterations - 1000);
  });
});
