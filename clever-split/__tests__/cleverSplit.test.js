const { cleverSplit } = require('../cleverSplit');

describe("Split the input string correctly, the string will contain '[' ']' '!' symbols", () => {
    test("Given 'Buy a !car [!red green !white] [cheap or !new]', return ''", () => {
        const s = 'Buy a !car [!red green !white] [cheap or !new]';
        expect(cleverSplit(s)).toEqual(['Buy', 'a', '!car', '[!red green !white]', '[cheap or !new]']);
    });
    test("Given '!Learning !javascript is [a joy]', return ''", () => {
        const s = '!Learning !javascript is [a joy]';
        expect(cleverSplit(s)).toEqual(['!Learning', '!javascript', 'is', '[a joy]']);
    });
    test("Given '[Cats and dogs] are !beautiful and [cute]', return '['[Cats and dogs]', 'are', '!beautiful', 'and', '[cute]']'", () => {
        const s = '[Cats and dogs] are !beautiful and [cute]';
        expect(cleverSplit(s)).toEqual(['[Cats and dogs]', 'are', '!beautiful', 'and', '[cute]']);
    });
    test(`Given '[enaat !aolaf !onba] yaazu [!kpkaa] [!wzaog ydsa] [!apyk aepio] !aaaevl aaapm vdqad [zaala amqzx] [!zkale aaagn] muna [!rarae] [cibeks !abako !agbll] ahzai [!aawoh knatu bdmbn !gauza ameah] [!uywuaw cygcj !aaiap talq] [!zmjat] vzoah', return, '[
        '[enaat !aolaf !onba]',
        'yaazu',
        '[!kpkaa]',
        '[!wzaog ydsa]',
        '[!apyk aepio]',
        '!aaaevl',
        'aaapm',
        'vdqad',
        '[zaala amqzx]',
        '[!zkale aaagn]',
        'muna',
        '[!rarae]',
        '[cibeks !abako !agbll]',
        'ahzai',
        '[!aawoh knatu bdmbn !gauza ameah]',
        '[!uywuaw cygcj !aaiap talq]',
        '[!zmjat]',
        'vzoah'
      ]'`, () => {
        const s = '[enaat !aolaf !onba] yaazu [!kpkaa] [!wzaog ydsa] [!apyk aepio] !aaaevl aaapm vdqad [zaala amqzx] [!zkale aaagn] muna [!rarae] [cibeks !abako !agbll] ahzai [!aawoh knatu bdmbn !gauza ameah] [!uywuaw cygcj !aaiap talq] [!zmjat] vzoah';
        expect(cleverSplit(s)).toEqual([
            '[enaat !aolaf !onba]',
            'yaazu',
            '[!kpkaa]',
            '[!wzaog ydsa]',
            '[!apyk aepio]',
            '!aaaevl',
            'aaapm',
            'vdqad',
            '[zaala amqzx]',
            '[!zkale aaagn]',
            'muna',
            '[!rarae]',
            '[cibeks !abako !agbll]',
            'ahzai',
            '[!aawoh knatu bdmbn !gauza ameah]',
            '[!uywuaw cygcj !aaiap talq]',
            '[!zmjat]',
            'vzoah'
          ]);
    });
    test(`Given 'hebjt [aavaq] [atcan] [!acucp] [tizaw] [!carbd nqcam !isauc] raqa epaaa !gaesa [!rojpr] [!aamv kaevh] [!alngk] hnuff dagz, return '[
        'hebjt',
        '[aavaq]',
        '[atcan]',
        '[!acucp]',
        '[tizaw]',
        '[!carbd nqcam !isauc]',
        'raqa',
        'epaaa',
        '!gaesa',
        '[!rojpr]',
        '[!aamv kaevh]',
        '[!alngk]',
        'hnuff',
        'dagz'
      ]'`, () => {
        const s = 'hebjt [aavaq] [atcan] [!acucp] [tizaw] [!carbd nqcam !isauc] raqa epaaa !gaesa [!rojpr] [!aamv kaevh] [!alngk] hnuff dagz';
        expect(cleverSplit(s)).toEqual([
            'hebjt',
            '[aavaq]',
            '[atcan]',
            '[!acucp]',
            '[tizaw]',
            '[!carbd nqcam !isauc]',
            'raqa',
            'epaaa',
            '!gaesa',
            '[!rojpr]',
            '[!aamv kaevh]',
            '[!alngk]',
            'hnuff',
            'dagz'
          ]);
    });
});

//https://www.codewars.com/kata/5992e11d6ca73b38d50000f0/train/javascript