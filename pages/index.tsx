import 'bootstrap/dist/css/bootstrap.min.css'
import style from '../styles/custom.module.scss'
import Head from 'next/head'
import React, { useState, useEffect, useCallback } from 'react'
import { Formik } from 'formik'
import useSWR, { Fetcher } from 'swr'
import { isNotNil } from 'ramda'
import {
  Container,
  Row,
  Col,
  Spinner,
  Pagination,
  InputGroup,
  Button,
  Form,
} from 'react-bootstrap'
import { CampaignData, responseData } from './types'
import { CampaignCard } from './components/CampaignCard'

const Home: React.FC = () => {
  const [page, setPage] = useState<number>(1)
  const [size, setSize] = useState<number>(4)
  const [search, setSearch] = useState<string>('')

  const getCampaigns: Fetcher<
    responseData<CampaignData[]>,
    { url: string; pageParam: number; sizeParam: number; searchParam: string }
  > = ({
    url,
    pageParam,
    sizeParam,
    searchParam,
  }: {
    url: string
    pageParam: number
    sizeParam: number
    searchParam: string
  }) => {
    const query = `?page=${pageParam}&size=${sizeParam}&search=${searchParam}`

    return fetch(url + query).then((res) => res.json())
  }

  const { data, isLoading } = useSWR(
    {
      url: '/api/campaigns',
      pageParam: page,
      sizeParam: size,
      searchParam: search,
    },
    getCampaigns
  )

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const searchParam = urlParams.get('search')
    const pageParam = urlParams.get('page')
    const sizeParam = urlParams.get('size')
    if (isNotNil(pageParam)) setPage(Number(pageParam))
    if (isNotNil(sizeParam)) setSize(Number(sizeParam))
    if (isNotNil(searchParam)) setSearch(searchParam)
  }, [setPage, setSize, setSearch])

  const navigatePage = useCallback(
    (pageNumber: number) => {
      setPage(pageNumber)
      window.history.pushState(
        {},
        '',
        `?page=${pageNumber}&size=${size}${search ? `&search=${search}` : ''}`
      )
    },
    [setPage, search, size]
  )

  const handleSearch = useCallback(
    (searchQuery: string) => {
      setSearch(searchQuery)
      setPage(1)
      setSize(4)
      window.history.pushState(
        {},
        '',
        `?page=1&size=4${searchQuery ? `&search=${searchQuery}` : ''}`
      )
    },
    [setSearch, setPage, setSize]
  )

  return (
    <>
      <Head>
        <title>ahtha</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container fluid="sm" className="font-monospace lh-base">
        <Row className="justify-content-center p-3">
          <Col xs="6">
            <Formik
              enableReinitialize
              initialValues={{ searchField: search }}
              onSubmit={(values, { setSubmitting }) => {
                handleSearch(values.searchField)
                setSubmitting(false)
              }}
            >
              {({ values, handleSubmit, handleChange, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                  <InputGroup className="mb-3">
                    <Form.Control
                      className={style.searchForm}
                      type="text"
                      name="searchField"
                      onChange={handleChange}
                      value={values.searchField}
                      placeholder="Search Campaigns or Tags"
                    />
                    <Button
                      className={style.searchForm}
                      variant="outline-secondary"
                      id="button-addon2"
                      type="submit"
                      disabled={isSubmitting || isLoading}
                    >
                      Submit
                    </Button>
                  </InputGroup>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>

        <Row className="justify-content-center">
          {!isLoading && data ? (
            data.data.map((campaign, index) => (
              <Col key={index} xs={12} md={6} lg={4} xl={3} className="p-1">
                <CampaignCard campaign={campaign} />
              </Col>
            ))
          ) : (
            <Col
              xs="auto"
              className={`d-flex align-items-center ${style.card}`}
            >
              <Spinner animation="border" />
            </Col>
          )}
        </Row>

        <Row className="justify-content-center p-3">
          <Col xs="auto">
            <Pagination>
              <Pagination.Prev
                onClick={() => {
                  navigatePage(page - 1)
                }}
                disabled={page === 1}
              />
              {data &&
                Array.from(Array(data.meta.last_page).keys()).map(
                  (item, index) => (
                    <Pagination.Item
                      key={index}
                      active={page === item + 1}
                      onClick={() => navigatePage(item + 1)}
                    >
                      <span className={style.paginationItems}>{item + 1}</span>
                    </Pagination.Item>
                  )
                )}
              <Pagination.Next
                onClick={() => navigatePage(page + 1)}
                disabled={data && page >= data.meta.last_page}
              />
            </Pagination>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
