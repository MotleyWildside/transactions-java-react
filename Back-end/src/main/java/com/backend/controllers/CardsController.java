package com.backend.controllers;

import com.backend.models.Card;
import com.backend.repositories.CardsRepository;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
public class CardsController {

//    @CrossOrigin("http://localhost:8081")
//    @RequestMapping(value = "/create-meeting", method = RequestMethod.POST)
//    public void createMeeting(@RequestBody Card meeting) {
//        CardsRepository.addNewMeeting(meeting.date, meeting.department, meeting.meetingRoom);
//    }

    @CrossOrigin
    @RequestMapping(value = "/get-cards", method = RequestMethod.GET)
    public List<Card> getCards() {
        List<Card> cards = new ArrayList<Card>();
        cards.add(CardsRepository.debitCard);
        cards.add(CardsRepository.creditCard);
        return cards;
    }


    //used GET because PUT dont have friendship with CORS (dont know why, maybe i will solve it in future (now i dont have time))
    @CrossOrigin
    @RequestMapping(value = "/make-transaction/{type}", method = RequestMethod.GET)
    public Card makeTransaction(@RequestParam double amount, @PathVariable String type) {
        Card card = CardsRepository.getCardByType(type);
        card.makeTransaction(amount);
        return card;
    }

//    @CrossOrigin("http://localhost:8081")
//    @RequestMapping(value = "/delete-meeting/{index}", method = RequestMethod.DELETE)
//    public void deleteMeetings(@PathVariable int index) {
//        CardsRepository.deleteMeeting(index);
//    }
}
