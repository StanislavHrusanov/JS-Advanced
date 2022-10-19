# Lab: Objects & Composition

## 1.City Record

You will receive a city's **name** (string), **population** (number), and **treasury** (number)as arguments, which you will need to set as **properties** of an **object** and **return** it.

### Examples

| **Input** | **Output** |
| --- | --- |
| **'Tortuga',** **7000,** **15000** | **{** **name: 'Tortuga'** **population: 7000,** **treasury: 15000** **}** |
| **'Santo Domingo',** **12000,** **23500** | **{** **name: 'Santo Domingo',** **population: 12000,** **treasury: 23500** **}** |

## 2.Town Population

You have been tasked to create a registry for different **towns** and their **population**.

### Input

The **input** comes as array of strings. Each element will contain data for a town and its population in the following format: **"{townName} \<-\> {townPopulation}"**

If you receive the same town twice, **you should add** the **given population** to the **current one**.

### Output

As **output** , you must print all the towns and their population.

### Examples

| **Input** | **Output** |
| --- | --- |
| **['Sofia \<-\> 1200000',** **'Montana \<-\> 20000',** **'New York \<-\> 10000000',** **'Washington \<-\> 2345000',** **'Las Vegas \<-\> 1000000']** | **Sofia : 1200000** |
|| **Montana : 20000** |
|| **New York : 10000000** |
|| **Washington : 2345000** |
|| **Las Vegas : 1000000** |
| **['Istanbul \<-\> 100000',** **'Honk Kong \<-\> 2100004'** **'Jerusalem \<-\> 2352344',** **'Mexico City \<-\> 23401925'** **'Istanbul \<-\> 1000']** | **Istanbul : 101000** |
|| **Honk Kong : 2100004** |
|| **Jerusalem : 2352344** |
|| **Mexico City : 23401925** |

