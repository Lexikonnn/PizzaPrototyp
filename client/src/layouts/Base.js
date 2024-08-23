import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Base = ({ children, isVisible }) => {
    return (
        <>
            <Header isVisible={ isVisible } />
                { children }
            <Footer />
        </>
    );
}

export default Base;