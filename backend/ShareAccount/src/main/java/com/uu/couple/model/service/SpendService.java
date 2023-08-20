package com.uu.couple.model.service;

import com.uu.couple.model.dto.request.PlaceRequestDto;
import com.uu.couple.util.SetSpendException;

public interface SpendService {
    public boolean setSpend(PlaceRequestDto placeRequestDto) throws SetSpendException;
}
