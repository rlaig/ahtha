export type CampaignData = {
  banner: string,
  logo: string,
  name: string
  tags: string[],
  description: string,
  raised: string,
  target: string,
  currency: string,
}

export interface responseData<dataType> {
  data: dataType,
  meta: {
    total: number,
    last_page: number,
    current_page: number,
    page_size: number
  }
}
