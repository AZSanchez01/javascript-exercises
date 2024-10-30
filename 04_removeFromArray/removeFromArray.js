const removeFromArray = function(givenArray, ...removedElements) {

    function checkRemovedElements (given) {
        return !(removedElements.includes(given));
    }
    return givenArray.filter(checkRemovedElements);

}


// Do not edit below this line
module.exports = removeFromArray;
