/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * FISSION
 * Easily use IPFS from Web 2.0 applications
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@fission.codes
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


import * as url from "url";
import * as portableFetch from "portable-fetch";
import { Configuration } from "./configuration";

const BASE_PATH = "https://hostless.dev".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *  
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 * 
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = portableFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 * 
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 * @interface HerokuProvision
 */
export interface HerokuProvision {
    /**
     * 
     * @type {UserID}
     * @memberof HerokuProvision
     */
    id: UserID;
    /**
     * 
     * @type {UserConfig}
     * @memberof HerokuProvision
     */
    config: UserConfig;
    /**
     * 
     * @type {string}
     * @memberof HerokuProvision
     */
    message?: string;
}

/**
 * 
 * @export
 * @interface IPFSAddress
 */
export interface IPFSAddress {
}

/**
 * 
 * @export
 * @interface IPFSPeer
 */
export interface IPFSPeer {
}

/**
 * A simple response
 * @export
 * @interface Pong
 */
export interface Pong {
}

/**
 * Request from Heroku to provision a new user
 * @export
 * @interface ProvisionRequest
 */
export interface ProvisionRequest {
    /**
     * 
     * @type {string}
     * @memberof ProvisionRequest
     */
    callbackUrl: string;
    /**
     * 
     * @type {string}
     * @memberof ProvisionRequest
     */
    name: string;
    /**
     * 
     * @type {Tier}
     * @memberof ProvisionRequest
     */
    plan: Tier;
    /**
     * 
     * @type {Region}
     * @memberof ProvisionRequest
     */
    region: Region;
    /**
     * 
     * @type {string}
     * @memberof ProvisionRequest
     */
    uuid: string;
}

/**
 * 
 * @export
 * @enum {string}
 */
export enum Region {
    California = <any> 'california',
    Dublin = <any> 'dublin',
    Frankfurt = <any> 'frankfurt',
    Oregon = <any> 'oregon',
    Singapore = <any> 'singapore',
    Sydney = <any> 'sydney',
    Tokyo = <any> 'tokyo',
    Virginia = <any> 'virginia'
}

/**
 * 
 * @export
 * @interface Secret
 */
export interface Secret {
}

/**
 * 
 * @export
 * @interface SerializedFile
 */
export interface SerializedFile {
}

/**
 * 
 * @export
 * @enum {string}
 */
export enum Tier {
    Test = <any> 'test',
    Free = <any> 'free'
}

/**
 * 
 * @export
 * @interface UUID
 */
export interface UUID {
}

/**
 * 
 * @export
 * @interface UserConfig
 */
export interface UserConfig {
    /**
     * 
     * @type {string}
     * @memberof UserConfig
     */
    INTERPLANETARY_FISSION_URL: string;
    /**
     * 
     * @type {string}
     * @memberof UserConfig
     */
    INTERPLANETARY_FISSION_USERNAME: string;
    /**
     * 
     * @type {Secret}
     * @memberof UserConfig
     */
    INTERPLANETARY_FISSION_PASSWORD: Secret;
}

/**
 * 
 * @export
 * @interface UserID
 */
export interface UserID {
}


/**
 * HerokuApi - fetch parameter creator
 * @export
 */
export const HerokuApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {ProvisionRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        herokuResourcesPost(body: ProvisionRequest, options: any = {}): FetchArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling herokuResourcesPost.');
            }
            const localVarPath = `/heroku/resources`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"ProvisionRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * HerokuApi - functional programming interface
 * @export
 */
export const HerokuApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {ProvisionRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        herokuResourcesPost(body: ProvisionRequest, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<HerokuProvision> {
            const localVarFetchArgs = HerokuApiFetchParamCreator(configuration).herokuResourcesPost(body, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * HerokuApi - factory interface
 * @export
 */
export const HerokuApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @param {ProvisionRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        herokuResourcesPost(body: ProvisionRequest, options?: any) {
            return HerokuApiFp(configuration).herokuResourcesPost(body, options)(fetch, basePath);
        },
    };
};

/**
 * HerokuApi - object-oriented interface
 * @export
 * @class HerokuApi
 * @extends {BaseAPI}
 */
export class HerokuApi extends BaseAPI {
    /**
     * 
     * @param {ProvisionRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HerokuApi
     */
    public herokuResourcesPost(body: ProvisionRequest, options?: any) {
        return HerokuApiFp(this.configuration).herokuResourcesPost(body, options)(this.fetch, this.basePath);
    }

}

/**
 * IPFSApi - fetch parameter creator
 * @export
 */
export const IPFSApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ipfsPeersGet(options: any = {}): FetchArgs {
            const localVarPath = `/ipfs/peers`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} file A file to upload (may also be multipart/form-data)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ipfsPost(file: string, options: any = {}): FetchArgs {
            // verify required parameter 'file' is not null or undefined
            if (file === null || file === undefined) {
                throw new RequiredError('file','Required parameter file was null or undefined when calling ipfsPost.');
            }
            const localVarPath = `/ipfs`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (file !== undefined) {
                localVarQueryParameter['file'] = file;
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * IPFSApi - functional programming interface
 * @export
 */
export const IPFSApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ipfsPeersGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<IPFSPeer>> {
            const localVarFetchArgs = IPFSApiFetchParamCreator(configuration).ipfsPeersGet(options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @param {string} file A file to upload (may also be multipart/form-data)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ipfsPost(file: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<IPFSAddress> {
            const localVarFetchArgs = IPFSApiFetchParamCreator(configuration).ipfsPost(file, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * IPFSApi - factory interface
 * @export
 */
export const IPFSApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ipfsPeersGet(options?: any) {
            return IPFSApiFp(configuration).ipfsPeersGet(options)(fetch, basePath);
        },
        /**
         * 
         * @param {string} file A file to upload (may also be multipart/form-data)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ipfsPost(file: string, options?: any) {
            return IPFSApiFp(configuration).ipfsPost(file, options)(fetch, basePath);
        },
    };
};

/**
 * IPFSApi - object-oriented interface
 * @export
 * @class IPFSApi
 * @extends {BaseAPI}
 */
export class IPFSApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IPFSApi
     */
    public ipfsPeersGet(options?: any) {
        return IPFSApiFp(this.configuration).ipfsPeersGet(options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @param {string} file A file to upload (may also be multipart/form-data)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IPFSApi
     */
    public ipfsPost(file: string, options?: any) {
        return IPFSApiFp(this.configuration).ipfsPost(file, options)(this.fetch, this.basePath);
    }

}

/**
 * PingApi - fetch parameter creator
 * @export
 */
export const PingApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pingGet(options: any = {}): FetchArgs {
            const localVarPath = `/ping`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PingApi - functional programming interface
 * @export
 */
export const PingApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pingGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Pong> {
            const localVarFetchArgs = PingApiFetchParamCreator(configuration).pingGet(options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * PingApi - factory interface
 * @export
 */
export const PingApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pingGet(options?: any) {
            return PingApiFp(configuration).pingGet(options)(fetch, basePath);
        },
    };
};

/**
 * PingApi - object-oriented interface
 * @export
 * @class PingApi
 * @extends {BaseAPI}
 */
export class PingApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PingApi
     */
    public pingGet(options?: any) {
        return PingApiFp(this.configuration).pingGet(options)(this.fetch, this.basePath);
    }

}

