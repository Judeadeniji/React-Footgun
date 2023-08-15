const { useEffect, useState } = require('react');

/**
 * A custom React hook for testing purposes that simulates a gradually increasing asynchronous task.
 * @param {() => Promise<any>} asyncTask - The asynchronous task to be executed during each iteration.
 * @returns {{ iterations: number, results: any[] }} An object containing the iteration count and results of the async task.
 */
function useFootGun(asyncTask) {
  const [iterations, setIterations] = useState(1);
  const [results, setResults] = useState([]);

  const heavyTask = async () => {
    const taskResults = [];
    for (let i = 0; i < iterations; i++) {
      const result = await Promise.all(Array.from({ length: results.length }).map(() => asyncTask()));
      taskResults.push(result);
    }
    setIterations((prevIterations) => prevIterations + 1000);
    setResults(taskResults);
  };
  
  /**
   * Execute the provided async task with the specified number of iterations.
   */
  useEffect(heavyTask, [asyncTask, iterations]);

  /**
   * Simulate a while loop with delay for gradually increasing the async task.
   */
  useEffect(() => {
    let running = true;

    const runLoop = async () => {
      while (running) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        heavyTask();
      }
    };

    runLoop();

    return () => {
      running = false;
    };
  }, [heavyTask]);
  
  return { iterations, results: results.flat() };
}


// Define exports for both CJS and ESM
if (typeof exports === 'object' && typeof module !== 'undefined') {
  // CommonJS environment
  module.exports = useFootGun;
}

if (typeof define === 'function' && define.amd) {
  // AMD environment
  define('useFootGun', [], function () {
    return useFootGun;
  });
}

if (typeof exports === 'undefined' && typeof define === 'undefined') {
  // ECMAScript Modules (ESM) environment
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.default = useFootGun;
}
