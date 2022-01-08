// import library
import PropTypes from 'prop-types'

const Container = ({children, width}) => {
    return(
        <div className={width}>
            {children}
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node
}

export default Container