
// <script type="module" src="index.js"></script>
// access the pre-bundled global API functions
const { invoke } = window.__TAURI__.tauri
document.getElementById('generate_password_button').addEventListener('click', generatePassword);
// now we can call our Command!
// You will see "Welcome from Tauri" replaced
// by "Hello, World!"!
invoke('greet', { name: 'World from javascript' })
    // `invoke` returns a Promise
    .then((response) => {
        window.secret.value = response
    })

// invoke password generation length of 7 and display it
invoke('generate_password', { length: 16 })
    .then((response) => {
        window.password.value = response
    })


function generatePassword() {
    window.password.value = 'test'
    invoke('generate_password', { length: 16 })
        .then((response) => {
            window.password.value = response
        })
}

