const quicksum = (packet) => {
    if(packet.charAt(0) === " ") return 0;
    if(packet.charAt(packet.length - 1) === " ") return 0;
    if(/[0-9]/.test(packet) === true) return 0;
    if(/[a-z]/.test(packet) === true) return 0;

    let output = 0;
    const dict = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        I: 9,
        J: 10,
        K: 11,
        L: 12,
        M: 13,
        N: 14,
        O: 15,
        P: 16,
        Q: 17,
        R: 18,
        S: 19,
        T: 20,
        U: 21,
        V: 22,
        W: 23,
        X: 24,
        Y: 25,
        Z: 26,
    };

    for(let i = 0; i < packet.length; i++) {
        if(/[A-Z]/.test(packet.charAt(i))) {
            let add = i + 1;
            output += dict[packet.charAt(i)] * add;
        };
    };

    return output;
};

module.exports = { quicksum };

//https://www.codewars.com/kata/569924899aa8541eb200003f/train/javascript