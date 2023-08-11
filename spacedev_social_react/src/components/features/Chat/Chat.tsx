import { sample, sampleSize } from 'lodash'

import React from 'react'
import { useMode } from '../../DarkModeProvider'

export const Chat = () => {
	const { mode, toggleMode } = useMode()

	return (
		<div className='dark:text-white flex flex-col flex-1 h-screen'>
			<div className=' h-14 flex items-center gap-2 p-2 border-0 border-b border-solid border-gray-300 dark:border-gray-700'>
				<div className='w-9 h-9 rounded-xl overflow-hidden '>
					<img className='w-full h-full object-cover' src='https://unsplash.it/50/50?t=98' />
				</div>
				<div className='flex flex-col'>
					<div className='font-semibold text-gray-700 text-xs dark:text-white'>Grace Norton</div>
					<div className='flex gap-1 items-center text-xs text-gray-500 dark:text-gray-300'>
						<div className='bg-green-500 rounded-full h-2 w-2'></div> Online
					</div>
				</div>
				<ul className='flex ml-auto gap-1/2'>
					<li
						onClick={() => toggleMode()}
						className='dark:text-white dark:hover:bg-slate-700 w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-lg cursor-pointer text-gray-600'
					>
						{mode === 'dark' ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='icon icon-tabler icon-tabler-moon'
								width={17}
								height={17}
								viewBox='0 0 24 24'
								strokeWidth={2}
								stroke='currentColor'
								fill='none'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none' />
								<path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z' />
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='icon icon-tabler icon-tabler-sun-high'
								width={24}
								height={24}
								viewBox='0 0 24 24'
								strokeWidth={2}
								stroke='currentColor'
								fill='none'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none' />
								<path d='M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z' />
								<path d='M6.343 17.657l-1.414 1.414' />
								<path d='M6.343 6.343l-1.414 -1.414' />
								<path d='M17.657 6.343l1.414 -1.414' />
								<path d='M17.657 17.657l1.414 1.414' />
								<path d='M4 12h-2' />
								<path d='M12 4v-2' />
								<path d='M20 12h2' />
								<path d='M12 20v2' />
							</svg>
						)}
					</li>
					<li className='dark:text-white dark:hover:bg-slate-700 w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-lg cursor-pointer text-gray-600'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='icon icon-tabler icon-tabler-search'
							width={18}
							height={18}
							viewBox='0 0 24 24'
							strokeWidth={2}
							stroke='currentColor'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
							<path d='M21 21l-6 -6' />
						</svg>
					</li>
					<li className='dark:text-white dark:hover:bg-slate-700 w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-lg cursor-pointer text-gray-600'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='icon icon-tabler icon-tabler-phone-call'
							width={18}
							height={18}
							viewBox='0 0 24 24'
							strokeWidth={2}
							stroke='currentColor'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2' />
							<path d='M15 7a2 2 0 0 1 2 2' />
							<path d='M15 3a6 6 0 0 1 6 6' />
						</svg>
					</li>
					<li className='dark:text-white dark:hover:bg-slate-700 w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-lg cursor-pointer text-gray-600'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='icon icon-tabler icon-tabler-trash'
							width={18}
							height={18}
							viewBox='0 0 24 24'
							strokeWidth={2}
							stroke='currentColor'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<path d='M4 7l16 0' />
							<path d='M10 11l0 6' />
							<path d='M14 11l0 6' />
							<path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
							<path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
						</svg>
					</li>
				</ul>
			</div>
			<div className='p-2 flex flex-col gap-8 flex-1 overflow-auto'>
				{[...new Array(10)].map((_, i) => (
					<React.Fragment key={i}>
						<div className='flex gap-2'>
							<div className='w-9 h-9 rounded-xl overflow-hidden '>
								<img className='w-full h-full object-cover' src='https://unsplash.it/50/50?t=98' />
							</div>
							<div className='flex flex-1 flex-col gap-1'>
								<div className='font-semibold text-gray-700 text-xs dark:text-white'>Grace Norton</div>
								<p className='max-w-[calc(100%-100px)] text-sm text-gray-700 px-2 py-0.5 rounded-lg bg-gray-200 w-fit dark:bg-slate-700 dark:text-white'>
									either built subject continent badly depth sound diagram
								</p>
								<p className='max-w-[calc(100%-100px)] text-sm text-gray-700 px-2 py-0.5 rounded-lg bg-gray-200 w-fit dark:bg-slate-700 dark:text-white'>
									art slave bark direct face danger drew test bell you paragraph sheet third limited ground tone
									captured sing greatly well heading audience hair steel
								</p>
							</div>
						</div>
						<div className='flex gap-2 '>
							<div className='flex items-end flex-1 flex-col gap-1'>
								<p className='max-w-[calc(100%-100px)] text-sm text-white px-2 py-0.5 rounded-lg bg-blue-500 w-fit'>
									either built subject continent badly depth sound diagram
								</p>
								<p className='max-w-[calc(100%-100px)] text-sm text-white px-2 py-0.5 rounded-lg bg-blue-500 w-fit'>
									art slave bark direct face danger drew test bell you paragraph sheet third limited ground tone
									captured sing greatly well heading audience hair steel
								</p>
							</div>
						</div>
					</React.Fragment>
				))}
			</div>
			<div className='flex items-center gap-2 px-2 pb-2 border-0 border-top border-solid border-gray-300'>
				<span className='cursdark:text-purple-400or-pointer'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='icon icon-tabler icon-tabler-circle-plus'
						width={17}
						height={17}
						viewBox='0 0 24 24'
						strokeWidth={2}
						stroke='currentColor'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
						<path d='M9 12l6 0' />
						<path d='M12 9l0 6' />
					</svg>
				</span>
				<div className='bg-white dark:bg-slate-700 w-full flex items-center border rounded-lg border-solid border-primary pl-2 pr-1'>
					<textarea
						className='dark:bg-slate-700 flex-1 outline-none pt-2 placeholder:text-sm text-sm leading-3 h-fit align-middle'
						placeholder='Type a message...'
					></textarea>
					<ul className='flex'>
						<li className='dark:text-white dark:hover:bg-slate-600 w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-lg cursor-pointer text-gray-600'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='icon icon-tabler icon-tabler-alien'
								width={17}
								height={17}
								viewBox='0 0 24 24'
								strokeWidth={2}
								stroke='currentColor'
								fill='none'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none' />
								<path d='M11 17a2.5 2.5 0 0 0 2 0' />
								<path d='M12 3c-4.664 0 -7.396 2.331 -7.862 5.595a11.816 11.816 0 0 0 2 8.592a10.777 10.777 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.777 10.777 0 0 0 3.199 -3.064a11.89 11.89 0 0 0 2 -8.592c-.466 -3.265 -3.198 -5.595 -7.862 -5.595z' />
								<path d='M8 11l2 2' />
								<path d='M16 11l-2 2' />
							</svg>
						</li>
						<li className='dark:text-white dark:hover:bg-slate-600 w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-lg cursor-pointer text-gray-600'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='icon icon-tabler icon-tabler-photo-plus'
								width={17}
								height={17}
								viewBox='0 0 24 24'
								strokeWidth={2}
								stroke='currentColor'
								fill='none'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none' />
								<path d='M15 8h.01' />
								<path d='M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5' />
								<path d='M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4' />
								<path d='M14 14l1 -1c.67 -.644 1.45 -.824 2.182 -.54' />
								<path d='M16 19h6' />
								<path d='M19 16v6' />
							</svg>
						</li>
						<li className='dark:text-white dark:hover:bg-slate-600 w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-lg cursor-pointer text-gray-600'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='icon icon-tabler icon-tabler-brand-telegram'
								width={17}
								height={17}
								viewBox='0 0 24 24'
								strokeWidth={2}
								stroke='currentColor'
								fill='none'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none' />
								<path d='M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4' />
							</svg>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
