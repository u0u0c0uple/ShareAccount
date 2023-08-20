package com.uu.couple.model.service;

import com.uu.couple.model.dto.request.PlaceRequestDto;
import com.uu.couple.model.entity.Spend;
import com.uu.couple.util.SetSpendException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class SpendServiceImpl implements SpendService {
    public boolean setSpend(PlaceRequestDto placeRequestDto) throws SetSpendException {
        /*** 유효성검사 ***/
        String name = placeRequestDto.getName();
        if(name == null || name.trim().equals("") || 20 < name.length()) {  // 지출 장소가 입력되지 않았을 경우 혹은 20자보다 길 경우
            throw new SetSpendException("지출 장소가 잘못 입력 되었습니다.");
        }

        String location = placeRequestDto.getLocation();
        if(location == null || location.trim().equals("") || 50 < location.length()) {  // 지출 장소 주소가 입력되지 않았을 경우 혹은 50자보다 길 경우
            throw new SetSpendException("지출 장소의 주소가 잘못 입력 되었습니다.");
        }

        List<Spend> spendList = placeRequestDto.getSpendList();
        if(spendList == null || spendList.size() == 0) {  // 지출 내역이 입력되지 않았을 경우
            throw new SetSpendException("지출 내역이 잘못 입력 되었습니다.");
        }

        LocalDateTime spendDate = placeRequestDto.getSpendDate();
        if(spendDate == null) {  // 지출 날짜가 입력되지 않았을 경우
            throw new SetSpendException("지출 날짜가 잘못 입력 되었습니다.");
        }
        
        try {
            /*
                TO DO :: 생성 내역 DB 저장
             */
            return true;
        } catch(Exception e) {
            e.printStackTrace();
            throw new SetSpendException();
        }
    }
}
