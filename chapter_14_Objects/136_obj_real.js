const url = {
    base_url: "https://stagging.myapp.com",
    timeout: 5000,
    retries: "chrome",
}
const expected_response = {
    status: 200,
    body: { role: "admin", active: true }
}
console.log(expected_response)