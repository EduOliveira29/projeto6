import { useState } from 'react'
import Section from '../Section'

import { Items, Item, Action, Modal, ModalContent } from './styles'

import play from '../../Assets/images/botao-play.png'
import zoom from '../../Assets/images/zoom.png'
import fechar from '../../Assets/images/close.png'
import { GalleryItem } from '../../pages/Home/index'

type Props = {
  defaulCover: string
  nome: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  estaVisivel: boolean
}

const Gallery = ({ defaulCover, nome, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    estaVisivel: false,
    type: 'imagem',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'imagem') return item.url
    return defaulCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'video') return zoom
    return play
  }
  const closeModal = () => {
    setModal({
      estaVisivel: false,
      type: 'imagem',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  estaVisivel: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Media ${index + 1} de ${nome}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximar a midia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.estaVisivel ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{nome}</h4>
            <img onClick={() => closeModal()} src={fechar} alt="" />
          </header>
          {modal.type === 'imagem' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
          <img src={modal.url} alt="" />
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
