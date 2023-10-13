import './AboutMe.css'
import SectionTitle from '../SectionTitle/SectionTitle';
import avatar from '../../../images/avatar.jpg'

const AboutMe = () => {
	return (
		<section className="about-me" id="about-me">
			<div className="about-me__container">
				<SectionTitle title="Студент" />
				<article className="about-me__content">
					<h3 className="about-me__name">Илья</h3>
					<p className="about-me__about">
						Веб-разработчик, 31 год
					</p>
					<p className="about-me__description">
						Я родился и живу в Москве, закончил МГИУ, автомобильный факультет. У меня есть жена,
						сын и дочь. С 2014 года работал в компании «Роскосмос» ведущим инженером-технологом. Увлекся программированием, так как является востребованной сферой деятельности. После того как прошёл курс по веб-разработке, появилась уверенность в своих силах, планирую и дальше развиваться в этом направлении.
					</p>
					<a
						className="about-me__link link"
						href="https://github.com/Hr1stos"
						target="_blank"
						rel="noopener noreferrer"
					>
						Github
					</a>
					<img
						className="about-me__avatar"
						src={avatar}
						alt="Фотография студента"
					/>
				</article>
			</div>
		</section>
	)
}

export default AboutMe;