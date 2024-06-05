const { combinePathsUri } = require('../unixPath');

describe('Given an unknown number of string, convert & join these to create a valid unix path', () => {
    test('Given no arguments, return "/"', () => {
        expect(combinePathsUri()).toBe('/');
    });
    test('Given "google", "search", "test" - return "/google/search/test"', () => {
        const str1 = 'google';
        const str2 = 'search';
        const str3 = 'test';
        expect(combinePathsUri(str1, str2, str3)).toBe("/google/search/test");
    });
    test('Given "   /testing", "", "", "  \\  empty", "\\parts/", " and ", "", "with/different\\slashes    ", return "/testing/empty/parts/and/with/different/slashes"', () => {
        expect(combinePathsUri("   /testing", "", "", "  \\  empty", "\\parts/", " and ", "", "with/different\\slashes    ")).toBe("/testing/empty/parts/and/with/different/slashes");
    });
    test('Given " .. ", "/complex/path/with/slashes/inside/", " . ", "\\complex\\path\\with\\back\\slashes\\inside\\", return "/../complex/path/with/slashes/inside/./complex/path/with/back/slashes/inside"', () => {
        expect(combinePathsUri(" .. ", "/complex/path/with/slashes/inside/", " . ", "\\complex\\path\\with\\back\\slashes\\inside\\")).toBe("/../complex/path/with/slashes/inside/./complex/path/with/back/slashes/inside")
    })
    test(`Given "'    ', 'parent\\..\\', ' . ', 'parent\\..\\', '\\complex\\path\\with\\back\\slashes\\inside\\', '\\ / \\', ' / / / / ', ' .. '"`, () => {
        expect(combinePathsUri('    ', 'parent\\..\\', ' . ', 'parent\\..\\', '\\complex\\path\\with\\back\\slashes\\inside\\', '\\ / \\', ' / / / / ', ' .. ')).toBe("/parent/.././parent/../complex/path/with/back/slashes/inside/..");
    });
    test(`Given "'/', '\\', '/', '\\', '/', '\\', '/'", return "/"`, () => {
        expect(combinePathsUri('/', '\\', '/', '\\', '/', '\\', '/')).toBe("/");
    });
    test(`Given "'    ', ' . ', 'search', '/ \\ /', 'part', 'part', ' . '", return "/./search/part/part/."`, () => {
        expect(combinePathsUri('    ', ' . ', 'search', '/ \\ /', 'part', 'part', ' . ')).toBe("/./search/part/part/.");
    });
    test(`Given "' / / / / ', 'search', 'test', 'test', '/ \\ /', 'part'", return "/search/test/test/part"`, () => {
        expect(combinePathsUri(' / / / / ', 'search', 'test', 'test', '/ \\ /', 'part')).toBe("/search/test/test/part")
    });
});

//https://www.codewars.com/kata/564b323d7ff0ed401400015f/train/javascript