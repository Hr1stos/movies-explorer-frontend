import './Header.css';
//import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Header = () => {
	return (
		<header className='header'>
			<div className="header__container">
				<Link to='/'
					className='header__logo'
				>
					<img
						src={logo}
						alt="Логотип"
					/>
				</Link>
				<ul className='header__nav-list'>
					<li className='header__nav-item'>
						<Link
							to='/signup'
							className='link'
						>
							Регистрация
						</Link>
					</li>
					<li className='header__nav-item'>
						<Link
							to='/signin'
							className='header__nav-link link'
						>
							Войти
						</Link>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header