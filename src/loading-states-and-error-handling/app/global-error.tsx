'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h1>Application Error</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Reload App</button>
    </div>
  );
}
