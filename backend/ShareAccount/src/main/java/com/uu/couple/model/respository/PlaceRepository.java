package com.uu.couple.model.respository;

import com.uu.couple.model.entity.Place;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaceRepository extends JpaRepository<Place, String> {

}
