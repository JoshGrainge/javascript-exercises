const removeFromArray = function(array, ...target) {

    for(let i = array.length - 1; i >= 0; i--){
        for(let j = 0; j < target.length; j++){
            if(array[i] === target[j]){
                array.splice(i, 1);
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
