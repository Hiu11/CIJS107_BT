// Bài 1: In ra chuỗi sử dụng Template Literals, kết hợp Function như sau:
// Input:
// productInfo("Sách", 20000);
// Output:
// "Sản phẩm: Sách, Giá: 20,000 VNĐ"
function productInfo(name, price) {
    return `Sản phẩm: ${name}, Giá: ${price.toLocaleString('vi-VN')} VNĐ`;
}
console.log(productInfo("Sách", 20000)); // "Sản phẩm: Sách, Giá: 20,000 VNĐ"


// Bài 2: Viết hàm chào người dùng theo tên
// Input:
// greet("An");
// Output:
// "Xin chào, An!"
function greet(name) {
    return `Xin chào, ${name}!`;
}   
console.log(greet("An")); // "Xin chào, An!"


// Bài 3: Tính tổng các số từ 1 đến n
// Input:
// sumUpTo(5);
// Output:
// 15
function sumUpTo(n) {
    let sum = 0;  
    for (let i = 1  ; i<=n; i++) {
        sum +=i
    }
    return sum;
}
console.log(sumUpTo(5)); // 15


// Bài 4; Tính bình phương một số
// Input:
// square(6);
// Output:
// 36
function square (number) {
    return number * number;
}
console.log(square(6)); // 36


// Bài 5: Kiểm tra số chẵn hay lẻ
// Input:
// isEven(7);
// Output:
// false
function isEven(number) {
    return number % 2 === 0;
}   
console.log(isEven(7)); // false


// Bài 6: Viết hàm trả về phần tử đầu tiên của mảng
// Input:
// firstElement([1, 2, 3]);
// Output:
// 1
function firstElement(arr) {
    return arr[0];
}   
console.log(firstElement([1, 2, 3])); // 1


// Bài 7: Sử dụng Rest Operator để tính tổng
// Input:
// sum(1, 2, 3, 4);
// Output:
// 10
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10


// Bài 8: Tách giá trị từ đối tượng
// Input:
// const user = { name: "Nam", age: 30 };
// Output:
// Name: Nam, Age: 30
const user = { name: "Nam", age: 30 };
const { name, age } = user;
console.log(`Name: ${name}, Age: ${age}`); // Name: Nam, Age: 30


// Bài 9: In ra danh sách tên từ mảng đối tượng
// Input:
// const people = [{ name: "And" }, { name: "Bình" }];
// Output:
// "An, Bình"
const people = [{ name: "An" }, { name: "Bình" }];
const peopleNames = people.map(person => person.name).join(", ");
console.log(peopleNames); // "An, Bình"


// Bài 10: Tính độ dài chuỗi
// Input:
// stringLength("Hello World");
// Output:
// 11
function stringLength(str) {
    return str.length;
}   
console.log(stringLength("Hello World")); // 11


// Bài 11: Chuyển đổi chuỗi thành chữ hoa
// Input:
// toUpperCase("javascript");
// Output:
// "JAVASCRIPT”
function toUpperCase(str) {
    return str.toUpperCase();
}
console.log(toUpperCase("javascript")); // "JAVASCRIPT”


// Bài 12: Chuyển đổi số sang dạng tiền tệ
// Input:
// formatCurrency(1000000);
// Output:
// "1,000,000 VNĐ"
function formatCurrency(amount) {
    return `${amount.toLocaleString('vi-VN')} VNĐ`;
}
console.log(formatCurrency(1000000)); // "1,000,000 VNĐ"


// Bài 13: Tính giá trị lớn nhất trong mảng
// Input:
// max([10, 5, 20, 8]);
// Output:
// 20
function max(arr) {
    return Math.max(...arr);
}   
console.log(max([10, 5, 20, 8])); // 20


