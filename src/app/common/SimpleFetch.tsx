
export default async function simpleFetch(url: string, {method = 'GET', body = null, mode = MODE_ENUM.SERVER_SIDE_RENDERING, revalidate=10 }: {method?:string, body?: any, mode?: MODE_ENUM, revalidate?:number } = {}) {

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) headers.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions: any = {
        method,
        headers,
        redirect: "follow"
    };

    if (body) {
        requestOptions.body = JSON.stringify(body);
    }

    if (mode) {
        switch (mode) {
            case MODE_ENUM.INCREMENTAL_STATIC_REGENERATION:
                // This request should be cached with a lifetime of 10 seconds.
                // Similar to `getStaticProps` with the `revalidate` option.
                requestOptions.next = { revalidate: 10 };
                break;
            case MODE_ENUM.SERVER_SIDE_RENDERING:
                // This request should be refetched on every request.
                // Similar to `getServerSideProps`.
                requestOptions.cache = 'no-store';
                break;
            case MODE_ENUM.STATIC_SITE_GENERATION:
                // This request should be cached until manually invalidated.
                // Similar to `getStaticProps`.
                // `force-cache` is the default and can be omitted.
                requestOptions.cache = 'force-cache';
                break;
            // case MODE_ENUM.CLIENT_SIDE_FETCHING:
            // break;
            }
    }

    const data = await fetch('https://onlysub.com/api/' + url, requestOptions)
        .then((response) => response.json());
    return { data };
}

export enum MODE_ENUM {
    CLIENT_SIDE_FETCHING = "CLIENT_SIDE_FETCHING",
    STATIC_SITE_GENERATION = 'STATIC_SITE_GENERATION',
    SERVER_SIDE_RENDERING = 'SERVER_SIDE_RENDERING',
    INCREMENTAL_STATIC_REGENERATION = 'INCREMENTAL_STATIC_REGENERATION'
}


