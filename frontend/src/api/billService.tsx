import axios from "axios";

class BillService {
  url: string = "localhost:8080/api/v1/splitter/";

  getBills() {
      let bills = "";

      axios
      .get(this.url + "bills")
      .then((response) => {
        bills = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    return bills;
  }
}

export default BillService;
