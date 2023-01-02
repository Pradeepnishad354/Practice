package com.test.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.test.repository.CompanyRepository;

@Controller

public class CompanyUserController {

//	@Autowired
//	private CompanyRepository companyRepository;

//	@Autowired
//	private CompanyService companyService;

	@GetMapping("/userlogin")
	public String userLogin() {

		return "normal/userlogin";
	}

//	@PostMapping("/user/login")
//	public String userPage(ModelMap m ,@RequestParam String cEmail,@RequestParam String Password) {
//		
//		if(cEmail.equals("pradeepnishad@gmail.com") && Password.equals("1234")) {
//			
//			
//		}
//		return "normal/userShow";
//		
//		
//	
//	}
//	

//	@PostMapping("/user/login")
//	public String login(@RequestBody Company company) {
//
//		String email = company.getcEmail();
//		String password = company.getPassword();
//
//		Company comObj = null;
//		if (email != null && password != null) {
//			comObj = companyService.findByUserNameAndEmail(email, password);
//		}
//
//		return "normal/userShow";
//	}

	@GetMapping("/usershow")
	public String userShow() {

		return "normal/userShow";

	}

	/*
	 * @WebServlet("/LoginServlet") public class LoginServlet extends HttpServlet{
	 * 
	 * private final String username = "user"; private final String password =
	 * "password";
	 * 
	 * @Override protected void doPost(HttpServletRequest request,
	 * HttpServletResponse response) throws ServletException, IOException { // TODO
	 * Auto-generated method stub
	 * 
	 * // get request parameter username and password
	 * 
	 * String user = request.getParameter("username"); String pass =
	 * request.getParameter("password");
	 * 
	 * 
	 * if(this.username.equals(user) && this.password.equals(pass)) {
	 * 
	 * HttpSession oldSession = request.getSession(false); if(oldSession != null) {
	 * oldSession.invalidate(); } //generate a new session HttpSession newSession =
	 * request.getSession(true);
	 * 
	 * //setting session to expiry in 5 mins
	 * newSession.setMaxInactiveInterval(5*60);
	 * 
	 * Cookie message=new Cookie("message","Welcome");
	 * 
	 * response.addCookie(message);
	 * 
	 * response.sendRedirect("/loginSuccess.jsp");
	 * 
	 * 
	 * 
	 * }else {
	 * 
	 * RequestDispatcher rd =
	 * getServletContext().getRequestDispatcher("/userlogin.html"); PrintWriter out
	 * = response.getWriter();
	 * out.println("<font color=red>Either username or password is wrong.</font>");
	 * rd.include(request, response);
	 * 
	 * }
	 * 
	 * 
	 * }
	 * 
	 * 
	 * 
	 * }
	 */
		
		
		
	}
	

	
	
	
	
	
	
	
	
