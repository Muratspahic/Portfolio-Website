const tabTexts = ['Skills', 'Experience', 'Education'];

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
        cy.get('a[href="#home"]').should('be.visible')
        cy.get('a[href="#about"]').should('be.visible')
        cy.get('a[href="#services"]').should('be.visible')
        cy.get('a[href="#portfolio"]').should('be.visible')
        cy.get('a[href="#contact"]').should('be.visible')
    });

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
      cy.get('.tab-links').should('have.length', tabTexts.length);
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

  it('should render the services section and display all services with correct details', () => {
    cy.get('[data-testid="services"]').should('exist');
    cy.get('[data-testid="services"] > div').should('have.length', 3);

    cy.get('[data-testid="services"] > div').eq(0).within(() => {
        cy.get('h2').should('be.visible');
        cy.get('p').should('be.visible');
        cy.get('a').should('be.visible');
    });

    cy.get('[data-testid="services"] > div').eq(1).within(() => {
        cy.get('h2').should('be.visible');
        cy.get('p').should('be.visible');
        cy.get('a').should('be.visible');
    });

    cy.get('[data-testid="services"] > div').eq(2).within(() => {
        cy.get('h2').should('be.visible');
        cy.get('p').should('be.visible');
        cy.get('a').should('be.visible');
    });
  });

  it('should display the portfolio section with the correct ID', () => {
    cy.get('#portfolio').should('be.visible');
  });

  it('should display the correct title in the portfolio section', () => {
    cy.get('#portfolio h1').should('be.visible');
  });

  it('should display all work items', () => {
    cy.get('#portfolio .work-list').within(() => {
      cy.get('.work').should('have.length', 3);
    });
  });

  it('should display the work item with the correct data', () => {
    cy.get('[data-testid="list-info"]').should('be.visible');
    cy.get('[data-testid="list-info"] img').should('be.visible')

    cy.get('[data-testid="list-info"] .layer h3').should('exist');
    cy.get('[data-testid="list-info"] .layer p').should('exist');
  });

  it('should verify the "See more" button existence, visibility, text, and clickability', () => {
    cy.get('[data-testid="btn-more"]')
      .should('exist')
      .should('be.visible')
      .should('have.text', 'See more')
      .click()
      cy.window().then((win) => {
        cy.wrap(win.scrollY).should('eq', 0);
      });
  });
});
