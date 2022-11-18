function printDeckOfCards(cards) {
    const output = [];

    for (const card of cards) {
        const face = card.slice(0, -1);
        const suit = card.slice(-1);

        try {
            output.push(createCard(face, suit).toString());
        } catch (e) {
            console.log(`Invalid card: ${face + suit}`);
            return;
        }
    }
    console.log(output.join(' '));

    function createCard(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        const suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        };

        if (!validFaces.includes(face) || !Object.keys(suits).includes(suit)) {
            throw new Error();
        }

        return {
            face,
            suit,
            toString: () => {
                return `${face}${suits[suit]}`;
            }
        };
    }
}
printDeckOfCards(['AS', '10D', 'KH', '2C'])