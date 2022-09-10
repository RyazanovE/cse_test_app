import axios from "axios";

const api = axios.create({
	baseURL: 'https://api.github.com/',
	headers: {
		"Accept": "application/vnd.github+json",
		"Authorization": "Bearer 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"
	}
});


export default api