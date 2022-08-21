function createSortedList() {
    let list = {
        size: 0,
        arr: [],
        add: function (par) {
            this.size++;
            this.arr.push(par);
            return this.arr.sort((a, b) => a - b);
        },
        remove: function (index) {
            if (index >= 0 && index <= this.arr.length - 1) {
                this.arr.splice(index, 1);
                this.size--;
            }
        },
        get: function (index) {
            if (index >= 0 && index <= this.arr.length - 1) {
                return this.arr[index];
            }
        }
    }
    return list;

}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));




