export const formatDate = (date?: string) => {
	if (date) {
		const dateNow = new Date(date)
		const abbreviated_months = [
			'jan', 'fev', 'mar', 'abr',
			'mai', 'jun', 'jul', 'ago',
			'set', 'out', 'nov', 'dez'
		]

		const day = dateNow.getDate();
		const abbreviated_month = abbreviated_months[dateNow.getMonth()]
		const year = dateNow.getFullYear()
		const hour = dateNow.getHours();
		const minute = dateNow.getMinutes();

		return `${day} ${abbreviated_month}. ${year} ${hour}:${minute < 10 ? '0' + minute : minute}`;
	}
}