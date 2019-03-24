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

import lk.cms.assign.dto.EBook;
import lk.cms.assign.service.EBookService;

//Rest Service for E-Book entity related functionalities
//single responsibility design principal used

@RestController
@RequestMapping("api/")
@CrossOrigin
public class EBookController {

	@Autowired
	private EBookService eBookService;
	
	Logger log = LoggerFactory.getLogger(getClass());
	
	@PostMapping("ebook")
	public EBook addEBook(@RequestBody EBook eBook) {
		
		EBook createdEBook = eBookService.addEBook(eBook);
		return createdEBook;
	}
	
	@GetMapping("ebook/{id}")
	public EBook getBookById(@PathVariable Integer id) {
		return eBookService.getEBookById(id);
	}
	
	@GetMapping("ebooks")
	public List<EBook> getAllBooks(){
		return eBookService.getAllEBooks();
	}
	
	@PutMapping("ebook")
	public EBook updateBook(@RequestBody EBook eBook) {
		return eBookService.updateEBook(eBook);
	}
	
	@DeleteMapping("ebook/{id}")
	public void deleteEBookById(@PathVariable Integer id) {
		eBookService.deleteEBookById(id);
	}
}
