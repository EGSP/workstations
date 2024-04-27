
#[tauri::command]
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

use crate::password_generator;
#[tauri::command]
pub fn generate_password(length: usize, symbols: bool, numbers: bool, uppercase: bool, lowercase: bool) -> String {
    password_generator::generate_password_extended(length, symbols, numbers, uppercase, lowercase)
}
