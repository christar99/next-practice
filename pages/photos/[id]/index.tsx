import Link from 'next/link';
import React from 'react';

function index({ photo }: any) {
	const { title, url } = photo;
	return (
		<div>
			<h2>{title}</h2>
			<img width={500} height={500} src={url} alt={title} />
			<Link href="/photos">go back</Link>
		</div>
	);
}

export const getStaticProps = async (context: any) => {
	const { id } = context.params;
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/photos/${id}`
	);
	const photo = await res.json();

	return {
		props: {
			photo
		}
	};
};

export const getStaticPaths = async () => {
	const res = await fetch(
		'https://jsonplaceholder.typicode.com/photos?_start=0&_end=19'
	);
	const photos = await res.json();
	const idx = photos.map((photo: any) => photo.id);
	const paths = idx.map((id: string) => {
		return {
			params: { id: id.toString() }
		};
	});
	return {
		paths,
		fallback: false
	};
};

export default index;
