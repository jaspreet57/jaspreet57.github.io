import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'

import useMediaQueryResult from '../../hooks/useMediaQueryResult'
import { SxProps, Theme } from '@mui/material/styles'
import { boldTextWeight, highlightedFont } from '../../theme/variables'
import Link from '@mui/material/Link'

const ExperienceSection: React.FC = () => {
  const { isMobileView } = useMediaQueryResult()

  let timelineItemStyles: SxProps<Theme> = {}

  if (isMobileView) {
    timelineItemStyles = { '::before': { display: 'none' } }
  }

  return (
    <Box component="section">
      <Box component="header">
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
          Where I've worked?
        </Typography>
      </Box>

      <Box>
        <Timeline position={isMobileView ? 'right' : 'alternate'}>
          {/** Item 1 - Sourcefuse Technologies */}
          <TimelineItem sx={timelineItemStyles}>
            {!isMobileView && (
              <TimelineOppositeContent
                sx={{ m: 'auto 0', fontFamily: highlightedFont }}
                align="right"
                variant="body2"
                color="text.primary"
              >
                Nov <strong>2017</strong> - May <strong>2019</strong> & Jul <strong>2020</strong> - Present
              </TimelineOppositeContent>
            )}
            <TimelineSeparator color="secondary">
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              <TimelineDot color="primary">
                <KeyboardDoubleArrowRightIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              {isMobileView && (
                <Typography sx={{ fontFamily: highlightedFont }} variant="body2" color="text.primary">
                  Nov <strong>2017</strong> - May <strong>2019</strong> & <br />
                  Jul <strong>2020</strong> - Present
                </Typography>
              )}
              <Typography variant="h5" color="secondary">
                SourceFuse Technologies
              </Typography>
              <Typography variant="h6" color="GrayText">
                Full Stack Engineer
              </Typography>
              <Typography>
                <Link href="https://www.sourcefuse.com" target="_blank" fontWeight={boldTextWeight}>
                  SourceFuse
                </Link>{' '}
                is the leading AWS Transformation Partner that helps clients in digitizing their business.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/** Item 2 - Clipboard Health */}
          <TimelineItem sx={timelineItemStyles}>
            {!isMobileView && (
              <TimelineOppositeContent
                sx={{ m: 'auto 0', fontFamily: highlightedFont }}
                align="right"
                variant="body2"
                color="text.primary"
              >
                Oct <strong>2019</strong> - May <strong>2020</strong>
              </TimelineOppositeContent>
            )}
            <TimelineSeparator color="secondary">
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              <TimelineDot color="primary">
                <KeyboardDoubleArrowLeftIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              {isMobileView && (
                <Typography sx={{ fontFamily: highlightedFont }} variant="body2" color="text.primary">
                  Oct <strong>2019</strong> - May <strong>2020</strong>
                </Typography>
              )}
              <Typography variant="h5" color="secondary">
                Clipboard Health
              </Typography>
              <Typography variant="h6" color="GrayText">
                Full Stack Engineer
              </Typography>
              <Typography align="left">
                <Link href="https://clipboardhealth.com" target="_blank" fontWeight={boldTextWeight}>
                  Clipboard Health
                </Link>{' '}
                is a healthcare staffing company that helps facilities and professionals to connect together.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/** Item 3 - Webhint */}
          <TimelineItem sx={timelineItemStyles}>
            {!isMobileView && (
              <TimelineOppositeContent
                sx={{ m: 'auto 0', fontFamily: highlightedFont }}
                align="right"
                variant="body2"
                color="text.primary"
              >
                Jul <strong>2019</strong> - Aug <strong>2019</strong>
              </TimelineOppositeContent>
            )}
            <TimelineSeparator color="secondary">
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              <TimelineDot color="primary">
                <KeyboardDoubleArrowRightIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              {isMobileView && (
                <Typography sx={{ fontFamily: highlightedFont }} variant="body2" color="text.primary">
                  Jul <strong>2019</strong> - Aug <strong>2019</strong>
                </Typography>
              )}
              <Typography variant="h5" color="secondary">
                Webhint
              </Typography>
              <Typography variant="h6" color="GrayText">
                Open Source Contributor
              </Typography>
              <Typography align="left">
                <Link href="https://webhint.io" target="_blank" fontWeight={boldTextWeight}>
                  Webhint
                </Link>{' '}
                is a linting tool that will help you with your site's accessibility, speed, security and more, by
                checking your code for best practices and common errors.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/** Item 4 - InstaRem PTE Ltd */}
          <TimelineItem sx={timelineItemStyles}>
            {!isMobileView && (
              <TimelineOppositeContent
                sx={{ m: 'auto 0', fontFamily: highlightedFont }}
                align="right"
                variant="body2"
                color="text.primary"
              >
                Jul <strong>2017</strong> - Nov <strong>2017</strong>
              </TimelineOppositeContent>
            )}
            <TimelineSeparator color="secondary">
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              <TimelineDot color="primary">
                <KeyboardDoubleArrowLeftIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              {isMobileView && (
                <Typography sx={{ fontFamily: highlightedFont }} variant="body2" color="text.primary">
                  Jul <strong>2017</strong> - Nov <strong>2017</strong>
                </Typography>
              )}
              <Typography variant="h5" color="secondary">
                InstaRem PTE Ltd
              </Typography>
              <Typography variant="h6" color="GrayText">
                Full Stack Engineer
              </Typography>
              <Typography align="left">
                <Link href="https://www.instarem.com" target="_blank" fontWeight={boldTextWeight}>
                  InstaRem
                </Link>{' '}
                is a fin-tech company that helps businesses send money to overseas clients.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/** Item 5 - Tata Consultancy Services */}
          <TimelineItem sx={timelineItemStyles}>
            {!isMobileView && (
              <TimelineOppositeContent
                sx={{ m: 'auto 0', fontFamily: highlightedFont }}
                align="right"
                variant="body2"
                color="text.primary"
              >
                Oct <strong>2015</strong> - Jul <strong>2017</strong>
              </TimelineOppositeContent>
            )}
            <TimelineSeparator color="secondary">
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              <TimelineDot color="primary">
                <KeyboardDoubleArrowRightIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              {isMobileView && (
                <Typography sx={{ fontFamily: highlightedFont }} variant="body2" color="text.primary">
                  Oct <strong>2015</strong> - Jul <strong>2017</strong>
                </Typography>
              )}
              <Typography variant="h5" color="secondary">
                Tata Consultancy Services
              </Typography>
              <Typography variant="h6" color="GrayText">
                System Engineer
              </Typography>
              <Typography align="left">
                <Link href="https://www.tcs.com" target="_blank" fontWeight={boldTextWeight}>
                  Tata Consultancy Services
                </Link>{' '}
                is one of the world’s biggest multinational technology consulting companies.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Box>
  )
}

export default ExperienceSection
