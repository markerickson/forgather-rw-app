import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import UserExampleForm from 'src/components/UserExampleForm'

export const QUERY = gql`
  query FIND_USER_EXAMPLE_BY_ID($id: Int!) {
    userExample: userExample(id: $id) {
      id
      email
      name
    }
  }
`
const UPDATE_USER_EXAMPLE_MUTATION = gql`
  mutation UpdateUserExampleMutation(
    $id: Int!
    $input: UpdateUserExampleInput!
  ) {
    updateUserExample(id: $id, input: $input) {
      id
      email
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ userExample }) => {
  const { addMessage } = useFlash()
  const [updateUserExample, { loading, error }] = useMutation(
    UPDATE_USER_EXAMPLE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.userExamples())
        addMessage('UserExample updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateUserExample({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit UserExample {userExample.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <UserExampleForm
          userExample={userExample}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
