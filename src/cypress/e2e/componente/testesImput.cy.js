describe('Teste de Input e Paginação', () => {
  it('Deve digitar no input de pesquisa e interagir com a paginação', () => {
    // Visita a página onde está o input e a paginação
    cy.visit('http://127.0.0.1:1234/')

    // Aguarda até que o input esteja visível
    cy.get('#input-pesquisa').should('be.visible')

    // Digita o texto desejado no input
    cy.get('#input-pesquisa').type('Teste')
    cy.get ('data-input-pesquisa').type('width: 450px')

    // Adiciona uma pausa opcional para observar o que está acontecendo
    cy.wait(1000) // Aguarda 1 segundo

    // Verifica se a paginação está visível
    cy.get('.paginacao').should('be.visible')

    // Aguarda um curto período para permitir que a página mude
    cy.wait(3000)

    // Verifica se a primeira página da paginação está visível
    cy.get('.paginacao-link').contains('1').should('be.visible')

    // Verifica se a segunda página da paginação está visível
    cy.get('.paginacao-link').contains('2').should('be.visible')

    // Clicar no checkbox para selecionar a primeira página
    cy.get('.paginacao-link').contains('1').click()
    
    // Clica na primeira página da paginação
    cy.get('.paginacao-link').contains('1').click()

    // Aguarda um curto período para permitir que a página mude
    cy.wait(3000)

    // Clica na segunda página da paginação
    cy.get('.paginacao-link').contains('2').click()

    // Clica na terceira página da paginação
    cy.get('.paginacao-link').contains('3').click()

    // Clica na quarta página da paginação
    cy.get('.paginacao-link').contains('4').click()

    // Clica na quinta página da paginação
    cy.get('.paginacao-link').contains('5').click()

    // Aguarda um curto período para permitir que a página mude
    cy.wait(3000)

    // E assim por diante, podes continuar clicando nas páginas conforme necessário

    // Adiciona uma pausa opcional para observar o que está acontecendo
    cy.wait(3000) // Aguarda 1 segundo

    // Aqui podes adicionar outras interações ou verificações necessárias
  })
})
