import React from 'react'
import Dashboard from '../../components/Dashboard/Dashboard'
import DashCards from '../../components/Dashboard/DashCards'
import Spinner from '../../components/Spinner/Spinner'

const DashHome = () => {
  return (
    <div>
      <Dashboard />
      <DashCards />
    </div>
  )
}

export default DashHome
