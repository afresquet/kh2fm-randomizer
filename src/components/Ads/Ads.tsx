import React, { useEffect } from "react";

declare global {
	interface Window {
		adsbygoogle: any[];
	}
}

interface Props {
	className?: string;
	style?: React.CSSProperties;
	layout?: string;
	layoutKey?: string;
	format?: string;
	responsive?: "true" | "false";
}

export const Ads: React.FC<Props> = props => {
	useEffect(() => {
		if (window) {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		}
	}, []);

	return (
		<ins
			className={`${props.className} adsbygoogle`}
			style={props.style}
			data-ad-client="ca-pub-5534355610394532"
			data-ad-slot="3404637789"
			data-ad-layout={props.layout}
			data-ad-layout-key={props.layoutKey}
			data-ad-format={props.format}
			data-full-width-responsive={props.responsive}
		/>
	);
};
