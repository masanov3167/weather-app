import Thunderstorm from '../Assets/img/thunderstorm.png';
import Drizzle from '../Assets/img/drizzle.png';
import Snow from '../Assets/img/snow.png';
import Sun from '../Assets/img/sun.png';
import Cloudy from '../Assets/img/cloudy.png';

const HomeImg = () => {
	return (
		<>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<g filter='url(#filter0_b_0_240)'>
					<path
						d='M17.3561 22H6.38746C5.22384 22 4.10787 21.5377 3.28506 20.7149C2.46225 19.8921 2 18.7762 2 17.6125V10.7111C1.99998 9.95665 2.19449 9.21498 2.56474 8.55768C2.93499 7.90038 3.46847 7.34965 4.11366 6.95868L9.59799 3.63518C10.2837 3.21968 11.0701 3 11.8718 3C12.6735 3 13.4599 3.21968 14.1456 3.63518L19.6299 6.95868C20.275 7.34956 20.8083 7.90011 21.1786 8.5572C21.5488 9.2143 21.7434 9.95574 21.7436 10.71V17.6125C21.7436 18.7762 21.2813 19.8921 20.4585 20.7149C19.6357 21.5377 18.5197 22 17.3561 22Z'
						fill='currentColor'
					/>
					<path
						d='M8.58124 17.6114H15.1624'
						stroke='white'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</g>
				<defs>
					<filter
						id='filter0_b_0_240'
						x='-6'
						y='-6'
						width='36'
						height='36'
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'>
						<feFlood floodOpacity='0' result='BackgroundImageFix' />
						<feGaussianBlur in='BackgroundImage' stdDeviation='3' />
						<feComposite
							in2='SourceAlpha'
							operator='in'
							result='effect1_backgroundBlur_0_240'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_backgroundBlur_0_240'
							result='shape'
						/>
					</filter>
				</defs>
			</svg>
		</>
	);
};

const SearchImg = () => {
	return (
		<>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<g filter='url(#filter0_b_0_233)'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M4.51188 5.51177C7.86084 2.16279 13.2908 2.16279 16.6399 5.51177C19.8002 8.67214 19.9783 13.6855 17.1742 17.0546L20.7683 20.6486C21.0773 20.9578 21.0773 21.4591 20.7683 21.7681C20.4591 22.0773 19.9578 22.0773 19.6486 21.7681L16.0546 18.1741C12.6855 20.9782 7.6723 20.8002 4.51188 17.6398C1.16279 14.2907 1.16279 8.86085 4.51188 5.51177ZM6.90382 8.69548C7.21302 8.38628 7.21302 7.88503 6.90382 7.57598C6.59462 7.26678 6.09338 7.26678 5.78419 7.57598C3.57515 9.78503 3.57515 13.3669 5.78419 15.576C6.09339 15.8852 6.59463 15.8852 6.90382 15.576C7.21301 15.2668 7.21302 14.7655 6.90382 14.4563C5.31303 12.8655 5.31303 10.2865 6.90382 8.69562V8.69548Z'
						fill='currentColor'
					/>
				</g>
				<defs>
					<filter
						id='filter0_b_0_233'
						x='-20'
						y='-20'
						width='64'
						height='64'
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'>
						<feFlood floodOpacity='0' result='BackgroundImageFix' />
						<feGaussianBlur in='BackgroundImage' stdDeviation='10' />
						<feComposite
							in2='SourceAlpha'
							operator='in'
							result='effect1_backgroundBlur_0_233'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_backgroundBlur_0_233'
							result='shape'
						/>
					</filter>
				</defs>
			</svg>
		</>
	);
};

