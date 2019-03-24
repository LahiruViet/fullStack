package lk.cms.assign.service;

import java.util.List;

import lk.cms.assign.dto.Book;

public interface BookService {

	// add a Book
	public Book addBook(Book book);
	// get a Book by id
	public Book getBookById(Integer id);
	// update a Book
	public Book updateBook(Book book);
	// delete a Book
	public void deleteBookById(Integer id);
	// get all books
	public List<Book> getAllBooks();
}
