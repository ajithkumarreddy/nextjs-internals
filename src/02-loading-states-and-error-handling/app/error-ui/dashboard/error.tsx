"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      <button
        type="button"
        style={{
          background: "white",
          color: "black",
          padding: "3px 4px",
          cursor: "pointer",
        }}
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
