package com.uu.couple.model.dto.response;

import lombok.Builder;

@Builder
public class SpendResponseDto {
    private String name;  // 지출 항목
    private int amount;  // 지출 금액
    private boolean adjust;  // 정산 유무
}
