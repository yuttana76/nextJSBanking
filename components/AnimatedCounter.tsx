'use client'

import CountUp from 'react-countup'

const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
    <div className='w-full'>
        <CountUp 
        decimal='.'
        prefix='$'
        // duration={10}
        decimals={2}
        end={amount} />
    </div>
  )
}

export default AnimatedCounter