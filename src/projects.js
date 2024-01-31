import horiseonthumbnail from './assets/images/horiseon-home-page.jpg'
import techblogthumbnail from './assets/images/techblog.jpg'
import vibeifythumbnail from './assets/images/vibeify.jpg'
import dndbuilderthumbnail from './assets/images/dnd-builder.jpg'
import lfgthumbnail from './assets/images/lfg.jpg'

const projects = [
    {
        id: 1,
        name: 'Horiseon Webpage',
        weblink: 'https://nataniel-c.github.io/module-01-challenge/',
        githublink: 'https://github.com/nataniel-c/module-01-challenge',
        thumbnail: horiseonthumbnail,
        alttext: 'horiseon webpage',
        description: 'Simple interactive homepage showcasing CSS and homepage section navigation.'
    },
    {
        id: 2,
        name: 'Tech Blog',
        weblink: 'https://nataniel-c-tech-blog-e14d11d574ae.herokuapp.com/',
        githublink: 'https://github.com/nataniel-c/tech-blog',
        thumbnail: techblogthumbnail,
        alttext: 'techblog',
        description: 'CMS-style blog site similar to a Wordpress site, where users can publish their blog posts and comment on other users’ posts as well. Users can create an account and login using their credentials.'
    },
    {
        id: 3,
        name: 'Vibeify',
        weblink: 'https://nataniel-c.github.io/vibeify/',
        githublink: 'https://github.com/nataniel-c/vibeify',
        thumbnail: vibeifythumbnail,
        alttext: 'vibeify',
        description: 'Upload an image using a weblink and get a song from Spotify that matches the "vibe" of the image.'
    },
    {
        id: 4,
        name: 'DnD Builder',
        weblink: 'https://dnd-builder-8e53886511db.herokuapp.com/',
        githublink: 'https://github.com/InternetEthan/dnd-builder',
        thumbnail: dndbuilderthumbnail,
        alttext: 'dnd builder',
        description: 'Interactive DnD character creator with user database.'
    },
    {
        id: 5,
        name: 'Looking For Gamers',
        weblink: 'https://lfg-dw58.onrender.com/',
        githublink: 'https://github.com/nataniel-c/lfg',
        thumbnail: lfgthumbnail,
        alttext: 'LFG',
        description: 'Tinder-like platform where gamers can look for others to play games with'
    }
];

export default projects