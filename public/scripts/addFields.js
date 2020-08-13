document.querySelector('#add-time')
.addEventListener('click', addField)

var counter = 0

function addField(init) {
    validateNumberOfFields()


    function validateNumberOfFields() {
        if (counter <= 9) {
            const newFieldContainer = document.querySelector('.schedule-items').cloneNode(true)
            document.querySelector('#schedule-item').appendChild(newFieldContainer)
            counter ++
            clearField(newFieldContainer)
        }
        else {
            const error_message = document.querySelector("#error-limit")
            error_message.style.display = 'block'
            error_message.style.transform = 'scale(1)'
        }
    }

    function clearField (value) {
        const fields = value.querySelectorAll('input')
        fields.forEach(function(field) {
            field.value = ""
        });
    }
}