import React from 'react';

export default function Row(props) {
    const { Cell, row, col, rowIdx } = props;

    const generateCells = (Cell, row, col) => {
        const cells = [];
        for (let i = 0; i < col; i++) {
            cells.push(
                <Cell
                    key={`col-${i}`}
                    row={ row }
                    col={ col }
                    rowIdx={ rowIdx }
                    colIdx={ i }
                />
            )
        }
        return cells;
    }


    return (
        <>
           { generateCells(Cell, row, col, rowIdx) }
        </>
    )
}