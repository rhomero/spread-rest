function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }


  const filterOutOdds2 = (...nums) => nums.filter(num => num % 2 === 0);

  console.log(filterOutOdds(0,1,2,3,4,5,6));
  console.log(filterOutOdds2(0,1,2,3,4,5,6));


  const findMin = (...nums) => Math.min(...nums);
  console.log(findMin(6,3,6,8,9,2));

  const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});


  console.log(mergeObjects({a:1, b:2}, {c:3, d:4}));

  const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(val => val * 2)]

  console.log(doubleAndReturnArgs([1,2,3],4,4)); // [1,2,3,8,8]
  console.log(doubleAndReturnArgs([2],10,4)); // [2, 20, 8]

 const removeRandom = (...items) => {
    let index = Math.floor(Math.random()*items.length);
    console.log(index);
    return items.filter((val, indx) => indx !== index)
 }

 console.log(removeRandom(0,1,2,3,4,5,6))

const extend = (array1, array2) => [...array1, ...array2];
 console.log(extend([0,1],[2,8]));

 const addKeyVal = (obj,key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
 }

 const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
 }

 const combine = (obj1, obj2) => ({...obj1, ...obj2});

 const update = (obj, key, val) => ({...obj, [key]: val});
console.log(update({name:"john", job: "farmer"}, 'name', 'Henry'));
