import { checkPropTypes } from 'prop-types';
import React from 'react';

export default function Table(props) {
    const { Row, Cell, row, col } = props;

    const generateRows= (Row, Cell, row, col) => {
        const cols = [];
        for (let i = 0; i < row; i++) {
            cols.push(
                <div key={`row-${i}`}>
                    <Row 
                        Cell={ Cell }
                        row={ row }
                        col={ col }
                        rowIdx={i} />
                </div>
            );
        }
        return cols;
    }

    return (
        <>
            { generateRows(Row, Cell, row, col) }
        </>
    )
};