export const validHttpStatusCode = (statusCode: number) => {
    if (statusCode >= 100 && statusCode < 600) return statusCode

    return 400
}