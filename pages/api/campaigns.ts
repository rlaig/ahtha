import type { NextApiRequest, NextApiResponse } from 'next'
import campaignsData from './campaignsResponse.json'
import { isNotNil } from 'ramda'
import { CampaignData, responseData } from '../../types'

const getCampaigns = (
  req: NextApiRequest,
  res: NextApiResponse<responseData<CampaignData[]>>
) => {
  const search =
    (isNotNil(req.query.search) &&
      !Array.isArray(req.query.search) &&
      req.query.search.toLowerCase()) ||
    undefined

  const current_page = Number(req.query.page) || 1
  const page_size = Number(req.query.size) || 4

  // filter
  const filteredData = isNotNil(search)
    ? campaignsData.filter(
        (campaign: CampaignData) =>
          campaign.name.toLowerCase().indexOf(search) >= 0 ||
          campaign.tags.filter((v) => v.toLowerCase().indexOf(search) >= 0)
            .length
      )
    : campaignsData

  // pagination
  const startI = (current_page - 1) * page_size
  const endI = startI + page_size
  const paginatedData = filteredData.slice(startI, endI)

  const response = {
    data: paginatedData,
    meta: {
      filters: search,
      total: filteredData.length,
      last_page: Math.ceil(filteredData.length / page_size),
      current_page,
      page_size,
    },
  }

  return res.status(200).json(response)
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      getCampaigns(req, res)
      break
    case 'POST':
    case 'PATCH':
    case 'DELETE':
    default:
      return res.status(404)
  }
}
