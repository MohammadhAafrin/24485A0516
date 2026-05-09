import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

import {
  Container,
  Card,
  CardContent,
  Typography,
  MenuItem,
  Select,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";

function Home() {
  const [notifications, setNotifications] = useState([]);
  const [type, setType] = useState("");

  const fetchNotifications = useCallback(async () => {
    try {
      let url =
        "http://4.224.186.213/evaluation-service/notifications";

      if (type !== "") {
        url += `?notification_type=${type}`;
      }

      const response = await axios.get(url, {
        headers: {
          Authorization:
            "Bearer YOUR_FULL_TOKEN_HERE",
        },
      });

      setNotifications(response.data.notifications || []);
    } catch (error) {
      console.log("Error:", error);
    }
  }, [type]);

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Notifications
      </Typography>

      <Select
        value={type}
        onChange={(e) => setType(e.target.value)}
        displayEmpty
        sx={{ width: 220, mb: 3 }}
      >
        <MenuItem value="">All Notifications</MenuItem>
        <MenuItem value="Event">Event</MenuItem>
        <MenuItem value="Result">Result</MenuItem>
        <MenuItem value="Placement">Placement</MenuItem>
      </Select>

      <Button
        component={Link}
        to="/priority"
        variant="contained"
        sx={{ ml: 2 }}
      >
        Priority Page
      </Button>

      {notifications.length === 0 ? (
        <Typography>No Notifications Found</Typography>
      ) : (
        notifications.map((item) => (
          <Card key={item.ID} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6">
                {item.Type}
              </Typography>

              <Typography sx={{ mt: 1 }}>
                {item.Message}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1 }}
              >
                {item.Timestamp}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
}

export default Home;