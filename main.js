/**
 * Call the API to fetch dog images
 * @param {numDogs} number of Dog Images 
 */
function getDogPics(numDogs) {
    fetch(`https://dog.ceo/api/breeds/image/random/${numDogs}`)
    .then(response=>response.json())
    .then(responseJson=>console.log(responseJson))
    .catch(error=>alert("Oops! something went wrong"));

}

/**
 * Add a listener for form submission
 */
function addSubmitListener() {
    $('form').submit(event=> {
        event.preventDefault();
        let numDogs = $('#num-dogs').val();
        if(!numDogs) {
            alert("Enter a valid number for dog images");
            return;
        } 
        getDogPics(numDogs);
    });
}


$(function(){
    addSubmitListener();
});