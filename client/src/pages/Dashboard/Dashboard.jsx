import { useState } from "react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Welcome from "../../components/ui/Welcome";

function Dashboard() {
  const [notifications, setNotifications] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");

  return (
    <div className="page">

      <h1>Dashboard</h1>

      <Welcome
        name={name || "Student"}
        project="Campus Connect"
      />

      <Card
        title="Login Status"
        description="This demonstrates conditional rendering."
      >
        {loggedIn ? (
          <p>Welcome! You are logged in.</p>
        ) : (
          <p>Please Login.</p>
        )}

        <Button onClick={() => setLoggedIn(!loggedIn)}>
          {loggedIn ? "Logout" : "Login"}
        </Button>
      </Card>

      <Card
        title="Notifications"
        description="This demonstrates state and button events."
      >
        <p>Notifications: {notifications}</p>

        <Button onClick={() => setNotifications(notifications + 1)}>
          Add Notification
        </Button>
      </Card>

      <Card
        title="Enter Your Name"
        description="This demonstrates user input."
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <p>Your name: {name}</p>
      </Card>

    </div>
  );
}

export default Dashboard;