package lk.cms.assign.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import lk.cms.assign.dto.Book;

public interface BookRepository extends JpaRepository<Book, Integer>{

	public List<Book> findAllByOrderByIdDesc();
}
