import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({})
// returning an empty object since we're not interested in reading anything from the
// redux store, but we need a mapStateToProps regardless in order to reach
// mapDispatchToProps

const mapDispatchToProps = (dispatch) => ({
  setUsername: (name) => {
    dispatch({
      type: 'SET_USERNAME',
      payload: name,
    })
  },
})

const Input = ({ setUsername }) => {
  const [inputName, setInputName] = useState('')

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          setUsername(inputName)
        }}
      >
        <Form.Group>
          <Form.Label>Write your name here</Form.Label>
          <Form.Control
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
        </Form.Group>
      </Form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
