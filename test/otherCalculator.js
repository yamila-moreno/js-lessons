describe('otherCalculator', function () {

    it('otherCalculator', function () {
        var calculator = OtherCalculator(add, sub);
        calculator.set({
            'num1': 5,
            'num2': 2
        });
        expect(calculator.result()).eql([7,3]);
    })

    it('otherCalculatorMoreDifficult', function () {
        var calculator = OtherCalculator(add, sub, prod);
        calculator.set({
            'num1': 3,
            'num2': 2
        });
        expect(calculator.result()).eql([5,1,6]);
    })

});
