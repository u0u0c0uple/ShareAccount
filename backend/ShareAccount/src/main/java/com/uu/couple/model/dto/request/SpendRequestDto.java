package com.uu.couple.model.dto.request;

import com.uu.couple.model.entity.Spend;
import lombok.Getter;
import lombok.ToString;

import java.util.List;

@Getter
public class SpendRequestDto {
    private String name;  // 지출 항목
    private int amount;  // 지출 금액
    private boolean adjust = false;  // 정산 유무
    private String userId;  // 사용자 아이디
}
