import axios from 'axios';

const getErrorMessage = (error) => {
	if (axios.isAxiosError(error)) {
		return (
			error.response?.data?.message ||
			error.response?.data?.reason ||
			error.message
		);
	}

	if (error.message || message.details) {
		return `${error.message} ${error.details}`;
	}

	if (error instanceof Error) {
		return error.message;
	}

	return JSON.stringify(error);
};

export default getErrorMessage;
