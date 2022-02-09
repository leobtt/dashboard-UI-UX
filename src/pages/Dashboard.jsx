import React from 'react'
import {
  DashboardWrapper,
  DashboardWrapperMain,
  DashboardWrapperRight,
} from '../components/dashboard-wrapper/DashboardWrapper'

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardWrapperMain>DashboardWrapperMain</DashboardWrapperMain>
      <DashboardWrapperRight>DashboardWrapperRight</DashboardWrapperRight>
    </DashboardWrapper>
  )
}

export default Dashboard
