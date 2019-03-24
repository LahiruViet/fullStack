package lk.cms.assign.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lk.cms.assign.dao.BookRepository;
import lk.cms.assign.dto.Book;
import lk.cms.assign.service.BookService;

// Services for Book related methods (CRUD)
// micro services concept used

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	private BookRepository bookRepository;
	
	Logger log = LoggerFactory.getLogger(getClass());
	
	@Override
	public Book addBook(Book book) {
		return bookRepository.save(book);
	}

	@Override
	public Book getBookById(Integer id) {
		return bookRepository.findById(id).orElseGet(()-> new Book(-1, "Book ID "+id+" not available", -1));
	}

	@Override
	public List<Book> getAllBooks() {
		List<Book> booklist = new ArrayList<>();
		bookRepository.findAllByOrderByIdDesc().forEach(booklist::add);
		Book[] bookArray = new Book[booklist.size()];
		for (int i = 0; i < booklist.size(); i++) {
			bookArray[i] = booklist.get(i);			
		}

		return booklist;
	}

	@Override
	public Book updateBook(Book book) {
		return bookRepository.save(book);
	}

	@Override
	public void deleteBookById(Integer id) {
		bookRepository.deleteById(id);
	}

}
