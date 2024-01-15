const Cards = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/diyanshrao/',
  },
  {
    name: 'Github',
    link: 'https://github.com/DiyanshRao',
  },
]

export const Footer = () => {
  return (
    <div className=' flex flex-wrap justify-between items-end text-zinc-500 px-5 h-full pb-5'>
      <div>
        <a href='http://diyanshrao.vercel.app/'>
          <p>Visit my portfolio: @diyanshrao</p>
        </a>
      </div>
      <div className='flex flex-row gap-2'>
        {Cards.map((card, index) => (
          <a key={index} href={card.link} className='items-center '>
            <h1 className='font-bold text-md '>{card.name}</h1>
          </a>
        ))}
      </div>
    </div>
  )
}
