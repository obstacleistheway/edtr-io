import { ScopeContext } from '@edtr-io/core'
import * as React from 'react'

import { styled } from '../theme'

const NoClickArea = styled.div<{ active: boolean }>(props => {
  return {
    pointerEvents: props.active ? 'unset' : 'none',
    position: 'relative'
  }
})
const Overlay = styled.div<{ active: boolean; blur: boolean }>(props => {
  return {
    display: props.active ? 'none' : undefined,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    backgroundColor: props.blur ? 'rgba(255,255,255,0.8)' : undefined
  }
})

const ButtonWrapper = styled.div({
  width: '100%',
  height: '100%',
  textAlign: 'center',
  display: 'flex'
})
const ActivateButton = styled.button({
  pointerEvents: 'all',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  padding: '2px 10px',
  textAlign: 'center',
  outline: 'none',
  backgroundColor: 'rgb(0,126,193)',
  zIndex: 10,
  margin: 'auto'
})
export const PreviewOverlay: React.FunctionComponent<
  PreviewOverlayProps
> = props => {
  const [active, setActiveState] = React.useState(false)
  const { scope } = React.useContext(ScopeContext)

  const setActive = React.useCallback(
    (nextActive: boolean) => {
      if (props.onChange) {
        props.onChange(nextActive)
      }
      setActiveState(nextActive)
    },
    [props]
  )

  React.useEffect(() => {
    if (!props.focused && active) {
      setActive(false)
    }
  }, [props.focused, active, setActive])
  return (
    <NoClickArea active={active}>
      <Overlay blur={props.focused} active={active}>
        {props.focused ? (
          <ButtonWrapper>
            <ActivateButton
              onClick={() => {
                setActive(true)
              }}
            >
              Aktivieren
            </ActivateButton>
          </ButtonWrapper>
        ) : null}
      </Overlay>
      {!props.editable ? (
        <ScopeContext.Provider
          value={{
            scope,
            editable: false
          }}
        >
          {props.children}
        </ScopeContext.Provider>
      ) : (
        props.children
      )}
      {active ? (
        <ButtonWrapper>
          <ActivateButton
            onClick={() => {
              setActive(false)
            }}
          >
            Editieren
          </ActivateButton>
        </ButtonWrapper>
      ) : null}
    </NoClickArea>
  )
}

interface PreviewOverlayProps {
  focused: boolean
  editable?: boolean
  onChange?: (nextActive: boolean) => void
}
