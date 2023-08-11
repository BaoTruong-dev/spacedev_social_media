import { random, sample, sampleSize } from 'lodash'
import { cn } from '../../../utils'
const tags = [
	{ name: 'Question', className: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' },
	{ name: 'Wanted Help', className: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' },
	{ name: 'Bug', className: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' },
]

const users = [
	{
		name: 'Lillian Cain',
		avatar: 'https://unsplash.it/50/50?t=98',
		message: 'rQ7wBskbtw7Yv0O',
		online: 0,
	},
	{
		name: 'Lilly Crawford',
		avatar: 'https://unsplash.it/50/50?t=27',
		message: 'XrN3wnvY8yB2WDJFbwzE',
		online: 1,
	},
	{
		name: 'Jean Malone',
		avatar: 'https://unsplash.it/50/50?t=79',
		message: 'mSlZV1TY5owi6J3Yb80B',
		online: 1,
	},
	{
		name: 'Edith Cruz',
		avatar: 'https://unsplash.it/50/50?t=96',
		message: 'LCHHTnSdAelxWL0',
		online: 0,
	},
	{
		name: 'Nathan Frank',
		avatar: 'https://unsplash.it/50/50?t=10',
		message: 'qH7fc354sPA3jIK7N',
		online: 1,
	},
	{
		name: 'Gertrude Reid',
		avatar: 'https://unsplash.it/50/50?t=66',
		message: 'dTXLNCXEDF',
		online: 0,
	},
	{
		name: 'Corey McKinney',
		avatar: 'https://unsplash.it/50/50?t=78',
		message: '50rSrDfzkQa8JX8',
		online: 1,
	},
	{
		name: 'Dennis Lambert',
		avatar: 'https://unsplash.it/50/50?t=9',
		message: 'fwLHzgKizD',
		online: 0,
	},
	{
		name: 'Clara Keller',
		avatar: 'https://unsplash.it/50/50?t=99',
		message: 'mNWlUvO5snfguTiBeSU',
		online: 1,
	},
	{
		name: 'Pearl Santos',
		avatar: 'https://unsplash.it/50/50?t=64',
		message: 't3vSgdWAmVn',
		online: 0,
	},
	{
		name: 'Minerva Lee',
		avatar: 'https://unsplash.it/50/50?t=5',
		message: '8fPI28PQzNx7rPdhIgA',
		online: 0,
	},
]

export const ListUser = () => {
	return (
		<div className='dark:border-gray-700  dark:text-white h-screen overflow-auto flex flex-col w-[250px] border-0 border-r border-solid border-gray-300'>
			<div className=' dark:border-gray-700 dark:text-white h-14 flex items-center p-2 border-0 border-b border-solid border-gray-300'>
				<span className='text-xl font-semibold'>Messages</span>
				<span className='dark:text-purple-300 dark:bg-purple-900 bg-purple-200 rounded-md text-purple-800 inline-block text-[10px] font-bold px-1 ml-2'>
					21
				</span>
				<span className='dark:hover:bg-slate-700 w-8 h-8 hover:bg-gray-100 rounded-lg inline-flex items-center justify-center ml-auto cursor-pointer'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='icon icon-tabler icon-tabler-circle-plus'
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
						<path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
						<path d='M9 12l6 0' />
						<path d='M12 9l0 6' />
					</svg>
				</span>
			</div>
			<div className='flex-1 overflow-auto'>
				<div className='p-2 sticky top-0 bg-white dark:bg-transparent z-10'>
					<div className='dark:bg-slate-600 flex gap-2 bg-gray-200 rounded-lg px-2 py-1.5 items-center'>
						<span className='text-gray-400'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='icon icon-tabler icon-tabler-search'
								width={15}
								height={15}
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
						</span>
						<input
							className='flex-1  text-sm bg-transparent outline-none placeholder:text-gray-500 placeholder:text-xs'
							placeholder='Search Message...'
						/>
					</div>
				</div>

				<div className='flex flex-col'>
					{users.map(e => (
						<div
							key={e.name}
							className='flex px-2 gap-2 items-start hover:bg-gray-100 dark:hover:bg-slate-700 py-3 select-none'
						>
							<div className='relative'>
								<div className='w-9 h-9 rounded-xl overflow-hidden '>
									<img className='w-full h-full object-cover' src={e.avatar} />
								</div>
								<div
									className={cn(
										'rounded-full h-2 w-2 absolute bottom-0 right-0 dark:shadow-slate-900 shadow-[0_0_0_4px_white]',
										{
											'bg-green-500': e.online,
											'bg-gray-500': !e.online,
										},
									)}
								></div>
							</div>
							<div className='flex-1'>
								<div className='text-xs flex justify-between font-semibold'>
									<span>Antonio McKenzie</span> <span className='text-xs text-gray-400'>11:23</span>
								</div>
								<p className='dark:text-gray-300 text-xs text-gray-500 line-clamp-1'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit
								</p>
								<div className='mt-1 flex gap-1'>
									{sampleSize(tags, random(3)).map(e => (
										<div className={cn('text-[11px] px-2 flex items-center justify-center rounded-full', e.className)}>
											{e.name}
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
