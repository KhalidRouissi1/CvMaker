package com.nextvision.cvmaker.services;

import com.nextvision.cvmaker.cv.CV;
import com.nextvision.cvmaker.cv.CvRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CvService {

    private final CvRepository cvRepository;

    @Autowired
    public CvService(CvRepository cvRepository) {
        this.cvRepository = cvRepository;
    }

    public CV createCV(CV cv) {
        return cvRepository.save(cv);
    }

    public CV getCVById(Integer userId) {
        Optional<CV> optionalCV = cvRepository.findByUserId(userId);
        return optionalCV.orElse(null);
    }

    public CV updateCV(Integer userId, CV updatedCV) {
        CV existingCV = cvRepository.findByUserId(userId).orElse(null);
        if (existingCV != null) {
            existingCV.setFirstName(updatedCV.getFirstName());
            existingCV.setLastName(updatedCV.getLastName());
            // Update other fields as needed
            return cvRepository.save(existingCV);
        }
        return null;
    }

    public void deleteCV(Integer id) {
        cvRepository.deleteById(id);
    }

    public List<CV> getCVsByUser(Integer userId) {
        return cvRepository.findByUserId(userId);
    }
}