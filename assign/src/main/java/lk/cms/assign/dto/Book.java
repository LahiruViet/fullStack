package lk.cms.assign.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// Inheritance concept used
// E-Book entity will get common properties from this Book entity

@Data
@AllArgsConstructor
@NoArgsConstructor
@Inheritance(strategy=InheritanceType.JOINED)
@Entity
public class Book{

	@Id
	@GeneratedValue
	private Integer id;
	private String name;
	private Integer rating;
	
}
