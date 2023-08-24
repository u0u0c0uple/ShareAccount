package com.uu.couple.model.service;

import com.uu.couple.model.dto.request.PlaceRequestDto;
import com.uu.couple.model.dto.request.SpendRequestDto;
import com.uu.couple.model.dto.response.PlaceResponseDto;
import com.uu.couple.model.dto.response.SpendResponseDto;
import com.uu.couple.model.entity.Place;
import com.uu.couple.model.entity.Spend;
import com.uu.couple.model.repository.PlaceRepository;
import com.uu.couple.model.repository.SpendRepository;
import com.uu.couple.util.GetSpendException;
import com.uu.couple.util.SetSpendException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class SpendServiceImpl implements SpendService {

    private final PlaceRepository placeRepository;
    private final SpendRepository spendRepository;

    @Autowired
    private SpendServiceImpl(PlaceRepository placeRepository, SpendRepository spendRepository) {
        this.placeRepository = placeRepository;
        this.spendRepository = spendRepository;
    }

    public boolean setSpend(PlaceRequestDto placeRequestDto) throws SetSpendException {
        System.out.println(placeRequestDto);
        /*** 유효성검사 ***/
        String name = placeRequestDto.getName();
        if(name == null || name.trim().equals("") || 20 < name.length()) {  // 지출 장소가 입력되지 않았을 경우 혹은 20자보다 길 경우
            throw new SetSpendException("지출 장소가 잘못 입력 되었습니다.");
        }

        String location = placeRequestDto.getLocation();
        if(location == null || location.trim().equals("") || 50 < location.length()) {  // 지출 장소 주소가 입력되지 않았을 경우 혹은 50자보다 길 경우
            throw new SetSpendException("지출 장소의 주소가 잘못 입력 되었습니다.");
        }

        List<SpendRequestDto> spendRequestList = placeRequestDto.getSpendList();
        if(spendRequestList == null || spendRequestList.size() == 0) {  // 지출 내역이 입력되지 않았을 경우
            throw new SetSpendException("지출 내역이 잘못 입력 되었습니다.");
        }
        
        try {
            String spendDateStr = placeRequestDto.getSpendDate();
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
            LocalDateTime spendDate = LocalDateTime.parse(spendDateStr, formatter);

            Place place = Place.builder()
                    .id(UUID.randomUUID().toString())  // UUID 생성
                    .name(name)
                    .location(location)
                    .spendDate(spendDate)
                    .build();

            placeRepository.save(place);

            List<Spend> spendList = new ArrayList<>();
            for (SpendRequestDto spend : spendRequestList) {  // 각 지출 목록 저장
                spendList.add(Spend.builder()
                        .id(UUID.randomUUID().toString())  // UUID 생성
                        .name(spend.getName())
                        .amount(spend.getAmount())
                        .adjust(spend.isAdjust())
                        .place(place)
                        .build());
            }
            spendRepository.saveAll(spendList);
            return true;
        } catch (DateTimeParseException e) {
            throw new SetSpendException("날짜가 잘못 입력 되었습니다.");
        } catch(Exception e) {
            e.printStackTrace();
            throw new SetSpendException();
        }
    }

    public PlaceResponseDto getSpend(String placeId) throws GetSpendException {
        if(!placeRepository.existsById(placeId)) {
            throw new GetSpendException("아이디가 존재하지 않습니다.");
        }

        Place place = placeRepository.findById(placeId).orElseThrow(() -> new GetSpendException("해당 지출 내역이 존재하지 않습니다."));

        List<SpendResponseDto> spendResponseDtoList = new ArrayList<>();
        for(Spend s : place.getSpendList()) {
            spendResponseDtoList.add(SpendResponseDto.builder()
                    .name(s.getName())
                    .amount(s.getAmount())
                    .adjust(s.isAdjust())
                    .build());
        }

        return PlaceResponseDto.builder()
                .name(place.getName())
                .location(place.getLocation())
                .spendList(spendResponseDtoList)
                .spendDate(place.getSpendDate())
                .build();
    }
}
