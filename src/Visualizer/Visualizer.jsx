import React from 'react';
import * as sortingAlgorithms from '../SortingAlgorithms/sortingAlgorithms.js';
import './Visualizer.css';

const arraySize = 40;

export default class Visualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < arraySize; i++) {
            array.push(randInt(5, 700));

        }
        this.setState({ array });
    }

    mergeSort() {
        const array = sortingAlgorithms.mergeSort(this.state.array);
        array[1] = 0;
        this.setState({ array });
    }

    quickSort() { }

    heapSort() { }

    bubbleSort() {
        const sortedArray = sortingAlgorithms.bubbleSort(this.state.array);
        console.log(sortedArray);
    }

    render() {
        const { array } = this.state;   
        
        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{ width: (window.innerWidth-(2*arraySize)-100)/arraySize, height: `${value}px` }}></div>
                ))}
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            </div>
        );
    }
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}