package com.backend.models;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class CreditCard extends Card {
    public double currentLimit;
    public double maxLimit;
    public List<CreditTransaction> transactions = new ArrayList<CreditTransaction>();

    public CreditCard(double amount, double currentLimit, double maxLimit) {
        super("credit", amount);
        this.maxLimit = maxLimit;
        this.currentLimit = currentLimit;
    }

    @Override
    public void makeTransaction(double amount) {
        if (amount <= 0) {
            if (this.amount + this.currentLimit + amount >= 0) {
                if (this.amount + amount >= 0) {
                    this.amount += amount;
                } else if (this.amount + amount < 0) {
                    double left = amount + this.amount;
                    this.amount = 0;
                    this.currentLimit += left;
                }

                this.transactions.add(new CreditTransaction(this.type, amount, this.amount, new Date(), this.currentLimit));
            }
        } else if (amount >= 0) {
            if (this.currentLimit < this.maxLimit) {
                double left = this.currentLimit + amount - this.maxLimit;
                this.currentLimit = this.maxLimit;
                this.amount = left;
            } else {
                this.amount += amount;
            }
            this.transactions.add(new CreditTransaction(this.type, amount, this.amount, new Date(), this.currentLimit));
        }
    }
}
