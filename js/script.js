


const serviceTabs = document.querySelectorAll('.serv-link'),
      serviceTabsContent = document.querySelectorAll('.serv-content'),
      serviceTabsParent = document.querySelector('.serv-tab-items');

function hideTabContent() {
    serviceTabsContent.forEach(item => {
        item.style.display = 'none';
    });

    serviceTabs.forEach(item => {
        item.classList.remove('serv-tab-item-active');
    });
}

function showTabContent(i = 0) {
    serviceTabsContent[i].style.display = "block";
    serviceTabs[i].classList.add('serv-tab-item-active');
}

    hideTabContent();
    // showTabContent();

serviceTabsParent.addEventListener('click', (event) =>{
    const target = event.target;
    console.log(target);
    if (target && target.classList.contains('serv-link') || target.classList.contains('serv-links-icon') || target.classList.contains('p')) {
        serviceTabs.forEach((item, i) => {
            if (target === item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});


const priceListBtns = document.querySelectorAll('.priceListBtn'),
      priceListContant = document.querySelectorAll('.priceTable'),
      priceListBtnsParent = document.querySelector('.priceListBtns');

function hideTable() {
    priceListContant.forEach(item => {
        item.style.display = 'none';
    });

    priceListBtns.forEach(item => {
        item.classList.remove('priceBtnActive');
    });
}

function showTable(i = 0) {
    priceListContant[i].style.display = "block";
    priceListBtns[i].classList.add('priceBtnActive');
}

hideTable();
showTable()

priceListBtnsParent.addEventListener('click', (event) =>{
    const target = event.target;
    console.log(target);
    if (target && target.classList.contains('priceListBtn')) {
        priceListBtns.forEach((item, i) => {
            if (target === item) {
                hideTable();
                showTable(i);
            }
        });
    }
});


