
/* ==========================================
   FULL-STACK DEVELOPER WEBSITE
   JQUERY FUNCTIONALITY
   ========================================== */

$(document).ready(function () {

    // 1. Welcome message
    console.log("jQuery loaded successfully!");

    // 2. Smooth navigation
    $("nav a").on("click", function (event) {
        const target = $(this).attr("href");

        if (target && target.startsWith("#") &&
            $(target).length > 0) {

            event.preventDefault();

            $("html, body").animate({
                scrollTop: $(target).offset().top - 20
            }, 600);
        }
    });

    // 3. Highlight sections when clicked
    $("section").on("click", function () {
        $("section").removeClass("selected-section");
        $(this).addClass("selected-section");
    });

    // 4. Registration form validation
    $("#register form").on("submit", function (event) {
        const password = $("#password").val();
        const confirmPassword = $("#confirm_password").val();
        const email = $("#email").val().trim();

        if (!email.includes("@") || !email.includes(".")) {
            event.preventDefault();
            alert("Please enter a valid email address.");
            $("#email").focus();
            return;
        }

        if (password.length < 8) {
            event.preventDefault();
            alert("Password must contain at least 8 characters.");
            $("#password").focus();
            return;
        }

        if (password !== confirmPassword) {
            event.preventDefault();
            alert("Passwords do not match.");
            $("#confirm_password").focus();
            return;
        }

        if (!$("#terms").is(":checked")) {
            event.preventDefault();
            alert("Please accept the Terms and Conditions.");
        }
    });

    // 5. Show and hide registration passwords
    $("#password, #confirm_password").on("dblclick", function () {
        const passwordFields = $("#password, #confirm_password");
        const showPassword =
            passwordFields.first().attr("type") === "password";

        passwordFields.attr(
            "type",
            showPassword ? "text" : "password"
        );
    });

    // 6. Login form validation
    $("#login form").on("submit", function (event) {
        const username = $("#login_username").val().trim();
        const password = $("#login_password").val();

        if (username === "" || password === "") {
            event.preventDefault();
            alert("Please enter your username and password.");
            return;
        }

        if (password.length < 8) {
            event.preventDefault();
            alert("Your password must contain at least 8 characters.");
        }
    });

    // 7. Animate the Register and Login buttons
    $("button").hover(
        function () {
            $(this).stop().fadeTo(150, 0.75);
        },
        function () {
            $(this).stop().fadeTo(150, 1);
        }
    );

    // 8. Add a search box for the students table
    if ($("#students table").length > 0) {
        $("#students table").before(`
            <input
                type="search"
                id="studentSearch"
                placeholder="Search students..."
                aria-label="Search students"
            >
        `);
    }

    // Search students by any text in their row
    $("#studentSearch").on("input", function () {
        const searchText = $(this).val().toLowerCase();

        $("#students tbody tr").each(function () {
            const rowText = $(this).text().toLowerCase();

            $(this).toggle(rowText.includes(searchText));
        });
    });

    // 9. Show a back-to-top button
    $("body").append(`
        <button id="backToTop" type="button">
            ↑ Back to Top
        </button>
    `);

    $("#backToTop").css({
        position: "fixed",
        bottom: "20px",
        right: "20px",
        display: "none",
        padding: "12px 16px",
        border: "none",
        borderRadius: "8px",
        background: "#2563eb",
        color: "#ffffff",
        cursor: "pointer",
        zIndex: 1000
    });

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 300) {
            $("#backToTop").fadeIn(200);
        } else {
            $("#backToTop").fadeOut(200);
        }
    });

    $("#backToTop").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });

});
