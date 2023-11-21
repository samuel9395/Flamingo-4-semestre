import image from '../image/hospital.jpg';
import '../logo/logo.css';


function Logo() {
    return (
        <div className='logo'>
            <img src={image} alt='' />
            <div className="main">
                <h2>Hospital Nova Esperança</h2>
            </div>
        </div>
    );
}

export default Logo;