const BookmarkImg = () => {
	return (
		<>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<g filter='url(#filter0_b_0_230)'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M5.00002 21.4058V5.37495C5.00002 4.74507 5.25023 4.14099 5.69562 3.69561C6.14101 3.25022 6.74509 3 7.37496 3H16.8747C17.5046 3 18.1087 3.25022 18.5541 3.69561C18.9995 4.14099 19.2497 4.74507 19.2497 5.37495V21.4058C19.2498 21.5089 19.223 21.6103 19.172 21.6999C19.121 21.7895 19.0476 21.8643 18.9589 21.9169C18.8702 21.9695 18.7694 21.9981 18.6663 21.9999C18.5632 22.0017 18.4614 21.9766 18.371 21.9271L12.1249 18.5191L5.87875 21.9271C5.78829 21.9766 5.68652 22.0017 5.58343 21.9999C5.48034 21.9981 5.37949 21.9695 5.29082 21.9169C5.20214 21.8643 5.1287 21.7895 5.07771 21.6999C5.02672 21.6103 4.99994 21.5089 5.00002 21.4058ZM9.74991 10.1248C9.59244 10.1248 9.44142 10.1874 9.33007 10.2987C9.21872 10.4101 9.15617 10.5611 9.15617 10.7186C9.15617 10.876 9.21872 11.0271 9.33007 11.1384C9.44142 11.2498 9.59244 11.3123 9.74991 11.3123H14.4998C14.6573 11.3123 14.8083 11.2498 14.9196 11.1384C15.031 11.0271 15.0935 10.876 15.0935 10.7186C15.0935 10.5611 15.031 10.4101 14.9196 10.2987C14.8083 10.1874 14.6573 10.1248 14.4998 10.1248H9.74991Z'
						fill='currentColor'
					/>
				</g>
				<defs>
					<filter
						id='filter0_b_0_230'
						x='-20'
						y='-20'
						width='64'
						height='64'
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'>
						<feFlood floodOpacity='0' result='BackgroundImageFix' />
						<feGaussianBlur in='BackgroundImage' stdDeviation='10' />
						<feComposite
							in2='SourceAlpha'
							operator='in'
							result='effect1_backgroundBlur_0_230'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_backgroundBlur_0_230'
							result='shape'
						/>
					</filter>
				</defs>
			</svg>
		</>
	);
};

const SettingsImg = () => {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g filter='url(#filter0_b_0_235)'>
				<path
					d='M17.75 12.75C18.3467 12.75 18.919 12.9871 19.341 13.409C19.7629 13.831 20 14.4033 20 15V15.75C20 18.7065 17.21 21.75 12.5 21.75C7.79 21.75 5 18.7065 5 15.75V15C5 14.4033 5.23705 13.831 5.65901 13.409C6.08097 12.9871 6.65326 12.75 7.25 12.75H17.75ZM12.5 3C13.594 3 14.6432 3.4346 15.4168 4.20818C16.1904 4.98177 16.625 6.03098 16.625 7.125C16.625 8.21902 16.1904 9.26823 15.4168 10.0418C14.6432 10.8154 13.594 11.25 12.5 11.25C11.406 11.25 10.3568 10.8154 9.58318 10.0418C8.8096 9.26823 8.375 8.21902 8.375 7.125C8.375 6.03098 8.8096 4.98177 9.58318 4.20818C10.3568 3.4346 11.406 3 12.5 3Z'
					fill='currentColor'
				/>
				<path
					d='M10 17H15'
					stroke='white'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<filter
					id='filter0_b_0_235'
					x='-20'
					y='-20'
					width='64'
					height='64'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feGaussianBlur in='BackgroundImage' stdDeviation='10' />
					<feComposite
						in2='SourceAlpha'
						operator='in'
						result='effect1_backgroundBlur_0_235'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_backgroundBlur_0_235'
						result='shape'
					/>
				</filter>
			</defs>
		</svg>
	);
};
function Images({ code }) {
	if (code >= 200 && code <= 232) {
		return (
			<>
				<img className='card-img' src={Thunderstorm} alt='card-img' />
			</>
		);
	}
	if (code >= 300 && code <= 321) {
		return (
			<>
				<img className='card-img' src={Drizzle} alt='card-img' />
			</>
		);
	}
	if (code >= 500 && code <= 531) {
		return (
			<>
				<img className='card-img' src={Drizzle} alt='card-img' />
			</>
		);
	}
	if (code >= 600 && code <= 622) {
		return (
			<>
				<img className='card-img' src={Snow} alt='card-img' />
			</>
		);
	}
	if (code >= 701 && code <= 781) {
		return (
			<>
				<img className='card-img' src={Sun} alt='card-img' />
			</>
		);
	}
	if (code === 800) {
		return (
			<>
				<img className='card-img' src={Sun} alt='card-img' />
			</>
		);
	}
	if (code >= 801 && code <= 804) {
		return (
			<>
				<img className='card-img' src={Cloudy} alt='card-img' />
			</>
		);
	}
}
export { Images, HomeImg, SearchImg, BookmarkImg, SettingsImg };
