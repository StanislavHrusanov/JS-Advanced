class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }
    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        }
        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`
    }
    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }
        if (this.resources <= 0) {
            throw new Error("You don't have enough resources to start the hike");
        }

        let difference = this.resources - time * 10;

        if (difference < 0) {
            return "You don't have enough resources to complete the hike";
        }

        this.resources -= time * 10;

        this.listOfHikes.push({ peak, time, difficultyLevel });

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }
    rest(time) {
        this.resources += time * 10;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }

        return `You have rested for ${time} hours and gained ${time * 10}% resources`
    }
    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        }

        if (criteria === 'hard') {
            const hardHikes = [];
            this.listOfHikes.forEach(hike => {
                if (hike.difficultyLevel === 'hard') {
                    hardHikes.push(hike.slice());
                }
            });
            if (hardHikes.length > 0) {
                const sortedHardHikes = hardHikes.sort((a, b) => a.time - b.time);
                const bestHardHike = sortedHardHikes[0];

                return `${this.username}'s best ${criteria} hike is ${bestHardHike.peak} peak, for ${bestHardHike.time} hours`;
            } else {
                return `${this.username} has not done any ${criteria} hiking yet`
            }
        } else if (criteria === 'easy') {
            const easyHikes = [];
            this.listOfHikes.forEach(hike => {
                if (hike.difficultyLevel === 'easy') {
                    easyHikes.push(hike.slice());
                }
            });
            if (easyHikes.length > 0) {
                const sortedEasyHikes = easyHikes.sort((a, b) => a.time - b.time);
                const bestEasyHike = sortedEasyHikes[0];

                return `${this.username}'s best ${criteria} hike is ${bestEasyHike.peak} peak, for ${bestEasyHike.time} hours`;
            } else {
                return `${this.username} has not done any ${criteria} hiking yet`
            }
        } else if (criteria === 'all') {
            let record = `All hiking records:`;
            this.listOfHikes.forEach(hike => record += `\n${this.username} hiked ${hike.peak} for ${hike.time} hours`);

            return record;
        }
    }
}
const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.addGoal('Rui', 1706));
console.log(user.hike('Musala', 8, 'hard'));
console.log(user.hike('Rui', 3, 'easy'));
console.log(user.hike('Everest', 12, 'hard'));

