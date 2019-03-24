package lk.cms.assign.controller;


import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lk.cms.assign.dto.Book;
import lk.cms.assign.service.BookService;

// Rest Service for Book entity related functionalities
// single responsibility design principal used

@RestController
@RequestMapping("api/")
@CrossOrigin
public class BookController {

	@Autowired
	private BookService bookService;
	
	Logger log = LoggerFactory.getLogger(getClass());
	
	@PostMapping("book")
	public Book addBook(@RequestBody Book book) {
		
		Book createdBook = bookService.addBook(book);
		return createdBook;
	}
	
	@GetMapping("book/{id}")
	public Book getBookById(@PathVariable Integer id) {
		return bookService.getBookById(id);
	}
	
	@GetMapping("books")
	public List<Book> getAllBooks(){
		return bookService.getAllBooks();
	}
	
	@PutMapping("book")
	public Book updateBook(@RequestBody Book book) {
		Book updatedBook = bookService.updateBook(book);
		return updatedBook;
	}

	
	@DeleteMapping("book/{id}")
	public void deleteBookById(@PathVariable Integer id) {
		bookService.deleteBookById(id);
	}
}
