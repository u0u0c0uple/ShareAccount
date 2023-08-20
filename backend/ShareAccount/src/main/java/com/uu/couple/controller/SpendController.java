package com.uu.couple.controller;

import com.uu.couple.model.dto.request.PlaceRequestDto;
import com.uu.couple.model.service.SpendServiceImpl;
import com.uu.couple.util.SetSpendException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("spend")  // http://localhost:8080/spend
public class SpendController {
    private final SpendServiceImpl spendService;

    @Autowired
    private SpendController(SpendServiceImpl spendService) {
        this.spendService = spendService;
    }

    @PostMapping("create")
    public ResponseEntity<?> setSpend(PlaceRequestDto placeRequestDto) {
        try {
            return ResponseEntity.ok(spendService.setSpend(placeRequestDto));
        } catch (SetSpendException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
