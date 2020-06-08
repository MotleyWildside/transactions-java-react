package com.backend.models;

import java.util.Date;

public class CreditTransaction extends Transaction{
    public double currentLimit;

    public CreditTransaction(String type, double amount, double left, Date date, double currentLimit) {
        super(type, amount, left, date);
        this.currentLimit = currentLimit;
    }
}
