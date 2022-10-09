import axios from 'axios'
import { useState } from 'react'
import { useIcon } from './useIcon'
import icons from '../data/icons'

export const useGithub = (token, include) => {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(false)
    const { detectIcon } = useIcon()

    const headers = {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
    }

    /**
     * Fetches the repositories from the GitHub API.
     * @param {string} username - The GitHub username.
     */
    const fetchRepos = async (username) => {
        setLoading(true)
        let repos = []
        for (let i = 0; i < include.length; i++) {
            const response = await axios.get(
                `https://api.github.com/repos/${username}/${include[i]}`,
                { headers }
            )
            let repo = response.data
            repo['langs'] = await fetchLangs(username, repo.name)
            repos.push(repo)
        }
        repos = await Promise.all(repos)
        setRepos(orderRepos(repos))
        setLoading(false)
    }

    /**
     * Order the repositories by stars DESC.
     * @param {Object} repos
     * @returns {Object} The ordered repositories.
     */
    const orderRepos = (repos) =>
        repos.sort((a, b) => b.stargazers_count - a.stargazers_count)

    /**
     * Fetches the languagues of a repository from the GitHub API.
     * @param {string} username - The GitHub username.
     * @param {string} repo - The repository name.
     * @returns {Array} The languages of the repository.
     */
    const fetchLangs = async (username, repo) => {
        const response = await axios.get(
            `https://api.github.com/repos/${username}/${repo}/languages`,
            { headers }
        )
        let langs = response.data,
            array = []
        for (const lang in langs) {
            array.push(detectIcon(lang))
        }
        return array
    }
    return { repos, loading, fetchRepos, fetchLangs, orderRepos }
}
