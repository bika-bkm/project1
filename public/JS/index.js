
// ده اللينك بتاع الموقع
// http://localhost:5000/login.html


async function signup(e) {
    e?.preventDefault();

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const email = document.getElementById("email");

    const res = await fetch("https://bkm-production.up.railway.app/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: username.value,
            email: email.value,
            password: password.value
        })
    });

    const data = await res.json();

    alert(data.message);

    if (res.ok) window.location.href = "/index.html";
}

async function login(e) {
    e?.preventDefault();

    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const res = await fetch("https://bkm-production.up.railway.app/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: username.value,
            password: password.value
        })
    });

    const data = await res.json();

    alert(data.message);

    if (res.ok) window.location.href = "/index.html";
}