// Bài 14: Viết hàm kiểm tra số nguyên tố
// Input:
// isPrime(7);
// Output:
// true
function isPrime(number) {
    if (number < 2) return false;     
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // true


// Bài 15: In ra chuỗi n lần
// Input:
// repeatString("Hello", 3);
// Output:
// "Hello Hello Hello"
function repeatString(str, times) {
    return (str + ' ').repeat(times).trim();
}
console.log(repeatString("Hello", 3)); // "Hello Hello Hello"


// Bài 16. Tính tổng số lẻ trong mảng
// Input:
// sumOdd([1, 2, 3, 4]);
// Output:
// 4
function sumOdd(arr) {
    return arr.filter(num => num % 2 !== 0).reduce((total, num) => total + num, 0);
}
console.log(sumOdd([1, 2, 3, 4])); // 4


// Bài 17: Tính tổng các số lớn hơn n
// Input:
// sumGreaterThan([1, 2, 3, 4], 2);
// Output:
// 7
function sumGreaterThan(arr, n) {
    return arr.filter(num => num > n).reduce((total, num) => total + num, 0);
}
console.log(sumGreaterThan([1, 2, 3, 4], 2)); // 7


// Bài 18: Chuyển đổi ngày từ dạng YYYY-MM-DD sang DD/MM/YYYY
// Input:
// formatDate("2024-11-28");
// Output:
// "28/11/2024"
function formatDate(dateStr) {
    const [year, month, day] = dateStr.split("-");
    return `${day}/${month}/${year}`;
}
console.log(formatDate("2024-11-28")); // "28/11/2024"


// Bài 19: Lấy 3 phần tử đầu tiên trong mảng
// Input:
// firstThree([1, 2, 3, 4, 5]);
// Output:
// [1, 2, 3]
function firstThree(arr) {
    return arr.slice(0, 3);
}
console.log(firstThree([1, 2, 3, 4, 5])); // [1, 2, 3]


// Bài 20: Kiểm tra xem chuỗi có chứa ký tự cụ thể hay không
// Input:
// containsChar("javascript", "j");
// Output:
// true
function containsChar(str, char) {
    return str.includes(char);
}   
console.log(containsChar("javascript", "j")); // true


// Bài 21: Gộp hai mảng thành một
// Input:
// mergeArrays([1, 2], [3, 4]);
// Output:
// [1, 2, 3, 4]
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2], [3, 4])); // [1, 2, 3, 4]


// Bài 22: Đếm số lần xuất hiện của một phần tử trong mảng
// Input:
// countOccurrences([1, 2, 2, 3, 2], 2);
// Output:
// 3
function countOccurrences(arr, dem) {
    return arr.filter(num => num === dem).length;
}   
console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // 3

// Bài 23: Lọc các số lẻ từ mảng
// Input:
// filterOdd([1, 2, 3, 4]);
// Output:
// [1, 3]
function filterOdd(arr) {
    return arr.filter(a => a % 2 !== 0);
}
console.log(filterOdd([1, 2, 3, 4])); // [1, 3]


// Bài 24: Tìm các số lớn hơn một giá trị cho trước
// Input:
// greaterThan([1, 2, 3, 4], 2);
// Output:
// [3, 4]
function greaterThan(arr, n) {
    return arr.filter(a => a > n);
}
console.log(greaterThan([1, 2, 3, 4], 2)); // [3, 4]


// Bài 25: Tính giai thừa của một số
// Input:
// factorial(5);
// Output:
// 120
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); // 120


// Bài 26: Tách riêng số chẵn và số lẻ trong mảng
// Input:
// separateEvenOdd([1, 2, 3, 4]);
// Output:
// { even: [2, 4], odd: [1, 3] }
function separateEvenOdd(arr) {
    const even = arr.filter(a => a % 2 === 0);
    const odd = arr.filter(a => a % 2 !== 0);
    return { even, odd };
}
console.log(separateEvenOdd([1, 2, 3, 4])); // { even: [2, 4], odd: [1, 3] }

// Bài 27: Sắp xếp mảng tăng dần
// Input:
// sortAsc([3, 1, 4, 2]);
// Output:
// [1, 2, 3, 4]
function sortAsc(arr) {
    return arr.slice().sort((a, b) => a - b);
}   
console.log(sortAsc([3, 1, 4, 2])); // [1, 2, 3, 4]


// Bài 28: Tính tổng các số ở vị trí chẵn trong mảng
// Input:
// sumEvenIndex([1, 2, 3, 4]);
// Output:
// 4



// Bài 29: Tạo một mảng các số nhân với 2
// Input:
// multiplyByTwo([1, 2, 3]);
// Output:
// [2, 4, 6]


// Bài 30: Tạo một chuỗi từ mảng string
// Input:
// arrayToString(["a", "b", "c"]);
// Output:
// "abc"


