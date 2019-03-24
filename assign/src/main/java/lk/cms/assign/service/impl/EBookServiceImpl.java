package lk.cms.assign.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lk.cms.assign.dao.EBookRepository;
import lk.cms.assign.dto.EBook;
import lk.cms.assign.service.EBookService;

//Services for E-Book related methods (CRUD)
//micro services concept used

@Service
public class EBookServiceImpl implements EBookService {

	@Autowired
	private EBookRepository eBookRepository;
	
	Logger log = LoggerFactory.getLogger(getClass());
	
	@Override
	public EBook addEBook(EBook eBook) {
		return eBookRepository.save(eBook);
	}

	@Override
	public EBook getEBookById(Integer id) {
		return eBookRepository.findById(id).orElseGet(()-> new EBook(-1, "EBook ID "+id+" not available", -1, ""));
	}

	@Override
	public List<EBook> getAllEBooks() {
		List<EBook> eBooklist = new ArrayList<>();
		eBookRepository.findAll().forEach(eBooklist::add);
		EBook[] eBookArray = new EBook[eBooklist.size()];
		for (int i = 0; i < eBooklist.size(); i++) {
			eBookArray[i] = eBooklist.get(i);			
		}

		return eBooklist;
	}

	@Override
	public EBook updateEBook(EBook eBook) {
		return eBookRepository.save(eBook);		
	}

	@Override
	public void deleteEBookById(Integer id) {
		eBookRepository.deleteById(id);		
	}

}
