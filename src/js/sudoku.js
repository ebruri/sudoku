export default class Sudoku {
  constructor(row1, row2, row3, row4, row5, row6, row7, row8, row9
  ) {
    this.row1 = row1;
    this.row2 = row2;
    this.row3 = row3;
    this.row4 = row4;
    this.row5 = row5;
    this.row6 = row6;
    this.row7 = row7;
    this.row8 = row8;
    this.row9 = row9;
  }

  checkRows() {
    let passingRows = 0;
    Object.values(this).forEach(function(row) {
      if (new Set(row).size === row.length) {
        passingRows ++;
      } 
    });
    if (passingRows === 9) {
      return true; 
    } else {
      return false;
    }
  }

  checkColumns() {
    let passingColumns = 0;
    let newArray = [];
    for (let i = 0 ; i<9 ; i++){
      var array =[];
      Object.values(this).forEach(function(row) {
        array.push(row[i]);
      });
      if (new Set(array).size === array.length) {
        passingColumns ++; 
      }
      newArray.push(array);
    } 
    console.log(passingColumns);
    console.log(newArray);
    if (passingColumns === 9) {
      return true; 
    } else {
      return false;
    }  
  }
}

checkGrids() {
  
}