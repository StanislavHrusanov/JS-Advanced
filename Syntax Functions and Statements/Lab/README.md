# Lab: Syntax, Functions and Statements

## 1.Echo Function

Write a JS function that takes **one string parameter** and **prints** on two lines the **length** of the parameter and then the **unchanged parameter** itself.

### Examples

| **Input** | **Output** |
| --- | --- |
| **'Hello, JavaScript!'** | **18**** Hello, JavaScript!** |
| **'strings are easy'** | **16**** strings are easy** |

### Hints

- Write a function that receives a single **parameter**.
- Use the console.log function to print text on the console. Each call prints a newline automatically.
- The string's **length**  **property** is used to determine how many characters are in a given string

## 2.String Length

Write a JS function that takes **three**** string arguments **as an input. Calculate the** sum **of the** length **of the** strings **and the** average length **of the strings** rounded ****down** to the nearest integer.

The **input** comes as **three string arguments** passed to your function.

The **output** should be printed on the console in two lines.

### Examples

| **Input** | **Output** |
| --- | --- |
| **'chocolate', 'ice cream', 'cake'** | **22**** 7** |
| **'pasta', '5', '22.3'** | **10**** 3** |

### Hints

- Write a function that receives three string arguments.
- Declare two variables named **sumLength** and **averageLength** that will keep the mathematical results.
- Calculate the length of the strings using the **length**  **property**.

![](RackMultipart20220922-1-u1gndk_html_96e7bd9e221d7b7c.png)

- Calculate the sum of the three lengths. ![](RackMultipart20220922-1-u1gndk_html_c399bdf2a184e68e.png)
- Calculate the **average length** of the strings **rounded**** down **to the nearest integer. Use the** Math.floor()** function.

![](RackMultipart20220922-1-u1gndk_html_342fd0740529ad30.png)

- Print the results on the console.

![](RackMultipart20220922-1-u1gndk_html_5f2cb6d4fc9d75f3.png)

## 3.Largest Number

Write a function that takes **three number arguments** as input and finds the **largest** of them. Print the following text on the console: **`The largest number is {number}.`**.

The **input** comes as **three number arguments** passed to your function.

The **output** should be printed to the console.

### Example

| **Input** | **Output** |
| --- | --- |
| **5, -3, 16** | **The largest number is 16.** |
| **-3, -5, -22.5** | **The largest number is -3.** |

### Hints

- Write a function that receives three number arguments.
- Declare a variable named **result** that will keep the result.

![](RackMultipart20220922-1-u1gndk_html_9775cc2ea2f5a419.png)

- Make several checks to find out the largest of the three numbers. Start with num1.

![](RackMultipart20220922-1-u1gndk_html_37ed882a09cd8f7c.png)

- Do the same for the others.

![](RackMultipart20220922-1-u1gndk_html_2261319152953002.png)

- Print the result on the console.

![](RackMultipart20220922-1-u1gndk_html_cb4278f9078ea507.png)

## 4.Circle Area

Write a function that takes **a single argument** as an input. **Check the type** of input argument. If it is a **number** , assume it is the radius of a circle and **calculate the circle area**. Print the **area**** rounded **to** two decimal places**.

If the argument type is **NOT** a number, print the following text on the console:
**`**** We can not calculate the circle area, because we receive a {type of argument}. ****`**

The **input** comes as a **single argument** passed to your function.

The **output** should be printed on the console.

### Example

| **Input** | **Output** |
| --- | --- |
| **5** | **78.54** |
| **'name'** | **We can not calculate the circle area, because we receive a string.** |

### Hints

- Write a function that receives a single argument.
- Declare a variable named **result** that will keep your result.

![](RackMultipart20220922-1-u1gndk_html_a7adfd5aa6f57451.png)

- Check the type of the input argument with the **typeof** operator.

![](RackMultipart20220922-1-u1gndk_html_59d23c9fefe59f40.png)

