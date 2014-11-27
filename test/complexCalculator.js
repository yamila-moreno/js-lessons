describe('complexCalculator', function () {

    it('calc', function () {
        var calculator = Calculator03(0)
        var fn = calculator(more03, more03, less03);
        var res = fn(3,4,1);
        expect(res).eql(6);
    })

});

