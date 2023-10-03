// React
import { memo } from 'react'

// Types
import { TTicketItemProps } from './types'

const TicketItem = memo(({ body, title, priority }: TTicketItemProps) => {
	return (
		<div className='card'>
			<h3>{title}</h3>
			<p>{body.slice(0, 200)}...</p>
			<div className={`pill ${priority}`}>{priority} priority</div>
		</div>
	)
})

TicketItem.displayName = 'TicketItem'

export { TicketItem }
