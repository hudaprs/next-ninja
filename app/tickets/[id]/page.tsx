// React
import { Suspense } from 'react'

// Next
import { notFound } from 'next/navigation'

// Components
import { TicketItem } from '@/app/tickets/_components'

// Types
import {
	TTicketDetailPageProps,
	TTicket
} from '@/app/tickets/_types/ticket.type'

export async function generateStaticParams() {
	const ticketDetailResponse = await fetch(`http://127.0.0.1:4000/tickets`, {
		// next: { revalidate: 0 }
		cache: 'no-store'
	})

	const tickets = (await ticketDetailResponse.json()) as TTicket[]

	return tickets.map(ticket => ({
		id: ticket.id
	}))
}

export default async function Ticket({
	params: { id }
}: TTicketDetailPageProps) {
	const ticketDetailResponse = await fetch(
		`http://127.0.0.1:4000/tickets/${id}`,
		{
			// next: { revalidate: 0 }
			cache: 'no-store'
		}
	)
	if (!ticketDetailResponse.ok) {
		return notFound()
	}

	const ticket = (await ticketDetailResponse.json()) as TTicket

	return (
		<main>
			<nav>
				<div>
					<h2>Ticket Detail</h2>
				</div>
			</nav>

			<Suspense>
				<TicketItem {...ticket} />
			</Suspense>
		</main>
	)
}
