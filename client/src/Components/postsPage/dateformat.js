function DateFormat(s) {
	let res = "";
	res += s[8] + s[9];
	let m = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	let i = parseInt(s[5] + s[6]);
	res += " " + m[i - 1] + " ";
	res += s[0] + s[1] + s[2] + s[3];
	return res;
}
export default DateFormat;
