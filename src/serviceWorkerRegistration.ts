const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    window.location.hostname === "[::1]" || // IPv6 localhost
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/ // IPv4 localhost
    )
);

type Config = {
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
};

export function register(config?: Config) {
  if (
    import.meta.env.NODE_ENV === "production" &&
    "serviceWorker" in navigator
  ) {
    const publicUrl = new URL(
      import.meta.env.VITE_BASE_URL,
      window.location.href
    );

    if (publicUrl.origin !== window.location.origin) {
      return; // Prevent service worker from working across different origins
    }

    window.addEventListener("load", () => {
      const swUrl = `${import.meta.env.VITE_BASE_URL}/service-worker.js`;

      if (isLocalhost) {
        checkValidServiceWorker(swUrl, config); // Check if service worker exists in localhost
        navigator.serviceWorker.ready.then(() => {
          console.log("App is served cache-first by a service worker.");
        });
      } else {
        registerValidSW(swUrl, config); // Register service worker in production
      }
    });
  }
}

function registerValidSW(swUrl: string, config?: Config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker) {
          installingWorker.onstatechange = () => {
            if (installingWorker.state === "installed") {
              if (navigator.serviceWorker.controller) {
                console.log(
                  "New content is available; will be used after all tabs are closed."
                );
                if (config?.onUpdate) {
                  config.onUpdate(registration);
                }
              } else {
                console.log("Content is cached for offline use.");
                if (config?.onSuccess) {
                  config.onSuccess(registration);
                }
              }
            }
          };
        }
      };
    })
    .catch((error) => {
      console.error("Error during service worker registration:", error);
    });
}

function checkValidServiceWorker(swUrl: string, config?: Config) {
  fetch(swUrl, { headers: { "Service-Worker": "script" } })
    .then((response) => {
      const contentType = response.headers.get("content-type");
      if (
        response.status === 404 ||
        (contentType && contentType.indexOf("javascript") === -1)
      ) {
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => window.location.reload());
        });
      } else {
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    });
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => registration.unregister())
      .catch((error) => {
        console.error(error.message);
      });
  }
}
