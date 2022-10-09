import List from './List'
import Icon from './Icon'

import icons from '../data/icons'

export default function Technologies() {
    return (
        <List ordered={false}>
            {icons.map((icon, index) => (
                <Icon
                    key={index}
                    title={icon.name}
                    redirect={icon.homepage}
                    path={icon.path}
                />
            ))}
        </List>
    )
}
