package com.splitter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Locale;

@SpringBootApplication
@RestController
@CrossOrigin
@RequestMapping("api/v1/splitter")
public class Main {

    private final BillRepository billRepository;

    private final SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);

    public Main(BillRepository billRepository) {
        this.billRepository = billRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }

    @GetMapping("bill")
    public List<Bill> getBills() {
        return billRepository.findAll();
    }

    record NewBillRequest(
            String title,
            String date,
            double total
    ) {}

    @PostMapping("bill")
    public void addBill(@RequestBody NewBillRequest request) throws ParseException {
        Bill bill = new Bill();
        bill.setTitle(request.title);
        bill.setDate(simpleDateFormat.parse(request.date));
        bill.setTotal(request.total);
        billRepository.save(bill);
    }
}
