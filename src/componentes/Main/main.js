import './main.css';
import Logo from '../../imagens/logo.png';
function Main(){
          return(
                    <div>
<main>
<div className='ola'><h1>ola,me chamo <div className='name'>vitor!</div></h1>
<h3>sou desenvolvedor full stark</h3></div>    
 <img src={Logo} alt="LOGO" />

</main>
 <div>
 <a href="">sobre mim</a>
 <a href="">meus projetos</a>
 <a href="">habilidades</a>
 <a href="">contatos</a>
 </div>
 </div>
          )
}

export default Main;