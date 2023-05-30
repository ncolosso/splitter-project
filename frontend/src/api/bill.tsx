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