import axios from "axios";

let apiBaseUrl = "http://localhost:8080/api/v1/splitter/";
let endpoint = "bill";

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