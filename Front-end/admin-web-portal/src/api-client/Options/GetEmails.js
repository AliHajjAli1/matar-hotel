import axios from "axios";
import base_url from "../../BaseUrl";

export default async function GetEmails() {
	const response = await axios({
		method: "get",
		url: `${base_url}getemails/get`,
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err.response;
		});

	return response;
}
