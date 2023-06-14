"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div style={{ marginTop: "5rem" }}>
      <h2>Something went wrong!</h2>
      <p>Error: {error.message}</p> {/* Displaying the error message */}
      <div style={{ marginTop: "5rem" }}>Complete Error: {error}</div>{" "}
      {/* Displaying the error message */}
      
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
