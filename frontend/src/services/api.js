/**
 * Arquivo que irá prover algum tipo de integração com um serviço externo
 */

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;