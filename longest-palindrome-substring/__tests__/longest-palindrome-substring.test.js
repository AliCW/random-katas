const { longestPalindromeSubstring } = require('../longest-palindrome-substring');

describe('return the longest palindrome substring from the given string', () => {
    test('first case - babad', () => {
        const s = 'babad';
        expect(longestPalindromeSubstring(s)).toBeOneOf(['bab', 'aba'])
    });
    test('second case - cbbd', () => {
        const s = 'cbbd';
        expect(longestPalindromeSubstring(s)).toBe('bb')
    });
    test('third case - a', () => {
        const s = 'a';
        expect(longestPalindromeSubstring(s)).toBe('a')
    });
    test('fourth case - ac', () => {
        const s = 'ac';
        expect(longestPalindromeSubstring(s)).toBeOneOf(['a', 'c'])
    });
    test('fifth case = abbcccbbbcaaccbababcbcabca', () => {
        const s = 'abbcccbbbcaaccbababcbcabca';
        expect(longestPalindromeSubstring(s)).toBe('bbcccbb')
    });
    test('sixth case = zz', () => {
        const s = 'zz';
        expect(longestPalindromeSubstring(s)).toBe('zz')
    });
    test('seventh case = ccc', () => {
        const s = 'ccc';
        expect(longestPalindromeSubstring(s)).toBe('ccc')
    });
    test('eigth case = zzzzzzzzzzzzzzzzzzzzzz', () => {
        const s = 'zzzzzzzzzzzzzzzzzzzzzz'
        expect(longestPalindromeSubstring(s)).toBe('zzzzzzzzzzzzzzzzzzzzzz');
    });
    test('ninth case = aba', () => {
        const s = 'aba'
        expect(longestPalindromeSubstring(s)).toBe('aba');
    });
    test('tenth case = abcda', () => {
        const s = 'abcda';
        expect(longestPalindromeSubstring(s)).toBeOneOf(['a', 'b', 'c', 'd', 'a'])
    });

    test('eleventh case = civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth', () => {
        const s = 'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'
        expect(longestPalindromeSubstring(s)).toBe('ranynar')
    })
    test('twelfth case = abb', () => {
        const s = 'abb';
        expect(longestPalindromeSubstring(s)).toBe('bb')
    });
    test('thirteenth case = zabb', () => {
        const s = 'zabb';
        expect(longestPalindromeSubstring(s)).toBe('bb')
    });
    test('fifteenth case = zagthdvhbb', () => {
        const s = 'zagthdvhbb';
        expect(longestPalindromeSubstring(s)).toBe('bb')
    });
    test('sixteenth case = zzzbb', () => {
        const s = 'zzzbb';
        expect(longestPalindromeSubstring(s)).toBe('zzz')
    });
    test('seventeenth case = aabb', () => {
        const s = 'aabb'
        expect(longestPalindromeSubstring(s)).toBeOneOf(['aa', 'bb'])
    })
    test('eighteenth case = caba', () => {
        const s = 'caba';
        expect(longestPalindromeSubstring(s)).toBe('aba')
    })
});