const enhancer = require('./enhancer.js');
// test away!

describe('enhancer library tests', () => {
    describe('repair item tests', () => {

        it('should restore item\'s durability', () => {
            //arrange - setup
            const expected = 100;

            //act - run system under test
            const result = enhancer.repair({durability: 0});

            //assert - verify it works
            expect(result.durability).toBe(expected);
        });
    });

    describe('succeed item tests', () => {

        it('enhancement increases by 1', () => {
            //arrange - setup
            const expected = 3;

            //act - run system under test
            const result = enhancer.succeed({enhancement: 2});

            //assert - verify it works
            expect(result.enhancement).toBe(expected);
        });

        it('max enhancement is 20', () => {
            //arrange - setup
            const expected = 20;

            //act - run system under test
            const result = enhancer.succeed({enhancement: 20});

            //assert - verify it works
            expect(result.enhancement).toBe(expected);
        });

        it('durability is unchanged', () => {
            //arrange - setup
            const expected = 100;

            //act - run system under test
            const result = enhancer.succeed({enhancement: 10, durability: 100});

            //assert - verify it works
            expect(result.durability).toBe(expected);
        });
    });

    describe('fail item tests', () => {

        it('if enhancement <15 then durability -5', () => {
            //arrange - setup
            const expected = 10;

            //act - run system under test
            const result = enhancer.fail({enhancement: 10, durability: 15});

            //assert - verify it works
            expect(result.durability).toBe(expected);
        });

        it('if enhancement is >=15 then durability -10', () => {
            //arrange - setup
            const expected = 5;

            //act - run system under test
            const result = enhancer.fail({enhancement: 15,durability: 15});

            //assert - verify it works
            expect(result.durability).toBe(expected);
        });

        it('enhancement >16 them enhancement -1', () => {
            //arrange - setup
            const expected = 19;

            //act - run system under test
            const result = enhancer.fail({enhancement: 20, durability: 100});

            //assert - verify it works
            expect(result.enhancement).toBe(expected);
        });
    });
});


// a `success(item)` method that accepts an `item` object and **returns a new item** object modified according to the rules defined by the client for enhancement success.
// - a `fail(item)` method that accepts an `item` object and **returns a new item** object modified according to the rules defined by the client for enhancement failure.
// - a `get()` method for use when working on the stretch problem.