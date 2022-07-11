//___ neumatter 1.1

const dataBtnLight = n$('[data-btn=light]');
const dataBtnDark = n$('[data-btn=dark]');
const dataBtnTheme = n$('[data-btn=theme]');
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
const navTabs = n$('[data-nav=tab]');
const notificationCenter = n$('[data-nav=toggler]');
const notification = n$('[data-notification=successDemo]');
const navLinks = n$('.c-nav-link');
const dataOffsetNavbar = n$('[data-offset=navbar]');

const setNewNotif = ()=> {
  if (notification) {
    notificationCenter.check();
    setTimeout(()=> {
      notificationCenter.uncheck();
    }, 5000*2);
  }
};

const Theme = {
  dark: ()=> {
    n$('docEl').attribute('data-theme', 'dark');
    dataBtnDark.addClass('u-display/none');
    dataBtnLight.removeClass('u-display/none');
    dataBtnTheme.check();
  },
  light: ()=> {
    n$('docEl').attribute('data-theme', 'light');
    dataBtnDark.removeClass('u-display/none');
    dataBtnLight.addClass('u-display/none');
    dataBtnTheme.uncheck();
  },
  storage:
    n$('stor').storage('theme')
};

n$('window').eventOn('load', ()=> {
  if (Theme.storage === 'dark')
    Theme.dark();
  else if (Theme.storage === 'light')
    Theme.light();
  if (Theme.storage === null)
    (prefersDarkMode.matches ? Theme.dark : Theme.light)();
});

dataBtnLight.eventOn('click', ()=> {
  n$('stor').storage('theme', 'light');
  Theme.light();
});

dataBtnDark.eventOn('click', ()=> {
  n$('stor').storage('theme', 'dark');
  Theme.dark();
});

dataBtnTheme.eventOn('click', ()=> {
  if (Theme.storage === 'dark') {
    Theme.light();
    n$('stor').storage('theme', 'light');
  } else {
    Theme.dark();
    n$('stor').storage('theme', 'dark');
  }
});

navTabs.each(navTab => {
  let navTabId = n$(navTab).id();
  let checkedNav = n$('stor').storage('checkedBox');
  if (checkedNav === navTabId)
    n$(navTab).check();
  n$(navTab).eventOn('click', ()=> {
    let checkedNavTwo = n$('stor').storage('checkedBox');
    if (navTabId === checkedNavTwo) {
      n$(navTab).uncheck();
      n$('stor').storage('checkedBox', 'nulled');
    } else {
      n$(navTab).check();
      n$('stor').storage('checkedBox', navTabId);
    }
  })
});

const colorSelector = document.querySelector('#color')
const tpuPathOne = document.querySelector('#tpuPathOne')
const tpuPathTwo = document.querySelector('#tpuPathTwo')
const tpuLink = document.querySelector('#tpuLink')

if (colorSelector) {
  console.log(colorSelector.value)
  colorSelector.addEventListener('change', ()=> {
    console.log(colorSelector.value)
    tpuPathOne.setAttribute('fill', colorSelector.value)
    tpuPathTwo.setAttribute('fill', colorSelector.value)
    const tpuHref = tpuLink.getAttribute('nuHref').replace(/^[^?]*/, '')
    const searchParams = new URLSearchParams(tpuHref ? tpuHref : undefined)
    searchParams.delete('color')
    searchParams.append('color', colorSelector.value.replace('#', ''))
    tpuLink.setAttribute('nuHref', `/api/tpu?${searchParams.toString()}`)
    console.log(searchParams.toString())
  })

  tpuLink.addEventListener('click', (e) => {
    e.preventDefault()
      async function downloadImage() {
      const image = await fetch(tpuLink.getAttribute('nuHref'))
      const imageBlog = await image.blob()
      const imageURL = URL.createObjectURL(imageBlog)
  
      const link = document.createElement('a')
      link.href = imageURL
      link.download = 'tpu-logo.png'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
    downloadImage().catch(err => console.error(err))
  })
}
