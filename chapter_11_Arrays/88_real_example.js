let browser = ['chrome', 'firefox', 'safari', 'opera', 'Edge']
console.log(browser.length);
console.log(browser)
browser.pop();
console.log(browser)
browser.shift();
console.log(browser)
for (let i = 0; i < browser.length; i++) {
    console.log(browser[i])
    if (browser[i] === 'oper') {
        console.log("opera is removed from Selenium")
    }
}

