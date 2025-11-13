// Bài 1. Viết hàm sumArray(arr) trả về tổng các phần tử trong mảng.
// Input: arr = [1, 2, 3, 4]
// Output: 10
let arr_1 = [1, 2, 3, 4];
const sumArray = (arr) => arr.reduce((total, item) => total + item, 0);


// Bài 2. Viết hàm countOccurrences(arr, value) đếm số lần xuất hiện của value trong mảng arr
// Input: arr = [1, 2, 2, 3, 2], value = 2
// Output: 3
let arr_2 = [1, 2, 2, 3, 2];
const countOccurrences = (arr, value) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  return count;
};
console.log(countOccurrences(arr_2, 3)); // Kết quả: 1
// Cách 2: Sử dụng filter
const countOccurrences_2 = (arr, value) => arr.filter(item => item === value).length;
console.log(countOccurrences_2(arr_2, 3)); // Kết quả: 1
// Cách 3: Sử dụng reduce
const dem = (arr_2, value) => arr_2.reduce((dem, item) => item === value ? dem + 1 : dem, 0);
console.log(dem(arr_2, 2)); // Kết quả: 3


// Bài 3. Viết hàm removeDuplicates(arr) trả về mảng không có phần tử trùng lặp.
// Input: arr = [1, 2, 2, 3, 4, 4, 6, 2, 3, 6]
// Output: [1, 2, 3, 4, 6]
let arr_3 = [1, 2, 2, 3, 4, 4, 6, 2, 3, 6];
const removeDuplicates = (arr) => {
  let result = []
  arr.forEach(x => {
    if (!result.includes(x)) {
      result.push(x)
    }
  })
  return result
}
console.log(removeDuplicates(arr_3)); // Kết quả: [1, 2, 3, 4, 6]   
// Cách 2 sử dụng filter và indexOf
const removeDuplicates_2 = (arr) => arr.filter((item, index) => arr.indexOf(item) === index);
console.log(removeDuplicates_2(arr_3)); // Kết quả: [1, 2, 3, 4, 6]


// Bài 4. Viết hàm flattenArray(arr) chuyển một mảng gồm các phần tử mảng 2D (2 chiều) thành mảng 1D (1 chiều)
// Input: arr = [[1, 2], [3, 4]]
// Output: [1, 2, 3, 4]
let arr_4 = [[1, 2], [3, 4]];
const flattenArray = (arr) => arr_4.reduce((flat, item) => flat.concat(item), []);
console.log(flattenArray(arr_4)); // Kết quả: [1, 2, 3, 4]
// Cách 2 sử dụng flat()
const flattenArray_2 = (arr) => arr.flat();
console.log(flattenArray_2(arr_4)); // Kết quả: [1, 2, 3, 4]


// Bài 5. Viết hàm isSymmetric(arr) kiểm tra xem mảng có đối xứng hay không.
// Input: arr = [1, 2, 3, 2, 1]
// Output: true
let arr_5 = [1, 2, 3, 2, 1];
const isSymmetric = (arr) => arr.slice().reverse().join('') === arr.join('');
console.log(isSymmetric(arr_5)); // Kết quả: true


// Bài 6. Viết hàm findSecondLargest(arr) trả về giá trị lớn thứ hai trong mảng.
// Input: arr = [3, 1, 4, 2, 4]
// Output: 3
let arr_6 = [3, 1, 4, 2, 4];
function findSecondLargest(arr) {
  const max = Math.max(...arr);
  const filteredArr = arr.filter(num => num !== max);
  return Math.max(...filteredArr);
}
console.log(findSecondLargest(arr_6)); // Kết quả: 3


// Bài 7. Viết hàm sortProductsByPrice(products) sắp xếp danh sách sản phẩm theo giá tăng dần.
// Input:
// products = [
//     { name: 'Product A', price: 30 },
//     { name: 'Product B', price: 20 },
//     { name: 'Product C', price: 50 }
// ];
// Output:
// [
//     { name: 'Product B', price: 20 },
//     { name: 'Product A', price: 30 },
//     { name: 'Product C', price: 50 }
// ]
const products = [
  { name: 'Product A', price: 30 },
  { name: 'Product B', price: 20 },
  { name: 'Product C', price: 50 }
];
// Cách 1: 
function sortProductsByPrice(products) {
  let arr = [...products]; 
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j].price > arr[j + 1].price) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(sortProductsByPrice(products));
// Cách 2:
function sortProductsByPrice(products) {
  return products.sort((a, b) => a.price - b.price);
}
console.log(sortProductsByPrice(products));



