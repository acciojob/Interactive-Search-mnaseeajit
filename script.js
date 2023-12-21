//your JS code here. If required.
function activateSearch() {
            var searchDiv = document.querySelector('.search');
            searchDiv.classList.add('active');

            var inputElement = document.querySelector('.input');
            inputElement.focus();
        }