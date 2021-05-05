export const config = {
    api: {
        endpoint: "https://192.168.1.67:3000",
    },
};

export const createPath = (path: string) => {
    return new URL(path, config.api.endpoint).href;
};
