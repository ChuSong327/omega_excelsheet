import React, { useState, useEffect } from 'react';

export default function Cell(props) {
    const { row, col, rowIdx, colIdx } = props;

    let defaultCss = {
        height: '20px',
        width: '80px',
        border: '0.5px solid green',
        outline: 'none',
        margin: '0',
        display: 'inline-block',
        color: 'black',
        textAlign: 'left',
        verticalAlign: 'top',
        overflow: 'hidden'
    };

    const [ isEditing, setEdit ] = useState(false);
    const [ value, setValue ] = useState();
    const [ isSelected, setSelected ] = useState(false);

    useEffect(() => {})
    

    const computeCss = (rowIdx, colIdx) => {
        const css = {
            height: '20px',
            width: '80px',
            border: '1px solid green',
            outline: 'none',
            margin: '0',
            display: 'inline-block',
            color: 'black',
            textAlign: 'left',
            verticalAlign: 'top',
            overflow: 'hidden'
        };

        if (rowIdx === 0 || colIdx === 0) {
            css.fontWeight = 'bold';
            css.backgroundColor = 'lightgrey';
            css.textAlign = 'center';
        }
        return css;
    };

    const handleSingleClick = () => {
        setSelected(true);
    };
    

    const renderValue = (rowIdx, colIdx, cellValue) => {
        if (rowIdx === 0) {

        }
        return cellValue;
    };

    const renderDefaultValue = (rowIdx, colIdx) => {
        const letters = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (rowIdx === 0) {
            return letters[colIdx];
        }
        if(colIdx === 0 && rowIdx === 0) {
            return '';
        } else {
            return rowIdx;
        }
    };

    
    return (
        <>
            <span
               id={`${rowIdx}-${colIdx}`} 
               style={ computeCss(rowIdx, colIdx) }
               onClick={ handleSingleClick }

            >
                { rowIdx === 0 || colIdx === 0 ? renderDefaultValue(rowIdx, colIdx) :renderValue(rowIdx, colIdx, value) }    
            </span>
        </>
    )
}