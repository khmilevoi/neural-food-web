/* eslint-disable no-restricted-globals */

const createPath = (path) => {
    if (location.hostname === "localhost") {
        return path;
    }

    const [name] = location.pathname.slice(1).split("/");

    return `/${name}${path}`;
};

const cacheName = "cache";

let paths = [createPath("/"), createPath("/sw.js")];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(paths);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        (async () => {
            const cache = await caches.open(cacheName);
            const cachedFiles = await cache.match(event.request);

            try {
                const response = await fetch(event.request);

                await cache.put(event.request, response.clone());

                return response;
            } catch (error) {
                if (cachedFiles) {
                    return cachedFiles;
                } else {
                    throw error;
                }
            }
        })()
    );
});
