const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const TOKEN = "PASTE_YOUR_TOKEN_HERE";

app.post("/log", async (req, res) => {

  try {

    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      req.body,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);

  } catch (error) {

    res.status(500).json({
      error: error.response?.data || error.message,
    });

  }

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});