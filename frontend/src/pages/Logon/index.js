import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './style.css';
import {FiLogIn} from 'react-icons/fi';
import api from '../../services/api';

/**
 * Lembrando que no React, toda a tratativa dos componentes incluindo seus arquivos CSS
 * são manipulados pelo javascript. Por isso que importamos nosso arquivo CSS.
 * 
 * Para colocar uma imagem dentro do React, vamos também importar essa imagem dentro
 * do componente.
 * 
 * Lembrando que diferente do HTML, no REACT não se utiliza 'class', mas sim 'className'.
 * 
 * Precisamos importar o 'react-router-dom', pois sem ele iriamos utilizar o href, e perderiamos
 * o conceito de SPA. Pois a cada nova request a página inteira seria recarregada.
 */
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(event){
        event.preventDefault();

        try{
            const response = await api.post('sessions', {id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        }catch(err){
            alert('Falha no login, tente novamente.')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    
                    <input placeholder="Sua ID" value={id} onChange= { e => setId(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro 
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}