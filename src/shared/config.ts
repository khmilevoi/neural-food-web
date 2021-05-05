console.log(process.env);
export const config = {
    api: {
        endpoint: process.env.API_ENDPOINT,
    },
};

export const createPath = (path: string) => {
    return new URL(path, config.api.endpoint).href;
};
