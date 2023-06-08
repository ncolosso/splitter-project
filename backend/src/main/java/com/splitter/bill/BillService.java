package com.splitter.bill;

import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

@Service
public class BillService {

    private final BillRepository billRepository;
    private final SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);

    public BillService(BillRepository billRepository) {
        this.billRepository = billRepository;
    }

    public List<Bill> getBills() {
        return billRepository.findByArchivedFalse();
    }

    public void createBill(NewBillRequest newBillRequest) {
        // add some validation
        Bill bill = new Bill();
        bill.setTitle(newBillRequest.title());
        try {
            bill.setDate(simpleDateFormat.parse(newBillRequest.date()));
        } catch (ParseException e) {
            // need to add a different handle for this
            bill.setDate(new Date());
        }
        bill.setTotal(newBillRequest.total());
        billRepository.save(bill);
    }

    public void archiveBill(Integer id) {
        Bill bill = billRepository.findById(id).orElseThrow(() -> new IllegalStateException("Bill with id " + id + " does not exist"));
        bill.setArchived(true);
        billRepository.save(bill);
    }
}
