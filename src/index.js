module.exports = function toReadable (number) {
    let ones = number % 10;
    let tens = (Math.floor(number / 10)) % 10;
    let hundreds = (Math.floor(number / 100));

    let one = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    let tenTeen = ['ten', 'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let ten = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let hundred = 'hundred';
    if (hundreds === 0 && tens === 0) {
        result = `${one[ones]}`;
    } else if (hundreds === 0 && tens === 1) {
        result = `${tenTeen[ones]}`;
    } else if (hundreds === 0 && ones === 0) {
        result = `${ten[tens - 2]}`;
    } else if (hundreds === 0) {
        result = `${ten[tens - 2]} ${one[ones]}`;
    } else if (number >= 100 && tens === 0 && ones === 0) {
        result = `${one[hundreds]} ${hundred}`;
    } else if (number > 100 && tens === 1) {
        result = `${one[hundreds]} ${hundred} ${tenTeen[ones]}`;
    } else if (number > 100 && ones === 0) {
        result = `${one[hundreds]} ${hundred} ${ten[tens - 2]}`;
    } else if (number > 100 && tens === 0 && ones === 0) {
        result = `${one[hundreds]} ${hundred}`;
    } else if (number > 100 && tens === 0) {
        result = `${one[hundreds]} ${hundred} ${one[ones]}`;
    }  else if (number > 100 ) {
        result = `${one[hundreds]} ${hundred} ${ten[tens - 2]} ${one[ones]}`;
    }
    return result;
}
