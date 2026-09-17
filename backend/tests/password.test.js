const validator = require('validator');

describe('Password Validation Tests', () => {

    test('Strong password should pass', () => {
        expect(
            validator.isStrongPassword('Pranay@2652005')
        ).toBe(true);
    });

    test('Weak password should fail', () => {
        expect(
            validator.isStrongPassword('abc123')
        ).toBe(false);
    });

    test('Password without uppercase should fail', () => {
        expect(
            validator.isStrongPassword('pranay@2652005')
        ).toBe(false);
    });

    test('Password without special character should fail', () => {
        expect(
            validator.isStrongPassword('Pranay2652005')
        ).toBe(false);
    });

});