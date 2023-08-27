package com.uu.couple.model.service;

import com.uu.couple.model.dto.request.PlaceRequestDto;
import com.uu.couple.model.dto.request.SpendRequestDto;
import com.uu.couple.model.dto.response.PlaceResponseDto;
import com.uu.couple.model.dto.response.SpendResponseDto;
import com.uu.couple.model.entity.Couple;
import com.uu.couple.model.entity.Place;
import com.uu.couple.model.entity.Spend;
import com.uu.couple.model.entity.User;
import com.uu.couple.model.repository.CoupleRepository;
import com.uu.couple.model.repository.PlaceRepository;
import com.uu.couple.model.repository.SpendRepository;
import com.uu.couple.model.repository.UserRepository;
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
    private final CoupleRepository coupleRepository;
    private final UserRepository userRepository;

    @Autowired
    private SpendServiceImpl(PlaceRepository placeRepository, SpendRepository spendRepository, CoupleRepository coupleRepository, UserRepository userRepository) {
        this.placeRepository = placeRepository;
        this.spendRepository = spendRepository;
        this.coupleRepository = coupleRepository;
        this.userRepository = userRepository;
    }

    // 지출 내역 생성
    public boolean setSpend(PlaceRequestDto placeRequestDto) throws SetSpendException {
        try {
            /*** 유효성검사 ***/
            String name = placeRequestDto.getName();
            if (name == null || name.trim().equals("") || 20 < name.length()) {  // 지출 장소가 입력되지 않았을 경우 혹은 20자보다 길 경우
                throw new SetSpendException("지출 장소가 잘못 입력 되었습니다.");
            }

            String location = placeRequestDto.getLocation();
            if (location == null || location.trim().equals("") || 50 < location.length()) {  // 지출 장소 주소가 입력되지 않았을 경우 혹은 50자보다 길 경우
                throw new SetSpendException("지출 장소의 주소가 잘못 입력 되었습니다.");
            }

            // 커플 ID가 존재하지 않을 경우
            Couple couple = coupleRepository.findById(placeRequestDto.getCoupleId()).orElseThrow("존재하지 않는 커플입니다.");

            List<SpendRequestDto> spendRequestList = placeRequestDto.getSpendList();
            if (spendRequestList == null || spendRequestList.size() == 0) {  // 지출 내역이 입력되지 않았을 경우
                throw new SetSpendException("지출 내역이 잘못 입력 되었습니다.");
            }

            String spendDateStr = placeRequestDto.getSpendDate();
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
            LocalDateTime spendDate = LocalDateTime.parse(spendDateStr, formatter);

            Place place = Place.builder()
                    .id(UUID.randomUUID().toString())  // UUID 생성
                    .name(name)
                    .location(location)
                    .spendDate(spendDate)
                    .couple(couple)
                    .build();


            List<Spend> spendList = new ArrayList<>();
            for (SpendRequestDto spend : spendRequestList) {  // 각 지출 목록 저장

                // 사용자 ID가 존재하지 않을 경우
                User user = userRepository.findById(spend.getUserId()).orElseThrow(() -> new SetSpendException("사용자가 존재하지 않습니다."));
                if(!user.getCouple().getId().equals(place.getCouple().getId())) {  // 사용자 ID가 커플에 해당하지 않을 경우
                    throw new SetSpendException("사용자가 커플에 해당하지 않습니다.");
                }

                spendList.add(Spend.builder()
                        .id(UUID.randomUUID().toString())  // UUID 생성
                        .name(spend.getName())
                        .amount(spend.getAmount())
                        .adjust(spend.isAdjust())
                        .place(place)
                        .user(user)
                        .build());
            }

            placeRepository.save(place);
            spendRepository.saveAll(spendList);

            return true;

        } catch (DateTimeParseException e) {
            throw new SetSpendException("날짜가 잘못 입력 되었습니다.");
        } catch (SetSpendException e) {
            throw new SetSpendException(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
            throw new SetSpendException();
        }
    }

    public List<PlaceResponseDto> getSpendList() throws GetSpendException {
        /*
            TO DO : 유효성 검사
         */
        return null;
    }

    // 특정 지출 내역 조회
    public PlaceResponseDto getSpend(String placeId) throws GetSpendException {

        /*** 유효성검사 ***/
        if (!placeRepository.existsById(placeId)) {
            throw new GetSpendException("아이디가 존재하지 않습니다.");
        }

        Place place = placeRepository.findById(placeId).orElseThrow(() -> new GetSpendException("해당 지출 내역이 존재하지 않습니다."));

        List<SpendResponseDto> spendResponseDtoList = new ArrayList<>();
        for (Spend s : place.getSpendList()) {
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
