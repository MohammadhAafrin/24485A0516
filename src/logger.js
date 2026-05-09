import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyYWhpYWFmcmluQGdtYWlsLmNvbSIsImV4cCI6MTc3ODMwOTYwNCwiaWF0IjoxNzc4MzA4NzA0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZTQyMDIxZmYtODJmMi00ZTJiLTkzNzktOWY0ODg1MWI5Y2Q2IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibW9oYW1tYWRoIGFhZnJpbiIsInN1YiI6ImRkNjBhOTFhLTBkOWItNGYyZi1hNzYwLWIzZjMyNWY2ZDJlMSJ9LCJlbWFpbCI6InJhaGlhYWZyaW5AZ21haWwuY29tIiwibmFtZSI6Im1vaGFtbWFkaCBhYWZyaW4iLCJyb2xsTm8iOiIyNDQ4NWEwNzIxIiwiYWNjZXNzQ29kZSI6ImVKZEN1QyIsImNsaWVudElEIjoiZGQ2MGE5MWEtMGQ5Yi00ZjJmLWE3NjAtYjNmMzI1ZjZkMmUxIiwiY2xpZW50U2VjcmV0IjoiS1NTQ2ZOQ2VhRlJqQk5wcSJ9.kD8nJr3P0UUmZZH19h2a2X7KksvXRtY5eMoz7OKLP48";
const Log = async (stack, level, pkg, message) => {

  try {

    const response = await axios({
      method: "post",
      url: "http://4.224.186.213/evaluation-service/logs",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      data: {
        stack,
        level,
        package: pkg,
        message,
      },
    });

    console.log("Log Success:", response.data);

  } catch (error) {

    console.log(
      "Log Error:",
      error.response?.data || error.message
    );

  }
};

export default Log;