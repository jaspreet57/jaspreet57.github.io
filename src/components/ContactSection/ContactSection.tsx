import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { boldTextWeight, highlightedFont } from '../../theme/variables'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

const ContactSection: React.FC = () => {
  return (
    <Box component="section" mt={10}>
      <Box component="header" mb={2}>
        <Typography
          color="primary"
          gutterBottom
          component="h2"
          sx={{
            fontSize: '2rem',
            fontWeight: boldTextWeight,
            fontFamily: highlightedFont,
            borderBottom: '1px solid',
            borderBottomColor: 'primary',
            width: 'fit-content',
            margin: 'auto',
          }}
        >
          Get In Touch
        </Typography>
      </Box>

      <Grid container spacing={1}>
        <Grid item md xs="auto"></Grid>
        <Grid item md={8} xs={12} textAlign="center">
          <Typography component="p" fontSize="20px" gutterBottom>
            Have any question or just want to say hi, you can always reach out to me at email, linkedin or social links. I'll
            try my best to get back to you!
          </Typography>
          <Button
            href="mailto:erjaspreet57@gmail.com"
            target="_blank"
            variant="outlined"
            color="primary"
            size="large"
            sx={{ fontSize: '20px', textTransform: 'none', margin: 'auto', marginTop: '20px' }}
          >
            Say Hello
          </Button>
        </Grid>
        <Grid item md xs="auto"></Grid>
      </Grid>
    </Box>
  )
}

export default ContactSection
