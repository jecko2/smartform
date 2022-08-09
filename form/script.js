class FormValidor { 
    constructor(form, fields) {
        this.form = form
        this.fields = fields
    }
    initialize() {
        this.validateOnSubmit()
    }


    validateOnSubmit() {

        this.form.addEventListener("submit", event => {
            event.preventDefault()
            this.fields.forEach((element) => {
                const input = document.querySelector(`#${element}`)
                this.validateFields(input)
            });
        });

    }

    validateFields(field) {
        if (field.value.trim() === "") {
            this.setStatus(field, `${field.previousElementSibling.innerText} cannot be blank`, "error")
        } else {
            this.setStatus(field, null, "success")
        }
    }
    
 }



const form = document.querySelector(".form");
const fileds = ["username", "email", "password1", "password2"]

const accForm = new FormValidor(form, fileds);
accForm.initialize();