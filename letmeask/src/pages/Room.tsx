import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/button';

import '../styles/room.scss';

export function Room(){
    return(
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="letmeask" />
                    <div>código</div>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Sala React</h1>
                    <span>4 Perguntas</span>
                </div>

                <form>
                    <textarea placeholder="o que você quer perguntar" />
                    <div className="form-footer">
                        <span>Para enviar uma pergunta <button>faça seu login</button></span>
                        <Button type="submit">Enviar Pergunta</Button>
                    </div>
                </form>
            </main>
        </div>
    );
}