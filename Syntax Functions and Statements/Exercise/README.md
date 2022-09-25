# Exercise: Syntax, Functions and Statements

**1. Fruit**

Write a function that calculates how much money you need to buy fruit. You will receive a **string** for the type of fruit you want to buy, **a number** for weight in **grams,** and another **number** for the price per **kilogram**.

Print the following text on the console:

**`**** I need ${money} to buy {weight} kilograms {fruit}. ****`**

Print the weight and the money **rounded** to two decimal places.

The **input** comes as **three arguments** passed to your function.

The **output** should be printed on the console.

**Examples**

| **Input** | **Output** |
| --- | --- |
| **'orange', 2500, 1.80** | **I need $4.50 to buy 2.50 kilograms orange.** |

| **Input** | **Output** |
| --- | --- |
| **'apple', 1563, 2.35** | **I need $3.67 to buy 1.56 kilograms apple.** |


**2. Greatest Common Divisor - GCD**

Write a function that takes **two**** positive ****numbers** as input and compute the greatest common divisor.

The **input** comes **as two positive integer numbers**.

The **output** should be printed on the console.

**Examples**

| **Input** | **Output** |
| --- | --- |
| **15, 5** | **5** |
| **Input** | **Output** |
| **2154, 458** | **2** |


**3. Same Numbers**

Write a function that takes **an integer**** number** as an input and check if all the digits in a given number are the same or not.

Print on the console **true** if all numbers are the same and **false** if not. On the next line print the **sum of all digits.**

The **input** comes as an integer number.

The **output** should be printed on the console.

**Examples**

| **Input** | **Output** |
| **2222222** | **true** |
              |  **14** |
| **Input** | **Output** |
| **1234**  | **false**|
            | **10** |


**4. Previous Day**

Write a JS function that calculates the **date** of the **previous day** by given year, month, and day.

The input comes as three numeric parameters. The first element is the year, the second is the month and the third is the day.

The output must be the return date of the previous day in the format: **`{year}-{month}-{day}`**

### Examples

| **Input** | **Output** |
| --- | --- |
| 2016, 9, 30 | 2016-9-29 |
| 2016, 10, 1 | 2016-9-30 |

### Hints

- Use **Date()**

**5. Time to Walk**

Write a function that **calculates** how long it takes a student to get to university.
The function takes **three numbers** :

- The **first** is the number of **steps** the student takes from their home to the university
- Тhe **second** number is the length of the student's footprint in **meters**
- Тhe **third** number is the student speed in **km/h**

Every 500 meters the student rests and takes a **1-minute break**.

Calculate how long the student walks from home to university and print on the console the result in the following format: **`**** hours:minutes:seconds ****`**.

The **input** comes as **three numbers**.

The **output** should be printed on the console.

**Examples**

| **Input** | **Output** |
| --- | --- |
| **4000, 0.60, 5** | **00:32:48** |
 | **Input** | **Output** |
 | **2564, 0.70, 5.5** | **00:22:35** |


**6. Road Radar**

Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. Each area has a different limit:

- On the **motorway,** the limit is **130**  **km/h**
- On the **interstate,** the limit is **90**  **km/h**
- In the **city,** the limit is **50 km/h**
- Within a **residential** area, the limit is **20**  **km/h**

If the driver is **within the limits** , there should be a printed speedand the speed limit.

**`Driving {speed} km/h in a {speed limit} zone`**

If the driver is **over the limit** , however, your function should print the severity of the infraction and the difference in speeds.

**`The speed is {difference} km/h faster than the allowed speed of {speed limit}**  **-**  **{status}`**

For speeding up to **20** km/hover the limit, the **status** should be **speeding**.

For speeding up to **40** km/h over the limit, the **status** should be **excessive speeding**.

For anything else, **status** should be **reckless driving**.

The **input** comes as **2 string parameters**. The first element is the current speed ( **number** ), the second element is the area.

The **output** should be printed on the console.

**Examples**

| **Input** | **Output** |
| --- | --- |
| **40, 'city'** | **Driving 40 km/h in a 50 zone** |
| **21, 'residential'** | **The speed is 1 km/h faster than the allowed speed of 20 - speeding** |
| **120, 'interstate'** | **The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding** |
| **200, 'motorway'** | **The speed is 70 km/h faster than the allowed speed of 130 - reckless driving** |

