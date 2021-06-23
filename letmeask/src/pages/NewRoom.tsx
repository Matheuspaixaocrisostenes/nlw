import {Link} from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/button'
// import { useAuth } from '../hooks/useAuth';


import '../styles/auth.scss'

export function NewRoom(){
    // const { user } = useAuth()

    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie suas salas de Q&amp;A ao vivo</strong>
                <p>Tire suas dúvidas da audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letmeask" />
                    <h2>Criar uma nova Sala</h2>
                    <form>
                        <input 
                        type="text" 
                        placeholder="Nome da Sala"
                        />
                        <Button type="submit">
                           Criar sala
                        </Button>
                    </form>
                <p>Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}