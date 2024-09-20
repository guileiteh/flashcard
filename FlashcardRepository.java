// FlashcardRepository.java
package com.example.flashcardapp.repository;

import com.example.flashcardapp.model.Flashcard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlashcardRepository extends JpaRepository<Flashcard, Long> {
}
