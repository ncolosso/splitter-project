import axios from "axios";
import configLoader from "../config/configLoader.ts";

let apiBaseUrl = configLoader.apiUrl;
let endpoint = "bill";

console.log(process.env.NODE_ENV);

export const getBills = async () => {
    try {
        return await axios.get(apiBaseUrl + endpoint);
    } catch (e) {
        throw(e);
    }
}

export const saveBill = async (bill: NewBillRequest) => {
    try {
        return await axios.post(apiBaseUrl + endpoint, bill)
    } catch (e) {
        throw e;
    }
}

export const archiveBill = async (billId: number) => {
    try{
        return await axios.put(apiBaseUrl + endpoint + "/" + billId + "/archive");
    }
    catch (e) {
        throw e;
    }
}

export class NewBillRequest {
    // @ts-ignore
    private title: string;
    // @ts-ignore
    private date: string;
    // @ts-ignore
    private total: number
    constructor(
        title: string,
        date: string
    ) {
        this.title = title;
        this.date = date;
        this.total = 0;
    }
}