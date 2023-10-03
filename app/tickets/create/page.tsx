// Components
import { TicketForm } from '@/app/tickets/_components'

export default async function CreateTicket() {
	return (
		<main>
			<h2 className='text-center'>Open a New Ticket</h2>
			<TicketForm />
		</main>
	)
}
