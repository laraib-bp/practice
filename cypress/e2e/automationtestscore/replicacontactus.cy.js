describe('should be able to submit a successful submission via contact us form', () => {
    it('test contact us for via automation test store', () => {
      cy.visit('https://automationteststore.com/')
      cy.get("a[href$='contact']").click();
      cy.get('#ContactUsFrm_first_name').type("joe");
      cy.get('#ContactUsFrm_email').type("joe_blogs123@gmail.com");
      cy.get('#ContactUsFrm_enquiry').type("do you provide additional discount on bulk orders")
      cy.get('.col-md-6 > .btn').click();
    });
  })
  
  
