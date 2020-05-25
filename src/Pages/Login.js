import React from 'react'
import Form from '../components/Form'
import TextDescription from '../components/Text'
import { useInfos } from '../state-management/context'

const UserPage = () => {
  const { user } = useInfos()

  return (
    <>
      <TextDescription variant="h3" infos={`Sign ${user.id ? 'In' : 'Up'}`} />
      <Form />
    </>
  )
}

export default UserPage
