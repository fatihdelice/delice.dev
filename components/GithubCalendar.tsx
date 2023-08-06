import React from 'react'
import GitHubCalendar from 'react-github-calendar';

export default function GithubCalendar() {
    return (
        <GitHubCalendar
            username="fatihdelice"
            blockSize={15}
            blockMargin={5}
            colorScheme='dark'
            fontSize={16}
        />
    )
}
