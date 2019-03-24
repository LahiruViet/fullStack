package lk.cms.assign.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

// exception handling code will take care by this Advice controller
@RestControllerAdvice
public class ExceptionController {

	Logger log = LoggerFactory.getLogger(getClass());

	@ExceptionHandler(RuntimeException.class)
	public final ResponseEntity<Object> handleRuntimeException(RuntimeException ex, WebRequest request) {
	  log.error(ex.getMessage());  
	  return new ResponseEntity<Object>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
