package com.uu.couple.model.repository;

import com.uu.couple.model.entity.Couple;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoupleRepository extends JpaRepository<Couple, String> {

}
