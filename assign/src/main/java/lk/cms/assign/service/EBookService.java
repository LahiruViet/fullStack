package lk.cms.assign.service;

import java.util.List;

import lk.cms.assign.dto.EBook;

public interface EBookService {

	// add a E-Book
	public EBook addEBook(EBook eBook);
	// get a E-Book by id
	public EBook getEBookById(Integer id);
	// update a E-Book
	public EBook updateEBook(EBook eBook);
	// delete a E-Book
	public void deleteEBookById(Integer id);
	// get all E-books
	public List<EBook> getAllEBooks();
}
