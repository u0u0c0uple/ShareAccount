package com.uu.couple.model.dto.request;

import lombok.Getter;
import lombok.ToString;
import java.util.List;

@Getter
@ToString  // 추후 삭제
public class PlaceRequestDto {
    private String name;  // 지출 장소
    private String location;  // 지출 장소 주소
    private List<SpendRequestDto> spendList;  // 지출 세부 내용
    private String spendDate;  // 지출 날짜
}
