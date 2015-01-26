describe('superHero', function () {

    it('superRamiro', function () {
        var hero = {
            name: 'ramiro'
        }
        var superRamiro = superHero(hero, {'readMind': powers.readOwnMind});
        expect(superRamiro.power('readMind')).eql('ramiro can read her own mind');
    })

    it('superYami', function () { var hero = {
            name: 'yami'
        }
        var superYami = superHero(hero,
                                 {'readMind': powers.readOwnMind,
                                  'invisible': powers.invisible});
        expect(superYami.power('readMind')).eql('yami can read her own mind');
        expect(superYami.power('invisible')).eql('yami can become invisible when nobody is watching');
    })

});
