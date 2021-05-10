window.addEventListener("load", (event) => {
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = navigator.onLine ? "Online" : "OFFline";
});
window.addEventListener("offline", (event) => {
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = "OFFline";
});
window.addEventListener("online", (event) => {
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = "Online";
});
const fetchTimeout = (url, ms, { signal, ...options } = {}) => {
  const controller = new AbortController();
  const promise = fetch(url, { signal: controller.signal, ...options });
  if (signal) signal.addEventListener("abort", () => controller.abort());
  const timeout = setTimeout(() => controller.abort(), ms);
  return promise.finally(() => clearTimeout(timeout));
};

async function checkOnlineStatus() {
  const controller = new AbortController();
  try {
    const APIURL = "https://jsonplaceholder.typicode.com/posts";
    const online = await fetchTimeout(APIURL, 5000, {
      signal: controller.signal,
    });
    return online.status >= 200 && online.status < 300; // either true or false
  } catch (error) {
    // Timeouts if the request takes
    // longer than 6 seconds
    console.log(error);
    return false; // definitely offline
  }
}
setInterval(async () => {
  const result = await checkOnlineStatus();
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = result ? "Online" : "OFFline";
  yourDataRequestFunction(result);
}, 3000); // probably too often, try 30000 for every 30 seconds
window.addEventListener("load", async (event) => {
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = (await checkOnlineStatus())
    ? "Online"
    : "OFFline";
});
function yourDataRequestFunction(online) {
  // make data request
  const statusDisplay = document.getElementById("status");
  // Update the DOM to reflect the current status
  if (online) {
    statusDisplay.classList.remove("offline");
    statusDisplay.classList.add("online");
  } else {
    statusDisplay.classList.remove("online");
    statusDisplay.classList.add("offline");
  }
}


// 2

window.addEventListener("load", (event) => {
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = navigator.onLine ? "Online" : "OFFline";
});
window.addEventListener("offline", (event) => {
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = "OFFline";
});

window.addEventListener("online", (event) => {
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = "Online";
});
async function fetchWithTimeout(resource, options) {
  const { timeout = 1000 } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);
  return response;
}
async function checkOnlineStatus() {
  try {
    const APIURL = "https://jsonplaceholder.typicode.com/posts";
    const online = await fetchWithTimeout(APIURL, {
      timeout: 1000,
    });
    return online.status >= 200 && online.status < 300; // either true or false
  } catch (error) {
    // Timeouts if the request takes
    // longer than 6 seconds
    console.log(error);
    return false; // definitely offline
  }
}
setInterval(async () => {
  const result = await checkOnlineStatus();
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = result ? "Online" : "OFFline";
  yourDataRequestFunction(result);
}, 3000); // probably too often, try 30000 for every 30 seconds
window.addEventListener("load", async (event) => {
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = (await checkOnlineStatus())
    ? "Online"
    : "OFFline";
});
function yourDataRequestFunction(online) {
  // make data request
  const statusDisplay = document.getElementById("status");
  // Update the DOM to reflect the current status
  if (online) {
    statusDisplay.classList.remove("offline");
    statusDisplay.classList.add("online");
  } else {
    statusDisplay.classList.remove("online");
    statusDisplay.classList.add("offline");
  }
}
