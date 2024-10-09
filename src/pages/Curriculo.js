import CurriculoForm from '../components/CurriculoComponents/CurriculoForm';
import Navbar from '../components/Navbar'
import './Curriculo.css'

const menuItems = [
    { label: 'Home', link: '#' },
    { label: 'Explorar', link: '#' },
    { label: 'Contatos', link: '#' },
    { label: 'Sobre nós', link: '#' },
];

function Curriculo(){
    return(
        <>
            <Navbar isLoginVisible={false} menuItems={menuItems} />
            <main className="main-content">
                <CurriculoForm/>
            </main>
            
        </>
    )
}

export default Curriculo