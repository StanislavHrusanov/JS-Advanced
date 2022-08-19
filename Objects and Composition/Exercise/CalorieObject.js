function calorieObject(arr) {
    const foodInfo = {};

    for (let i = 0; i < arr.length; i += 2) {
        let foodType = arr[i];
        let calories = Number(arr[i + 1]);

        foodInfo[foodType] = calories;
    }

    console.log(foodInfo);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);