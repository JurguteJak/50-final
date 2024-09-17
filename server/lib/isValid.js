export function isValidUsername(text) {
    const minLength = 3;
    const maxLength = 20;

    if (typeof text !== 'string') {
        return 'Slapyvardis turi buti tekstinis';
    }

    if (text.length < minLength) {
        return `Slapyvardis turi buti minimum ${minLength} simboliu ilgio`;
    }

    if (text.length > maxLength) {
        return `Slapyvardis turi buti maximum ${maxLength} simboliu ilgio`;
    }

    return '';
}

export function isValidPassword(text) {
    const minLength = 12;
    const maxLength = 100;

    if (typeof text !== 'string') {
        return 'Slaptažodis turi buti tekstinis';
    }

    if (text.length < minLength) {
        return `Slaptažodis turi buti minimum ${minLength} simboliu ilgio`;
    }

    if (text.length > maxLength) {
        return `Slaptažodis turi buti maximum ${maxLength} simboliu ilgio`;
    }

    return '';
}