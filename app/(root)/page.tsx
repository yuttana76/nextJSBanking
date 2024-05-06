import HeaderBox from '@/components/headerBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName:'Boom', lastName: 'JSM',email:'contact@gmail.com'}

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions effeciently."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />

        </header>

      RECENT TRASACTION
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:123.50},{currentBalance:500.50}]}
      />
      </section>
  )
}

export default Home