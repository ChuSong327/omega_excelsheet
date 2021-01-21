import React, { useState, useEffect } from "react";
import Row from './components/row';
import Cell from './components/cell';
import Table from './components/table';

function App() {
  return (
    <div>
     <Table Cell={ Cell } Row={ Row } row={ 10 } col={ 6 } />
    </div>
  );
}

export default App;
