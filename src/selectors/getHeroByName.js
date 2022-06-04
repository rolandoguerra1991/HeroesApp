import { heroes } from '../data/heroes';

const getHeroByName = (name = '') => {
    if (name === '') {
        return [];
    }
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name.toLowerCase()));
}

export default getHeroByName