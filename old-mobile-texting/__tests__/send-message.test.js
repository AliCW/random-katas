const { sendMessage } = require("../send-message");

describe(`Given a string, return the number chain required to text out the string on an old mobile phone, the numerical layout is as follows:
            -------------------------
        |   1   |   2   |   3   |  <-- hold a key to type a number
        |  .,?! |  abc  |  def  |  <-- press a key to type a letter
        -------------------------
        |   4   |   5   |   6   |  <-- Top row
        |  ghi  |  jkl  |  mno  |  <-- Bottom row
        -------------------------
        |   7   |   8   |   9   |
        |  pqrs |  tuv  |  wxyz |
        -------------------------
        |   *   |   0   |   #   |  <-- hold for *, 0 or #
        |  '-+= | space |  case |  <-- press # to switch between upper/lower case
        -------------------------`, () => {
    test("Given 'hey', return '4433999'", () => {
        const string = "hey";
        expect(sendMessage(string)).toBe("4433999");
    });
    test("Given 'one two three', return '666 6633089666084477733 33'", () => {
        const string = "one two three";
        expect(sendMessage(string)).toBe("666 6633089666084477733 33");
    });
    test("Given 'Hello World!', return '#44#33555 5556660#9#66677755531111'", () => {
        const string = "Hello World!";
        expect(sendMessage(string)).toBe("#44#33555 5556660#9#66677755531111");
    });
    test("Given 'Def Con 1!', return '#3#33 3330#222#666 6601-1111'", () => {
        const string = "Def Con 1!";
        expect(sendMessage(string)).toBe("#3#33 3330#222#666 6601-1111");
    });
    test("Given 'A-z', return '#2**#9999'", () => {
        const string = "A-z";
        expect(sendMessage(string)).toBe("#2**#9999");
    });
    test("Given '1984', return '1-9-8-4-'", () => {
        const string = "1984";
        expect(sendMessage(string)).toBe("1-9-8-4-");
    });
    test("Given '#NotMyPresident', return '#-#66#6668#6#999#7#7773377774443 33668'", () => {
        const string = "#NotMyPresident";
        expect(sendMessage(string)).toBe("#-#66#6668#6#999#7#7773377774443 33668");
    });
    test("Given '', return ''", () => {
        const string = "";
        expect(sendMessage(string)).toBe("");
    });
    test("Given '555-555-1234' return '5-5-5-**5-5-5-**1-2-3-4-'", () => {
        const string = "555-555-1234";
        expect(sendMessage(string)).toBe("5-5-5-**5-5-5-**1-2-3-4-");
    });
    test("Given 'a2D3', return '2 2-#3 3-'", () => {
        const string = "a2D3";
        expect(sendMessage(string)).toBe("2 2-#3 3-");
    });
    test("Given '.,?! '-+=*#', return '1 11 111 11110* ** *** **** *-#-'", () => {
        const string = ".,?! '-+=*#";
        expect(sendMessage(string)).toBe("1 11 111 11110* ** *** **** *-#-")
    })
});

//https://www.codewars.com/kata/5ca24526b534ce0018a137b5/train/javascript