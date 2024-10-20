import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginComponent from "../components/LoginComponents/LoginComponent";

const menuItems = [
    { label: 'Home', link: '#' },
    { label: 'Explorar', link: '#' },
    { label: 'Contatos', link: '#' },
    { label: 'Sobre nós', link: '#' },
];

function Login() {
    return (
        <div>
            <Navbar isLoginVisible={true} menuItems={menuItems} />
            <LoginComponent/>
            <Footer />
        </div>
    );
}

export default Login;