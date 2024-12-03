const tabTexts = ['Skills', 'Experience', 'Education'];

describe('Visit My Portfolio', () => {
  beforeEach(() => {
      cy.visit('http://127.0.0.1:5501/');
  });

  it('should contain the header element', () => {
    cy.get('#header').within(() => {
      cy.get('.logo').should('be.visible');

      cy.get('#sidemenu').within(() => {
        cy.get('a[href="#home"]').should('be.visible');
        cy.get('a[href="#about"]').should('be.visible');
        cy.get('a[href="#services"]').should('be.visible');
        cy.get('a[href="#portfolio"]').should('be.visible');
        cy.get('a[href="#contact"]').should('be.visible');
      });

      cy.get('.header-text').within(() => {
        cy.get('span').should('be.visible').and('have.length', 1);
        cy.get('p').should('be.visible').and('have.length', 1);
        cy.get('h1').should('be.visible');
      });
    });
  });

  it('should contain the about section', () => {
    cy.get('#about').within(() => {
      cy.get('.about-col-1').within(() => {
        cy.get('img').should('be.visible');
      });

      cy.get('h1').should('exist');
      cy.get('p').first().should('exist');

      cy.get('[data-testid="links"]').within(() => {
        cy.get('.tab-links').should('have.length', tabTexts.length);
        cy.get('.tab-links').eq(0).should('have.class', 'active-link');
      });
    });
  });

  it('should correctly display content when tabs are clicked', () => {
      const testTab = (index, expectedContentId) => {
        cy.get('[data-testid="links"] .tab-links').eq(index).click();

        cy.get(expectedContentId).should('be.visible');

        cy.get('.tab-contents').not(expectedContentId).each($el => {
            cy.wrap($el).should('not.be.visible');
        });
      };

    testTab(0, '#skills');
    testTab(1, '#experience');
    testTab(2, '#education');
  });

  it('should render the services section and display all services with correct details', () => {
    cy.get('[data-testid="services"]').within(() => {
      cy.get('> div').should('have.length', 3);

      cy.get('> div').eq(0).within(() => {
        cy.get('h2').should('be.visible');
        cy.get('p').should('be.visible');
        cy.get('a').should('be.visible');
      });

      cy.get('> div').eq(1).within(() => {
        cy.get('h2').should('be.visible');
        cy.get('p').should('be.visible');
        cy.get('a').should('be.visible');
      });

      cy.get('> div').eq(2).within(() => {
        cy.get('h2').should('be.visible');
        cy.get('p').should('be.visible');
        cy.get('a').should('be.visible');
      });
    });
  });

  it('should display the portfolio section with the correct ID', () => {
    cy.get('#portfolio').should('be.visible');
  });

  it('should display the correct title in the portfolio section', () => {
    cy.get('#portfolio').within(() => {
      cy.get('h1').should('be.visible');
    });
  });

  it('should display all work items', () => {
    cy.get('#portfolio').within(() => {
      cy.get('.work-list').within(() => {
        cy.get('.work').should('have.length', 3);
      });
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

  it('should display the contact section', () => {
    cy.get('[data-testid="contact-info"]').should('be.visible');
  });

  it('should display the contact information correctly', () => {
    cy.get('[data-testid="contact-info"]').within(() => {
      cy.get('.sub-title').should('be.visible');
      cy.get('p').first().should('be.visible');
      cy.get('p').eq(1).should('be.visible');
    });
  });

  it('should have visible social media links', () => {
    cy.get('[data-testid="contact-info"]').within(() => {
      cy.get('.social-icons a').should('have.length.greaterThan', 0).each(($el) => {
        cy.wrap($el).should('be.visible');
      });
    });
  });

  it('should display the download CV button and be clickable', () => {
    cy.get('[data-testid="btn-info"]').should('be.visible')
      .and('have.attr', 'href', './Images/my-cv.pdf')
      .and('have.attr', 'download');
  });

  it('should be visible and functional', () => {
    cy.get('[data-testid="login-info"]').within(() => {
      cy.get('form').should('be.visible');

      cy.get('input[name="Name"]').type('Emir Pepi').should('have.value', 'Emir Pepi');
      cy.get('input[name="email"]').type('emir.pepi@example.com').should('have.value', 'emir.pepi@example.com');
      cy.get('textarea[name="Message"]').type('This is a test message.').should('have.value', 'This is a test message.');

      cy.get('button[data-testid="btn-submit"]').should('be.visible').click();
    });
  });

  it('should display the copyright information with correct text', () => {
    cy.get('[data-testid="copyright-info"]').within(() => {
      cy.get('p').should('be.visible').and('have.text', 'Copyright © Emir 2024 Portfolio Page');
    });
  });
});
