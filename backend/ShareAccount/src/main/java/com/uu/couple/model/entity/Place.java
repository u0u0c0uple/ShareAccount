package com.uu.couple.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Comment;
import org.hibernate.annotations.DynamicInsert;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity
@Table(indexes = {
        @Index(name = "idx_location",columnList = "location"),
        @Index(name = "idx_spend_date",columnList = "spend_date")
})
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class Place extends Base {
    @Id
    private String id;

    /* 추후 추가 예정
        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "category_id", nullable = false)
        @Comment("분류")
        private Category category;
    */

    @Column(name = "name", nullable = false, columnDefinition = "VARCHAR(20) CHARACTER SET UTF8")
    @Comment("지출 장소")
    private String name;

    @Column(name = "location", nullable = false, columnDefinition = "VARCHAR(50) CHARACTER SET UTF8")
    @Comment("지출 장소 주소")
    private String location;

    @OneToMany(mappedBy = "place")
    List<Spend> spendList;

    @Column(name = "spend_date", nullable = false)
    @Comment("지출 날짜")
    private LocalDateTime spendDate;  // YYYY.MM.DD HH:SS
}
