import Link from 'next/link';
import HeadInfo from '../components/HeadInfo';
import PhotoStyles from '../styles/Photo.module.css';

function photos({ photos }: any) {
	return (
		<>
			<HeadInfo title={'My Blog Photos'} />
			<div>MyPhotos</div>
			<ul className={PhotoStyles.photo}>
				{photos.map((photo: any, index: number) => {
					return (
						<li key={index}>
							<Link href={`/photos/${photo.id}`}>
								<img
									src={photo.thumbnailUrl}
									width={100}
									height={100}
									alt={photo.title}
								/>
								<span>{photo.title}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export const getStaticProps = async () => {
	const res = await fetch(
		'https://jsonplaceholder.typicode.com/photos?_start=0&_end=19'
	);
	const photos = await res.json();

	return {
		props: { photos }
	};
};

export default photos;
