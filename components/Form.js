import { useState } from "react";

export default function Form() {
  const [username, setUsername] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/form", {
      body: JSON.stringify({
        username,
      }),
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
    });
    const result = await response.json();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="username">Username : </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      </form>
    </>
  );
}
