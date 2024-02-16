import { FC } from 'react'

interface HeaderProps {
  title: string
  description: string
}

const Header: FC<HeaderProps> = ({
    title,
    description
}) => {
  return (
    <div className='space-y-2'>
        <h2 className='text-3xl font-bold'>{title}</h2>
        <p className='text-sm text-zinc-400'>{description}</p>
    </div>
    )
}

export default Header