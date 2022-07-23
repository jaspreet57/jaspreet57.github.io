import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import useMediaQueryResult from '../../hooks/useMediaQueryResult'
import { SxProps, Theme } from '@mui/material/styles'
import { boldTextWeight, highlightedFont } from '../../theme/variables'
import Grid from '@mui/material/Grid'
import GoIcon from '../svg-components/custom-icons/GoIcon'
import ReactIcon from '../svg-components/custom-icons/ReactIcon'
import JavascriptIcon from '../svg-components/custom-icons/JavascriptIcon'

const AboutMeSection: React.FC = () => {
  const { isMobileView } = useMediaQueryResult()

  let ContainerBoxStyles: SxProps<Theme> = {}
  let HeaderBoxStyles: SxProps<Theme> = {}
  let ContentBoxStyles: SxProps<Theme> = {}

  if (!isMobileView) {
    ContainerBoxStyles = {}
    HeaderBoxStyles = {}
    ContentBoxStyles = {}
  }

  return (
    <Grid container spacing={1} component="section">
      <Grid item md xs="auto"></Grid>
      <Grid
        item
        md={10}
        xs={12}
        container
        spacing={1}
        justifyContent={{ md: 'left', xs: 'center' }}
      >
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
          <Typography gutterBottom>
            Hello! My name is Jaspreet and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012 in
            college times when I used to make blog and wordpress sites for
            college notes. Editing blog templates taught me a lot about HTML &
            CSS!
          </Typography>
          <Typography gutterBottom>
            Fast-forward to today, and I’ve had the privilege of working at a
            start-up, a huge corporation, and with few freelancing clients. I
            have been teaching programming also as a freelancer teacher.
          </Typography>
          <Typography gutterBottom fontWeight="bold">
            Here are a few technologies I’ve been working with recently:
          </Typography>
          <Grid container spacing={1}>
            <Grid item display="flex" alignItems="center" md={4} xs={6}>
              <JavascriptIcon width="50px" />
              <Typography fontWeight="bold">Javascript</Typography>
            </Grid>
            <Grid item display="flex" alignItems="center" md={4} xs={6}>
              <ReactIcon width="50px" />
              <Typography fontWeight="bold"> React JS</Typography>
            </Grid>
            <Grid item display="flex" alignItems="center" md={4} xs={6}>
              <GoIcon width="50px" />
              <Typography fontWeight="bold">Go Lang</Typography>
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
          <Box
            sx={{ width: '100%', height: '300px', background: 'grey' }}
          ></Box>
        </Grid>
      </Grid>
      <Grid item md xs="auto"></Grid>
    </Grid>
  )
}

export default AboutMeSection
