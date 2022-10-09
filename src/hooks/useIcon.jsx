import icons from '../data/icons'

import unknownIcon from '../assets/icons/unknown.svg'

export const useIcon = () => {
    /**
     * Detects the language of the repository or another framework.
     * @param {String} name - The name of the language or framework.
     * @returns {Object} The icon object.
     */
    const detectIcon = (name) => {
        const icon = icons.find(
            (icon) =>
                icon.fullname.toLowerCase() === name.toLowerCase() ||
                name in icon.keywords
        )
        return icon ? icon : { name: name, path: unknownIcon }
    }

    return { detectIcon }
}
