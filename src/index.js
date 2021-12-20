import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Sudoku from './js/sudoku.js';


$(document).ready(function() {
  $('#submit').click(function() {
    let row1 =[];
    let row2 =[];
    let row3 =[];
    let row4 =[];
    let row5 =[];
    let row6 =[];
    let row7 =[];
    let row8 =[];
    let row9 =[];
    $("input[class=row1]").each(function(){
      row1.push(parseInt($(this).val()));
    });
    $("input[class=row2]").each(function(){
      row2.push(parseInt($(this).val()));
    });
    $("input[class=row3]").each(function(){
      row3.push(parseInt($(this).val()));
    });
    $("input[class=row4]").each(function(){
      row4.push(parseInt($(this).val()));
    });
    $("input[class=row5]").each(function(){
      row5.push(parseInt($(this).val()));
    });
    $("input[class=row6]").each(function(){
      row6.push(parseInt($(this).val()));
    });
    $("input[class=row7]").each(function(){
      row7.push(parseInt($(this).val()));
    });
    $("input[class=row8]").each(function(){
      row8.push(parseInt($(this).val()));
    });
    $("input[class=row9]").each(function(){
      row9.push(parseInt($(this).val()));
    });
    let sudoku = new Sudoku(row1, row2, row3, row4, row5, row6, row7, row8, row9
    );
    sudoku.checkRows();
    sudoku.checkColumns();
    // console.log(sudoku.checkColumns())
  });
});

