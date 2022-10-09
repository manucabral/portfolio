import List from './List'
import Item from './Item'

import { useEffect } from 'react'
import { useGithub } from '../hooks/useGithub'

export default function Projects() {
    const include = [
        'codavi',
        'cornelius',
        'pybrinf',
        'parches-chat',
        'acc-discord-rpc',
        'algebrador',
        'winsock-example',
    ]
    const { repos, loading, fetchRepos } = useGithub(
        import.meta.env.VITE_GITHUB_TOKEN,
        include
    )

    useEffect(() => {
        fetchRepos('manucabral')
    }, [])

    return (
        <List ordered={false} card={true}>
            {loading ? (
                <div className="loading" />
            ) : (
                repos.map((repo) => (
                    <Item
                        key={repo.id}
                        title={repo.name}
                        creationDate={repo.created_at}
                        lastDate={repo.updated_at}
                        stars={repo.stargazers_count}
                        topics={repo.topics}
                        langs={repo.langs}
                        description={repo.description}
                        source={repo.html_url}
                        homepage={repo.homepage}
                    />
                ))
            )}
        </List>
    )
}
