function identificarBandeira(numero) {
    const num = numero.replace(/\D/g, '');

    if (/^4\d{12}(\d{3})?$/.test(num)) {
        return 'Visa';
    }
    if (/^5[1-5]\d{14}$/.test(num) || /^2(2[2-9][1-9]|2[3-9]\d|[3-6]\d{2}|7[01]\d|720)\d{12}$/.test(num)) {
        return 'MasterCard';
    }
    if (/^3[47]\d{13}$/.test(num)) {
        return 'American Express';
    }
    if (/^(4011(78|79)|431274|438935|451416|457393|504175|5067\d{2}|509\d{3}|627780|636297|636368|650\d{3}|6516\d{2}|6550\d{2})\d{10,12}$/.test(num)) {
        return 'Elo';
    }
    if (/^606282\d{10,12}$/.test(num) || /^3841(46|47)\d{10,12}$/.test(num)) {
        return 'Hipercard';
    }
    if (/^3(?:0[0-5]|[68]\d)\d{11}$/.test(num)) {
        return 'Diners Club';
    }
    if (/^6(?:011|5\d{2})\d{12}$/.test(num)) {
        return 'Discover';
    }
    return 'Bandeira não identificada';
}

module.exports = { identificarBandeira };