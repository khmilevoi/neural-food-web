export const config = {
    api: {
        endpoint: "https://drive.google.com/u/0/uc",
    },
};

export const createPath = (path: string) => {
    return new URL(path, config.api.endpoint).href;
};
