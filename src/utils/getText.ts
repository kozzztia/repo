import {dictionary} from '../../public/dictionary'

export const getText = (key: string) => {
    return dictionary[key]
}