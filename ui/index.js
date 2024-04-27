
// <script type="module" src="index.js"></script>
// access the pre-bundled global API functions
const { invoke } = window.__TAURI__.tauri
document.getElementById('generate_password_button').addEventListener('click', generatePassword);

// update length_value from slider value
document.getElementById('length_slider').addEventListener('input', (event) => {
    document.getElementById('length_value').textContent = event.target.value
})

// now we can call our Command!
// You will see "Welcome from Tauri" replaced
// by "Hello, World!"!
invoke('greet', { name: 'World from javascript' })
    // `invoke` returns a Promise
    .then((response) => {
        window.secret.value = response
    })

generatePassword();
// invoke password generation length of 7 and display it
// invoke('generate_password', { length: 16 })
//     .then((response) => {
//         window.password.value = response
//     })

function generatePassword() {
    let length = Number(document.getElementById('length_slider').value)
    let has_symbols = document.getElementById('has_symbols').checked
    let has_numbers = document.getElementById('has_numbers').checked
    let is_lowercase = document.getElementById('is_lowercase').checked
    let is_uppercase = document.getElementById('is_uppercase').checked

    invoke('generate_password', {
        length: length,
        symbols: has_symbols, numbers: has_numbers, lowercase: is_lowercase, uppercase: is_uppercase
    })
        .then((response) => {
            window.password.value = response
        })
}

