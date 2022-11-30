function tickets(description, sorting) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    return description
        .slice()
        .map(t => t.split('|'))
        .map(t => new Ticket(...t))
        .sort((a, b) => {
            return sorting == 'price'
                ? a[sorting] - b[sorting]
                : a[sorting].localeCompare(b[sorting]);
        });
}