package lk.cms.assign.dto;

import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Entity
public class EBook extends Book{

	private String email;
	
	 public EBook() {
		 super();
	 }
	 public EBook(Integer id, String name, Integer rating, String email) {
		 super(id, name, rating);
		 this.email = email;
	 }
}
