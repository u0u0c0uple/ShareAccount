package com.uu.couple.model.respository;

import com.uu.couple.model.entity.Spend;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpendRepository extends JpaRepository<Spend, String> {

}
