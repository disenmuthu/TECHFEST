function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let session = document.getElementById("session").value;

    if (!name || !email || !contact || !session) {
        alert("Please fill in all fields.");
        return;
    }

    if (!email.includes("@")) {
        alert("Invalid email format.");
        return;
    }

    document.getElementById("successMessage").classList.remove("d-none");
}
