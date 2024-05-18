package com.nextvision.cvmaker.cv;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CvRepository extends JpaRepository<CV, Integer> {

    List<CV> findByUserId(Integer userId);
}