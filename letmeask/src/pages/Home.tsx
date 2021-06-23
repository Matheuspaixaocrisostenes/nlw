import {useHistory} from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/button'

import '../styles/auth.scss'
import { useAuth } from '../hooks/useAuth';

export function Home(){
    const history = useHistory();
    const { user ,signInWithGoogle } = useAuth()
    async function handleCreateRoom(){
        if(!user){
            await signInWithGoogle()
        }

        history.push('/rooms/new')
        }

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
                    <button className="create-room" onClick={handleCreateRoom}>
                        <img src={googleIconImg} alt="logo do google" />
                        Crie sua sala com o google
                    </button>
                    <div className="separator">Ou entre em uma sala</div>
                    <form>
                        <input 
                        type="text" 
                        placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}