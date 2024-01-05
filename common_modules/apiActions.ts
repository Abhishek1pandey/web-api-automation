import { APIRequestContext, Page } from '@playwright/test';


export class ApiActions {
    constructor(page: Page) {

    }


    /**
     * Performs a get call 
     * @param {APIRequestContext} request
     * @param {string} endpoint
     * @param {*} [header] - Optional
     * @param {*} [param] - Optional
     * @return {*} 
     * @memberof ApiActions
     */
    async getMethod(request: APIRequestContext, endpoint: string, header?: any, param?: any) {
        return await request.get(endpoint, {
            headers: header,
            params: param
        })
    }

    /**
     * Performs post call
     * @param {APIRequestContext} request
     * @param {string} endpoint
     * @param {*} [header] - Optional
     * @param {*} [body] - Optional
     * @param {*} [param] - Optional
     * @param {*} [form] - Optional
     * @param {*} [multipart] - Optional
     * @return {*} 
     * @memberof ApiActions
     */
    async postMethod(request: APIRequestContext, endpoint: string, header?: any, body?: any, param?: any, form?: any, multipart?: any) {
        return await request.post(endpoint, {
            headers: header,
            params: param,
            data: body,
            form: form,
            multipart: multipart
        })
    }


    /**
     * Performs post call
     * @param {APIRequestContext} request
     * @param {string} endpoint
     * @param {*} [header] - Optional
     * @param {*} [body] - Optional
     * @param {*} [param] - Optional
     * @param {*} [form] - Optional
     * @param {*} [multipart] - Optional
     * @return {*} 
     * @memberof ApiActions
     */
    async putMethod(request: APIRequestContext, endpoint: string, header?: any, body?: any, param?: any, form?: any, multipart?: any) {
        return await request.put(endpoint, {
            headers: header,
            params: param,
            data: body,
            form: form,
            multipart: multipart
        })
    }


    /**
     * Performs post call
     * @param {APIRequestContext} request
     * @param {string} endpoint
     * @param {*} [header]- Optional
     * @param {*} [body]- Optional
     * @param {*} [param]- Optional
     * @param {*} [form]- Optional
     * @param {*} [multipart]- Optional
     * @return {*} 
     * @memberof ApiActions
     */
    async deleteMethod(request: APIRequestContext, endpoint: string, header?: any, body?: any, param?: any, form?: any, multipart?: any) {
        return await request.delete(endpoint, {
            headers: header,
            params: param,
            data: body,
            form: form,
            multipart: multipart
        })
    }

}