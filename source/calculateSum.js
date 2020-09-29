function calculateSum(inputArray) {
    


    var total = 0;

    for (let index = 0; index < inputArray.length; index++) {
        const element = inputArray[index];
        // console.log(typeof(element))
        if (typeof(element) == "number"){
            total += element;

        } else {
            throw("Should not accept string type input");
        }
    }

	return total;

}

// console.log(calculateSum([1,2,3,4,5]))
// console.log(calculateSum([1,"2"]));


module.exports = {
    calculateSum
}


