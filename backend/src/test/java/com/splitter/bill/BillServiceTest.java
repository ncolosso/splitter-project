package com.splitter.bill;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertTrue;

@DataJpaTest
public class BillServiceTest {

    private BillService billService;

    @Autowired
    private BillRepository billRepository;

    @BeforeEach
    void setUp() {
        billService = new BillService(billRepository);
    }

    @Test
    void getBills() {
        List<Bill> allBills = billService.getBills();

        // Should be empty
        assertTrue(allBills.isEmpty());
    }

    @Test
    void createBill() {
        billService.createBill(new NewBillRequest("Test Bill", "2023-01-01", 45.00));

        // There should be 1 bill now
        assertThat(billService.getBills().size()).isEqualTo(1);
    }
}
