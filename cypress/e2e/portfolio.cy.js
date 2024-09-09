describe('Visit My Portfolio', () => {
  beforeEach(() => {
      cy.visit('http://127.0.0.1:5501/');
  });

  it('should contain the header element', () => {
    cy.get('#header').should('be.visible');
    cy.get('#header .logo').should('be.visible');

    cy.get('#header #sidemenu')
    .should('be.visible')
    .within(() => {
        cy.get('a[href="#home"]').should('be.visible').and('have.text', 'Home');
        cy.get('a[href="#about"]').should('be.visible').and('have.text', 'About Me');
        cy.get('a[href="#services"]').should('be.visible').and('have.text', 'Services');
        cy.get('a[href="#portfolio"]').should('be.visible').and('have.text', 'Portfolio');
        cy.get('a[href="#contact"]').should('be.visible').and('have.text', 'Contact');
    });


    cy.get('#header .icon').should('have.length', 2);

    cy.get('.header-text')
    .should('be.visible')
    .within(() => {
        cy.get('span').should('be.visible').and('have.length', 1);
        cy.get('p').should('be.visible').and('have.length', 1);
        cy.get('h1').should('be.visible');
    });
  });

  it('should contain the about section', () => {
    cy.get('#about').should('be.visible');

    cy.get('#about .about-col-1')
      .within(() => {
      cy.get('img').should('be.visible');
    });

    cy.get('#about')
    .should('be.visible')
    .within(() => {
        cy.get('h1').should('exist');
        cy.get('p').first().should('exist');
    });

    cy.get('[data-testid="links"]')
    .should('be.visible')
    .within(() => {
        cy.get('.tab-links').should('have.length', 3);
        cy.get('.tab-links').eq(0).should('contain.text', 'Skills');
        cy.get('.tab-links').eq(1).should('contain.text', 'Experience');
        cy.get('.tab-links').eq(2).should('contain.text', 'Education');
        cy.get('.tab-links').eq(0).should('have.class', 'active-link');
    });
  });

  it('should correctly display content when tabs are clicked', () => {
    const testTab = (index, expectedContentId) => {
        cy.get('[data-testid="links"] .tab-links').eq(index).should('be.visible');
        cy.get('[data-testid="links"] .tab-links').eq(index).click();

        cy.get(expectedContentId).should('be.visible');
        cy.get('.tab-contents').not(expectedContentId).should('not.be.visible');
    };

    testTab(0, '#skills');
    testTab(1, '#experience');
    testTab(2, '#education');
  });
});
