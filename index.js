 
 
function doneOrNot(board){
  let rows = [];
  let column = [board[0][0]];
  let columns = [];
  // const test1 = [ '123456789',
  // '123456789',
  // '123456789',
  // '123456789',
  // '123456789',
  // '123456789',
  // '123456789',
  // '123456789',
  // '123456789' ]
     
  for(let i = 0; i<board.length; i++){
console.log(board)
    rows.push(board[i].sort().join(''));

     // column.push(board[0][i++])
    // column.push(board[1][i++])
    // column.push(board[2][i++])
    // column.push(board[3][i++])
    // column.push(board[4][i++])
    // column.push(board[5][i++])
    // column.push(board[6][i++])
    // column.push(board[7][i++])
    // column.push(board[8][i++])

    // columns.push(column)
    
  }
  console.log("rows: ", rows)
   
}
 