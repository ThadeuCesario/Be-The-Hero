const connection = require('../database/connection'); //Importamos a configuração, assim podemos realizar a comunicação com o banco de dados

module.exports = {
    async create(request, response){

        // O ID da ONG que queremos fazer login, virá através do corpo da requisição.
        const {id} = request.body;

        const ong = await connection('ongs').where('id', id).select('name').first();

        if(!ong){
            return response.status(400).json({error: 'No ONG found with this ID'});
        }
        else{
            return response.json(ong);
        }
    }
};
