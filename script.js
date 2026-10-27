/* =====================================================
   FULL-STACK DEVELOPER WEBSITE
   JAVASCRIPT
   ===================================================== */


/* =====================================================
   1. WELCOME MESSAGE
   ===================================================== */

window.addEventListener("load", function () {
    console.log("Full-Stack Developer website loaded successfully.");
});


/* =====================================================
   2. REGISTRATION FORM
   ===================================================== */

const registerForm = document.querySelector("#register form, #Register form");

if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullname = (document.querySelector("#full-name, #fullname")?.value ?? "").trim();
        const email = (document.querySelector("#email")?.value ?? "").trim();
        const username = (document.querySelector("#username")?.value ?? "").trim();
        const password = document.querySelector("#pass, #password")?.value ?? "";
        const confirmPassword = document.querySelector("#confirm-pass, #confirm_password")?.value ?? "";
        const gender = (document.querySelector("#gender")?.value ?? "").trim();
        const dob = (document.querySelector("#dob")?.value ?? "").trim();
        const terms = document.querySelector("#terms")?.checked ?? false;

        if (
            fullname === "" ||
            email === "" ||
            username === "" ||
            password === "" ||
            confirmPassword === "" ||
            gender === "" ||
            gender === " " ||
            dob === ""
        ) {
            alert("Please fill in all the required fields.");
            return;
        }

        if (password.length < 8) {
            alert("Password must contain at least 8 characters.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (!terms) {
            alert("Please agree to the Terms and Conditions.");
            return;
        }

        // Save the user's name for the dashboard
sessionStorage.setItem("userName", fullname);
sessionStorage.setItem("userEmail", email);

// Open the dashboard page
window.location.href = "dashboard.html";
        
    });
}


/* =====================================================
   3. LOGIN FORM
   ===================================================== */

const loginForm = document.querySelector("#login form, #Login form");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = (document.querySelector("#login_username")?.value ?? "").trim();
        const password = document.querySelector("#login_pass, #login_password")?.value ?? "";

        if (username === "" || password === "") {
            alert("Please enter your username and password.");
            return;
        }

        if (password.length < 8) {
            alert("Password must contain at least 8 characters.");
            return;
        }

        alert("Login successful! Welcome back.");
        loginForm.reset();
    });
}


/* =====================================================
   4. PASSWORD VISIBILITY
   ===================================================== */

const passwordInput = document.querySelector("#pass, #password");
const confirmPasswordInput = document.querySelector("#confirm-pass, #confirm_password");

if (passwordInput) {
    passwordInput.addEventListener("dblclick", function () {
        const showPassword = passwordInput.type === "password";

        passwordInput.type = showPassword ? "text" : "password";

        if (confirmPasswordInput) {
            confirmPasswordInput.type = showPassword ? "text" : "password";
        }
    });
}


/* =====================================================
   5. DYNAMIC STUDENT TABLE
   ===================================================== */

const students = [
    {
        id: 5,
        name: "Sarah Wanjiku",
        email: "sarah@gmail.com",
        course: "JavaScript",
        status: "Active"
    },
    {
        id: 6,
        name: "David Mwangi",
        email: "david@gmail.com",
        course: "React",
        status: "Active"
    }
];

const tableBody = document.querySelector("#students tbody, #Students tbody");

if (tableBody) {
    students.forEach(function (student) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.course}</td>
            <td>${student.status}</td>
        `;

        tableBody.appendChild(row);
    });
}


/* =====================================================
   6. CURRENT YEAR
   ===================================================== */

const footerYear = document.querySelector("footer p:last-of-type");

if (footerYear) {
    footerYear.innerHTML = `&copy; ${new Date().getFullYear()} Full-Stack Developer. All rights reserved.`;
}
