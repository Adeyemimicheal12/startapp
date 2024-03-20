import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
export default function SignUp() {
  return (
    <div className='m-auto w-[50%]'>
      <form>
        <ul>
          <Input type="text" userid="user" place="your username"/>
          <Input type="email" userid="email" place="your email address"/>
          <Input type="password" userid="pswd" place="your password"/>
          
            <Button status='SignUp'/>
          
        </ul>
      </form>
    </div>
  )
}