// Bài 8. Viết hàm findMostExpensiveProduct(products) trả về sản phẩm có giá lớn nhất.
// Input:
// products = [
//     { name: 'Product A', price: 30 },
//     { name: 'Product B', price: 20 },
//     { name: 'Product C', price: 50 }
// ];
// Output:
// { name: 'Product C', price: 50 }
const products_8 = [
  { name: 'Product A', price: 30 },
  { name: 'Product B', price: 20 },
  { name: 'Product C', price: 50 }
];
let arr = products_8;
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j].price > arr[j + 1].price) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr[arr.length - 1]);
// Cách 2:
const findMostExpensiveProduct = (products) =>
  products.reduce((max, item) => item.price > max.price ? item : max);
console.log(findMostExpensiveProduct(products_8));



// Bài 9. Viết hàm groupByType(arr) gom nhóm các phần tử trong mảng dựa theo loại (type).
// Input:
// arr = [
//     { type: 'fruit', name: 'apple' },
//     { type: 'vegetable', name: 'carrot' },
//     { type: 'fruit', name: 'banana' }
// ];
// Output:
// {
//     fruit: ['apple', 'banana'],
//     vegetable: ['carrot']
// }
let arr_9 = [
    { type: 'fruit', name: 'apple' },
    { type: 'vegetable', name: 'carrot' },
    { type: 'fruit', name: 'banana' }
];
const groupByType = (arr) => {
  return arr.reduce((grouped, item) => {
    if (!grouped[item.type]) {
      grouped[item.type] = [];
    }
    grouped[item.type].push(item.name);
    return grouped;
  }, {});
};
console.log(groupByType(arr_9));

// Bài 10. Viết hàm isSubset(arr1, arr2) kiểm tra xem arr2 có phải là mảng con của arr1 hay không.
// Input: arr1 = [1, 2, 3, 4], arr2 = [2, 4]
// Output: true
let arr1 = [1, 2, 3, 4];
let arr2 = [2, 4];
const isSubset = (arr1, arr2) => arr2.every(item => arr1.includes(item));
console.log(isSubset(arr1, arr2)); // Kết quả: true

// Bài 11. Viết hàm findMaxKey(obj) trả về key có giá trị số lớn nhất trong object.
// Input: obj = { a: 10, b: 20, c: 15 }
// Output: 'b'
const obj = { a: 10, b: 20, c: 15 };
function findMaxKey(obj) {
  const keys = Object.keys(obj);
  let maxKey = keys[0];
  for (let key of keys) {
    if (obj[key] > obj[maxKey]) {
      maxKey = key;
    }
  }
  return maxKey;
}
console.log(findMaxKey(obj)); // Kết quả: 'b'


// Bài 12. Viết hàm mergeObjectsSumValues(obj1, obj2) hợp hai object, nếu key trùng nhau thì cộng giá trị.
// Input:
// obj1 = { a: 10, b: 20 };
// obj2 = { b: 30, c: 40 };
// Output: { a: 10, b: 50, c: 40 }


// Bài 13. Viết hàm countElements(arr) trả về object đếm số lần xuất hiện của mỗi phần tử trong mảng.
// Input: arr = ['a', 'b', 'a', 'c', 'b', 'a']
// Output: { a: 3, b: 2, c: 1 }
function countElements(arr) {
 const result = {};
 for (let item of arr) {
    if (result[item]) {
        result[item]++;
    } else {
        result[item] = 1;
    }   
  } 
  return result;
}
console.log(countElements(['a', 'b', 'a', 'c', 'b', 'a'])); // { a: 3, b: 2, c: 1 }


// Bài 14. Viết hàm cleanObject(obj) xóa các key có giá trị là null hoặc undefined.
// Input: obj = { a: 1, b: null, c: undefined, d: 4 }
// Output: { a: 1, d: 4 }
function cleanObject(obj) {
    const result = {};
    for (let key in obj) {
        if (obj[key] !== null && obj[key] !== undefined) {
            result[key] = obj[key];
        }
    }
    return result;
}
console.log(cleanObject({ a: 1, b: null, c: undefined, d: 4 })); // { a: 1, d: 4 }

