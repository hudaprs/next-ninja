// Next
import Link from 'next/link'

// Components
import { TicketItem } from './_components'

// Types
import { TTicket } from './_types/ticket.type'

export default async function Ticket() {
	const ticketListResponse = await fetch('http://127.0.0.1:4000/tickets', {
		// next: { revalidate: 0 }
		cache: 'no-store'
	})
	const tickets = (await ticketListResponse.json()) as TTicket[]

	return (
		<main>
			<nav>
				<div>
					<h2>Tickets</h2>
					<p>
						<small>Currently open tickets.</small>
					</p>
				</div>

				<Link href='/tickets/create' className='ml-auto'>
					<button className='btn-primary'>New Ticket</button>
				</Link>
			</nav>

			{tickets.map(ticket => (
				<Link key={ticket.id} href={`/tickets/${ticket.id}`}>
					<TicketItem {...ticket} />
				</Link>
			))}
		</main>
	)
}
