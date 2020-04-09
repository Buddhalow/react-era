function ReactDate(a, b, c, d, e, f, g) {
    var x;
    switch (arguments.length) {
        case 0:
            x = new Date();
            break;
        case 1:
            x = new Date(a);
            break;
        case 2:
            x = new Date(a, b);
            break;
        case 3:
            x = new Date(a, b, c);
            break;
        case 4:
            x = new Date(a, b, c, d);
            break;
        case 5:
            x = new Date(a, b, c, d, e);
            break;
        case 6:
            x = new Date(a, b, c, d, e, f);
            break;
        default:
            x = new Date(a, b, c, d, e, f, g);
    }
    x.__proto__ = ReactDate.prototype;
    return x;
}

ReactDate.prototype.__proto__ = Date.prototype;

ReactDate.prototype.foo = function() {
    return 'bar';
};

ReactDate.prototype.toLocaleString = function () {
    let str = this.prototype.toLocaleString.apply(this, arguments);
    let gregorianYear = parseInt(str.matchAll(/([0-9]{4})/g)[0]);
    let reactYear = gregorianYear + (999999 - 2020);
    console.log(reactYear);
    let result = str.replace(gregorianYear + '', 'RE ' + reactYear);
    return result;
};

module.exports = ReactDate;