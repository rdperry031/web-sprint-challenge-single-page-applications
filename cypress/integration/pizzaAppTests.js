describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })
    it('sanity check', () => {
        expect(2+2).to.equal(4)
        expect(754*37890643).not.to.equal(42)    
    })

    const nameInput = () => cy.get('input[name=name]')
    const specialInput = () => cy.get('input[name=special]')
    const submitButton = () => cy.get('button[id="order-button"]')
    const sizeDropdown = () => cy.get('select[id="size-dropdown"')
    const toppings = () => cy.get('[type="checkbox"]')

    it('Can add text to boxes', () => {
        nameInput()
            .should('have.value', '')
            .type('Pablo Diego José Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Ruiz y Picasso')
            .should('have.value', 'Pablo Diego José Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Ruiz y Picasso')
        specialInput()
            .should('have.value', '')
            .type('Cut into isosceles triangles')
            .should('have.value', 'Cut into isosceles triangles')    
    })
    
    it('Can select multiple toppings', () => {
        toppings()
            .should('not.be.checked')
            .check().should('be.checked')
            .uncheck().should('not.be.checked')
    })
    it('Can submit form', () => {
        submitButton().should('be.disabled')
        nameInput().type('Simone Simmons')
        sizeDropdown().select('Monstrous')
        toppings('[type="checkbox"]').check()
        submitButton().click().should('be.disabled')
            nameInput().should('have.value', '')
            sizeDropdown().should('have.value', '')
            toppings().should('not.be.checked')

    })  
})
