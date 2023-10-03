export type TTicketDetailPageProps = {
	params: { id: string }
}

export type TTicket = {
	id: string
	title: string
	body: string
	priority: string
	user_email: string
}

export type TTicketForm = {
	title: string
	body: string
	priority: string
	user_email: string
}
