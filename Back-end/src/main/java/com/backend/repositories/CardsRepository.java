package com.backend.repositories;

import com.backend.models.Card;
import com.backend.models.CreditCard;
import com.backend.models.DebitCard;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class CardsRepository {
    public static CreditCard creditCard = new CreditCard(1000, 2000, 2000);
    public static DebitCard debitCard = new DebitCard(4000);

    public static Card getCardByType(String type) {
        return type.equals("credit") ? creditCard : debitCard;
    }
}
