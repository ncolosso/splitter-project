package com.splitter.bill;

public record NewBillRequest(
        String title,
        String date,
        double total
) {
}
