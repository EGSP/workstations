
#[tauri::command]
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

use crate::password_generator;
#[tauri::command]
pub fn generate_password(length: usize) -> String {
    password_generator::generate_password(length)
}
