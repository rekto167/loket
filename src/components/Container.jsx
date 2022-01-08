// import library
import PropTypes from 'prop-types'

const Container = ({children}) => {
    return(
        <div className="w-screen">
            {children}
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node
}

export default Container