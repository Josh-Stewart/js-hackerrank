function getSecondLargest(nums) {
    // Complete the function
    let largest = 0
    let secondLargest = 0
    nums.forEach(function (num) {
        if (num > largest) {
            largest = num
        }
        if (num < largest && num > secondLargest) {
            secondLargest = num
        }
    })
    return secondLargest
}

const nums = [0,1,2,3,4,5,6,7,8,9,10]

console.log(getSecondLargest(nums))