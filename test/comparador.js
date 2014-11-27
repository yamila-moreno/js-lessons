describe('comparador', function () {
    var comparadorTest;

    beforeEach(function () {
        comparadorTest = comparador02('marta');
    })

    it('shorter', function () {
        var valueShort = comparadorTest('luis');
        expect(valueShort).equal("marta tiene más letras que luis");
    })

    it('longer', function () {
        var valueLong = comparadorTest('antonio');
        expect(valueLong).equal("marta tiene menos letras que antonio");
    })
});

