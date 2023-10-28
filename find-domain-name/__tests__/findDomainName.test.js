const { domainName } = require('../findDomainName');

describe('Given a url as a string and extract the domain name', () => {
    test('Given a url: www.example.com', () => {
        const url = 'www.example.com'
        expect(domainName(url)).toBe('example')
    });
    test('Given a url: https://google.com', () => {
        const url = 'https://google.com';
        expect(domainName(url)).toBe('google');
    });
    test('Given a url: http://www.v7xecvkdjvvptcv.jp/warez/', () => {
        const url = 'http://www.v7xecvkdjvvptcv.jp/warez/';
        expect(domainName(url)).toBe('v7xecvkdjvvptcv');
    });
    test('Given a url: http://www.v7xecvkdjvvptcv.jp/warez/', () => {
        const url = 'https://www.v7xecvkdjvvptcv.jp/warez/';
        expect(domainName(url)).toBe('v7xecvkdjvvptcv');
    });
    test('Given a url: icann.org', () => {
        const url = 'icann.org'
        expect(domainName(url)).toBe('icann');
    });
    test('Given a url: hdj83w-a.biz/warez/', () => {
        const url = 'hdj83w-a.biz/warez/';
        expect(domainName(url)).toBe('hdj83w-a');
    });
});

//https://www.codewars.com/kata/514a024011ea4fb54200004b/javascript