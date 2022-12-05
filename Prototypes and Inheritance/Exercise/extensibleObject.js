function extensibleObject() {

    const obj = {};

    obj.extend = function (template) {

        for (let prop in template) {
            if (typeof template[prop] === 'function') {
                Object.prototype[prop] = template[prop];
            } else {
                obj[prop] = template[prop];
            }
        }
    }
    return obj;
}