import PropTypes from 'prop-types'
import { Typography } from "@mui/material"


export const EnterpriceCard = ({imgEnterpriceURL, enterprice, descEnterprice}) => {

    return (
    <div className='flex items-center my-4 md:my-8'>
        <img src={imgEnterpriceURL} alt={enterprice} className='w-16'/>
        <div className='flex flex-col ml-3'>
        <Typography
            variant='h5' 
            component='h3'
        >
            {enterprice}
        </Typography>
        <Typography 
            variant='subtitle5' 
            component='p' 
            color='grey.600'
        >
            {descEnterprice}
        </Typography>
        </div>
    </div>
  )
}

EnterpriceCard.propTypes = {
    imgEnterpriceURL: PropTypes.string.isRequired,
    enterprice: PropTypes.string.isRequired,
    descEnterprice: PropTypes.string.isRequired
}

