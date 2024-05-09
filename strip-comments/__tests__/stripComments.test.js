const { stripComments } = require('../stripComments');

describe('Given a stringing & markers - remove all text to the right of each marker up till the new line of text, whitespaces on the right must also be removed', () => {
    test('Given "aa bb cc" & [], return "aa bb cc" - no markers, new lines or trailing spaces', () => {
        const string = 'aa bb cc';
        const markers = [];
        expect(stripComments(string, markers)).toBe('aa bb cc');
    });
    test('Given "    aa bb cc" & [], return "    aa bb cc" - no markers, new lines or trailing right spaces', () => {
        const string = '    aa bb cc';
        const markers = [];
        expect(stripComments(string, markers)).toBe('    aa bb cc');
    });
    test('Given "aa bb cc  " & [], return "aa bb cc" - contains trailing right spaces', () => {
        const string = 'aa bb cc  ';
        const markers = [];
        expect(stripComments(string, markers)).toBe('aa bb cc');
    });
    test('Given "  aa # bb # cc  " & [], return "  aa # bb # cc" - trailing spaces, string contains symbols', () => {
        const string = '  aa # bb # cc';
        const markers = [];
        expect(stripComments(string, markers)).toBe('  aa # bb # cc');
    });
    test('Given "aa bb cc" & ["#"], return "aa bb cc" - string contains no given markers', () => {
        const string = 'aa bb cc';
        const markers = ['#'];
        expect(stripComments(string, markers)).toBe('aa bb cc');
    });
    test('Given "aa bb # cc" & ["#"], return "aa bb" - string contains one marker, given one marker', () => {
        const string = 'aa bb # cc';
        const markers = ['#'];
        expect(stripComments(string, markers)).toBe('aa bb');
    });
    test('Given "aa# bb cc" & ["#"], return "aa" - string contains one marker, given one marker', () => {
        const string = 'aa# bb cc';
        const markers = ['#'];
        expect(stripComments(string, markers)).toBe('aa');
    });
    test('Given "aa # bb # cc" & ["#"], return "aa" - string contains two markers, given one marker', () => {
        const string = 'aa # bb # cc';
        const markers = ['#'];
        expect(stripComments(string, markers)).toBe('aa');
    });
    test('Given "#aa bb cc" & ["#"], return "" - string contains one marker as the first character, one marker given', () => {
        const string = '#aa bb cc';
        const markers = ['#'];
        expect(stripComments(string, markers)).toBe('');
    });
    test('Given "#aa bb\ncc dd" & ["#"], return "\ncc dd" - string contains one marker and a new line, one marker given', () => {
        const string = '#aa bb\ncc dd';
        const markers = ['#'];
        expect(stripComments(string, markers)).toBe('\ncc dd');
    });
    test('Given "aa # bb\ncc dd" & ["#"], return "aa\ncc dd" - string contains one marker & one new line - one marker given', () => {
        const string = 'aa # bb\ncc dd';
        const markers = ['#'];
        expect(stripComments(string, markers)).toBe('aa\ncc dd');
    });
    test('Given "aa bb\n#cc dd" & ["#"], return "aa bb\n" - string contains one marker & ending in a new line - one marker given', () => {
        const string = 'aa bb\n#cc dd';
        const markers = ['#'];
        expect(stripComments(string, markers)).toBe('aa bb\n');
    });
    test('Given "aa bb\ncc # dd" & ["#"], return "aa bb\ncc" - string contains one marker & one new line, one marker given', () => {
        const string = 'aa bb\ncc # dd';
        const markers = ['#'];
        expect(stripComments(string, markers)).toBe('aa bb\ncc');
    });
    test('Given "aa # bb\ncc dd" & ["#", "!"], return "aa\ncc dd" - string contains two markers & one new line - one marker given', () => {
        const string = 'aa # bb\ncc dd';
        const markers = ['#', '!'];
        expect(stripComments(string, markers)).toBe('aa\ncc dd');
    });
    test('Given "#aa bb\n!cc dd" & ["#", "!"], return "\n" - string contains two markers & one new line - one marker given', () => {
        const string = '#aa bb\n!cc dd';
        const markers = ['#', '!'];
        expect(stripComments(string, markers)).toBe('\n');
    });
    test('Given "aa ! bb\ncc # dd" & ["#", "!"], return "aa\ncc" - string contains two markers & one new line - one marker given', () => {
        const string = 'aa ! bb\ncc # dd';
        const markers = ['#', '!'];
        expect(stripComments(string, markers)).toBe('aa\ncc');
    });
    test('Given "aa bb#\ncc dd!" & ["#", "!"], return "aa bb\ncc dd" - string contains two markers & one new line - one marker given', () => {
        const string = 'aa bb#\ncc dd!';
        const markers = ['#', '!'];
        expect(stripComments(string, markers)).toBe('aa bb\ncc dd');
    });
    test('Given "W%$ieG!cC!zxN\\ \nCSWcWglK@+rCBNFN /jhSl" & [], return "W%$ieG!cC!zxN\\nCSWcWglK@+rCBNFN /jhSl" - edge case', () => {
        const string = 'W%$ieG!cC!zxN\\ \nCSWcWglK@+rCBNFN /jhSl';
        const markers = [];
        expect(stripComments(string, markers)).toBe('W%$ieG!cC!zxN\\nCSWcWglK@+rCBNFN /jhSl');
    });
    test('Given "bCN!XujTznx/KCyj$om\n%H^RRcYIJ $igbE/~y#wk@D\\Yqz%I C\nDoMrT\nfw% Y+GHGCIM-" &  ["/","$","#","+","\\","~","%","-"], return "bCN!XujTznx\n\nDoMrT\nfw" - edge case', () => {
        const string = 'bCN!XujTznx/KCyj$om\n%H^RRcYIJ $igbE/~y#wk@D\\Yqz%I C\nDoMrT\nfw% Y+GHGCIM-';
        const markers = ["/","$","#","+","\\","~","%","-"];
        expect(stripComments(string, markers)).toBe('bCN!XujTznx\n\nDoMrT\nfw');
    });
    test('Given "TX#-%aZTusdxuJhrdOfT$tkFGcmkB l\n ^L" & ["#","\\","+","~","!","-","^","/","*"], return TX\n', () => {
        const string = 'TX#-%aZTusdxuJhrdOfT$tkFGcmkB l\n ^L';
        const markers = ["#","\\","+","~","!","-","^","/","*"];
        expect(stripComments(string, markers)).toBe('TX\n');
    });
    test('Given "-m*d^Y MsORcxydycA \nGnKYex@OrSUEXeEwzd uHXbO", return "-m*d^Y MsORcxydycA\nGnKYex"', () => {
        const string = '-m*d^Y MsORcxydycA \nGnKYex@OrSUEXeEwzd uHXbO';
        const markers = ['@'];
        expect(stripComments(string, markers)).toBe('-m*d^Y MsORcxydycA\nGnKYex');
    });
});




// const string = '-m*d^Y MsORcxydycA \nGnKYex@OrSUEXeEwzd uHXbO'
// const markers = ['@']
// Assertion: expected '-m*d^Y MsORcxydycAnGnKYex' to equal '-m*d^Y MsORcxydycA\nGnKYex'


//https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript


