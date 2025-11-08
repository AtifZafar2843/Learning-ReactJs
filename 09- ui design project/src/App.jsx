import './App.css'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

function App() {
  const user = [
    {
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
      tag: 'Satisfied',
      color: 'blue'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1661592899299-a69594743e5d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500',
      tag: 'Undeserved',
      color: 'green'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1661608886163-401a8af9448d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387',
      tag: 'Underbanked',
      color: 'yellow'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1661583687357-f047d7f7b399?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=435',
      tag: 'Understanded',
      color: 'orange'
    }
  ]

  return (
    <>

      <Section1 user={user} />
      <Section2 />
    </>
  )
}

export default App
