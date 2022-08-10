import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from './styles'

const Title: React.FC = () => {

  const { t } = useTranslation()
    return (
      <>
      <Container>
        <span>{t('titleskills')}</span>
      </Container>
      </>
    )
}

export default Title
