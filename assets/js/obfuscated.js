'use strict';
const _0x326758 = _0x5154;
(function(_0x4fc9cc, _0x13f975) {
    const _0x541a02 = _0x5154,
        _0x5b67c5 = _0x4fc9cc();
    while (!![]) {
        try {
            const _0x525390 = parseInt(_0x541a02(0x196)) / 0x1 + -parseInt(_0x541a02(0x179)) / 0x2 + parseInt(_0x541a02(0x1a0)) / 0x3 * (parseInt(_0x541a02(0x18a)) / 0x4) + parseInt(_0x541a02(0x198)) / 0x5 + -parseInt(_0x541a02(0x19e)) / 0x6 * (parseInt(_0x541a02(0x178)) / 0x7) + parseInt(_0x541a02(0x185)) / 0x8 + -parseInt(_0x541a02(0x195)) / 0x9;
            if (_0x525390 === _0x13f975) break;
            else _0x5b67c5['push'](_0x5b67c5['shift']());
        } catch (_0x3954d6) {
            _0x5b67c5['push'](_0x5b67c5['shift']());
        }
    }
}(_0x5cc6, 0x8fbf8));
const elementToggleFunc = function(_0xf98b92) {
        const _0x17d7c9 = _0x5154;
        _0xf98b92[_0x17d7c9(0x19b)][_0x17d7c9(0x180)]('active');
    },
    sidebar = document[_0x326758(0x176)]('[data-sidebar]'),
    sidebarBtn = document['querySelector'](_0x326758(0x191));
sidebarBtn[_0x326758(0x199)](_0x326758(0x177), function() {
    elementToggleFunc(sidebar);
});
const testimonialsItem = document[_0x326758(0x19a)](_0x326758(0x17c)),
    modalContainer = document[_0x326758(0x176)]('[data-modal-container]'),
    modalCloseBtn = document['querySelector']('[data-modal-close-btn]'),
    overlay = document[_0x326758(0x176)](_0x326758(0x18d)),
    modalImg = document[_0x326758(0x176)](_0x326758(0x18e)),
    modalTitle = document['querySelector'](_0x326758(0x193)),
    modalText = document['querySelector']('[data-modal-text]'),
    testimonialsModalFunc = function() {
        const _0x15c182 = _0x326758;
        modalContainer[_0x15c182(0x19b)][_0x15c182(0x180)]('active'), overlay[_0x15c182(0x19b)][_0x15c182(0x180)](_0x15c182(0x188));
    };
for (let i = 0x0; i < testimonialsItem['length']; i++) {
    testimonialsItem[i][_0x326758(0x199)](_0x326758(0x177), function() {
        const _0x3663a1 = _0x326758;
        modalImg[_0x3663a1(0x183)] = this[_0x3663a1(0x176)](_0x3663a1(0x19c))[_0x3663a1(0x183)], modalImg[_0x3663a1(0x192)] = this[_0x3663a1(0x176)](_0x3663a1(0x19c))[_0x3663a1(0x192)], modalTitle['innerHTML'] = this[_0x3663a1(0x176)](_0x3663a1(0x182))[_0x3663a1(0x194)], modalText['innerHTML'] = this[_0x3663a1(0x176)](_0x3663a1(0x1a2))['innerHTML'], testimonialsModalFunc();
    });
}
modalCloseBtn['addEventListener'](_0x326758(0x177), testimonialsModalFunc), overlay[_0x326758(0x199)](_0x326758(0x177), testimonialsModalFunc);
const select = document['querySelector'](_0x326758(0x189)),
    selectItems = document[_0x326758(0x19a)](_0x326758(0x17e)),
    selectValue = document[_0x326758(0x176)](_0x326758(0x17f)),
    filterBtn = document[_0x326758(0x19a)](_0x326758(0x17a));
select[_0x326758(0x199)](_0x326758(0x177), function() {
    elementToggleFunc(this);
});
for (let i = 0x0; i < selectItems[_0x326758(0x1a3)]; i++) {
    selectItems[i][_0x326758(0x199)](_0x326758(0x177), function() {
        const _0x405c80 = _0x326758;
        let _0xa4bcb2 = this[_0x405c80(0x181)][_0x405c80(0x18b)]();
        selectValue[_0x405c80(0x181)] = this[_0x405c80(0x181)], elementToggleFunc(select), filterFunc(_0xa4bcb2);
    });
}
const filterItems = document[_0x326758(0x19a)](_0x326758(0x197)),
    filterFunc = function(_0x2b6275) {
        const _0xa9008d = _0x326758;
        for (let _0x228e71 = 0x0; _0x228e71 < filterItems[_0xa9008d(0x1a3)]; _0x228e71++) {
            if (_0x2b6275 === _0xa9008d(0x1a1)) filterItems[_0x228e71][_0xa9008d(0x19b)][_0xa9008d(0x19d)](_0xa9008d(0x188));
            else _0x2b6275 === filterItems[_0x228e71][_0xa9008d(0x190)][_0xa9008d(0x1a4)] ? filterItems[_0x228e71]['classList'][_0xa9008d(0x19d)](_0xa9008d(0x188)) : filterItems[_0x228e71][_0xa9008d(0x19b)]['remove'](_0xa9008d(0x188));
        }
    };

