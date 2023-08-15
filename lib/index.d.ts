export = useFootGun;
/**
 * A custom React hook for testing purposes that simulates a gradually increasing asynchronous task.
 * @param {() => Promise<any>} asyncTask - The asynchronous task to be executed during each iteration.
 * @returns {{ iterations: number, results: any[] }} An object containing the iteration count and results of the async task.
 */
declare function useFootGun(asyncTask: () => Promise<any>): {
    iterations: number;
    results: any[];
};
declare namespace useFootGun {
    export { __esModule, useFootGun as default };
}
declare const __esModule: boolean;
