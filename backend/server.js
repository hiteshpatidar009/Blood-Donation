import express from "express";
import cors from "cors";

const app = express();

// Enable CORS for all origins (or specify your frontend URL)
app.use(cors());

// Middleware to parse JSON body
app.use(express.json());

// Initial jokes list
let jokes = [
    { id: 1, title: "Hitesh", content: "O+" ,District:"Ujjain"},
    { id: 2, title: "Aman", content: "O-",District:"Indore" },
    { id: 3, title: "Aayush", content: "A+",District:"Indore" },
    { id: 4, title: "Harshit", content: "AB-",District:"Ujjain" },
];

// Basic route to check if the server is running
app.get("/", (req, res) => {
    res.send("Server is ready, Hitesh!");
});

// API route to get jokes
app.get("/api/jokes", (req, res) => {
    res.json(jokes);
});

// API route to handle POST data
app.post("/api/data", (req, res) => {
    const { input, group , District } = req.body;

    if (input && group && District) {
        // Add the new joke to the jokes list
        const newJoke = { id: jokes.length + 1, title: input, content: group ,District:District};
        jokes.push(newJoke);

        console.log("Received input:", input, group,District);
        res.json({ message: "Data received successfully", newJoke });
    } else {
        res.status(400).json({ message: "Invalid data received" });
    }
});

// Set the port, default to 3000 if not provided
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
