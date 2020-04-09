var ReactDate = require('./date.js');

test('Format correct RE date', () => {

    var t = new ReactDate();
    let result = t.toLocaleDateString();
    let gregorianYear =   new Date().getFullYear();
    expect(result).toContain('RE ' + (9999999 - 2020 + gregorianYear))
})
