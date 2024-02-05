// Function to create a random password
export function createPass(){
    return Math.random().toString(36) + Math.random().toString(36);
}