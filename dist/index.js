//TODO: Import the files
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadAbout } from './about.js';


document.addEventListener('DOMContentLoaded', function() {
    //setting full width and height
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    document.body.style.boxSizing = 'border-box';

    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.documentElement.style.width = '100%';
    document.documentElement.style.height = '100%';
    document.documentElement.style.boxSizing = 'border-box';

    // Header styles
    const navHeader = document.querySelector('.nav');
    if (navHeader) {
        navHeader.style.display = 'flex';
        navHeader.style.flexDirection = 'row';
        navHeader.style.justifyContent = 'flex-end';
        navHeader.style.alignItems = 'center';
        navHeader.style.backgroundColor = 'darkgray';
        navHeader.style.padding = '16px';
        navHeader.style.border = '2px solid gray';
        navHeader.style.height = '150px';
        navHeader.style.boxSizing = 'border-box';
        navHeader.style.position = 'relative';
        navHeader.style.backgroundColor = '#946342';
        navHeader.style.color = 'orange';
        navHeader.style.fontSize = '18px';
        navHeader.style.textDecoration = 'underline';

        const navItems = navHeader.querySelectorAll('span'); //this is used for DIV Class
        if (navItems) {
            navItems.forEach(item => {
                item.style.margin = '0 10px';
                item.style.cursor = 'pointer';
            });
        }

        //adding gif to the top left w/ new color
        const gif = document.createElement('img');
        gif.src = './pizzaWalk.gif';
        gif.style.position = 'absolute';
        gif.style.top = '0';
        gif.style.left = '0';
        gif.style.width = '140px';
        gif.style.height = '140px';
        gif.style.backgroundColor = '#946342';
        gif.style.zIndex = '1';

        navHeader.appendChild(gif);
    }

    // Content and container styles
    const content = document.getElementById('content'); //this is used for DIV IDs
    if (content) {
        content.style.display = 'flex';
        content.style.flexDirection = 'column';
        content.style.justifyContent = 'space-between';
        content.style.minHeight = '100vh';
        content.style.boxSizing = 'border-box';
    }

    const containers = content.querySelectorAll('[class^="container-"]');
    containers.forEach(container => {
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';
        container.style.backgroundColor = '#FF9933';
        container.style.padding = '16px';
        container.style.border = '2px solid gray';
        container.style.width = '100%';
        container.style.boxSizing = 'border-box';
        container.style.flex = '1';
    });

    const title = document.querySelector('.container-1 .title');
    if (title) {
        title.style.textAlign = 'center';
        title.style.width = '100%';
        title.style.fontSize = '5em';
        title.style.color = '#FF9933';
        title.style.fontWeight = 'bold';
        title.style.textShadow = '5px 5px 1px #ff0000,10px 10px 1px #0000ff';
    }
    

    const containerOne = document.querySelector('.container-1');
    if (containerOne) {
        containerOne.style.backgroundImage = 'url("./pizzaBG.jpg")'; //I need to get BG to work
        containerOne.style.backgroundSize = 'cover';
        containerOne.style.backgroundPosition = 'center';
    }

    const description = document.querySelector('.container-2 .description');
    if (description) {
        description.style.textAlign = 'center';
        description.style.width = '100%';
    }

    const hours = document.querySelector('.container-3 .hours');
    if (hours) {
        hours.style.textAlign = 'center';
        hours.style.width = '100%';
    }

    const address = document.querySelector('.container-4 .address');
    if (address) {
        address.style.textAlign = 'center';
        address.style.width = '100%';
    }

    //added buttons for the container-order
    const buttonContainer = document.querySelector('.container-order .buttons');
    if (buttonContainer) {
        const buttonName = ['Order for Pickup', 'Order for Delivery'];
        buttonName.forEach(name => {
            const button = document.createElement('button');
            button.innerText = name;
            button.style.margin = '10px';
            button.style.padding = '10px 20px';
            button.style.fontSize = '16px';
            buttonContainer.appendChild(button)
        } )
    }
    const footer = document.querySelector('.footer');
    if (footer) {
        footer.style.width = '100%';
        footer.style.backgroundColor = '#946342';
        footer.style.padding = '16px';
        footer.style.boxSizing = 'border-box';
        footer.style.border = '2px solid gray';

        const copyright = footer.querySelector('.copyright');
        if (copyright) {
            copyright.style.display = 'flex';
            copyright.style.justifyContent = 'center';
            copyright.style.alignItems = 'center';
            copyright.style.textAlign = 'center';
            copyright.style.width = '100%';
            copyright.style.color = 'black';
        }
    }

    //adding the home button
    const homeButton = document.querySelector('.nav span:nth-child(1)'); //selects first <span> element in nav.
    homeButton.addEventListener('click', () => {
        loadHome();
    })
    
    //adding the menu bottom
    const menuButton = document.querySelector('.nav span:nth-child(2)'); //selects second <span> element in nav.
    menuButton.addEventListener('click', () => {
        loadMenu();
    })

    const aboutButton = document.querySelector('.nav span:nth-child(3)'); //selects second <span> element in nav.
    aboutButton.addEventListener('click', () => {
        loadAbout();
    })
});

//Exporting the files for the other tabs.