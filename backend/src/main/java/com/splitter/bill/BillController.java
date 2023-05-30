package com.splitter.bill;

import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Locale;

@RestController
@CrossOrigin
@RequestMapping("api/v1/splitter/bill")
public class BillController {

    private final BillRepository billRepository;
    private final SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);

    public BillController(BillRepository billRepository) {
        this.billRepository = billRepository;
    }

    @GetMapping
    public List<Bill> getBills() {
        return billRepository.findAll();
    }

    record NewBillRequest(
            String title,
            String date,
            double total
    ) {}

    @PostMapping
    public void addBill(@RequestBody NewBillRequest request) throws ParseException {
        Bill bill = new Bill();
        bill.setTitle(request.title);
        bill.setDate(simpleDateFormat.parse(request.date));
        bill.setTotal(request.total);
        billRepository.save(bill);
    }
}
