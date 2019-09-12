import { StatefulPluginEditorProps } from '@edtr-io/plugin'
import * as R from 'ramda'
import * as React from 'react'

import { inputExerciseState } from '.'
import { InputExerciseRenderer } from './renderer'
import { InteractiveAnswer, AddButton } from '@edtr-io/editor-ui'
import { useScopedSelector } from '@edtr-io/core'
import { getFocused } from '@edtr-io/store'

const types = [
  {
    name: 'Text',
    type: 'input-string-normalized-match-challenge'
  },
  {
    name: 'Zahl',
    type: 'input-number-exact-match-challenge'
  },
  {
    name: 'Ausdruck',
    type: 'input-expression-equal-match-challenge'
  }
]

export function InputExerciseEditor(
  props: StatefulPluginEditorProps<typeof inputExerciseState>
) {
  function translateDataType(type: string) {
    for (let i = 0; i < types.length; i++) {
      if (type === types[i].type) return types[i].name
    }
    return ''
  }
  function translateDataName(name: string) {
    for (let i = 0; i < types.length; i++) {
      if (name === types[i].name) return types[i].type
    }
    return ''
  }

  const { editable, state, focused } = props
  const focusedElement = useScopedSelector(getFocused())
  return (
    <React.Fragment>
      {editable ? (
        <React.Fragment>
          <InputExerciseRenderer {...props} />
          {state.answers().map((answer, index: number) => {
            return (
              <InteractiveAnswer
                key={answer.feedback.id}
                answer={answer.value}
                updateAnswer={(e: React.ChangeEvent<HTMLInputElement>) => {
                  console.log(e)
                  answer.value.set(e.target.value)
                }}
                feedback={answer.feedback}
                feedbackID={answer.feedback.id}
                isActive={answer.isCorrect()}
                handleChange={() => {
                  answer.isCorrect.set(!answer.isCorrect())
                }}
                remove={() => {
                  state.answers.remove(index)
                }}
                focusedElement={focusedElement || undefined}
              />
            )
          })}
          <AddButton onClick={() => state.answers.insert()}>
            Antwort hinzufügen...
          </AddButton>
        </React.Fragment>
      ) : (
        <InputExerciseRenderer {...props} />
      )}
      {focused ? (
        <React.Fragment>
          <hr />
          Wähle den Antworttyp:
          <select
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
              state.type.set(translateDataName(event.target.value))
            }
            value={translateDataType(state.type())}
          >
            {R.map(dataType => {
              return (
                <option key={dataType.name} value={dataType.name}>
                  {dataType.name}
                </option>
              )
            }, types)}
          </select>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  )
}
