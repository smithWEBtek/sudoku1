const test1 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]
//"Finished!"
         
const test2 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 9],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]
//"Try again!"

function doneOrNot(board){
  let rows = [];
  let column = [board[0][0]];
  let columns = [];
  const test1 = [ '123456789',
  '123456789',
  '123456789',
  '123456789',
  '123456789',
  '123456789',
  '123456789',
  '123456789',
  '123456789' ]
     
    for(let i = 0; i<board.length; i++){
      rows.push(board[i].sort().join(''));
      column.push(board[0][i++])
      column.push(board[1][i++])
      column.push(board[2][i++])
      column.push(board[3][i++])
      column.push(board[4][i++])
      column.push(board[5][i++])
      column.push(board[6][i++])
      column.push(board[7][i++])
      column.push(board[8][i++])

      columns.push(column)
      
    }
    
    console.log("rows: ", rows)
    console.log("rows = test1?:", (rows.sort().join('') === test1.sort().join('')))
    console.log("columns: ", columns.sort().join(''))

}

doneOrNot(test1)
doneOrNot(test2)