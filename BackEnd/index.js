const express = require("express");
const fs = require("fs");
const cors = require("cors");
const helmet = require("helmet");
const PORT = process.env.PORT || 5000;
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

if (!fs.existsSync("db.json")) {
    fs.writeFileSync("db.json", JSON.stringify({ users: [] }));
}

function readDB() {
    return JSON.parse(fs.readFileSync("db.json", "utf8"));
}

function writeDB(data) {
    fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
}

app.post("/signup", (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password)
        return res.status(400).json({ message: "Missing fields" });

    const db = readDB();


    if (db.users.find(u => u.email === email))
        return res.status(409).json({ message: "Email already exists" });

    const newUser = {
        id: Date.now(),
        username,
        email,
        password,
        createdAt: new Date().toISOString()
    };

    db.users.push(newUser);
    writeDB(db);

    res.json({ message: "User created!" });
});

app.post("/login", (req, res) => {
    const db = readDB();
    const { username, password } = req.body;

    const user = db.users.find(u => u.username === username && u.password === password);

    if (user) res.json({ message: "Login success", userId: user.id });
    else res.status(401).json({ message: "Invalid credentials" });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on port " + PORT);
});
// app.listen(PORT, () => console.log("running"));
