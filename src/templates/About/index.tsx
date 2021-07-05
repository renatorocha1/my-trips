import LinkWrapper from 'components/LinkWrapper'
import { Close } from '@styled-icons/evaicons-solid/Close'

import * as S from './styles'

const AboutTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <Close size={32} />
      </LinkWrapper>
      <S.Heading>My Trips</S.Heading>
      <S.Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          officia error? Atque sapiente iste repellendus quasi corporis, debitis
          similique quae perspiciatis, quaerat inventore a temporibus
          consectetur dignissimos impedit, adipisci pariatur?
        </p>
      </S.Body>
    </S.Content>
  )
}

export default AboutTemplate
