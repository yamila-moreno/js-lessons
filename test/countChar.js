describe('count', function () {
    var countCharTest;
    names = ['name1', 'name2', 'name3'];

    it('count', function () {
        countCharTest = countChar05(names);
        expect(countCharTest[0]()).equal(5);
        expect(countCharTest[0](true)).equal("5 caracteres");
    })

});

