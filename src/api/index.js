import axios from "axios";

const api = axios.create({
	baseURL: 'https://api.github.com/',
	headers: {
		"Accept": "application/vnd.github+json",
		"Authorization": "Bearer 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"
	}
});


export default api