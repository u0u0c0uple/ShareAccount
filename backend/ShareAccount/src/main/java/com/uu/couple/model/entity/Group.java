package com.uu.couple.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Comment;
import org.hibernate.annotations.DynamicInsert;

import java.time.LocalDateTime;

@Entity
@Table(indexes = {
        @Index(name = "idx_location",columnList = "location"),
        @Index(name = "idx_spend_date",columnList = "spend_date"),
})
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@DynamicInsert
public class Group {
    @Id
    private String id;

    @Column(name="name", nullable = false)
    @Comment("지출 장소")
    private String name;

    @Column(name="location", nullable = false)
    @Comment("지출 장소 주소")
    private String location;

    /* 추후 추가 예정
        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name="category_id", nullable = false)
        @Comment("분류")
        private Category category;
    */

    @Column(name="spend_date", nullable = false)
    @Comment("지출 날짜")
    private LocalDateTime spendDate;  // YYYY.MM.DD HH:SS





}
