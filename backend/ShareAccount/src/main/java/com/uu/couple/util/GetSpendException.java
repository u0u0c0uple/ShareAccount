package com.uu.couple.util;

public class GetSpendException extends Exception {
    public GetSpendException() {
        super("지출 조회 실패");
    }
    public GetSpendException(String message) {
        super("지출 조회 실패: " + message);
    }
}
