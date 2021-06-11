//Get input element 
var input = document.getElementById('select-book');
// Update the placeholder text.
input.placeholder = "Loading books...";

function getData() {

    // Create a new XMLHttpRequest.
    var request = new XMLHttpRequest();
    request.open('GET', 'userData.json', true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            input.placeholder = "Select a book";
            //desactivate the spinner
            document.getElementById("spinner").style.display = "none";
            //Parse JSON
            var books = JSON.parse(request.responseText).books;
            //Create elment options 
            var options = '';
            books.forEach((book, index) => {

                options += '<option value="' + book.title + '" />';
            })


            document.getElementById('books').innerHTML = options;
        } else {
            //  it returned an error
            console.log(request.responseText);
        }
    };

    request.onerror = function () {
        // a connection error 
    };

    request.send();
}


setTimeout(() => getData(), 3000);
