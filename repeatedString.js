// Fadhlan Fariz Makarim
// fadhlan@outlook.co.id
// https://www.hackerrank.com/challenges/repeated-string/

function repeatedString(s, n) {
    let as = s.split('').filter(i => i === "a").length;
    as = (parseInt(n / s.length, 0) * as) + (s.slice(0, (n % s.length)).split('').filter(i => i === "a").length);
    return as
}