package com.uu.couple.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import org.hibernate.annotations.Comment;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Couple extends Base {
    @Id
    @Comment("UID")
    private String id;

    @Column(name = "name", nullable = false, columnDefinition = "VARCHAR(20) CHARACTER SET UTF8")
    @Comment("커플 이름")
    private String name;

    @Column(name = "start_date")
    @Comment("사귄 날짜")
    private LocalDateTime start_date;

    @OneToMany(mappedBy = "couple")
    List<Place> placeList;

    @OneToMany(mappedBy = "couple")
    List<User> userList;
}
