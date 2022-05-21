// Задание 1
function getArrayParams(...arr) {
  let min = arr[0][0];
  let max = arr[0][0]; 
  let sum = 0;
  let avg = 0;
  let i,j;
  for(i = 0; i < arr.length; i++) {
    for(j = 0; j < arr[i].length; j++) {
    if (arr[i][j] > max ){
    max = arr[i][j];
   } else if (arr[i][j] < min ){
    min = arr[i][j];
   }
   sum += arr[i][j];
  }
  }
 avg = (sum/(i*j)).toFixed(2);
 avg = Number(avg); 
  return { min: min, max: max, avg:  avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  } 
  return sum;
}

function makeWork(arrOfArr, func) {
  let max, locmax;
  for(let i = 0; i < arrOfArr.length; i++) {
    locmax = func(arrOfArr[i]);
   if (i === 0) {
    max = locmax;
   }else if (max < locmax) {
      max = locmax;
    }
    ;
  } 
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  let result;
  for(let i = 0; i < arr.length; i++){
   if (max < arr[i]){
    max = arr[i] 
   } else if (min > arr[i]){
     min = arr[i];
   }
  }
  result = Math.abs(max - min);
  return result;
}
