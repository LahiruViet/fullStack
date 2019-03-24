package lk.cms.assign.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import lk.cms.assign.dto.EBook;

public interface EBookRepository extends JpaRepository<EBook, Integer>{

	public List<EBook> findAllByOrderByIdDesc();
}
