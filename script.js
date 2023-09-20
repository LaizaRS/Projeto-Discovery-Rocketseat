function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector('#profile img');

  if (html.classList.contains('light')) {
    img.setAttribute('src', 'https://scontent.fgyn8-1.fna.fbcdn.net/v/t1.6435-9/66999923_1268080053365316_4121903684751720448_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UHINIYWezOUAX9nJVZA&_nc_ht=scontent.fgyn8-1.fna&oh=00_AfDoazYW6zbPSeNpfSbTokkOHzx9KEWwjUmr4yCb9weeWA&oe=653262F9');
  } else {
    img.setAttribute('src', 'https://github.com/LaizaRS.png');
  }
  
}