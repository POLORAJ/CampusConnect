import { useState } from "react";

function Profile() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Profile</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Your name: {name}</p>
    </div>
  );
}

export default Profile;