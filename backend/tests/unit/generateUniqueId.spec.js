const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique Id', () => {
    /**
     * Cada um dos nossos testes e escrito dentro da função 'it'.
     * Isso porque os testes são feitos em formatos de uma frase. Ex: 'Isso deve gerar um único ID'.
     * 
     * expect() -> Exportado pelo JEST. 'Espera que alguma coisa aconteça'. Veja um exemplo.
     * expect(2+2).toBe(4)
     * Acima temos, "eu espero que dois mais dois, seja quatro".
     */
    it('should generate an unique ID', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    })
})