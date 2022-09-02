/**
 * Direction:
 * Find the higher value from the array bellow
 *
 * Expected Result:
 * 8
 */
let numbers = [3, 1, 2, 3, 7, 5, 6, 8, 2, 1];

function result(numbers) {
    // Your Code Here
    for (var i=0;i< numbers.length ;i++)
    {
        if(i ==0)
        {
            var maxNumb = numbers[i];
        }
        else
        {
            if(numbers[i] > maxNumb)
            {
                maxNumb = numbers[i];
            
            }
        }
    }
    return maxNumb;
}

console.log("Expected Result:"+result(numbers));
