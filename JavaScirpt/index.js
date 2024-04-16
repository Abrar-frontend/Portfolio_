
        let navMenu = document.getElementById('navbarElem');
        // console.log(navBarshowHide)
    
        let navBarBtn = document.getElementById('menu-icon')
        // console.log(navBarBtn)

        navBarBtn.addEventListener('click', function() {
            // Toggle the display property
            if (navMenu.style.display === 'block') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'block';
            }

        })