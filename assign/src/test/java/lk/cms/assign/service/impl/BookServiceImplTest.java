package lk.cms.assign.service.impl;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import lk.cms.assign.dao.BookRepository;
import lk.cms.assign.dto.Book;


@RunWith(SpringRunner.class)
@SpringBootTest
public class BookServiceImplTest {

	@MockBean
	private BookRepository bookRepositoryMock;
	
	@Autowired
	private BookServiceImpl bookServiceImpl;
	
	Logger log = LoggerFactory.getLogger(getClass());
	
	@Test
	public void testGetBookById() {
		when(bookRepositoryMock.findById(1)).thenReturn(Optional.of(new Book(1, "English", 5)));		
		assertEquals(new Book(1, "English", 5), bookServiceImpl.getBookById(1));
	}
}
