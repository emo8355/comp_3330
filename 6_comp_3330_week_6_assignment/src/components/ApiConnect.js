import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "./List";
import WithListLoading from "./WithListLoading";

export default function ApiConnect() {
	const ListLoading = WithListLoading(List);

	const [AppState, setAppState] = useState({ loading: false, repos: null });

	useEffect(() => {
		setAppState({ loading: true });
		const apiURL = "https://api.randomuser.me/";
		axios.get(apiURL).then((data) => {
			setAppState({ loading: false, repos: data.data.results[0] });
		});
	}, [setAppState]);

	return (
		<div>
			<ListLoading isLoading={AppState.loading} repos={AppState.repos} />
		</div>
	);
}
