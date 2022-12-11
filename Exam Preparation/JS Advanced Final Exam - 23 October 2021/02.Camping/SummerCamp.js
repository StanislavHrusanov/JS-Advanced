class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            'child': 150,
            'student': 300,
            'collegian': 500
        };
        this.listOfParticipants = [];
    }
    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        for (let participant of this.listOfParticipants) {
            if (name === participant.name) {
                return `The ${name} is already registered at the camp.`;
            }
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({
            'name': name,
            'condition': condition,
            'power': 100,
            'wins': 0
        });
        return `The ${name} was successfully registered.`;
    }
    unregisterParticipant(name) {

        for (let i = 0; i < this.listOfParticipants.length; i++) {
            let currentParticipant = this.listOfParticipants[i];
            if (name == currentParticipant.name) {
                this.listOfParticipants.splice(i, 1);
                return `The ${name} removed successfully.`;
            }
        }
        throw new Error(`The ${name} is not registered in the camp.`);
    }
    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame == 'WaterBalloonFights') {
            let isFoundP1 = false;
            let isFoundP2 = false;
            let p1Condition;
            let p2Condition;
            let p1Power;
            let p2Power;

            for (let participant of this.listOfParticipants) {
                if (participant1 == participant.name) {
                    isFoundP1 = true;
                    p1Condition = participant.condition;
                    p1Power = participant.power;
                }
                if (participant2 == participant.name) {
                    isFoundP2 = true;
                    p2Condition = participant.condition;
                    p2Power = participant.power;
                }
                if (isFoundP1 && isFoundP2) {
                    break;
                }
            }
            if (isFoundP1 == false || isFoundP2 == false) {
                throw new Error(`Invalid entered name/s.`);
            }

            if (p1Condition != p2Condition) {
                throw new Error(`Choose players with equal condition.`);
            }
            if (p1Power != p2Power) {
                let winner;
                if (p1Power > p2Power) {
                    winner = participant1;
                } else {
                    winner = participant2;
                }
                for (let p of this.listOfParticipants) {
                    if (p.name == winner) {
                        p.wins++;

                        return `The ${winner} is winner in the game WaterBalloonFights.`;
                    }
                }
            }
            return `There is no winner.`;
        } else if (typeOfGame == 'Battleship') {
            for (let participant of this.listOfParticipants) {
                if (participant.name == participant1) {
                    participant.power += 20;
                    return `The ${participant1} successfully completed the game Battleship.`;
                }
            }
            throw new Error(`Invalid entered name/s.`);
        }
    }
    toString() {
        let output = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        let sorted = this.listOfParticipants.slice().sort((a, b) => b.wins - a.wins);
        sorted.forEach(p => output.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`));

        return output.join('\n');
    }
}