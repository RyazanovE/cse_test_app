import axios from "axios";

const api = axios.create({
	baseURL: 'https://api.github.com/',
	headers: {
		"Accept": "application/vnd.github+json",
		"Authorization": "Bearer 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"
	}
});


export default api