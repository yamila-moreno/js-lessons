describe('map', function () {

    it('map', function () {
        var result = map06(['Ramiro', 'Tere', 'Toño'], function(name) {
                            return "Hi I'm " + name;
        });
        expect(result).eql(["Hi I'm Ramiro", "Hi I'm Tere", "Hi I'm Toño"]);
    })

    it('filter', function () {
        var result = filter06(['Ramiro', 'Tere', 'Toño'], function(name) {
                            return name !== 'Ramiro';
        });
        expect(result).eql(["Tere", "Toño"]);
    })

    it('some', function () {
        var result = some06([2, 3, 5], function(name) {
                return name !== 2;
        });
        expect(result).equal(true);
    })

    it('someNot', function () {
        var result = some06([2], function(name) {
                return name !== 2;
        });
        expect(result).equal(false);
    })
});

