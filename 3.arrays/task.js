function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length === arr2.length){
    result = arr1.every( (item)=>arr2[arr1.indexOf(item)] === item);
  } else result = false;
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter((item)=>(item>0 && item % 3 === 0 )).map((item)=>item*10);

  return resultArr; // array
}
