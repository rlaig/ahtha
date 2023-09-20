import React from 'react'
import { CampaignData } from '../types'
import {
  Card,
  ProgressBar,
  Button,
  OverlayTrigger,
  Popover,
} from 'react-bootstrap'
import style from '../styles/campaignCard.module.scss'

type Props = {
  campaign: CampaignData
}

export const CampaignCard: React.FC<Props> = ({ campaign }) => {
  const truncateText = (text: string, length: number) => {
    if (text.length > length) {
      const popover = (
        <Popover id="popover-basic">
          <Popover.Body>{text}</Popover.Body>
        </Popover>
      )

      return (
        <OverlayTrigger trigger="hover" placement="bottom" overlay={popover}>
          <div>{`${text.substring(0, length)}...`}</div>
        </OverlayTrigger>
      )
    }

    return text
  }

  return (
    <Card className={style.card}>
      <Card.Header
        className={style.cardHeaderBanner}
        style={{ backgroundImage: `url(${campaign.banner})` }}
      >
        <Card.Img
          style={{ backgroundImage: `url(${campaign.logo})` }}
          className={style.cardHeaderLogo}
        />
      </Card.Header>
      <Card.Body className="pt-5">
        <Card.Title className="text-center fw-bolder">
          {truncateText(campaign.name, 16)}
        </Card.Title>
        <Card.Text className={`text-wrap ${style.cardDescription}`}>
          {truncateText(campaign.description, 80)}
        </Card.Text>
        <ProgressBar
          className={style.cardProgressBar}
          now={(Number(campaign.raised) / Number(campaign.target)) * 100}
          label={
            campaign.raised >= campaign.target
              ? 'Target Reached'
              : `${(
                  (Number(campaign.raised) / Number(campaign.target)) *
                  100
                ).toFixed(2)}% Funded`
          }
          variant={campaign.raised >= campaign.target ? 'info' : 'warning'}
        />
        <Card.Text className={`text-center m-1 ${style.cardRaised}`}>
          Raised {Number(campaign.raised).toLocaleString()} of{' '}
          {Number(campaign.target).toLocaleString()} {campaign.currency}
        </Card.Text>
      </Card.Body>
      <div className="d-grid gap-2 m-2">
        <Button
          variant="outline-primary"
          size="sm"
          className={style.investButton}
        >
          Invest Now
        </Button>
      </div>
      <Card.Body className={style.cardTags}>
        <Card.Text className={`m-0 ${style.cardTagText}`}>tags://</Card.Text>
        {campaign.tags.map((tag, index) => (
          <a className={style.cardTag} key={index} href={`/?search=${tag}`}>
            #{tag}
          </a>
        ))}
      </Card.Body>
    </Card>
  )
}
