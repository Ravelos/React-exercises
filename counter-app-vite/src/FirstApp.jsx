import PropTypes from 'prop-types'

export const FirstApp = ({title, subtitle}) => {
  return (
    <>
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number
}

FirstApp.defaultProps = {
  // title:"There's no title",
  subtitle:'This is my subtitle'
}
