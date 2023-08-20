package com.uu.couple.model.service;

import com.uu.couple.model.dto.request.PlaceRequestDto;
import com.uu.couple.util.SetSpendException;
import org.springframework.stereotype.Service;

@Service
public class SpendServiceImpl implements SpendService {
    public String setSpend(PlaceRequestDto placeRequestDto) throws SetSpendException {
        try {
            return "tmp";
        } catch(Exception e) {
            e.printStackTrace();
            throw new SetSpendException();
        }
    }
}
