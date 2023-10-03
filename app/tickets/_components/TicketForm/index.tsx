'use client'

// React
import { useState, memo, useCallback, useReducer, FormEvent } from 'react'

// Next
import { useRouter } from 'next/navigation'

// Types
import { TTicketForm } from '@/app/tickets/_types/ticket.type'

const TicketForm = memo(() => {
	// Router
	const router = useRouter()

	// Common State
	const [form, formDispatch] = useReducer(
		(
			state: TTicketForm,
			action: {
				type: string
				payload: { key: keyof TTicketForm; value: string }
			}
		): TTicketForm => {
			switch (action.type) {
				case 'SET_FORM':
					return {
						...state,
						[action.payload.key]: action.payload.value
					}
				default:
					return state
			}
		},
		{
			title: '',
			body: '',
			priority: '',
			user_email: ''
		}
	)
	const [isLoading, setIsLoading] = useState(false)

	/**
	 * @description Submit form
	 *
	 * @param {FormEvent<HTMLFormElement>} e
	 *
	 * @return {Promise<void>} Promise<void>
	 */
	const handleSubmit = useCallback(
		async (e: FormEvent<HTMLFormElement>): Promise<void> => {
			e.preventDefault()

			setIsLoading(true)

			const newTicket: TTicketForm = {
				...form,
				user_email: 'mario@netninja.dev'
			}

			const res = await fetch('http://localhost:4000/tickets', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newTicket)
			})

			if (res.status === 201) {
				router.refresh()
				router.push('/tickets')
			}

			setIsLoading(false)
		},
		[router, form]
	)

	return (
		<form onSubmit={handleSubmit} className='w-1/2'>
			<label>
				<span>Title:</span>
				<input
					required
					type='text'
					onChange={e =>
						formDispatch({
							type: 'SET_FORM',
							payload: { key: 'title', value: e.target.value }
						})
					}
					value={form.title}
				/>
			</label>
			<label>
				<span>Body:</span>
				<textarea
					required
					onChange={e =>
						formDispatch({
							type: 'SET_FORM',
							payload: { key: 'body', value: e.target.value }
						})
					}
					value={form.body}
				/>
			</label>
			<label>
				<span>Priority:</span>
				<select
					onChange={e =>
						formDispatch({
							type: 'SET_FORM',
							payload: { key: 'priority', value: e.target.value }
						})
					}
					value={form.priority}
				>
					<option value='low'>Low Priority</option>
					<option value='medium'>Medium Priority</option>
					<option value='high'>High Priority</option>
				</select>
			</label>
			<button className='btn-primary' disabled={isLoading}>
				{isLoading && <span>Adding...</span>}
				{!isLoading && <span>Add Ticket</span>}
			</button>
		</form>
	)
})

TicketForm.displayName = 'TicketForm'

export { TicketForm }
