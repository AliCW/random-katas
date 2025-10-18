const { mirror } = require('../framedReflection');

describe('Given a string, returns its mirror instances with "*" frames', () => {
    test('Given "Hello World", return "*********\n* olleH *\n* dlroW *\n*********"', () => {
        const string = 'Hello World';
        expect(mirror(string)).toBe('*********\n* olleH *\n* dlroW *\n*********');
    });
    test('Given "Codewars", return "************\n* srawedoC *\n************"', () => {
        const string = 'Codewars';
        expect(mirror(string)).toBe('************\n* srawedoC *\n************');
    });
    test('Given "ijt ygearp skvahnz rtbcmw nasvd", return "***********\n* tji     *\n* praegy  *\n* znhavks *\n* wmcbtr  *\n* dvsan   *\n***********"', () => {
        const string = 'ijt ygearp skvahnz rtbcmw nasvd';
        expect(mirror(string)).toBe('***********\n* tji     *\n* praegy  *\n* znhavks *\n* wmcbtr  *\n* dvsan   *\n***********');
        
    });
});

//https://www.codewars.com/kata/581331293788bc1702001fa6/train/javascript

//***********\n* tji     *\n* praegy  *\n* znhavks *\n* wmcbtr  *\n* dvsan   *\n***********
//***********\n* tji *\n* praegy *\n* znhavks *\n* wmcbtr *\n* dvsan *\n***********