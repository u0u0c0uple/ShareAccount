package com.uu.couple.model.dto.request;

import com.uu.couple.model.entity.Spend;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
public class PlaceRequestDto {
    String name;  // 지출 장소
    String location;  // 지출 장소 주소
    List<Spend> spendList;  // 지출 세부 내용
    private LocalDateTime spendDate;  // 지출 날짜
}
