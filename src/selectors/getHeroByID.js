import { heroes } from "../data/heroes"

const getHeroByID = (heroID = '') => {
    return heroes.find(hero => hero.id === heroID);
}

export default getHeroByID