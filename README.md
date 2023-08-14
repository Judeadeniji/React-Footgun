
# `useFootGun()` Hook Documentation

The `useFootGun()` hook is designed for testing purposes to simulate a scenario where an asynchronous task gradually increases in complexity, potentially impacting the performance of a React application. It is important to note that deliberately causing poor performance is not a standard practice and should be used cautiously for testing purposes only.

## Usage

1. **Import the Hook**

   ```jsx
   import useFootGun from 'react-footgun';
   ```

2. **Use the Hook**

   ```jsx
   function App() {
     const iterations = useFootGun();
     
     // Use the 'iterations' value as needed
   }
   ```

## Functionality

The `useFootGun()` hook performs the following actions:

1. Initializes a state variable `iterations` using the `useState` hook, starting with an initial value of `1`.
2. In the first `useEffect` hook:
   - Runs a heavy computation task with the current number of iterations.
   - Re-runs the computation whenever the `iterations` value changes.
3. In the second `useEffect` hook:
   - Sets up an interval that increases the `iterations` value by 1000 every second.
   - Cleans up the interval when the component unmounts.
4. In the third `useEffect` hook:
   - Initializes a `running` flag to control the while loop.
   - Defines an async function `runLoop()` that runs a while loop with a delay of 1 second between iterations.
   - Calls the `heavyTask()` function (simulated heavy computation) inside the loop.
   - Sets the `running` flag to `false` when the component unmounts, stopping the loop.

## Notes

- This hook is intended for testing purposes and should not be used in production code.
- Deliberately degrading performance is not a recommended practice.
- For accurate performance testing, use browser developer tools or profiling tools.

## Disclaimer

The provided code is an example for testing purposes only. It is not recommended to intentionally degrade performance in a production environment.
