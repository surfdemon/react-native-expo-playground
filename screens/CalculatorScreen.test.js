import React, { useState as useStateMock } from 'react';
import CalculatorScreen from './CalculatorScreen';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native';

jest.setTimeout(7000);

describe('Calculator Screen Tests', () => {
    it('CalculatorScreen has one child', () => {
        const tree = renderer.create(<CalculatorScreen />).toJSON();
        expect(tree.children.length).toBe(1);
    });

    it('Calculator Screen renders correctly', () => {
        const tree = renderer.create(<CalculatorScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Clear sums function should clear everything and set sum to 0', () => {
        const tree = renderer.create(<CalculatorScreen />).toJSON();
        expect(tree.children.length).toBe(1);
    });

    it('sum should be 0 to start off with', () => {
        const { getByTestId } = render(<CalculatorScreen />);
        const sumElement = getByTestId('sum');  
        console.log(sumElement.children[0]);  
        expect(sumElement.children[0]).toBe('0');
    });
    
    it('point press function should add a point to the sum to be 0. ', () => {
        const { getByTestId } = render(<CalculatorScreen />);
        fireEvent.press(getByTestId('dot'));
        const sumElement = getByTestId('sum');
        expect(sumElement.children[0]).toBe('0.');
    });
    
    it('pressing .5, sum should be 0.5', () => {
        const { getByTestId } = render(<CalculatorScreen />);
        fireEvent.press(getByTestId('dot'));
        fireEvent.press(getByTestId('5'));
        const sumElement = getByTestId('sum');
        expect(sumElement.children[0]).toBe('0.5');
    });

    it('pressing .5 +, sum should be 0', () => {
        const { getByTestId } = render(<CalculatorScreen />);
        fireEvent.press(getByTestId('dot'));
        fireEvent.press(getByTestId('5'));
        fireEvent.press(getByTestId('+'));
        const sumElement = getByTestId('sum');
        expect(sumElement.children[0]).toBe('0');
    });

    it('pressing .5 + 5, sum should be 5', () => {
        const { getByTestId } = render(<CalculatorScreen />);
        fireEvent.press(getByTestId('dot'));
        fireEvent.press(getByTestId('5'));
        fireEvent.press(getByTestId('+'));
        fireEvent.press(getByTestId('5'));
        const sumElement = getByTestId('sum');
        expect(sumElement.children[0]).toBe('5');
    });

    it('pressing 0.5 + 5 gives sum of 5.5', () => {
        const { getByTestId } = render(<CalculatorScreen />);
        fireEvent.press(getByTestId('dot'));
        fireEvent.press(getByTestId('5'));
        fireEvent.press(getByTestId('+'));
        fireEvent.press(getByTestId('5'));
        fireEvent.press(getByTestId('='));
        sumElement = getByTestId('sum');
        expect(sumElement.children[0]).toBe('5.5');
    });

    it('pressing 5 + 5 gives sum of 10', () => {
        const { getByTestId } = render(<CalculatorScreen />);
        fireEvent.press(getByTestId('5'));
        fireEvent.press(getByTestId('+'));
        fireEvent.press(getByTestId('5'));
        fireEvent.press(getByTestId('='));
        sumElement = getByTestId('sum');
        expect(sumElement.children[0]).toBe('10');
    });

    it('pressing 0.5 * 5 gives sum of 2.5', () => {
        const { getByTestId } = render(<CalculatorScreen />);
        fireEvent.press(getByTestId('dot'));
        fireEvent.press(getByTestId('5'));
        fireEvent.press(getByTestId('*'));
        fireEvent.press(getByTestId('5'));
        fireEvent.press(getByTestId('='));
        sumElement = getByTestId('sum');
        expect(sumElement.children[0]).toBe('2.5');
    });

    it('pressing 5 * 5 gives sum of 25', () => {
        const { getByTestId } = render(<CalculatorScreen />);
        fireEvent.press(getByTestId('5'));
        fireEvent.press(getByTestId('*'));
        fireEvent.press(getByTestId('5'));
        fireEvent.press(getByTestId('='));
        sumElement = getByTestId('sum');
        expect(sumElement.children[0]).toBe('25');
    });

    it('pressing 0.5 / 2 gives sum of 0.25', () => {
        const { getByTestId } = render(<CalculatorScreen />);
        fireEvent.press(getByTestId('dot'));
        fireEvent.press(getByTestId('5'));
        fireEvent.press(getByTestId('/'));
        fireEvent.press(getByTestId('2'));
        fireEvent.press(getByTestId('='));
        sumElement = getByTestId('sum');
        expect(sumElement.children[0]).toBe('0.25');
    });

    it('pressing 10 / 2 gives sum of 5', () => {
        const { getByTestId } = render(<CalculatorScreen />);
        fireEvent.press(getByTestId('1'));
        fireEvent.press(getByTestId('0'));
        fireEvent.press(getByTestId('/'));
        fireEvent.press(getByTestId('2'));
        fireEvent.press(getByTestId('='));
        sumElement = getByTestId('sum');
        expect(sumElement.children[0]).toBe('5');
    });

    it('pressing 10 - 2 gives sum of 5', () => {
        const { getByTestId } = render(<CalculatorScreen />);
        fireEvent.press(getByTestId('1'));
        fireEvent.press(getByTestId('0'));
        fireEvent.press(getByTestId('-'));
        fireEvent.press(getByTestId('5'));
        fireEvent.press(getByTestId('='));
        sumElement = getByTestId('sum');
        expect(sumElement.children[0]).toBe('5');
    });

    it('currentValue should only allow one . to be entered', () => {
        const { getByTestId } = render(<CalculatorScreen />);
        fireEvent.press(getByTestId('dot'));
        fireEvent.press(getByTestId('dot'));
        const sumElement = getByTestId('sum');
        expect(sumElement.children[0]).toBe('0.');
    });
});