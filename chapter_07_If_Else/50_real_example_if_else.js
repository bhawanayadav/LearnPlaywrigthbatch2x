let isLoggedIn = true;
let userRole = "editor";
if (isLoggedIn) {
    if (userRole === "Admin") {
        console.log("Logged in user has all the admins access")
    } else if (userRole === "editor") {
        console.log("logged in user has write access")
    } else if (userRole === "Viewer") {
        console.log("logged in user had only view access")
    }
    else {
        console("logged in user doesnt have access")
    }
} else {
    console.log("you are not logged in")
}