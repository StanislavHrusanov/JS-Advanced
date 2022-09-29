## 1.Even Position Element

Write a function that finds the elements at even positions in an array.

The **input** comes as an **array of string** elements.

The **output** is printed on the console. Collect all elements in a string, separated by space.

### Examples

| **Input** | **Output** |
| --- | --- |
| **['20', '30', '40','50', '60']** | **20 40 60** |
| **['5', '10']** | **5** |


## 2.Last K Numbers Sequence

You are given two integers **n** and **k**. Write a JS function that generates and **return** the following sequence:

- The first element is 1
- Every following element equals the **sum** of the previous **k** elements
- The length of the sequence is **n** elements

The **input** comes as **two number arguments**. The first element represents the number **n** , and the second – the number **k**.

The **output** is the **return** value of your function and should be an **array of numbers**.

### Example

| **Input** | **Output** |
| --- | --- |
| **6, 3** | **[1, 1, 2, 4, 7, 13]** |
| **8, 2** | **[1, 1, 2, 3, 5, 8, 13, 21]** |

#### Explanation

The 2nd element (1) is the sum of the 3 elements before it, but there is only 1, so we take that. The third element is the sum of the first 2 (1 and 1) and the 4th – the sum of 1, 1, and 2. The 5th element is the sum of the 2nd, 3rd, and 4th (1, 2, and 4) and so on.

