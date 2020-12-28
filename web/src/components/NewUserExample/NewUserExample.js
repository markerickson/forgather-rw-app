import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import UserExampleForm from 'src/components/UserExampleForm'

import { QUERY } from 'src/components/UserExamplesCell'

const CREATE_USER_EXAMPLE_MUTATION = gql`
  mutation CreateUserExampleMutation($input: CreateUserExampleInput!) {
    createUserExample(input: $input) {
      id
    }
  }
`

const NewUserExample = () => {
  const { addMessage } = useFlash()
  const [createUserExample, { loading, error }] = useMutation(
    CREATE_USER_EXAMPLE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.userExamples())
        addMessage('UserExample created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createUserExample({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New UserExample</h2>
      </header>
      <div className="rw-segment-main">
        <UserExampleForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewUserExample
