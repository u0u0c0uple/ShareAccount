package com.uu.couple.model.dto.response;

import lombok.Builder;

import java.time.LocalDateTime;
import java.util.List;

@Builder
public class PlaceResponseDto {
    // private String id;  // UID
    private String name;  // 지출 장소
    private String location;  // 지출 장소 주소
    private List<SpendResponseDto> spendList;  // 지출 세부 내용
    private LocalDateTime spendDate;  // 지출 날짜
}
