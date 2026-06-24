let config = {};
config.browser = "chrome";
config.timeout = 3000;
config.testname = "logintest";
console.log(config);
delete config.browser;
console.log(config);
if (config.browser === "crome") {
    console.log("i will execute my tc")
} else {
    console.log("i cant execute the list")

}