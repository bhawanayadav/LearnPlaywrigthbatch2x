function getStatus(Code) {
    if (Code >= 200 && Code < 300) return "Success"
    if (Code > 300 && Code < 500) return "Client Error"
    if (Code > 500 && Code < 600) return "Server Error"
}
getStatus(300);
getStatus(200);
getStatus(460);

let r = getStatus(300);
console.log(r)
getStatus(200);
getStatus(460);

