package com.uu.couple.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import org.hibernate.annotations.Comment;

import java.time.LocalDateTime;

@Getter
@MappedSuperclass
/* 생성 날짜 및 수정 날짜 일괄 관리 */
public class Base {

    @Column(name="created_at",updatable = false)
    @Comment("생성시간")
    private LocalDateTime createdAt;
    @Column(name="updated_at")
    @Comment("수정시간")
    private LocalDateTime updatedAt;

    @PrePersist
    public void prePersist(){
        LocalDateTime now = LocalDateTime.now();
        createdAt = now;
        updatedAt = now;
    }
    @PreUpdate
    public void preUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
