import React from 'react'
import HeroCard from './components/HeroCard'
import HeroSprite from './components/HeroSprite'
import { buildAPIHero } from './utils'

export const DfkHeroCard = ({ apiHero, isAnimated, isFlipped }) => {
  return (
    <HeroCard hero={apiHero} isAnimited={isAnimated} isFlipped={isFlipped} />
  )
}

export const DfkHeroSprite = () => {
  return <HeroSprite noCard={true} />
}

export const getApiHero = async (id) => {
  const hero = await axios.post(
    'https://us-central1-defi-kingdoms-api.cloudfunctions.net/query_heroes',
    {
      limit: 1,
      params: [{ field: 'id', operator: '=', value: req.params.id }],
    }
  )

  const apiHero = buildAPIHero(hero)

  return apiHero
}

export { buildAPIHero }