// Bài 15. Viết hàm hasDuplicate(arr) kiểm tra xem mảng có phần tử lặp lại hay không.
// Input: arr = [1, 2, 3, 4, 2]
// Output: true

// Bài 16. Viết hàm sumByGroup(arr, key) tính tổng giá trị theo nhóm.
// Input:
// arr = [
//     { type: 'fruit', price: 10 },
//     { type: 'vegetable', price: 20 },
//     { type: 'fruit', price: 30 }
// ];
// Output:
// {
//     fruit: 40,
//     vegetable: 20
// }


// Bài 17. Viết hàm uniqueValues(arr1, arr2) trả về mảng các giá trị duy nhất từ hai mảng.
// Input: arr1 = [1, 2, 3], arr2 = [3, 4, 5]
// Output: [1, 2, 3, 4, 5]


// Bài 18. Viết hàm isPermutation(arr1, arr2) kiểm tra xem hai mảng có phải là hoán vị của nhau không.
// Input: arr1 = [1, 2, 3], arr2 = [3, 2, 1]
// Output: true


// Bài 19. Viết hàm findLongestString(arr) trả về chuỗi có độ dài lớn nhất trong mảng.
// Input: arr = ['abc', 'abcd', 'a']
// Output: 'abcd'

// Bài 20. Viết hàm intersection(arr1, arr2) trả về mảng chứa các giá trị chung giữa hai mảng.
// Input: arr1 = [1, 2, 3], arr2 = [2, 3, 4]
// Output: [2, 3]

// Bài 21. Viết hàm filterByMinValue(arr, minValue) để xóa tất cả các phần tử có giá trị nhỏ hơn minValue.

// Input: arr = [5, 10, 15, 20], minValue = 12
// Output: [15, 20]


// Bài 22.  Viết hàm findLongestValue(obj) để tìm giá trị có độ dài lớn nhất trong một object.

// Input: obj = { a: 'cat', b: 'elephant', c: 'dog' }
// Output: 'elephant'



// Bài 23. Viết hàm groupByFirstLetter(arr) để gom nhóm các chuỗi theo chữ cái đầu tiên.

// Input: arr = ['apple', 'banana', 'avocado', 'blueberry']
// Output:
// {
//     a: ['apple', 'avocado'],
//     b: ['banana', 'blueberry']
// }

// Bài 24. Viết hàm getAdults(people) để trả về danh sách người lớn (tuổi >= 18) từ một danh sách người.

// Input:
// people = [
//     { name: 'Alice', age: 17 },
//     { name: 'Bob', age: 20 },
//     { name: 'Charlie', age: 16 },
//     { name: 'David', age: 22 }
// ];

// Output:
// [{ name: 'Bob', age: 20 }, { name: 'David', age: 22 }]

// Bài 25. Viết hàm convertToArray(obj) để chuyển đổi một object thành mảng các cặp [key, value].

// Input: obj = { a: 1, b: 2, c: 3 }
// Output: [['a', 1], ['b', 2], ['c', 3]]

// Bài 26. Viết hàm sortStringsByLength(arr) để sắp xếp mảng chuỗi theo độ dài tăng dần.

// Input: arr = ['a', 'ccc', 'bb']
// Output: ['a', 'bb', 'ccc']


// Bài 27. Viết hàm sumByKey(arr, key) để tính tổng giá trị là số của một key được chỉ định trong danh sách object.

// Input:
// arr = [
//     { type: 'fruit', price: 10 },
//     { type: 'vegetable', price: 20 },
//     { type: 'fruit', price: 30 }
// ];
// key = 'price';
// Output: 60
// Bài 28. Viết hàm countWords(str) để đếm số từ trong một chuỗi.

// Input: str = "Hello world! Welcome to JavaScript"
// Output: 5

// Bài 29. Viết hàm findMinKey(obj) để tìm key có giá trị số nhỏ nhất trong object.

// Input: obj = { a: 100, b: 20, c: 50 }
// Output: 'b'
