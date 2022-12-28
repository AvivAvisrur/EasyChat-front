import './Panel.css'

type Props = {
  children: Array<JSX.Element> | JSX.Element
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  panelHeight?: number
}

export function Panel(props: Props) {
  const styles = { justifyContent: props.justifyContent ?? 'flex-start', height: props.panelHeight && `${props.panelHeight}px` }

  return (
    <div className='panel-box' style={styles}>
      {props.children}
    </div>
  )
}
