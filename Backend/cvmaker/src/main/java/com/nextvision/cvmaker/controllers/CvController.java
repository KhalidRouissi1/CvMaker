package com.nextvision.cvmaker.controllers;

import com.nextvision.cvmaker.cv.CV;
import com.nextvision.cvmaker.models.CV;
import com.nextvision.cvmaker.services.CvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cv")
public class CvController {

    private final CvService cvService;

    @Autowired
    public CvController(CvService cvService) {
        this.cvService = cvService;
    }

    @PostMapping
    public ResponseEntity<CV> createCV(@RequestBody CV cv) {
        CV createdCV = cvService.createCV(cv);
        return new ResponseEntity<>(createdCV, HttpStatus.CREATED);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<CV> getCV(@PathVariable Integer userId) {
        CV cv = cvService.getCVById(userId);
        return new ResponseEntity<>(cv, HttpStatus.OK);
    }

    @PutMapping("/{userId}")
    public ResponseEntity<CV> updateCV(@PathVariable Integer userId, @RequestBody CV updatedCV) {
        CV updated = cvService.updateCV(userId, updatedCV);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCV(@PathVariable Integer id) {
        cvService.deleteCV(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<CV>> getCVsByUser(@PathVariable Integer userId) {
        List<CV> cvs = cvService.getCVsByUser(userId);
        return new ResponseEntity<>(cvs, HttpStatus.OK);
    }
}