package com.splitter.bill;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/splitter/bill")
public class BillController {

    private final BillService billService;

    public BillController(BillService billService) {
        this.billService = billService;
    }

    @GetMapping
    public List<Bill> getBills() {
        return billService.getBills();
    }

    @PostMapping
    public void createBill(@RequestBody NewBillRequest newBillRequest) {
        billService.createBill(newBillRequest);
    }

    @PutMapping(path = "{id}/archive")
    public void archiveBill(@PathVariable("id") Integer id) {
        billService.archiveBill(id);
    }
}
