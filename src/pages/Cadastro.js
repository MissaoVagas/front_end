import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CadastroComponent from "../components/CadastroUsuarioComponents/CadastroComponent";

const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'Explorar', link: '#' },
    { label: 'Contatos', link: '/contatos' },
    { label: 'Sobre nós', link: '#' },
];

function Cadastro() {
    return (
        <div>
            <Navbar isLoginVisible={true} menuItems={menuItems} />
            <CadastroComponent />
            <Footer />
        </div>
    );
}

export default Cadastro;
