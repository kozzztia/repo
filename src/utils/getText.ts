import {dictionary} from '../dictionary'

export const getText = (key: string) => {
    return dictionary[key]
}