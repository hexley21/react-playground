export function createApiClient(baseUrl: string, additionalHeaders?: HeadersInit): {
    readonly fetch: (path: string, options: Parameters<typeof fetch>[1]) => Promise<Response>
    readonly get: <T>(
        path: string,
        options?: Parameters<typeof fetch>[1] & {
            params?: Record<string, string | number | boolean | undefined | null>,
            responseType?: 'json' | 'text'
        },
    ) => Promise<T>
    readonly post: <T>(path: string, options: Parameters<typeof fetch>[1]) => Promise<T>
} {
    return {
        get fetch() {
            return (path: string, options: Parameters<typeof fetch>[1]) => {
                return fetch(`${baseUrl}${path}`, {
                    ...options,
                    headers: {
                        ...additionalHeaders,
                        ...options?.headers,
                    },
                })
            }
        },

        get get() {
            return async <T>(
                path: string,
                options?: Parameters<typeof fetch>[1] & {
                    params?: Record<string, string | number | boolean | undefined | null>,
                    responseType?: 'json' | 'text'
                },
            ): Promise<T> => {
                if (options?.params) {
                    const searchParams = new URLSearchParams()
                    for (const [key, value] of Object.entries(options.params)) {
                        if (value !== undefined && value !== null) {
                            searchParams.append(key, value.toString())
                        }
                    }
                    path += '?' + searchParams.toString()
                }

                const response = await this.fetch(path, options)

                if (!response.ok) {
                    let data: object | undefined
                    try {
                        data = await response.json()
                    } catch (e) {
                        throw new FetchError({ response, cause: e })
                    }
                    throw new FetchError({ response, data })
                }

                const responseType = options?.responseType || 'json'
                if (responseType === 'json') {
                    return (await response.json()) as T
                } else if (responseType === 'text') {
                    return (await response.text()) as unknown as T
                } else {
                    throw new Error(`Unsupported response type: ${responseType}`)
                }
            }
        },

        get post() {
            return async <T>(path: string, options?: Parameters<typeof fetch>[1]): Promise<T> => {
                const _options = options ?? {}

                _options.headers = {
                    'Content-Type': 'application/json',
                    ...(options?.headers ?? {}),
                }

                return await this.get(path, { ..._options, method: 'POST' })
            }
        },
    }
}

export class FetchError extends Error {
    response: Response
    data?: any

    constructor({ response, data, cause }: { response: Response; data?: any; cause?: unknown }) {
        super(`Response status: ${response.status}`)
        this.name = 'FetchError'
        this.response = response
        this.data = data
        this.cause = cause
    }
}
