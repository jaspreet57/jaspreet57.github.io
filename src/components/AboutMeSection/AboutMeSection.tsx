import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import { boldTextWeight, highlightedFont } from '../../theme/variables'
import GoIcon from '../svg-components/custom-icons/GoIcon'
import ReactIcon from '../svg-components/custom-icons/ReactIcon'
import JavascriptIcon from '../svg-components/custom-icons/JavascriptIcon'
import { Avatar } from '@mui/material'
import useTheme from '@mui/material/styles/useTheme'
import OfficeImage from '../../assets/images/office-pic.jpeg'

const AboutMeSection: React.FC = () => {
  const theme = useTheme()

  return (
    <Grid container spacing={1} component="section" mb={10}>
      <Grid item md xs="auto"></Grid>
      <Grid item md={11} xs={12}>
        <Grid container spacing={4}>
          <Grid item md={8} xs={12}>
            <Typography
              color="primary"
              gutterBottom
              sx={{
                fontSize: '2rem',
                fontWeight: boldTextWeight,
                fontFamily: highlightedFont,
                borderBottom: '1px solid',
                borderBottomColor: 'primary',
              }}
            >
              About Me
            </Typography>
            <Typography component="p" sx={{ fontSize: '1.1rem' }} gutterBottom>
              I enjoy the stuff like programming, learning new skills, science, and teaching others.
            </Typography>
            <Typography component="p" sx={{ fontSize: '1.1rem' }} gutterBottom>
              My interest in web development started back in 2012 in college times when I used to make blog and
              wordpress sites for college notes. Editing blog templates taught me a lot about HTML & CSS!
            </Typography>
            <Typography component="p" sx={{ fontSize: '1.1rem' }} gutterBottom>
              Fast-forward to today, and I’ve had the privilege of working at start-ups, remote companies, huge
              corporations, and with few freelancing clients.
            </Typography>
            <Typography component="p" sx={{ fontSize: '1.1rem' }} gutterBottom>
              I have also been involved in teaching Javascript and other programing concepts.
            </Typography>
            <Typography component="p" sx={{ fontSize: '1.1rem' }} gutterBottom fontWeight="bold">
              Here are a few technologies I’ve been working with recently:
            </Typography>
            <Grid container spacing={1}>
              <Grid item display="flex" alignItems="center" md={4} xs={6}>
                <JavascriptIcon width="50px" />
                <Typography fontWeight="bold" fontSize="20px">
                  Javascript
                </Typography>
              </Grid>
              <Grid item display="flex" alignItems="center" md={4} xs={6}>
                <ReactIcon width="50px" />
                <Typography fontWeight="bold" fontSize="20px">
                  {' '}
                  React JS
                </Typography>
              </Grid>
              <Grid item display="flex" alignItems="center" md={4} xs={6}>
                <GoIcon width="50px" />
                <Typography fontWeight="bold" fontSize="20px">
                  Go Lang
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4} xs={12}>
            <Typography
              color="primary"
              gutterBottom
              sx={{
                fontSize: '2rem',
                fontWeight: boldTextWeight,
                fontFamily: highlightedFont,
                visibility: 'hidden',
              }}
            >
              _________
            </Typography>
            <Box sx={{ width: '100%' }}>
              <Avatar
                sx={{
                  bgcolor: theme.palette.primary.main,
                  width: '100%',
                  maxWidth: '300px',
                  height: '350px',
                  fontSize: '200px',
                  fontFamily: highlightedFont,
                  margin: 'auto',
                }}
                variant="square"
                src={OfficeImage}
              >
                JS
              </Avatar>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md xs="auto"></Grid>
    </Grid>
  )
}

export default AboutMeSection
