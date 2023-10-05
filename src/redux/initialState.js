
const initialState = {
  cardsPortfolio: [
    {
      id: '1',
      title: 'ReactJs',
      images: 'React.js',
    },
    {
      id: '2',
      title: 'JS',
      images: 'JS',
    },
    {
      id: '3',
      title: 'HTML, CSS',
      images: 'HTML,CSS',
    },
  ],
  ReactProjects: [
    {
      id: 0,
      title: 'Notes🗓️',
      text: 'In this program, you can save movies, books, etc. that you want to watch later. You can too: distribute notes by topic, create a new list from a note, add notes to already existing lists, delete notes, add favorite or important notes to the favorites section, search for notes if there are too many of them',
      images: 'ReactProject1',
      urlGithub: 'https://github.com/tetiananosenko/to-do-list',
      urlLiveLink: 'https://to-do-list.tetiananosenko.repl.co/',
    },
    {
      id: 1,
      title: 'App for waiter🥗',
      text: 'Created with React, Redux, API .This site will make it easier for waiters of all establishments! You can select the desired table and add or change options for a specific table',
      images: 'ReactProject2',
      urlGithub: 'https://github.com/tetiananosenko/project-waiter.app',
      urlLiveLink: 'https://project-waiterapp-4.tetiananosenko.repl.co/',
    },
    {
      id: 2,
      title: 'Shop Website🛍️',
      text: 'My first site is written on React! On this site you can choose a T-shirt, its size and color. Depending on the selected size, the price will change. All parameters after clicking on the cart will be stored in console',
      images: 'ReactProject3',
      urlGithub: 'https://github.com/tetiananosenko/shop-app',
      urlLiveLink: 'https://tetiananosenko.github.io/shop-app/',
    }
  ],
  JsProjects: [
    {
      id: 0,
      title: 'Pizzeria🍕',
      text: 'This site is completely suitable for a pizzeria site. Created with OOP JS. You can reserve a table for the date you want and choose a meal to start. You can also choose different dishes, changing their quantity or ingredients and much more',
      images: 'JSProject1',
      urlGithub: 'https://github.com/tetiananosenko/project-pizzeria',
      urlLiveLink: 'https://project-pizzeria.tetiananosenko.repl.co/',
    },
    {
      id: 1,
      title: 'Forkify🥯',
      text: 'This culinary website with recipes allows you to search for the desired dish by name or ingredients. It has many functions that allow you to save recipes, create your own, change the number of people for cooking dishes',
      images: 'JSProject3',
      urlGithub: 'https://github.com/tetiananosenko/forkify',
      urlLiveLink: 'https://tetiananosenko.github.io/forkify/',
    },
    {
      id: 2,
      title: 'Books site📚',
      text: 'On this site, you can filter books by two parameters. Add them to the favorites section by clicking twice and also cancel this action',
      images: 'JSProject2',
      urlGithub: 'https://github.com/tetiananosenko/books-site',
      urlLiveLink: 'https://github.com/tetiananosenko/books-site',
    },
  ],
  HtmlCssProjects: [
    {
      id: 0,
      title: 'Christmas🎅',
      text: 'This site is created using HTML and CSS. A site about Christmas, where you will find a carousel with photos and many animations',
      images: 'HTMLProject1',
      urlGithub: 'https://github.com/tetiananosenko/project-Christmas',
      urlLiveLink: 'https://tetiananosenko.github.io/project-Christmas/',
    },
    {
      id: 1,
      title: 'Photo studio📸',
      text: 'This site was created using Scss. Suitable for describing your skills or presenting any project. There are animated buttons, icons, created cards and navigation',
      images: 'HTMLProject2',
      urlGithub: 'https://github.com/tetiananosenko/Photo-studio-landing',
      urlLiveLink: 'https://tetiananosenko.github.io/Photo-studio-landing/',
    },
    {
      id: 2,
      title: 'Clothing store👗',
      text: 'This is a clothing site. Made with Bootstrap. On this site you can find multi-level menu, animated buttons and much more',
      images: 'HTMLProject3',
      urlGithub: 'https://github.com/tetiananosenko/books-site',
      urlLiveLink: 'https://tetiananosenko.github.io/clothing-shop/',
    }
  ]
};

export default initialState;