- If the type is equal to **'number'** , calculate the circle area and print it on the console rounded to two decimal places. To do this, use the method **toFixed().**
The **Math.pow()** function returns the base to the exponent power, that is, base exponent. You can find more information about the area [here](https://en.wikipedia.org/wiki/Circle):

![](RackMultipart20220922-1-u1gndk_html_bc4092377aed5ed9.png)

- If the type is **NOT** a **'number'** , print the following text on the console:

![](RackMultipart20220922-1-u1gndk_html_61f4a7dca7363e50.png)

## 5.Math Operations

Write a JS function that takes **two**** numbers **and** a string** as an input.

The string may be one of the following: ' **+**', ' **-**', ' **\***', ' **/**', ' **%**', ' **\*\***'.

Print on the console the result of the mathematical **operation** between **both numbers** and the **operator** you receive as a string.

The **input** comes as **two numbers** and **a string argument** passed to your function.

The **output** should be printed on the console.

### Examples

| **Input** | **Output** |
| --- | --- |
| **5, 6, '+'** | **11** |
| **3, 5.5, '\*'** | **16.5** |

### Hints

- Write a function which receives **three** arguments:

![](RackMultipart20220922-1-u1gndk_html_252e8323f6f272c6.png)

- Declare a variable named **result** that will keep your mathematical result.
- Write down the **switch** command that will take the string from your input and depending on it, perform the mathematical logic between the two numbers.

![](RackMultipart20220922-1-u1gndk_html_c83c1ded88c5881a.png)

- Print the result on the console.

![](RackMultipart20220922-1-u1gndk_html_fa73ab689b626172.png)

## 6.Sum of Numbers N…M

Write a JS function that takes two numbers **n** and **m** as an input and **prints the sum** of all numbers from **n** to **m**.

The **input** comes as **two string elements** that need to be **parsed** as numbers.

The **output** should **return** the **sum**.

### Examples

| **Input** | **Output** |
| --- | --- |
| **'1', '5'** | **15** |
| **'-8', '20'** | **174** |

### Hints

- Write a function that receives two string arguments and parse them as numbers. Use **Number(string)** function to parse the input.

![](RackMultipart20220922-1-u1gndk_html_9eff0772f56cd2b3.png)

- Declare a variable named **result** that will keep the mathematical results.
- Write a **for** loop from **num1** to **num2** and every turn of the cycle, until it's completed, add the current value.

![](RackMultipart20220922-1-u1gndk_html_861c4402c3de4ad2.png)

- Finally, return the result.

![](RackMultipart20220922-1-u1gndk_html_ad3481374a14e9e0.png)

## 7.Day of Week

Write a function that prints a number between 1 and 7 when a **day of the week** is passed to it as a string and an **error message** if the string is **not recognized**.

The **input** comes as a single-string argument.

The **output** should be returned as a result.

### Examples

| **Input** | **Output** |
| --- | --- |
| **'Monday'** | **1** |
| **'Friday'** | **5** |
| **'Invalid'** | **error** |

## 8.Days in a month

Write a JavaScript function to get the number of days in a month.

The input comes as two numeric parameters. The first element is the month, the second is the year.

The output must return the number of days in a monthfor a given year.

### Examples

| **Input** | **Output** |
| --- | --- |
| **1, 2012** | **31** |
| **2, 2021** | **28** |

### Hints

- Use **Date()**

## 9.Square of Stars

Write a function that **prints a rectangle** made of **stars** with variable **size** , depending on an input parameter. If there is **no parameter** specified, the rectangle should **always** be of **size 5**. Look at the examples to get an idea.

The **input** comes as a single **number** argument.

The **output** is a series of lines printed on the console, forming a rectangle of variable size.

### Examples

| **Input** | **Output** |
 | **Input** | **Output** |
 | **Input** | **Output** |
 | **Input** | **Output** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **1** | **\*** | **2** | **\* \***** \* \ ***|** 5 **|** \* \* \* \* \ *****\* \* \* \* \***** \* \* \* \* \ *****\* \* \* \* \***** \* \* \* \* \ ***|** 7 **|** \* \* \* \* \* \* \ *****\* \* \* \* \* \* \***** \* \* \* \* \* \* \ *****\* \* \* \* \* \* \***** \* \* \* \* \* \* \ *****\* \* \* \* \* \* \***** \* \* \* \* \* \* \*** |

## 10.Aggregate Elements

Write a program that performs different operations on an array of elements. Implement the following operations:

- **Sum(a****i****)** - calculates the sum of all elements from the input array
- **Sum(1/a****i****)** - calculates the sum of the inverse values (1/ai) of all elements from the array
- **Concat(a****i****)** - concatenates the string representations of all elements from the array

The **input** comes as an array of number elements.

The **output** should be printed on the console on a new line for each of the operations.

### Examples

| **Input** | **Output** |
 | **Input** | **Output** |
| --- | --- | --- | --- | --- |
| **[1, 2, 3]** | **6**** 1.8333333333333333 ****123** | **[2, 4, 8, 16]** | **30**** 0.9375 ****24816** |
