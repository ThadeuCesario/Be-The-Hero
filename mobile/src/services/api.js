import axios from 'axios';

/**
 * Quando estamos utilizando uma aplicação no celular, não temos como configurar o localhost.
 * A porta estamos utiliando a que está rodando o node.
 */

const api = axios.create({
    baseURL: 'http://192.168.1.107:3333'
});

export default api;