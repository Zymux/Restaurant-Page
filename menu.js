export function loadMenu() {
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

        const navItems = navHeader.querySelectorAll('span');
        if (navItems) {
            navItems.forEach(item => {
                item.style.margin = '0 10px';
                item.style.cursor = 'pointer';
            });
        }

        const gif = document.createElement('img');
        gif.src = './pizzaWalk.gif';
        gif.style.position = 'absolute';
        gif.style.top = '0';
        gif.style.left = '0';
        gif.style.width = '140px';
        gif.style.height = '140px';
        gif.style.backgroundColor = '#946342';
        gif.style.zIndex = '1';

        // Remove the previous gif if it exists
        const existingGif = navHeader.querySelector('img');
        if (existingGif) {
            navHeader.removeChild(existingGif);
        }

        navHeader.appendChild(gif);
    }

    // Content and container styles
    const content = document.getElementById('content');
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
        containerOne.style.backgroundImage = 'url("./pizzaBG.jpg")';
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

    // Removed the existing buttons container and add a new menu container
    const buttonContainer = document.querySelector('.container-order .buttons');
    if (buttonContainer) {
        buttonContainer.innerHTML = ''; // Clear existing buttons

        const menuContainer = document.createElement('div');
        menuContainer.style.display = 'flex';
        menuContainer.style.flexDirection = 'column';
        menuContainer.style.justifyContent = 'center';
        menuContainer.style.alignItems = 'center';
        menuContainer.style.backgroundColor = '#FF9933';
        menuContainer.style.padding = '16px';
        menuContainer.style.border = '2px solid gray';
        menuContainer.style.width = '100%';
        menuContainer.style.boxSizing = 'border-box';
        menuContainer.style.flex = '1';

        const menuTitle = document.createElement('h2');
        menuTitle.innerText = 'Our Menu';
        menuTitle.style.color = '#FF9933';
        menuTitle.style.textShadow = '5px 5px 1px #ff0000,10px 10px 1px #0000ff';
        menuContainer.appendChild(menuTitle);

        const menuList = document.createElement('ul');
        menuList.style.listStyleType = 'none';
        menuList.style.padding = '0';

        const menuItems = ['Margherita Pizza', 'Pepperoni Pizza', 'BBQ Chicken Pizza', 'Vegetarian Pizza', 'Hawaiian Pizza'];
        menuItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerText = item;
            listItem.style.margin = '10px 0';
            listItem.style.fontSize = '20px';
            listItem.style.color = 'black';
            menuList.appendChild(listItem);
        });

        menuContainer.appendChild(menuList);
        buttonContainer.appendChild(menuContainer);
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
            copyright.style.color = 'orange';
        }
    }
}
