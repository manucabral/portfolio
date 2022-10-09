import reactIcon from '../assets/icons/reactjs.svg'
import nextIcon from '../assets/icons/nextjs.svg'
import graphqlIcon from '../assets/icons/graphql.svg'
import apolloIcon from '../assets/icons/apollo.svg'
import expressIcon from '../assets/icons/expressjs.svg'
import flaskIcon from '../assets/icons/flask.svg'
import htmlIcon from '../assets/icons/html5.svg'
import cssIcon from '../assets/icons/css.svg'
import sassIcon from '../assets/icons/sass.svg'
import javascriptIcon from '../assets/icons/javascript.svg'
import typescriptIcon from '../assets/icons/typescript.svg'
import pythonIcon from '../assets/icons/python.svg'
import jupyterIcon from '../assets/icons/jupyter-notebook.svg'
import gitIcon from '../assets/icons/git.svg'
import numpyIcon from '../assets/icons/numpy.svg'
import matplotlibIcon from '../assets/icons/python.svg'
import pandasIcon from '../assets/icons/pandas.svg'
import cIcon from '../assets/icons/c.svg'
import qtIcon from '../assets/icons/qt.svg'
import mysqlIcon from '../assets/icons/mysql.svg'
import sqliteIcon from '../assets/icons/sqlite.svg'
import postgresqlIcon from '../assets/icons/postgresql.svg'
import mongodbIcon from '../assets/icons/mongodb.svg'
import firebaseIcon from '../assets/icons/firebase.svg'

const data = [
    {
        name: 'React',
        fullname: 'ReactJS',
        description: 'A JavaScript library for building user interfaces',
        homepage: 'https://facebook.github.io/react/',
        keywords: ['react', 'reactjs'],
        path: reactIcon,
    },
    {
        name: 'Next',
        fullname: 'NextJS',
        description: 'The React Framework',
        homepage: 'https://nextjs.org/',
        keywords: ['next', 'nextjs'],
        path: nextIcon,
    },
    {
        name: 'GraphQL',
        fullname: 'GraphQL',
        description: 'A query language for your API',
        homepage: 'https://graphql.org/',
        keywords: ['graphql'],
        path: graphqlIcon,
    },
    {
        name: 'Apollo',
        fullname: 'Apollo',
        description: 'A data graph platform for building apps',
        homepage: 'https://www.apollographql.com/',
        keywords: ['apollo'],
        path: apolloIcon,
    },
    {
        name: 'Express',
        fullname: 'ExpressJS',
        description:
            'Fast, unopinionated, minimalist web framework for Node.js',
        homepage: 'https://expressjs.com/',
        keywords: ['express'],
        path: expressIcon,
    },
    {
        name: 'Flask',
        fullname: 'Flask',
        description:
            'A microframework for Python based on Werkzeug, Jinja 2 and good intentions',
        homepage: 'https://flask.palletsprojects.com/',
        keywords: ['flask'],
        path: flaskIcon,
    },
    {
        name: 'HTML',
        fullname: 'HTML',
        description: 'HyperText Markup Language',
        homepage: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        keywords: ['html'],
        path: htmlIcon,
    },
    {
        name: 'CSS',
        fullname: 'CSS',
        description: 'Cascading Style Sheets',
        homepage: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        keywords: ['css'],
        path: cssIcon,
    },
    {
        name: 'Sass',
        fullname: 'Sass',
        description: 'Syntactically Awesome Style Sheets',
        homepage: 'https://sass-lang.com/',
        keywords: ['sass'],
        path: sassIcon,
    },
    {
        name: 'TypeScript',
        fullname: 'TypeScript',
        description: 'Typed JavaScript at Any Scale',
        homepage: 'https://www.typescriptlang.org/',
        keywords: ['typescript'],
        path: typescriptIcon,
    },
    {
        name: 'JavaScript',
        fullname: 'JavaScript',
        description: 'A high-level, interpreted programming language',
        homepage: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        keywords: ['javascript'],
        path: javascriptIcon,
    },
    {
        name: 'Python',
        fullname: 'Python',
        description:
            'An interpreted, high-level, general-purpose programming language',
        homepage: 'https://www.python.org/',
        keywords: ['python'],
        path: pythonIcon,
    },
    {
        name: 'Jupyter N.',
        fullname: 'Jupyter Notebook',
        description:
            'An open-source web application that allows you to create and share documents that contain live code, equations, visualizations and narrative text',
        homepage: 'https://jupyter.org/',
        keywords: ['jupyter', 'jupyter notebook'],
        path: jupyterIcon,
    },
    {
        name: 'Numpy',
        fullname: 'Numpy',
        description:
            'The fundamental package for scientific computing with Python',
        homepage: 'https://numpy.org/',
        keywords: ['numpy'],
        path: numpyIcon,
    },
    {
        name: 'Pandas',
        fullname: 'Pandas',
        description:
            'A fast, powerful, flexible and easy to use open source data analysis and manipulation tool',
        homepage: 'https://pandas.pydata.org/',
        keywords: ['pandas'],
        path: pandasIcon,
    },
    {
        name: 'Matplotlib',
        fullname: 'Matplotlib',
        description:
            'A comprehensive library for creating static, animated, and interactive visualizations in Python',
        homepage: 'https://matplotlib.org/',
        keywords: ['matplotlib'],
        path: matplotlibIcon,
    },
    {
        name: 'C++',
        fullname: 'C++',
        description: 'A general-purpose programming language',
        homepage: 'https://en.wikipedia.org/wiki/C%2B%2B',
        keywords: ['c', 'c++'],
        path: cIcon,
    },
    {
        name: 'C',
        fullname: 'C',
        description: 'A general-purpose programming language',
        homepage: 'https://en.wikipedia.org/wiki/C_(programming_language)',
        keywords: ['c'],
        path: cIcon,
    },
    {
        name: 'Qt',
        fullname: 'Qt',
        description: 'A cross-platform application framework',
        homepage: 'https://www.qt.io/',
        keywords: ['qt'],
        path: qtIcon,
    },
    {
        name: 'MySQL',
        fullname: 'MySQL',
        description: 'A relational database management system',
        homepage: 'https://www.mysql.com/',
        keywords: ['mysql'],
        path: mysqlIcon,
    },
    {
        name: 'MongoDB',
        fullname: 'MongoDB',
        description: 'A cross-platform document-oriented database program',
        homepage: 'https://www.mongodb.com/',
        keywords: ['mongodb'],
        path: mongodbIcon,
    },
    {
        name: 'PostgreSQL',
        fullname: 'PostgreSQL',
        description:
            'A powerful, open source object-relational database system',
        homepage: 'https://www.postgresql.org/',
        keywords: ['postgresql'],
        path: postgresqlIcon,
    },
    {
        name: 'SQLite',
        fullname: 'SQLite',
        description:
            'A software library that implements a self-contained, serverless, zero-configuration, transactional SQL database engine',
        homepage: 'https://www.sqlite.org/index.html',
        keywords: ['sqlite'],
        path: sqliteIcon,
    },
    {
        name: 'Firebase',
        fullname: 'Firebase',
        description: 'A mobile and web application development platform',
        homepage: 'https://firebase.google.com/',
        keywords: ['firebase'],
        path: firebaseIcon,
    },
    {
        name: 'Git',
        fullname: 'Git',
        description:
            'A free and open source distributed version control system',
        homepage: 'https://git-scm.com/',
        keywords: ['git'],
        path: gitIcon,
    },
]

export default data
