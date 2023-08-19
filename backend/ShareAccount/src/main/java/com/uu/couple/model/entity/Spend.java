package com.uu.couple.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Comment;
import org.hibernate.annotations.DynamicInsert;

import java.util.UUID;

@Entity
@Table(indexes = {
        @Index(name = "idx_adjust",columnList = "adjust")
})
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@DynamicInsert
public class Spend extends Base {
    @Id
    private String id = UUID.randomUUID().toString();  // UUID 자동 생성

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "place_id", nullable = false)
    @Comment("지출 장소")
    private Place place;

    @Column(name = "name", nullable = false)
    @Comment("지출 항목")
    private String name;

    @Column(name = "amount", nullable = false)
    @Comment("지출 금액")
    private int amount;

    /*
        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "user_id", nullable = true)
        @Comment("지출인")
        private User user;  // 해당 값이 null일 경우 더치페이
    */

    @Column(name = "adjust", nullable = false)
    @Comment("정산 유무")
    private boolean adjust = false;

}
