function doneOrNot(board){
  const invalid = (array) => array.slice().sort().join('') !== '123456789';
  const valid = '123456789'

  let square1 = []
  let square2 = []
  let square3 = []
  let square4 = []
  let square5 = []
  let square6 = []
  let square7 = []
  let square8 = []
  let square9 = []

  let column = [];

  console.log(board[0])
  console.log(board[1])
  console.log(board[2])
  console.log(board[3])
  console.log(board[4])
  console.log(board[5])
  console.log(board[6])
  console.log(board[7])
  console.log(board[8])
  console.log('..........test board..............')
//rows
  for (let i = 0; i < 9; i++){
    if (invalid(board[i])){
      console.log('row failed: ', board[i])
      return "Try again!"
    }
//columns
  for (let c = 0; c < 9; c++) {
    column.push(board[c][i])
    } 
    console.log(`column: ${column}`)       
    if (invalid(column)) {
      console.log('column failed: ', column)
      return "Try again!"
    }
//  squares 123
    if (i < 3){
      square1.push(board[i][0]);
      square1.push(board[i][1]);
      square1.push(board[i][2]);
      square2.push(board[i][3]);
      square2.push(board[i][4]);
      square2.push(board[i][5]);
      square3.push(board[i][6]);
      square3.push(board[i][7]);
      square3.push(board[i][8]);
    }  
//squares 456
    if (i > 2 && i < 6){
      square4.push(board[i][0]);
      square4.push(board[i][1]);
      square4.push(board[i][2]);
      square5.push(board[i][3]);
      square5.push(board[i][4]);
      square5.push(board[i][5]);
      square6.push(board[i][6]);
      square6.push(board[i][7]);
      square6.push(board[i][8]);
    }
//squares 789
    if (i > 5 && i < 9){
      square7.push(board[i][0]);
      square7.push(board[i][1]);
      square7.push(board[i][2]);
      square8.push(board[i][3]);
      square8.push(board[i][4]);
      square8.push(board[i][5]);
      square9.push(board[i][6]);
      square9.push(board[i][7]);
      square9.push(board[i][8]);
    }

    console.log('square1:', square1)
    console.log('square2:', square2)
    console.log('square3:', square3)
    console.log('square4:', square4)
    console.log('square5:', square5)
    console.log('square6:', square6)
    console.log('square7:', square7)
    console.log('square8:', square8)
    console.log('square9:', square9)
      
      if(invalid(square1)){
        return "Try again!"
      }
      if(invalid(square2)){
        return "Try again!"
      }
      if(invalid(square3)){
        return "Try again!"
      }
      if(invalid(square4)){
        return "Try again!"
      }
      if(invalid(square5)){
        return "Try again!"
      }
      if(invalid(square6)){
        return "Try again!"

      } else {
        return "Finished!";
    }
  }
};