import axios from "axios";

class BillService {
  url: string = "localhost:8080/api/v1/splitter/";

  getBills() {
    var response = "";

    axios
      .get(this.url + "bills")
      .then((response) => {
        const bills = response.data;
        response = bills;
      })
      .catch((error) => {
        //pass
      });

    return response;
  }
}

export default BillService;
