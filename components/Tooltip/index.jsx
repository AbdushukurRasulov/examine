import ReactTooltip from 'react-tooltip'

const Tooltip = ({ label, children, place }) => {
  return (
    <>
      <a data-tip data-for="sadFace">
        {label}
      </a>
      <ReactTooltip
        place={place}
        id="sadFace"
        type="dark"
        effect="solid"
        backgroundColor="black"
        textColor="white"
        offset={{ top: 0, left: 0, bottom: 10 }}
      >
        <span>{children}</span>
      </ReactTooltip>
    </>
  )
}

export default Tooltip
