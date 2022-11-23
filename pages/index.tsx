import React from 'react';

function Home({ posts }: any) {
	return (
		<div>
			<h1>Welcome to my blog</h1>
			<ul>
				{posts.map((post: any, index: number) => {
					return <li key={index}>{post.title}</li>;
				})}
			</ul>
		</div>
	);
}

// export const getServerSideProps = async () => {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=19');
// 	const posts = await res.json();
// 	if (res.status === 200) {
// 		return {
// 			props: {
// 				posts,
// 			},
// 		};
// 	}
// };

export const getStaticProps = async () => {
	const res = await fetch(
		'https://jsonplaceholder.typicode.com/posts?_start=0&_end=19'
	);
	const posts = await res.json();
	if (res.status === 200) {
		return {
			props: {
				posts
			},
			revalidate: 20
		};
	}
};

export default Home;
