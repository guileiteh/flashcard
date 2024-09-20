// FlashcardService.java
package com.example.flashcardapp.service;

import com.example.flashcardapp.model.Flashcard;
import com.example.flashcardapp.repository.FlashcardRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlashcardService {
    private final FlashcardRepository repository;

    public FlashcardService(FlashcardRepository repository) {
        this.repository = repository;
    }

    public List<Flashcard> findAll() {
        return repository.findAll();
    }

    public Flashcard save(Flashcard flashcard) {
        return repository.save(flashcard);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
