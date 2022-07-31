import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import GoIcon from '../svg-components/custom-icons/GoIcon'
import { highlightedFont } from '../../theme/variables'

const FooterSection: React.FC = () => {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} mt={15}>
      <Typography gutterBottom fontFamily={highlightedFont}>
        Developed & Designed by Jaspreet Singh
      </Typography>
      <GoIcon width="50px" />
    </Box>
  )
}

export default FooterSection
