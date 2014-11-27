describe('modulePattern', function () {

    it('add1', function () {
        List07.add(1);
        expect(List07.value()).eql([1]);
    })

    it('add3', function () {
        List07.add(3);
        expect(List07.value()).eql([1, 3]);
        expect(List07.print()).eql([1, 3]);
    })

    it('find', function () {
        expect(List07.find(1)).equal(0);
    })

    it('notFound', function () {
        expect(List07.find(7)).equal('Not found');
    })

    it('remove', function () {
        List07.remove(0);
        expect(List07.value()).eql([3]);
    })

    it('removeItem', function () {
        List07.removeItem(3);
        expect(List07.value()).eql([]);
    })

    it('add5', function () {
        List07.add(5);
        expect(List07.value()).eql([5]);
    })

    it('reset', function () {
        List07.reset();
        expect(List07.value()).eql([]);
        expect(List07.print()).eql([]);
    })
});

