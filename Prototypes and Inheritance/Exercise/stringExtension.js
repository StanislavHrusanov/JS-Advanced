(function solve() {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return `${str}${this}`;
        } else {
            return this.slice();
        }
    }

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return `${this}${str}`;
        } else {
            return this.slice();
        }
    }

    String.prototype.isEmpty = function () {
        return this.length === 0;
    }

    String.prototype.truncate = function (n) {
        if (n < 4) {
            let period = '.'
            return period.repeat(n);
        }
        if (this.length <= n) {
            return this.slice();
        }

        if (!this.includes(' ')) {
            return this.slice(0, n - 3) + '...';
        } else {
            let result = this.slice();
            while (result.length > n - 3) {
                result = result.split(' ');
                result.pop();
                result = result.join(' ');
            }
            return `${result}...`;
        }

    }

    String.format = function (string, ...params) {
        let pattern = /{[0-9]+}/g;
        let placeholder = null;
        while ((placeholder = pattern.exec(string)) != null) {
            if (params[Number(placeholder[0][1])]) {
                string = string.replace(placeholder[0], params[placeholder[0][1]]);
            }
        }
        return string.slice();
    }
})();