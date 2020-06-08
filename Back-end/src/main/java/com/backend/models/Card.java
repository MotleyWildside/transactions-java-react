package com.backend.models;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Card {
    public String type;
    public double amount;
    public List<Transaction> transactions = new ArrayList<Transaction>();

    public Card(String type,double amount) {
        this.amount = amount;
        this.type = type;
    }

    public void makeTransaction(double amount) {
        if (this.amount + amount >= 0) {
            this.amount += amount;
            transactions.add(new Transaction(this.type, amount, this.amount, new Date()));
        }
    }
}
