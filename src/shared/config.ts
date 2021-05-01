export const config = {
    api: {
        endpoint: "https://localhost:3000",
    },
};

export const createPath = (path: string) => {
    return new URL(path, config.api.endpoint).href;
};
