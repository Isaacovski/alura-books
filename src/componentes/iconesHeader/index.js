import './estilo.css';
import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg';

const icones = [perfil, sacola];

function IconesHeader() {
  return (
    <ul className='icones'>
      {icones.map((icone, index) => (
        <li key={index} className='icone'>
          <img src={icone} alt={`Ícone ${index + 1}`} />
        </li>
      ))}
    </ul>
  );
}

export default IconesHeader;
