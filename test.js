var new_arr  = ['a', 'b', 'c', 'd'];
var new_arr2 = [...new_arr];
new_arr2.push('e');
console.log(new_arr);  // Output 'a', 'b', 'c', 'd'
console.log(new_arr2); // Output 'a', 'b', 'c', 'd', 'e'