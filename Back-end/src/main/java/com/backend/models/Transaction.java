package com.backend.models;

import java.util.Date;

public class Transaction {
    public String type;
    public double amount;
    public double left;
    public Date date;

    public Transaction(String type, double amount, double left, Date date) {
        this.type = type;
        this.amount = amount;
        this.left = left;
        this.date = date;
    }
}
