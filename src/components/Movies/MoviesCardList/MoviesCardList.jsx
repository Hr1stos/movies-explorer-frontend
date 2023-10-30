import './MoviesCardList.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Preloader from '../../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import {
	MOVIES_ADD_DESKTOP,
	MOVIES_ADD_MOBILE,
	SCREEN_SIZE_DESKTOP,
	SCREEN_SIZE_TABLET_MAX,
	SCREEN_SIZE_TABLET_MIN,
	SCREEN_SIZE_MOBILE,
	SHOW_MOVIES_DESKTOP,
	SHOW_MOVIES_MOBILE,
	SHOW_MOVIES_TABLET
} from '../../../utils/Constants';

const MoviesCardList = ({ filteredMoviesList, savedMovies, onSaveMovie, onDeleteMovie, isSavedFilms, isNotFound, isLoading, isSearching }) => {
	const location = useLocation().pathname;
	const [shownMoviesQuantity, setShownMoviesQuantity] = useState(0);
	const [numberMoviesToAdd, setNumberMoviesToAdd] = useState(0);

	const setRenderAmount = () => {
		const display = window.innerWidth;
		if (display > SCREEN_SIZE_DESKTOP) {
			setShownMoviesQuantity(SHOW_MOVIES_DESKTOP);
			setNumberMoviesToAdd(0)
		} else if (display > SCREEN_SIZE_TABLET_MIN && display < SCREEN_SIZE_TABLET_MAX) {
			setShownMoviesQuantity(SHOW_MOVIES_TABLET);
			setNumberMoviesToAdd(0)
		} else if (display < SCREEN_SIZE_MOBILE) {
			setShownMoviesQuantity(SHOW_MOVIES_MOBILE);
			setNumberMoviesToAdd(0)
		}
	}

	useEffect(() => {
		setRenderAmount();
	}, [isSearching]);

	useEffect(() => {
		setTimeout(() => {
			window.addEventListener('resize', setRenderAmount);
		}, 500);
		return () => {
			window.removeEventListener('resize', setRenderAmount);
		}
	}, []);

	const loadMoreMovies = () => {
		const display = window.innerWidth;
		if (display > SCREEN_SIZE_DESKTOP) {
			setNumberMoviesToAdd(numberMoviesToAdd + MOVIES_ADD_DESKTOP);
		} else if (display > SCREEN_SIZE_TABLET_MIN && display < SCREEN_SIZE_TABLET_MAX) {
			setNumberMoviesToAdd(numberMoviesToAdd + MOVIES_ADD_MOBILE);
		} else if (display < SCREEN_SIZE_MOBILE) {
			setNumberMoviesToAdd(numberMoviesToAdd + MOVIES_ADD_MOBILE);
		}
	}

	return (
		<section className="cards">
			{isLoading && <Preloader />}
			{!isLoading && !isNotFound && (
				<>
					{location === '/saved-movies' ? (
						<>
							<ul className='cards__list'>
								{filteredMoviesList.map((movie) => {
									return (
										<MoviesCard
											movie={movie}
											key={isSavedFilms ? movie._id : movie.id}
											onSaveMovie={onSaveMovie}
											onDeleteMovie={onDeleteMovie}
											isSavedFilms={isSavedFilms}
											savedMovies={savedMovies}
										/>
									);
								})}
							</ul>
						</>
					) : (
						<>
							<ul className='cards__list'>
									{filteredMoviesList.slice(0, shownMoviesQuantity + numberMoviesToAdd).map(movie => {
									return (
										<MoviesCard
											movie={movie}
											key={isSavedFilms ? movie._id : movie.id}
											onSaveMovie={onSaveMovie}
											onDeleteMovie={onDeleteMovie}
											isSavedFilms={isSavedFilms}
											savedMovies={savedMovies}
										/>
									);
								})}
							</ul>
							<div className="button-wrapper">
									{filteredMoviesList.length > numberMoviesToAdd ? (
									<button
										className="button-load button"
										type='button'
										onClick={loadMoreMovies}
									>
										Ещё
									</button>
								) : ''}
							</div>
						</>
					)}
				</>
			)}
		</section>
	);
}

export default MoviesCardList;