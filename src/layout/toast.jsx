import React from "react";

export function showToast(message) {
  document.getElementById("toast").innerHTML = message;
  document.getElementById("toast").style.display = "block";
  document.getElementById("toast").style.opacity = 1;
  setInterval(() => {
    document.getElementById("toast").style.opacity = 0;
  }, 3000);
  setInterval(() => {
    document.getElementById("toast").style.display = "none";
  }, 3500);
}

function Toast() {
  return (
    <>
      <div
        class="toast position-fixed top-0 end-0 p-1 text-white bg-secondary border-0 px-3 py-2"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        id="toast"
        style={{
          top: "3rem",
          right: "10px",
          fontSize: "1.1rem",
          zIndex: "100000",
          transition: ".5s ease-out",
        }}
      >
        Hello, world! This is a toast message.
      </div>
    </>
  );
}

export default Toast;
