// FlashcardController.java
package com.example.flashcardapp.controller;

import com.example.flashcardapp.model.Flashcard;
import com.example.flashcardapp.service.FlashcardService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/flashcards")
public class FlashcardController {
    private final FlashcardService service;

    public FlashcardController(FlashcardService service) {
        this.service = service;
    }

    @GetMapping
    public List<Flashcard> getAllFlashcards() {
        return service.findAll();
    }

    @PostMapping
    public Flashcard createFlashcard(@RequestBody Flashcard flashcard) {
        return service.save(flashcard);
    }

    @DeleteMapping("/{id}")
    public void deleteFlashcard(@PathVariable Long id) {
        service.delete(id);
    }
}
