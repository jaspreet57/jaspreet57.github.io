import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';

import ProfileHighlight from '../../components/svg-components/ProfileHighlight'
import useMediaQueryResult from '../../hooks/useMediaQueryResult'
import { SxProps, Theme } from '@mui/material/styles'
import { boldTextWeight, highlightedFont } from '../../theme/variables'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link';


const ExperienceSection: React.FC = () => {
  const { isMobileView } = useMediaQueryResult()

  let ContainerBoxStyles: SxProps<Theme> = {}
  let IntroBoxStyles: SxProps<Theme> = {}
  let ProfileBoxStyles: SxProps<Theme> = {}
  let profileBoxPositions: SxProps<Theme> = {}
  let timelineItemStyles: SxProps<Theme> = {}

  if (isMobileView) {
    ContainerBoxStyles = {}
    IntroBoxStyles = {}
    ProfileBoxStyles = {}
    timelineItemStyles = { '::before': { display: 'none' } }
  }

  return (
    <Box component="section" sx={ContainerBoxStyles}>
      <Box sx={IntroBoxStyles} component="header">
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
            margin: 'auto'
          }}
        >
          Where I've worked?
        </Typography>
      </Box>

      <Box sx={ProfileBoxStyles}>
        <Timeline position={isMobileView ? 'right' : 'alternate'}>

          {/** Item 1 - Sourcefuse Technologies */}
          <TimelineItem sx={timelineItemStyles}>
            {!isMobileView && <TimelineOppositeContent
              sx={{ m: 'auto 0', fontFamily: highlightedFont }}
              align="right"
              variant="body2"
              color="text.primary"
            >
              Nov <strong>2017</strong> - May <strong>2019</strong> & Jul <strong>2020</strong> - Present
            </TimelineOppositeContent>}
            <TimelineSeparator color='secondary'>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              <TimelineDot color='primary'>
                <KeyboardDoubleArrowRightIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              {isMobileView && <Typography sx={{ fontFamily: highlightedFont }} variant="body2" color="text.primary">
                Nov <strong>2017</strong> - May <strong>2019</strong> & <br />Jul <strong>2020</strong> - Present
              </Typography>}
              <Typography variant="h5" color="secondary">
                SourceFuse Technologies
              </Typography>
              <Typography variant="h6" color="GrayText">
                Full Stack Engineer
              </Typography>
              <Typography>
                <Link href="https://www.sourcefuse.com/" fontWeight={boldTextWeight}>SourceFuse</Link> is the leading AWS Transformation Partner that helps clients
                in digitizing their business.
              </Typography>
            </TimelineContent>
          </TimelineItem>



          {/** Item 2 - Sourcefuse Technologies */}
          <TimelineItem sx={timelineItemStyles}>
            {!isMobileView && <TimelineOppositeContent
              sx={{ m: 'auto 0', fontFamily: highlightedFont }}
              align="right"
              variant="body2"
              color="text.primary"
            >
              Oct <strong>2019</strong> - May <strong>2020</strong>
            </TimelineOppositeContent>}
            <TimelineSeparator color='secondary'>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              <TimelineDot color='primary'>
                <KeyboardDoubleArrowLeftIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              {isMobileView && <Typography sx={{ fontFamily: highlightedFont }} variant="body2" color="text.primary">
                Oct <strong>2019</strong> - May <strong>2020</strong>
              </Typography>}
              <Typography variant="h5" color="secondary">
                Clipboard Health
              </Typography>
              <Typography variant="h6" color="GrayText">
                Full Stack Engineer
              </Typography>
              <Typography align="left">
                <Link href="https://clipboardhealth.com/" fontWeight={boldTextWeight}>Clipboard Health</Link> is a healthcare staffing company that helps facilities and
                professionals to connect together.
              </Typography>
            </TimelineContent>
          </TimelineItem>



          {/** Item 3 - Sourcefuse Technologies */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              <TimelineDot color='primary'>
                <KeyboardDoubleArrowRightIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Sleep
              </Typography>
              <Typography>Because you need rest</Typography>
            </TimelineContent>
          </TimelineItem>


          {/** Item 4 - Sourcefuse Technologies */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              <TimelineDot color='primary'>
                <KeyboardDoubleArrowRightIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Repeat
              </Typography>
              <Typography>Because this is the life you love!</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Box>
  )
}

export default ExperienceSection
