import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './TechStacks.module.css';

const TechStacks = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div
			data-aos='fade-right'
			data-aos-offset='200'
			data-aos-easing='ease-in-sine'
			data-aos-duration='800'
		>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Skills
			</h1>
			<div className={styles.borderBottom} />
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Front End
			</h1>
			<div className={styles.borderBottom} />
			<div className={styles.container}>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-html5-plain colored' />
					<span>HTML</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-css3-plain colored' />
					<span>CSS</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-javascript-plain colored' />
					<span>Javascript</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-react-original colored' />
					<span>React</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i
						style={{ color: '#7248B6' }}
						className='devicon-redux-original'
					/>
					<span>Redux</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i
						className='devicon-npm-original-wordmark colored'
					/>

					<span>Npm</span>
				</div>



				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i class="devicon-typescript-plain"></i>

					<span>Typescript</span>
				</div>




				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<img style={{ borderRadius: "50%", width: "85%" }} src="data:image/jpeg;base64,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" alt="" />
					<span>Chakra UI</span>
				</div>


			</div>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Back End
			</h1>
			<div className={styles.borderBottom} />
			<div className={styles.container}>

				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i
						style={{ color: '#509941' }}
						className='devicon-nodejs-plain'
					/>
					<span>Node</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-express-original' />
					<span>Express</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-mongodb-plain colored' />
					<span>MongoDB</span>
				</div>

			</div>


			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Tools
			</h1>
			<div className={styles.borderBottom} />
			<div className={styles.container}>

				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i style={{ color: '#509941' }} class="devicon-git-plain"></i>
					<span>Git</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,

					}}
					className={styles.logoWrapper}
				>
					{/* <i className='devicon-express-original' /> */}
					<img style={{ borderRadius: "50%", width: "85%" }} src="data:image/png;base64,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" alt="" />
					<span>Postman</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					{/* <i className='devicon-mongodb-plain colored' /> */}
					<img style={{ borderRadius: "50%", width: "45%" }} src="data:image/png;base64,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" alt="" />
					<span>Netlify</span>
				</div>


				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					{/* <i className='devicon-mongodb-plain colored' /> */}
					<img style={{ borderRadius: "50%", width: "85%" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAbFBMVEX///8AAABnZ2fk5OT7+/vz8/Ourq7n5+fJyclMTEw3NzchISH29vZbW1tXV1d0dHTc3NxhYWEuLi5ubm4/Pz8QEBDR0dGGhoZ9fX27u7uMjIwXFxcqKirFxcWhoaG3t7eenp6VlZWpqalISEiFq7eTAAAD/klEQVR4nO3caVbrMAwFYAQFylTmeWrL/vfIg5JHSxNbTuTIku+3AuX+0onu8c4OAAAAAAAAAACALXt72hOYdHamPYFFd0R32jMYdEx0pT2DPQf0z4H2FNZM6NtEew5j7lex3WvPYcsh/TjUnsSUWRPbTHsSS6b031R7FkNefmN70Z7FjiWtWWpPY8WENmAJ4XnYjO1Bex4b9ugP/AnhOPob25H2RBa8/k2N6FV7JgNOtmN71p6pfPPt1Ijm2lOVbr8tNaJ97bkKd94e27n2XGW7aE+N6EJ7sqLddMV2oz1ZyR67UiN61J6tYN2pEWnPVq5FKLaF9nSl6lg+GlhC2u2GY9vVnq9MnctHA0tIm+NYbMfaE5boPZYajvRt4qlhCdn2xIntSXvK0hzGM/uCI/2mS15sl9pzluWOlxqagpuuuLGhKbjmgJsajvRrJvG0fuFI37hPiQ1NwR/M5aOBJWRlFo9qHZqC36bxpDahKfil5QwfdqI9cQneUlMjetOeWd9pempEp9pTq3uIh7St+qZg9E94u9r/j291AHkqbwq2dAB56m4KPveNreqmYGsHkGeuPbueyBk+rN4j/fWQ2K61p9fSc/lo1LqEdHYAeSptCgY6gDx1NgWHplbnkX4xPLYKm4KDlo9GfUtIpAPIU11TkH2GD6vtSB/tAPJU1hRMOMOH1dUUlEqtriWE1QHkqagpmHiGD6vnSH8mGVs1bwoKLR+NWpaQl3gUKSp5zmcZTyJNFU3BpA4gTw1NwV5n+LAKjvRbT/FI8P+cT2IHkMf9kb73GT7M+5E+uQPI47wp2KMDyOO6KdirA8jjuSnY8RSPBMfP+WRZPhp+l5CPnLG5PdIPPsOHeT3S3+aN7Vb7+/JY5E3N6ZFe5Awf5vFIP6gDyOOwKTiwA8jjryk4sAPI424JYTzFI+Fd+zuFjZOatyO94Bk+zNWRfoTlo+FpCWE+xSPB0XM+wmf4MD9HevZTPBLcPOcj1gHkcdIUzHCGD/NxpE96ikeCi+d8RDuAPB6agqIdQB4HTcHkp3gk2H/OR7gDyGO+KSjeAeQx3hTMeIYPs32kz9AB5DHdFMx6hg+zfKTv+RSPBMNNwUwdQB67TcHeT/FIMPucz4CneCTMtb+/H7Xlo2FzCcnYAeQx2RQc5QwfZvFIn7UDyPOhnUG6zB1AHntNwcwdQB5zTcGFdmIrxpqCI57hw2wd6UWe4pFg6jmfUc/wYZaO9EJP8Ugw9JzPSB1AHjtNQe2kNmmnwTVaB5DHSFNQ4QwfZuNIP2IHkMdEU7Cg5aNhYQkZtQPIY6ApOHIHkKf4puDoHUCe0puCamf4sMKP9Puz3SLNbP0JAQAAAAAAAAAAqz4BRyQ4sCSWx6AAAAAASUVORK5CYII=" alt="" />
					<span>Vercel</span>
				</div>



			</div>



		</div>
	);
};

export default TechStacks;
