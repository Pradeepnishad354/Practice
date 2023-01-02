



package com.test.controller;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.test.entity.Company;
import com.test.entity.User;
import com.test.helper.Message;
import com.test.repository.CompanyRepository;
import com.test.repository.UserRepository;


@Controller
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired 
	private CompanyRepository companyRepository;

	

	
	@ModelAttribute
	private void userDetails(Model m, Principal principal) {
		String userName = principal.getName();
		
		System.out.println("USERNAME"+userName);
		//get the user using email
		User user = userRepository.findByEmail(userName);
     System.out.println("USER"+user);
		m.addAttribute("user", user);

	}
	
	
	@GetMapping("/")
	public String home() {
		
		return "home";
	}
	

	
	
	
	// open add company form
	@GetMapping("/add-company")
	public String addCompanyForm(Model model) {
		model.addAttribute("title","add Company");
		model.addAttribute("company",new Company());
		return "normal/add_company";
		
		
	}
	
	// process company 
	@PostMapping("/process-company")
	public String processCompany(@ModelAttribute Company company,Principal principal,HttpSession session) {
		
		try {
		String name = principal.getName();
		
		User user =this.userRepository.findByEmail(name);
		
		company.setUser(user);
		
		user.getCo().add(company);
		
		this.userRepository.save(user);
		
		System.out.println("DATA"+company);
		
		
		System.out.println("added into database");
		
		
		//message success...
				session.setAttribute("message",new Message("your company user is added !!Add more..","success "));
				}catch(Exception e){
					
					System.out.println("ERROR"+e.getMessage());
					e.printStackTrace();
					//message error 
					session.setAttribute("message",new Message("something went to wrong try again","danger "));
				}
				
				return "normal/add_company";
		
	}
	
	// show company 
	@GetMapping("/show-company")
	public String showCompany(Model m ,Principal principal) {
		
		
	m.addAttribute("title","show company");
	
	String name = principal.getName();
		
		User user = userRepository.findByEmail(name);
		
		
		List<Company> companyy= companyRepository.findCompanyByUser(user.getId());
		
		m.addAttribute("companyy", companyy);
		
		
		return "normal/show_company";
	}
	
	
	//delete company handler
//	@GetMapping("/delete/{id}")
//		@Transactional
//		public String deleteContact(@PathVariable("id") Integer id,Model model,HttpSession session,
//				Principal principal)
//		{
//
//			
//			
//			System.out.println("CID"+id);
//			Company company=this.companyRepository.findById(id).get();
//
//			System.out.println("contact"+company.getId());
//			
//			
////		User user=	this.userRepository.findByEmail(principal.getName());
////		user.getCo().remove(company);
//		
////		this.userRepository.save(user);
//		
//		
//			System.out.println("DELETED");
//			
//			session.setAttribute("message", new Message("company deleted successfully","success"));
//			return "redirect:/user/show-company";
//		}
//	
	
	
	
	// open update company form handler
	
	@PostMapping("/update-company/{id}")
	public String updateForm(@PathVariable("id") Integer id,Model m) {
		m.addAttribute("title","Update Contact" );
		
	Company company =	this.companyRepository.findById(id).get();
	m.addAttribute("company",company);
		return "normal/update_form";
	}
	
	
	
	// update company process
	/*
	 * @PostMapping("/update-process") public String updateHandler(@ModelAttribute
	 * Company company, Model m,HttpSession session,Principal principal) {
	 * 
	 * try { //old Contact details Company oldcontactDetail=
	 * this.companyRepository.findById(company.getId()).get();
	 * 
	 * 
	 * User user = this.userRepository.findByEmail(principal.getName());
	 * company.setUser(user); this.companyRepository.save(company);
	 * 
	 * session.setAttribute("message",new
	 * Message("Your contact is updated","success"));
	 * 
	 * } catch (Exception e) { e.printStackTrace(); }
	 * 
	 * System.out.println("COMPANY NAME"+company.getcName());
	 * 
	 * System.out.println("COMPANY ID"+company.getId());
	 * 
	 * return "redirect:/user/"+company.getId()+"/company"; }
	 * 
	 */
	
	
	
	// showing particular details
	 
	/*
	 * @RequestMapping("/{id}/contact") public String
	 * showContactDetail(@PathVariable("id") Integer id,Model model,Principal
	 * principal) {
	 * 
	 * System.out.println("CID"+id);
	 * 
	 * Optional<Company> companyOptional= this.companyRepository.findById(id);
	 * Company company = companyOptional.get();
	 * 
	 * String userName=principal.getName(); User
	 * user=this.userRepository.findByEmail(userName);
	 * 
	 * 
	 * if(user.getId() == company.getUser().getId()) {
	 * model.addAttribute("company",company);
	 * model.addAttribute("title",company.getcName()); } return
	 * "normal/company_detail"; }
	 */
	
		}
		
	
