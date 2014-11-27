describe('calculator', function () {

    it('calc', function () {
        fnAdd = add02(3);
        fnSub = sub01(2);
        var res = calculator01(100, [fnAdd, fnSub]);
        expect(res).eql([103, 98]);
    })

});

