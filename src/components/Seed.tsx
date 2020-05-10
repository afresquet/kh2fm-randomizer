import Button from "@material-ui/core/Button";
import axios from "axios";
import downloadjs from "downloadjs";
import React, { useCallback, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Configuration } from "../Configuration";

export const Seed: React.FC<RouteComponentProps<{ seed: string }>> = ({
	match: {
		params: { seed },
	},
}) => {
	const [configuration, setConfiguration] = useState<Configuration>({} as any);

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		(async function () {
			try {
				const { data } = await axios.get<Configuration>(
					`/randomizer/seed/${seed}`
				);

				setConfiguration(data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		})();
	}, [seed]);

	const download = useCallback(async () => {
		try {
			setLoading(true);

			const response = await axios.get<Blob>(`/randomizer/file/${seed}`, {
				responseType: "blob",
			});

			const filename = response.headers["content-disposition"].match(
				/filename=(.+)/
			)![1];

			downloadjs(response.data, filename, "application/octet-stream");
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	}, [seed]);

	if (loading) {
		return <div>loading...</div>;
	} else if (error) {
		console.error(error);
		return <div>error</div>;
	}

	return (
		<div>
			<pre>{JSON.stringify(configuration, null, 2)}</pre>

			<Button onClick={download} fullWidth>
				Download seed
			</Button>
		</div>
	);
};