function _0x5cc6() {
    const _0x32b634 = ['[data-overlay]', '[data-modal-img]', 'setAttribute', 'dataset', '[data-sidebar-btn]', 'alt', '[data-modal-title]', 'innerHTML', '7347285bTKdHw', '943367oeKSzq', '[data-filter-item]', '283345kSUTHz', 'addEventListener', 'querySelectorAll', 'classList', '[data-testimonials-avatar]', 'add', '135402ZziJFF', 'scrollTo', '750537izpXAW', 'all', '[data-testimonials-text]', 'length', 'category', '[data-form-input]', '[data-form]', 'querySelector', 'click', '224zCErYp', '524108xfhZAz', '[data-filter-btn]', 'input', '[data-testimonials-item]', 'removeAttribute', '[data-select-item]', '[data-selecct-value]', 'toggle', 'innerText', '[data-testimonials-title]', 'src', 'disabled', '5110256GmqSWj', 'remove', '[data-page]', 'active', '[data-select]', '12CFfftD', 'toLowerCase', 'checkValidity'];
    _0x5cc6 = function() {
        return _0x32b634;
    };
    return _0x5cc6();
}
let lastClickedBtn = filterBtn[0x0];
for (let i = 0x0; i < filterBtn[_0x326758(0x1a3)]; i++) {
    filterBtn[i][_0x326758(0x199)](_0x326758(0x177), function() {
        const _0x1526a7 = _0x326758;
        let _0x4dc0a7 = this[_0x1526a7(0x181)]['toLowerCase']();
        selectValue['innerText'] = this[_0x1526a7(0x181)], filterFunc(_0x4dc0a7), lastClickedBtn[_0x1526a7(0x19b)]['remove'](_0x1526a7(0x188)), this[_0x1526a7(0x19b)][_0x1526a7(0x19d)]('active'), lastClickedBtn = this;
    });
}
const form = document[_0x326758(0x176)](_0x326758(0x175)),
    formInputs = document[_0x326758(0x19a)](_0x326758(0x174)),
    formBtn = document[_0x326758(0x176)]('[data-form-btn]');

function _0x5154(_0x43d782, _0x47a4be) {
    const _0x5cc6be = _0x5cc6();
    return _0x5154 = function(_0x5154cf, _0x509b6d) {
        _0x5154cf = _0x5154cf - 0x174;
        let _0x473d47 = _0x5cc6be[_0x5154cf];
        return _0x473d47;
    }, _0x5154(_0x43d782, _0x47a4be);
}
for (let i = 0x0; i < formInputs[_0x326758(0x1a3)]; i++) {
    formInputs[i][_0x326758(0x199)](_0x326758(0x17b), function() {
        const _0x294cce = _0x326758;
        form[_0x294cce(0x18c)]() ? formBtn[_0x294cce(0x17d)](_0x294cce(0x184)) : formBtn[_0x294cce(0x18f)](_0x294cce(0x184), '');
    });
}
const navigationLinks = document['querySelectorAll']('[data-nav-link]'),
    pages = document[_0x326758(0x19a)](_0x326758(0x187));
for (let i = 0x0; i < navigationLinks[_0x326758(0x1a3)]; i++) {
    navigationLinks[i][_0x326758(0x199)]('click', function() {
        const _0x4d6ffb = _0x326758;
        for (let _0x3eb299 = 0x0; _0x3eb299 < pages[_0x4d6ffb(0x1a3)]; _0x3eb299++) {
            this[_0x4d6ffb(0x194)][_0x4d6ffb(0x18b)]() === pages[_0x3eb299][_0x4d6ffb(0x190)]['page'] ? (pages[_0x3eb299][_0x4d6ffb(0x19b)][_0x4d6ffb(0x19d)](_0x4d6ffb(0x188)), navigationLinks[_0x3eb299][_0x4d6ffb(0x19b)][_0x4d6ffb(0x19d)](_0x4d6ffb(0x188)), window[_0x4d6ffb(0x19f)](0x0, 0x0)) : (pages[_0x3eb299][_0x4d6ffb(0x19b)][_0x4d6ffb(0x186)](_0x4d6ffb(0x188)), navigationLinks[_0x3eb299][_0x4d6ffb(0x19b)]['remove'](_0x4d6ffb(0x188)));
        }
    });
}