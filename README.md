useThrottle Hook : 


- Initialise State
Create a state to hold the throttled value using useState

- Track last execution time
useRef to keep track of the last time the function was executed

- useEffect for Throttling
    - Set up a Timer (using setTimeout) to handle the logic
    - Inside timer
        - Check the elapsed time since last execution
        - If the elapsed time is greater than or equal to the specified delay, update the throttled value and the last execution time.
    - Calculate the remaining time for the next execution (if any)
    - Return a cleanup function to clear the timer
    - Return the throttled value from the hook
 