package com.uu.couple.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import org.hibernate.annotations.Comment;

import java.util.List;

@Entity
@Getter
public class User {
    @Id
    @Comment("UID")
    private String id;

    @Column(name = "name", nullable = false, columnDefinition = "VARCHAR(20) CHARACTER SET UTF8")
    @Comment("사용자 이름")
    private String name;

    @Column(name = "nickname", nullable = false, columnDefinition = "VARCHAR(20) CHARACTER SET UTF8")
    @Comment("사용자 닉네임")
    private String nickname;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "couple_id", nullable = false)
    @Comment("커플")
    private Couple couple;

    @OneToMany(mappedBy = "user")
    private List<Spend> spendList;
}
