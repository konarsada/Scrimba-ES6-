function add1(nums) {
    console.log(nums);
}
add1(4);

function add2(nums) {
    // arguments object for varaibles passed into a function
    console.log(arguments);
}
add2(4, 5, 7, 8, 12)

function add1(...nums) {
    console.log(nums);
}
add1(4, 5, 7, 8, 12);