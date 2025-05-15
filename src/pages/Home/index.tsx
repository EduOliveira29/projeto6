import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import ProductList from '../../components/Products.List'

export interface GalleryItem {
  type: string
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    desconto?: number
    old?: number
    current?: number
  }
  details: {
    languagues: []
    category: string
    system: string
    developer: string
    publisher: string
    languague: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))
  }, [])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setEmBreve(res))
  }, [])
  return (
    <>
      <Banner />
      <ProductList title={'Promoções'} background={'gray'} games={promocoes} />
      <ProductList title={'Em breve'} background={'black'} games={emBreve} />
    </>
  )
}

export default Home
