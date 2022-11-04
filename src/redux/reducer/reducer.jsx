import * as t from "../types/types";
import {v4 as uuidv4} from 'uuid';

const initialState = {
    products: [
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.', 'https://olcha.uz/image/440x552/products/5TH1CmMiY3kB81RxjPejEkNQLP65m2CXx6CSH4rTmOvBCSo1pEYriE0zjN2s.', 'https://olcha.uz/image/440x552/products/XcMX2ygO87HfVWsCs7o4XwqWTFdVmTwSP4LJRrQITu5jlGHdAucncBBB6jLk.'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB Qora',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 20% на смартфоны',
                value: 20
            },
            discountForIphone: null,
            price: '6 000 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/QS4aQGLHtrEp6g2wvLm34DDJAFzTVKW5oGzstyAvb6C8ijhg06Ei0H7Ctqwv.png', 'https://olcha.uz/image/440x552/products/qKSTdyj47F9zRXLpklcDOHgixwrNyBArS7PjDtUjRrtSVKv2z2WlTDDnN2sT.jpeg', 'https://olcha.uz/image/440x552/products/RnPWkp3SlpbvcOLwtPZFAjt0thjAoaAcAZKuG3dxFbkWnCQ9pak1BfWbVa92.png'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB To‘q ko‘k',
            discount: {
                name: 'Обменяй свой старый айфон и получи скидку на новый',
                value: '500 000',
            },
            gift: null,
            discountForPhone: {
                name: 'Скидка 30% на смартфоны',
                value: 30
            },
            discountForIphone: null,
            price: '6 890 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.', 'https://olcha.uz/image/440x552/products/ktMcrb08DJeqTQ2BzwopJBD8Az0sptVS4i5MTIvEMdIhP9qZOZjyJilItN1P.', 'https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.'],
            name: 'Apple iPhone 14 Pro Max',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 10% на смартфоны',
                value: 10
            },
            discountForIphone: {
                name: 'Скидка на айфоны',
                IMEI: '012345678901234',
                value: '100 000'
            },
            price: '14 500 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.', 'https://olcha.uz/image/440x552/products/5TH1CmMiY3kB81RxjPejEkNQLP65m2CXx6CSH4rTmOvBCSo1pEYriE0zjN2s.', 'https://olcha.uz/image/440x552/products/XcMX2ygO87HfVWsCs7o4XwqWTFdVmTwSP4LJRrQITu5jlGHdAucncBBB6jLk.'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB Qora',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 20% на смартфоны',
                value: 20
            },
            discountForIphone: null,
            price: '6 000 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/QS4aQGLHtrEp6g2wvLm34DDJAFzTVKW5oGzstyAvb6C8ijhg06Ei0H7Ctqwv.png', 'https://olcha.uz/image/440x552/products/qKSTdyj47F9zRXLpklcDOHgixwrNyBArS7PjDtUjRrtSVKv2z2WlTDDnN2sT.jpeg', 'https://olcha.uz/image/440x552/products/RnPWkp3SlpbvcOLwtPZFAjt0thjAoaAcAZKuG3dxFbkWnCQ9pak1BfWbVa92.png'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB To‘q ko‘k',
            discount: {
                name: 'Обменяй свой старый айфон и получи скидку на новый',
                value: '500 000',
            },
            gift: null,
            discountForPhone: {
                name: 'Скидка 30% на смартфоны',
                value: 30
            },
            discountForIphone: null,
            price: '6 890 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.', 'https://olcha.uz/image/440x552/products/ktMcrb08DJeqTQ2BzwopJBD8Az0sptVS4i5MTIvEMdIhP9qZOZjyJilItN1P.', 'https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.'],
            name: 'Apple iPhone 14 Pro Max',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 10% на смартфоны',
                value: 10
            },
            discountForIphone: {
                name: 'Скидка на айфоны',
                IMEI: '012345678901234',
                value: '100 000'
            },
            price: '14 500 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.', 'https://olcha.uz/image/440x552/products/5TH1CmMiY3kB81RxjPejEkNQLP65m2CXx6CSH4rTmOvBCSo1pEYriE0zjN2s.', 'https://olcha.uz/image/440x552/products/XcMX2ygO87HfVWsCs7o4XwqWTFdVmTwSP4LJRrQITu5jlGHdAucncBBB6jLk.'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB Qora',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 20% на смартфоны',
                value: 20
            },
            discountForIphone: null,
            price: '6 000 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/QS4aQGLHtrEp6g2wvLm34DDJAFzTVKW5oGzstyAvb6C8ijhg06Ei0H7Ctqwv.png', 'https://olcha.uz/image/440x552/products/qKSTdyj47F9zRXLpklcDOHgixwrNyBArS7PjDtUjRrtSVKv2z2WlTDDnN2sT.jpeg', 'https://olcha.uz/image/440x552/products/RnPWkp3SlpbvcOLwtPZFAjt0thjAoaAcAZKuG3dxFbkWnCQ9pak1BfWbVa92.png'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB To‘q ko‘k',
            discount: {
                name: 'Обменяй свой старый айфон и получи скидку на новый',
                value: '500 000',
            },
            gift: null,
            discountForPhone: {
                name: 'Скидка 30% на смартфоны',
                value: 30
            },
            discountForIphone: null,
            price: '6 890 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.', 'https://olcha.uz/image/440x552/products/ktMcrb08DJeqTQ2BzwopJBD8Az0sptVS4i5MTIvEMdIhP9qZOZjyJilItN1P.', 'https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.'],
            name: 'Apple iPhone 14 Pro Max',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 10% на смартфоны',
                value: 10
            },
            discountForIphone: {
                name: 'Скидка на айфоны',
                IMEI: '012345678901234',
                value: '100 000'
            },
            price: '14 500 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.', 'https://olcha.uz/image/440x552/products/5TH1CmMiY3kB81RxjPejEkNQLP65m2CXx6CSH4rTmOvBCSo1pEYriE0zjN2s.', 'https://olcha.uz/image/440x552/products/XcMX2ygO87HfVWsCs7o4XwqWTFdVmTwSP4LJRrQITu5jlGHdAucncBBB6jLk.'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB Qora',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 20% на смартфоны',
                value: 20
            },
            discountForIphone: null,
            price: '6 000 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/QS4aQGLHtrEp6g2wvLm34DDJAFzTVKW5oGzstyAvb6C8ijhg06Ei0H7Ctqwv.png', 'https://olcha.uz/image/440x552/products/qKSTdyj47F9zRXLpklcDOHgixwrNyBArS7PjDtUjRrtSVKv2z2WlTDDnN2sT.jpeg', 'https://olcha.uz/image/440x552/products/RnPWkp3SlpbvcOLwtPZFAjt0thjAoaAcAZKuG3dxFbkWnCQ9pak1BfWbVa92.png'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB To‘q ko‘k',
            discount: {
                name: 'Обменяй свой старый айфон и получи скидку на новый',
                value: '500 000',
            },
            gift: null,
            discountForPhone: {
                name: 'Скидка 30% на смартфоны',
                value: 30
            },
            discountForIphone: null,
            price: '6 890 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.', 'https://olcha.uz/image/440x552/products/ktMcrb08DJeqTQ2BzwopJBD8Az0sptVS4i5MTIvEMdIhP9qZOZjyJilItN1P.', 'https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.'],
            name: 'Apple iPhone 14 Pro Max',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 10% на смартфоны',
                value: 10
            },
            discountForIphone: {
                name: 'Скидка на айфоны',
                IMEI: '012345678901234',
                value: '100 000'
            },
            price: '14 500 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.', 'https://olcha.uz/image/440x552/products/5TH1CmMiY3kB81RxjPejEkNQLP65m2CXx6CSH4rTmOvBCSo1pEYriE0zjN2s.', 'https://olcha.uz/image/440x552/products/XcMX2ygO87HfVWsCs7o4XwqWTFdVmTwSP4LJRrQITu5jlGHdAucncBBB6jLk.'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB Qora',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 20% на смартфоны',
                value: 20
            },
            discountForIphone: null,
            price: '6 000 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/QS4aQGLHtrEp6g2wvLm34DDJAFzTVKW5oGzstyAvb6C8ijhg06Ei0H7Ctqwv.png', 'https://olcha.uz/image/440x552/products/qKSTdyj47F9zRXLpklcDOHgixwrNyBArS7PjDtUjRrtSVKv2z2WlTDDnN2sT.jpeg', 'https://olcha.uz/image/440x552/products/RnPWkp3SlpbvcOLwtPZFAjt0thjAoaAcAZKuG3dxFbkWnCQ9pak1BfWbVa92.png'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB To‘q ko‘k',
            discount: {
                name: 'Обменяй свой старый айфон и получи скидку на новый',
                value: '500 000',
            },
            gift: null,
            discountForPhone: {
                name: 'Скидка 30% на смартфоны',
                value: 30
            },
            discountForIphone: null,
            price: '6 890 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.', 'https://olcha.uz/image/440x552/products/ktMcrb08DJeqTQ2BzwopJBD8Az0sptVS4i5MTIvEMdIhP9qZOZjyJilItN1P.', 'https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.'],
            name: 'Apple iPhone 14 Pro Max',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 10% на смартфоны',
                value: 10
            },
            discountForIphone: {
                name: 'Скидка на айфоны',
                IMEI: '012345678901234',
                value: '100 000'
            },
            price: '14 500 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.', 'https://olcha.uz/image/440x552/products/5TH1CmMiY3kB81RxjPejEkNQLP65m2CXx6CSH4rTmOvBCSo1pEYriE0zjN2s.', 'https://olcha.uz/image/440x552/products/XcMX2ygO87HfVWsCs7o4XwqWTFdVmTwSP4LJRrQITu5jlGHdAucncBBB6jLk.'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB Qora',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 20% на смартфоны',
                value: 20
            },
            discountForIphone: null,
            price: '6 000 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/QS4aQGLHtrEp6g2wvLm34DDJAFzTVKW5oGzstyAvb6C8ijhg06Ei0H7Ctqwv.png', 'https://olcha.uz/image/440x552/products/qKSTdyj47F9zRXLpklcDOHgixwrNyBArS7PjDtUjRrtSVKv2z2WlTDDnN2sT.jpeg', 'https://olcha.uz/image/440x552/products/RnPWkp3SlpbvcOLwtPZFAjt0thjAoaAcAZKuG3dxFbkWnCQ9pak1BfWbVa92.png'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB To‘q ko‘k',
            discount: {
                name: 'Обменяй свой старый айфон и получи скидку на новый',
                value: '500 000',
            },
            gift: null,
            discountForPhone: {
                name: 'Скидка 30% на смартфоны',
                value: 30
            },
            discountForIphone: null,
            price: '6 890 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.', 'https://olcha.uz/image/440x552/products/ktMcrb08DJeqTQ2BzwopJBD8Az0sptVS4i5MTIvEMdIhP9qZOZjyJilItN1P.', 'https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.'],
            name: 'Apple iPhone 14 Pro Max',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 10% на смартфоны',
                value: 10
            },
            discountForIphone: {
                name: 'Скидка на айфоны',
                IMEI: '012345678901234',
                value: '100 000'
            },
            price: '14 500 000'
        }, {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.', 'https://olcha.uz/image/440x552/products/5TH1CmMiY3kB81RxjPejEkNQLP65m2CXx6CSH4rTmOvBCSo1pEYriE0zjN2s.', 'https://olcha.uz/image/440x552/products/XcMX2ygO87HfVWsCs7o4XwqWTFdVmTwSP4LJRrQITu5jlGHdAucncBBB6jLk.'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB Qora',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 20% на смартфоны',
                value: 20
            },
            discountForIphone: null,
            price: '6 000 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/QS4aQGLHtrEp6g2wvLm34DDJAFzTVKW5oGzstyAvb6C8ijhg06Ei0H7Ctqwv.png', 'https://olcha.uz/image/440x552/products/qKSTdyj47F9zRXLpklcDOHgixwrNyBArS7PjDtUjRrtSVKv2z2WlTDDnN2sT.jpeg', 'https://olcha.uz/image/440x552/products/RnPWkp3SlpbvcOLwtPZFAjt0thjAoaAcAZKuG3dxFbkWnCQ9pak1BfWbVa92.png'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB To‘q ko‘k',
            discount: {
                name: 'Обменяй свой старый айфон и получи скидку на новый',
                value: '500 000',
            },
            gift: null,
            discountForPhone: {
                name: 'Скидка 30% на смартфоны',
                value: 30
            },
            discountForIphone: null,
            price: '6 890 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.', 'https://olcha.uz/image/440x552/products/ktMcrb08DJeqTQ2BzwopJBD8Az0sptVS4i5MTIvEMdIhP9qZOZjyJilItN1P.', 'https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.'],
            name: 'Apple iPhone 14 Pro Max',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 10% на смартфоны',
                value: 10
            },
            discountForIphone: {
                name: 'Скидка на айфоны',
                IMEI: '012345678901234',
                value: '100 000'
            },
            price: '14 500 000'
        }, {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.', 'https://olcha.uz/image/440x552/products/5TH1CmMiY3kB81RxjPejEkNQLP65m2CXx6CSH4rTmOvBCSo1pEYriE0zjN2s.', 'https://olcha.uz/image/440x552/products/XcMX2ygO87HfVWsCs7o4XwqWTFdVmTwSP4LJRrQITu5jlGHdAucncBBB6jLk.'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB Qora',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 20% на смартфоны',
                value: 20
            },
            discountForIphone: null,
            price: '6 000 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/QS4aQGLHtrEp6g2wvLm34DDJAFzTVKW5oGzstyAvb6C8ijhg06Ei0H7Ctqwv.png', 'https://olcha.uz/image/440x552/products/qKSTdyj47F9zRXLpklcDOHgixwrNyBArS7PjDtUjRrtSVKv2z2WlTDDnN2sT.jpeg', 'https://olcha.uz/image/440x552/products/RnPWkp3SlpbvcOLwtPZFAjt0thjAoaAcAZKuG3dxFbkWnCQ9pak1BfWbVa92.png'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB To‘q ko‘k',
            discount: {
                name: 'Обменяй свой старый айфон и получи скидку на новый',
                value: '500 000',
            },
            gift: null,
            discountForPhone: {
                name: 'Скидка 30% на смартфоны',
                value: 30
            },
            discountForIphone: null,
            price: '6 890 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.', 'https://olcha.uz/image/440x552/products/ktMcrb08DJeqTQ2BzwopJBD8Az0sptVS4i5MTIvEMdIhP9qZOZjyJilItN1P.', 'https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.'],
            name: 'Apple iPhone 14 Pro Max',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 10% на смартфоны',
                value: 10
            },
            discountForIphone: {
                name: 'Скидка на айфоны',
                IMEI: '012345678901234',
                value: '100 000'
            },
            price: '14 500 000'
        }, {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.', 'https://olcha.uz/image/440x552/products/5TH1CmMiY3kB81RxjPejEkNQLP65m2CXx6CSH4rTmOvBCSo1pEYriE0zjN2s.', 'https://olcha.uz/image/440x552/products/XcMX2ygO87HfVWsCs7o4XwqWTFdVmTwSP4LJRrQITu5jlGHdAucncBBB6jLk.'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB Qora',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 20% на смартфоны',
                value: 20
            },
            discountForIphone: null,
            price: '6 000 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/QS4aQGLHtrEp6g2wvLm34DDJAFzTVKW5oGzstyAvb6C8ijhg06Ei0H7Ctqwv.png', 'https://olcha.uz/image/440x552/products/qKSTdyj47F9zRXLpklcDOHgixwrNyBArS7PjDtUjRrtSVKv2z2WlTDDnN2sT.jpeg', 'https://olcha.uz/image/440x552/products/RnPWkp3SlpbvcOLwtPZFAjt0thjAoaAcAZKuG3dxFbkWnCQ9pak1BfWbVa92.png'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB To‘q ko‘k',
            discount: {
                name: 'Обменяй свой старый айфон и получи скидку на новый',
                value: '500 000',
            },
            gift: null,
            discountForPhone: {
                name: 'Скидка 30% на смартфоны',
                value: 30
            },
            discountForIphone: null,
            price: '6 890 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.', 'https://olcha.uz/image/440x552/products/ktMcrb08DJeqTQ2BzwopJBD8Az0sptVS4i5MTIvEMdIhP9qZOZjyJilItN1P.', 'https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.'],
            name: 'Apple iPhone 14 Pro Max',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 10% на смартфоны',
                value: 10
            },
            discountForIphone: {
                name: 'Скидка на айфоны',
                IMEI: '012345678901234',
                value: '100 000'
            },
            price: '14 500 000'
        }, {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.', 'https://olcha.uz/image/440x552/products/5TH1CmMiY3kB81RxjPejEkNQLP65m2CXx6CSH4rTmOvBCSo1pEYriE0zjN2s.', 'https://olcha.uz/image/440x552/products/XcMX2ygO87HfVWsCs7o4XwqWTFdVmTwSP4LJRrQITu5jlGHdAucncBBB6jLk.'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB Qora',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 20% на смартфоны',
                value: 20
            },
            discountForIphone: null,
            price: '6 000 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/QS4aQGLHtrEp6g2wvLm34DDJAFzTVKW5oGzstyAvb6C8ijhg06Ei0H7Ctqwv.png', 'https://olcha.uz/image/440x552/products/qKSTdyj47F9zRXLpklcDOHgixwrNyBArS7PjDtUjRrtSVKv2z2WlTDDnN2sT.jpeg', 'https://olcha.uz/image/440x552/products/RnPWkp3SlpbvcOLwtPZFAjt0thjAoaAcAZKuG3dxFbkWnCQ9pak1BfWbVa92.png'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB To‘q ko‘k',
            discount: {
                name: 'Обменяй свой старый айфон и получи скидку на новый',
                value: '500 000',
            },
            gift: null,
            discountForPhone: {
                name: 'Скидка 30% на смартфоны',
                value: 30
            },
            discountForIphone: null,
            price: '6 890 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.', 'https://olcha.uz/image/440x552/products/ktMcrb08DJeqTQ2BzwopJBD8Az0sptVS4i5MTIvEMdIhP9qZOZjyJilItN1P.', 'https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.'],
            name: 'Apple iPhone 14 Pro Max',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 10% на смартфоны',
                value: 10
            },
            discountForIphone: {
                name: 'Скидка на айфоны',
                IMEI: '012345678901234',
                value: '100 000'
            },
            price: '14 500 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.', 'https://olcha.uz/image/440x552/products/5TH1CmMiY3kB81RxjPejEkNQLP65m2CXx6CSH4rTmOvBCSo1pEYriE0zjN2s.', 'https://olcha.uz/image/440x552/products/XcMX2ygO87HfVWsCs7o4XwqWTFdVmTwSP4LJRrQITu5jlGHdAucncBBB6jLk.'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB Qora',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 20% на смартфоны',
                value: 20
            },
            discountForIphone: null,
            price: '6 000 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/QS4aQGLHtrEp6g2wvLm34DDJAFzTVKW5oGzstyAvb6C8ijhg06Ei0H7Ctqwv.png', 'https://olcha.uz/image/440x552/products/qKSTdyj47F9zRXLpklcDOHgixwrNyBArS7PjDtUjRrtSVKv2z2WlTDDnN2sT.jpeg', 'https://olcha.uz/image/440x552/products/RnPWkp3SlpbvcOLwtPZFAjt0thjAoaAcAZKuG3dxFbkWnCQ9pak1BfWbVa92.png'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB To‘q ko‘k',
            discount: {
                name: 'Обменяй свой старый айфон и получи скидку на новый',
                value: '500 000',
            },
            gift: null,
            discountForPhone: {
                name: 'Скидка 30% на смартфоны',
                value: 30
            },
            discountForIphone: null,
            price: '6 890 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.', 'https://olcha.uz/image/440x552/products/ktMcrb08DJeqTQ2BzwopJBD8Az0sptVS4i5MTIvEMdIhP9qZOZjyJilItN1P.', 'https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.'],
            name: 'Apple iPhone 14 Pro Max',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 10% на смартфоны',
                value: 10
            },
            discountForIphone: {
                name: 'Скидка на айфоны',
                IMEI: '012345678901234',
                value: '100 000'
            },
            price: '14 500 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.', 'https://olcha.uz/image/440x552/products/5TH1CmMiY3kB81RxjPejEkNQLP65m2CXx6CSH4rTmOvBCSo1pEYriE0zjN2s.', 'https://olcha.uz/image/440x552/products/XcMX2ygO87HfVWsCs7o4XwqWTFdVmTwSP4LJRrQITu5jlGHdAucncBBB6jLk.'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB Qora',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 20% на смартфоны',
                value: 20
            },
            discountForIphone: null,
            price: '6 000 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/QS4aQGLHtrEp6g2wvLm34DDJAFzTVKW5oGzstyAvb6C8ijhg06Ei0H7Ctqwv.png', 'https://olcha.uz/image/440x552/products/qKSTdyj47F9zRXLpklcDOHgixwrNyBArS7PjDtUjRrtSVKv2z2WlTDDnN2sT.jpeg', 'https://olcha.uz/image/440x552/products/RnPWkp3SlpbvcOLwtPZFAjt0thjAoaAcAZKuG3dxFbkWnCQ9pak1BfWbVa92.png'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB To‘q ko‘k',
            discount: {
                name: 'Обменяй свой старый айфон и получи скидку на новый',
                value: '500 000',
            },
            gift: null,
            discountForPhone: {
                name: 'Скидка 30% на смартфоны',
                value: 30
            },
            discountForIphone: null,
            price: '6 890 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.', 'https://olcha.uz/image/440x552/products/ktMcrb08DJeqTQ2BzwopJBD8Az0sptVS4i5MTIvEMdIhP9qZOZjyJilItN1P.', 'https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.'],
            name: 'Apple iPhone 14 Pro Max',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 10% на смартфоны',
                value: 10
            },
            discountForIphone: {
                name: 'Скидка на айфоны',
                IMEI: '012345678901234',
                value: '100 000'
            },
            price: '14 500 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.', 'https://olcha.uz/image/440x552/products/5TH1CmMiY3kB81RxjPejEkNQLP65m2CXx6CSH4rTmOvBCSo1pEYriE0zjN2s.', 'https://olcha.uz/image/440x552/products/XcMX2ygO87HfVWsCs7o4XwqWTFdVmTwSP4LJRrQITu5jlGHdAucncBBB6jLk.'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB Qora',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 20% на смартфоны',
                value: 20
            },
            discountForIphone: null,
            price: '6 000 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/QS4aQGLHtrEp6g2wvLm34DDJAFzTVKW5oGzstyAvb6C8ijhg06Ei0H7Ctqwv.png', 'https://olcha.uz/image/440x552/products/qKSTdyj47F9zRXLpklcDOHgixwrNyBArS7PjDtUjRrtSVKv2z2WlTDDnN2sT.jpeg', 'https://olcha.uz/image/440x552/products/RnPWkp3SlpbvcOLwtPZFAjt0thjAoaAcAZKuG3dxFbkWnCQ9pak1BfWbVa92.png'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB To‘q ko‘k',
            discount: {
                name: 'Обменяй свой старый айфон и получи скидку на новый',
                value: '500 000',
            },
            gift: null,
            discountForPhone: {
                name: 'Скидка 30% на смартфоны',
                value: 30
            },
            discountForIphone: null,
            price: '6 890 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.', 'https://olcha.uz/image/440x552/products/ktMcrb08DJeqTQ2BzwopJBD8Az0sptVS4i5MTIvEMdIhP9qZOZjyJilItN1P.', 'https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.'],
            name: 'Apple iPhone 14 Pro Max',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 10% на смартфоны',
                value: 10
            },
            discountForIphone: {
                name: 'Скидка на айфоны',
                IMEI: '012345678901234',
                value: '100 000'
            },
            price: '14 500 000'
        },

        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.', 'https://olcha.uz/image/440x552/products/5TH1CmMiY3kB81RxjPejEkNQLP65m2CXx6CSH4rTmOvBCSo1pEYriE0zjN2s.', 'https://olcha.uz/image/440x552/products/XcMX2ygO87HfVWsCs7o4XwqWTFdVmTwSP4LJRrQITu5jlGHdAucncBBB6jLk.'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB Qora',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 20% на смартфоны',
                value: 20
            },
            discountForIphone: null,
            price: '6 000 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/QS4aQGLHtrEp6g2wvLm34DDJAFzTVKW5oGzstyAvb6C8ijhg06Ei0H7Ctqwv.png', 'https://olcha.uz/image/440x552/products/qKSTdyj47F9zRXLpklcDOHgixwrNyBArS7PjDtUjRrtSVKv2z2WlTDDnN2sT.jpeg', 'https://olcha.uz/image/440x552/products/RnPWkp3SlpbvcOLwtPZFAjt0thjAoaAcAZKuG3dxFbkWnCQ9pak1BfWbVa92.png'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB To‘q ko‘k',
            discount: {
                name: 'Обменяй свой старый айфон и получи скидку на новый',
                value: '500 000',
            },
            gift: null,
            discountForPhone: {
                name: 'Скидка 30% на смартфоны',
                value: 30
            },
            discountForIphone: null,
            price: '6 890 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.', 'https://olcha.uz/image/440x552/products/ktMcrb08DJeqTQ2BzwopJBD8Az0sptVS4i5MTIvEMdIhP9qZOZjyJilItN1P.', 'https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.'],
            name: 'Apple iPhone 14 Pro Max',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 10% на смартфоны',
                value: 10
            },
            discountForIphone: {
                name: 'Скидка на айфоны',
                IMEI: '012345678901234',
                value: '100 000'
            },
            price: '14 500 000'
        },

        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.', 'https://olcha.uz/image/440x552/products/5TH1CmMiY3kB81RxjPejEkNQLP65m2CXx6CSH4rTmOvBCSo1pEYriE0zjN2s.', 'https://olcha.uz/image/440x552/products/XcMX2ygO87HfVWsCs7o4XwqWTFdVmTwSP4LJRrQITu5jlGHdAucncBBB6jLk.'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB Qora',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 20% на смартфоны',
                value: 20
            },
            discountForIphone: null,
            price: '6 000 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/QS4aQGLHtrEp6g2wvLm34DDJAFzTVKW5oGzstyAvb6C8ijhg06Ei0H7Ctqwv.png', 'https://olcha.uz/image/440x552/products/qKSTdyj47F9zRXLpklcDOHgixwrNyBArS7PjDtUjRrtSVKv2z2WlTDDnN2sT.jpeg', 'https://olcha.uz/image/440x552/products/RnPWkp3SlpbvcOLwtPZFAjt0thjAoaAcAZKuG3dxFbkWnCQ9pak1BfWbVa92.png'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB To‘q ko‘k',
            discount: {
                name: 'Обменяй свой старый айфон и получи скидку на новый',
                value: '500 000',
            },
            gift: null,
            discountForPhone: {
                name: 'Скидка 30% на смартфоны',
                value: 30
            },
            discountForIphone: null,
            price: '6 890 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.', 'https://olcha.uz/image/440x552/products/ktMcrb08DJeqTQ2BzwopJBD8Az0sptVS4i5MTIvEMdIhP9qZOZjyJilItN1P.', 'https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.'],
            name: 'Apple iPhone 14 Pro Max',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 10% на смартфоны',
                value: 10
            },
            discountForIphone: {
                name: 'Скидка на айфоны',
                IMEI: '012345678901234',
                value: '100 000'
            },
            price: '14 500 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.', 'https://olcha.uz/image/440x552/products/5TH1CmMiY3kB81RxjPejEkNQLP65m2CXx6CSH4rTmOvBCSo1pEYriE0zjN2s.', 'https://olcha.uz/image/440x552/products/XcMX2ygO87HfVWsCs7o4XwqWTFdVmTwSP4LJRrQITu5jlGHdAucncBBB6jLk.'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB Qora',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 20% на смартфоны',
                value: 20
            },
            discountForIphone: null,
            price: '6 000 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/QS4aQGLHtrEp6g2wvLm34DDJAFzTVKW5oGzstyAvb6C8ijhg06Ei0H7Ctqwv.png', 'https://olcha.uz/image/440x552/products/qKSTdyj47F9zRXLpklcDOHgixwrNyBArS7PjDtUjRrtSVKv2z2WlTDDnN2sT.jpeg', 'https://olcha.uz/image/440x552/products/RnPWkp3SlpbvcOLwtPZFAjt0thjAoaAcAZKuG3dxFbkWnCQ9pak1BfWbVa92.png'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB To‘q ko‘k',
            discount: {
                name: 'Обменяй свой старый айфон и получи скидку на новый',
                value: '500 000',
            },
            gift: null,
            discountForPhone: {
                name: 'Скидка 30% на смартфоны',
                value: 30
            },
            discountForIphone: null,
            price: '6 890 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.', 'https://olcha.uz/image/440x552/products/ktMcrb08DJeqTQ2BzwopJBD8Az0sptVS4i5MTIvEMdIhP9qZOZjyJilItN1P.', 'https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.'],
            name: 'Apple iPhone 14 Pro Max',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 10% на смартфоны',
                value: 10
            },
            discountForIphone: {
                name: 'Скидка на айфоны',
                IMEI: '012345678901234',
                value: '100 000'
            },
            price: '14 500 000'
        },

        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.', 'https://olcha.uz/image/440x552/products/5TH1CmMiY3kB81RxjPejEkNQLP65m2CXx6CSH4rTmOvBCSo1pEYriE0zjN2s.', 'https://olcha.uz/image/440x552/products/XcMX2ygO87HfVWsCs7o4XwqWTFdVmTwSP4LJRrQITu5jlGHdAucncBBB6jLk.'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB Qora',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 20% на смартфоны',
                value: 20
            },
            discountForIphone: null,
            price: '6 000 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/QS4aQGLHtrEp6g2wvLm34DDJAFzTVKW5oGzstyAvb6C8ijhg06Ei0H7Ctqwv.png', 'https://olcha.uz/image/440x552/products/qKSTdyj47F9zRXLpklcDOHgixwrNyBArS7PjDtUjRrtSVKv2z2WlTDDnN2sT.jpeg', 'https://olcha.uz/image/440x552/products/RnPWkp3SlpbvcOLwtPZFAjt0thjAoaAcAZKuG3dxFbkWnCQ9pak1BfWbVa92.png'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB To‘q ko‘k',
            discount: {
                name: 'Обменяй свой старый айфон и получи скидку на новый',
                value: '500 000',
            },
            gift: null,
            discountForPhone: {
                name: 'Скидка 30% на смартфоны',
                value: 30
            },
            discountForIphone: null,
            price: '6 890 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.', 'https://olcha.uz/image/440x552/products/ktMcrb08DJeqTQ2BzwopJBD8Az0sptVS4i5MTIvEMdIhP9qZOZjyJilItN1P.', 'https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.'],
            name: 'Apple iPhone 14 Pro Max',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 10% на смартфоны',
                value: 10
            },
            discountForIphone: {
                name: 'Скидка на айфоны',
                IMEI: '012345678901234',
                value: '100 000'
            },
            price: '14 500 000'
        },

        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.', 'https://olcha.uz/image/440x552/products/5TH1CmMiY3kB81RxjPejEkNQLP65m2CXx6CSH4rTmOvBCSo1pEYriE0zjN2s.', 'https://olcha.uz/image/440x552/products/XcMX2ygO87HfVWsCs7o4XwqWTFdVmTwSP4LJRrQITu5jlGHdAucncBBB6jLk.'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB Qora',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 20% на смартфоны',
                value: 20
            },
            discountForIphone: null,
            price: '6 000 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/QS4aQGLHtrEp6g2wvLm34DDJAFzTVKW5oGzstyAvb6C8ijhg06Ei0H7Ctqwv.png', 'https://olcha.uz/image/440x552/products/qKSTdyj47F9zRXLpklcDOHgixwrNyBArS7PjDtUjRrtSVKv2z2WlTDDnN2sT.jpeg', 'https://olcha.uz/image/440x552/products/RnPWkp3SlpbvcOLwtPZFAjt0thjAoaAcAZKuG3dxFbkWnCQ9pak1BfWbVa92.png'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB To‘q ko‘k',
            discount: {
                name: 'Обменяй свой старый айфон и получи скидку на новый',
                value: '500 000',
            },
            gift: null,
            discountForPhone: {
                name: 'Скидка 30% на смартфоны',
                value: 30
            },
            discountForIphone: null,
            price: '6 890 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.', 'https://olcha.uz/image/440x552/products/ktMcrb08DJeqTQ2BzwopJBD8Az0sptVS4i5MTIvEMdIhP9qZOZjyJilItN1P.', 'https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.'],
            name: 'Apple iPhone 14 Pro Max',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 10% на смартфоны',
                value: 10
            },
            discountForIphone: {
                name: 'Скидка на айфоны',
                IMEI: '012345678901234',
                value: '100 000'
            },
            price: '14 500 000'
        },

        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.', 'https://olcha.uz/image/440x552/products/5TH1CmMiY3kB81RxjPejEkNQLP65m2CXx6CSH4rTmOvBCSo1pEYriE0zjN2s.', 'https://olcha.uz/image/440x552/products/XcMX2ygO87HfVWsCs7o4XwqWTFdVmTwSP4LJRrQITu5jlGHdAucncBBB6jLk.'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB Qora',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 20% на смартфоны',
                value: 20
            },
            discountForIphone: null,
            price: '6 000 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/QS4aQGLHtrEp6g2wvLm34DDJAFzTVKW5oGzstyAvb6C8ijhg06Ei0H7Ctqwv.png', 'https://olcha.uz/image/440x552/products/qKSTdyj47F9zRXLpklcDOHgixwrNyBArS7PjDtUjRrtSVKv2z2WlTDDnN2sT.jpeg', 'https://olcha.uz/image/440x552/products/RnPWkp3SlpbvcOLwtPZFAjt0thjAoaAcAZKuG3dxFbkWnCQ9pak1BfWbVa92.png'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB To‘q ko‘k',
            discount: {
                name: 'Обменяй свой старый айфон и получи скидку на новый',
                value: '500 000',
            },
            gift: null,
            discountForPhone: {
                name: 'Скидка 30% на смартфоны',
                value: 30
            },
            discountForIphone: null,
            price: '6 890 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.', 'https://olcha.uz/image/440x552/products/ktMcrb08DJeqTQ2BzwopJBD8Az0sptVS4i5MTIvEMdIhP9qZOZjyJilItN1P.', 'https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.'],
            name: 'Apple iPhone 14 Pro Max',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 10% на смартфоны',
                value: 10
            },
            discountForIphone: {
                name: 'Скидка на айфоны',
                IMEI: '012345678901234',
                value: '100 000'
            },
            price: '14 500 000'
        },

        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.', 'https://olcha.uz/image/440x552/products/5TH1CmMiY3kB81RxjPejEkNQLP65m2CXx6CSH4rTmOvBCSo1pEYriE0zjN2s.', 'https://olcha.uz/image/440x552/products/XcMX2ygO87HfVWsCs7o4XwqWTFdVmTwSP4LJRrQITu5jlGHdAucncBBB6jLk.'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB Qora',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 20% на смартфоны',
                value: 20
            },
            discountForIphone: null,
            price: '6 000 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/QS4aQGLHtrEp6g2wvLm34DDJAFzTVKW5oGzstyAvb6C8ijhg06Ei0H7Ctqwv.png', 'https://olcha.uz/image/440x552/products/qKSTdyj47F9zRXLpklcDOHgixwrNyBArS7PjDtUjRrtSVKv2z2WlTDDnN2sT.jpeg', 'https://olcha.uz/image/440x552/products/RnPWkp3SlpbvcOLwtPZFAjt0thjAoaAcAZKuG3dxFbkWnCQ9pak1BfWbVa92.png'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB To‘q ko‘k',
            discount: {
                name: 'Обменяй свой старый айфон и получи скидку на новый',
                value: '500 000',
            },
            gift: null,
            discountForPhone: {
                name: 'Скидка 30% на смартфоны',
                value: 30
            },
            discountForIphone: null,
            price: '6 890 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.', 'https://olcha.uz/image/440x552/products/ktMcrb08DJeqTQ2BzwopJBD8Az0sptVS4i5MTIvEMdIhP9qZOZjyJilItN1P.', 'https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.'],
            name: 'Apple iPhone 14 Pro Max',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 10% на смартфоны',
                value: 10
            },
            discountForIphone: {
                name: 'Скидка на айфоны',
                IMEI: '012345678901234',
                value: '100 000'
            },
            price: '14 500 000'
        },

        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.', 'https://olcha.uz/image/440x552/products/5TH1CmMiY3kB81RxjPejEkNQLP65m2CXx6CSH4rTmOvBCSo1pEYriE0zjN2s.', 'https://olcha.uz/image/440x552/products/XcMX2ygO87HfVWsCs7o4XwqWTFdVmTwSP4LJRrQITu5jlGHdAucncBBB6jLk.'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB Qora',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 20% на смартфоны',
                value: 20
            },
            discountForIphone: null,
            price: '6 000 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/QS4aQGLHtrEp6g2wvLm34DDJAFzTVKW5oGzstyAvb6C8ijhg06Ei0H7Ctqwv.png', 'https://olcha.uz/image/440x552/products/qKSTdyj47F9zRXLpklcDOHgixwrNyBArS7PjDtUjRrtSVKv2z2WlTDDnN2sT.jpeg', 'https://olcha.uz/image/440x552/products/RnPWkp3SlpbvcOLwtPZFAjt0thjAoaAcAZKuG3dxFbkWnCQ9pak1BfWbVa92.png'],
            name: 'Smartfon Xiaomi Redmi Note 11 6 GB 128GB To‘q ko‘k',
            discount: {
                name: 'Обменяй свой старый айфон и получи скидку на новый',
                value: '500 000',
            },
            gift: null,
            discountForPhone: {
                name: 'Скидка 30% на смартфоны',
                value: 30
            },
            discountForIphone: null,
            price: '6 890 000'
        },
        {
            id: uuidv4(),
            images: ['https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.', 'https://olcha.uz/image/440x552/products/ktMcrb08DJeqTQ2BzwopJBD8Az0sptVS4i5MTIvEMdIhP9qZOZjyJilItN1P.', 'https://olcha.uz/image/440x552/products/6fReY0Y2iXttmfmdQ43iBFfYBPiGoOi92lNtYEEiUDl9Ep4u5nCJxqGB9VRM.'],
            name: 'Apple iPhone 14 Pro Max',
            discount: null,
            gift: {
                name: 'Apple EarPods',
            },
            discountForPhone: {
                name: 'Скидка 10% на смартфоны',
                value: 10
            },
            discountForIphone: {
                name: 'Скидка на айфоны',
                IMEI: '012345678901234',
                value: '100 000'
            },
            price: '14 500 000'
        },
    ],
    basket: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        // case t.SET_LIKE:
        //     let dataLike = [...state.products];
        //     dataLike.forEach((d) => {
        //         if (d.id === action.payload) {
        //             d.isLike = !d.isLike
        //         }
        //     })
        //     return {...state, products: dataLike};

        default:
            return state;
    }
};

export default reducer;