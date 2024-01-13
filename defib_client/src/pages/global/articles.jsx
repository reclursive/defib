
const Articles= (props) => {
  return (
    <div>
      {props.articles?.map((article) => (
        <li>{article.title}</li>

      ))}
    </div>
  );
}

export default Articles


// function getNumberOfIslands(binaryMatrix) {
//     function parimCheck(matrix, x, y, rows, cols){
      
//     }
    
//       if(!binaryMatrix.length){
//         return 0
//       }
//       const columns = binaryMatrix.length
//       let total = 0
//       for (i=0; i < binaryMatrix.length; i++){
//         for(j=0; i<columns; i++){
//           if (binaryMatrix[i][j] == 1){
//             parimCheck(binaryMatrix, i, j, binaryMatrix.length, columns){
//               total+= 1
//             }
//           }
//           }
//       }
//       return total
//   }