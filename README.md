# JavaScript Loose Comparison Bug

This repository demonstrates a common JavaScript bug caused by using loose comparison (==) in conditional statements.  The `foo` function is intended to add two numbers, but it incorrectly handles `null`, `0`, and `false` values due to loose comparison.

The bug is explained in `bug.js` and a corrected solution is provided in `bugSolution.js`.  This highlights the importance of using strict equality (===) when comparing values to avoid unintended consequences.