/* eslint-disable no-restricted-globals */
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("sw.js").then((registration) => {
            console.log("Service Worker registration successful: ", registration)
        }, (err) => {
            console.log("Registration failed", err)
        })
    })
}

let cacheName = "neural-food"

let urls_to_cache = [
    "/index.html",
    "/",
    "/sw.js",
    "/manifest.json"
]

self.addEventListener("install", (e) => {
    e.waitUntil(caches.open(cacheName).then((cache) => {
        return cache.addAll(urls_to_cache)
    }))
})

self.addEventListener("fetch", (event) => {
    event.respondWith((async () => {
        const cache = await caches.open(cacheName);
        const cachedFiles = await cache.match(event.request);

        try {
            const response = await fetch(event.request);

            await cache.put(event.request, response.clone());

            return response
        } catch (error) {
            if(cachedFiles) {
                return cachedFiles
            } else {
                throw error
            }
        }

    })())

})
