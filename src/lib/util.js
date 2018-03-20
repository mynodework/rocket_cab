export default function(err) {
	if (typeof err === "string") {
		return {
			sucess: 0,
			message: err,
		};
	} else if (err.message || err.error) {
		return {
			sucess: 0,
			message: err.message || err.error,
		};
	}
	return err;
}
