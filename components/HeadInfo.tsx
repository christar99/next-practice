import Head from 'next/head';
import React from 'react';

type HeadInfoProps = {
	title?: string;
	keyword?: string;
	contents?: string;
};

function HeadInfo({ title, keyword, contents }: HeadInfoProps) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="keyword" content={keyword} />
				<meta name="contents" content={contents} />
			</Head>
		</div>
	);
}

export default HeadInfo;
