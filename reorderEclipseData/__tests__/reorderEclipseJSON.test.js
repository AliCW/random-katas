const hybrid = require('../data/all-hybrid-eclipses.json')
const total = require('../data/all-total-eclipses.json')
const annular = require('../data/all-annular-eclipses.json')

const { reorderEclipseJSON } = require('../reorderEclipseJSON');

describe('Re-order the Eclipse JSON file starting from the earliest date', () => {
    test('Test the JSON object is not mutated', () => {
        reorderEclipseJSON(hybrid);
        expect(hybrid[0]['date']).toEqual('2031-11-14');
    });
    test('Testing the Re-order functionality - first hybrid eclipse date', () => {
        let answer = [];
        answer = reorderEclipseJSON(hybrid);
        expect(answer[0]['date']).toBe('1908-12-23');
    });
    test('Testing the Re-order functionality - first hybrid eclipse date coordinate data', () => {
        let answer = [];
        answer = reorderEclipseJSON(hybrid)
        answer[0]['coordinateData'].forEach((element) => {
            expect(element['date']).toBe('1908-12-23');
        });
    });
    test('Testing the Re-order functionality - check date order of each hybrid eclipse object', () => {
        let answer = [];
        answer = reorderEclipseJSON(hybrid);
        expect(answer).toBeSortedBy("date", {ascending: true});      
    });
    test('Testing the Re-order functionality - check date order of each total eclipse object', () => {
        let answer = [];
        answer = reorderEclipseJSON(total);
        expect(answer).toBeSortedBy("date", {ascending: true});
    });
    test('Testing the Re-order functionality - check date order of each annular eclipse object', () => {
        let answer = [];
        answer = reorderEclipseJSON(annular);
        expect(answer).toBeSortedBy("date", {ascending: true});
    });
});
