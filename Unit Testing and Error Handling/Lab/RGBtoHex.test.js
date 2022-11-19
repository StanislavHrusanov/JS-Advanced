const { expect } = require('chai');
const rgbToHexColor = require('./RGBtoHex');

describe('RGBtoHex', () => {
    it('black to hex', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });
    it('white to hex', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
    it('check functionallity with valid arguments', () => {
        expect(rgbToHexColor(10, 20, 30)).to.equal('#0A141E');
    });
    it('check if first argument is < 0', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.equal(undefined);
    });
    it('check if first argument is > 255', () => {
        expect(rgbToHexColor(256, 0, 0)).to.equal(undefined);
    });
    it('check if second argument is < 0', () => {
        expect(rgbToHexColor(0, -1, 0)).to.equal(undefined);
    });
    it('check if second argument is > 255', () => {
        expect(rgbToHexColor(0, 256, 0)).to.equal(undefined);
    });
    it('check if third argument is < 0', () => {
        expect(rgbToHexColor(0, 0, -1)).to.equal(undefined);
    });
    it('check if third argument is > 255', () => {
        expect(rgbToHexColor(0, 0, 256)).to.equal(undefined);
    });
});