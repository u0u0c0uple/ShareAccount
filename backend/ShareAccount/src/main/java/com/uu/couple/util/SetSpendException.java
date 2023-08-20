package com.uu.couple.util;

public class SetSpendException extends Exception {
    public SetSpendException() {
        super("지출 생성 실패");
    }
    SetSpendException(String message) {
        super("지출 생성 실패: " + message);
    }
}
