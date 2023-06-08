package com.splitter.bill;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.util.Date;
import java.util.Objects;

@Entity
public class Bill {
    @Id
    @SequenceGenerator(
            name = "bill_id_sequence",
            sequenceName = "bill_id_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "bill_id_sequence"
    )
    private Integer id;
    private String title;
    private double total;
    private boolean archived;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date date;

    public Bill(Integer id, String title, Date date, double total) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.total = total;
        this.archived = false;
    }

    public Bill() {}

    public Boolean getArchived() { return archived;}

    public void setArchived(Boolean archived) { this.archived = archived;}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Bill bill = (Bill) o;
        return Double.compare(bill.total, total) == 0 && Objects.equals(id, bill.id) && Objects.equals(title, bill.title) && Objects.equals(date, bill.date);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, date, total);
    }

    @Override
    public String toString() {
        return "Bill{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", date=" + date +
                ", total=" + total +
                '}';
    }
}
