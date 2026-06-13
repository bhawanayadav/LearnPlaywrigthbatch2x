function retry(testname, maxRetries = 3, Delay = 300) {
    console.log(`Retrying ${testname} upto ${maxRetries} with ${Delay} delay a part`)
}
retry("Login")
retry("Sign Up", 299, 2000)