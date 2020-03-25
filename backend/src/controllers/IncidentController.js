const connection = require('../database/connection'); //Importamos a configuração, assim podemos realizar a comunicação com o banco de dados

module.exports = {

    async index(request, response){
        const { page = 1} = request.query;

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents').join('ongs', 'ongs.id', '=', 'incidents.ong_id').limit(5).offset((page - 1) * 5).select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async delete(request, response){

        /**
         * A primeira coisa que vamos fazer e pegar o id que vem do request params.
         * Também estamos pegando o id da ong.
         * Assim podemos validar se o incidente, está sendo deletado
         * realmente pela ong que criou. Se não pode ser que o caso de outra ong seja deletado.
         */

         const {id} = request.params;
         const ong_id = request.headers.authorization;

         const incident = await connection('incidents')
            .where('id',id)
            .select('ong_id')
            .first();

            if(incident.ong_id != ong_id){
                return response.status('401').json({error: 'Operation not permitted'}); //status não autorizado.
            }
            else{
                await connection('incidents').where('id', id).delete();

                return response.status(204).send(); //204 -> Resposta funcionou, porém não há nenhum conteúdo.
            }


    },

    async create(request, response){
        const {title, description, value} = request.body;
        
        /**
         * Dentro do header de nossa requisição, geralmente carregam dados sobre a autenticação
         * do usuário, vem dados de localização. Caracteriza o contexto daquela requisição.
         */
        const ong_id = request.headers.authorization;

        /**
         * Para pegarmos o id, sabemos que o id será a primeira posição 
         * então podemos usar destructuring para conseguir acessar.
         * no formado abaixo, o primeiro valor que no caso é o 'id', será 
         * armazanado na variavel id.
         */
        const [id] = await connection('incidents'). insert({
            title,
            description,
            value,
            ong_id
        })

        return response.json({id});
    }
};  