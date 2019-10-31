import { 
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.40,
                orderNumber: 'B002479',
                orderDate: new Date().toDateString,
                creditCard: '-0000',
                user: {
                    name: 'Emily Brunnette',
                    shippingAddress: '1224 Main Street'
                }                
            },
            {
                _id: 1,
                total: 19.10,
                orderNumber: 'C002477',
                orderDate: new Date().toDateString,
                creditCard: '-0000',
                user: {
                    name: 'Andrew Grimshaw',
                    shippingAddress: '1216 Grand Ave'
                }                
            },
            {
                _id: 2,
                total: 18.40,
                orderNumber: 'D002478',
                orderDate: new Date().toDateString,
                creditCard: '-0000',
                user: {
                    name: 'Doug Brunnette',
                    shippingAddress: '1220 Mercy Street'
                }                
            },
            {
                _id: 3,
                total: 16.40,
                orderNumber: 'E002481',
                orderDate: new Date().toDateString,
                creditCard: '-0000',
                user: {
                    name: 'Garth Coles',
                    shippingAddress: '1500 Oak Hills Drive'
                }                
            },
            {
                _id: 4,
                total: 10.40,
                orderNumber: 'F002482',
                orderDate: new Date().toDateString,
                creditCard: '-0000',
                user: {
                    name: 'Amy Harris',
                    shippingAddress: '1228 E 650 S'
                }                
            },
            {
                _id: 5,
                total: 13.40,
                orderNumber: 'G002483',
                orderDate: new Date().toDateString,
                creditCard: '-0000',
                user: {
                    name: 'Mike Conly',
                    shippingAddress: '1440 South Main'
                }                
            },
            {
                _id: 6,
                total: 17.40,
                orderNumber: 'H002484',
                orderDate: new Date().toDateString,
                creditCard: '-0000',
                user: {
                    name: 'Donovan Mitchell',
                    shippingAddress: '2010 Oak Hills Drive'
                }                
            },
            {
                _id: 7,
                total: 7.40,
                orderNumber: 'H002482',
                orderDate: new Date().toDateString,
                creditCard: '-0000',
                user: {
                    name: 'Joe Ingles',
                    shippingAddress: '2500 Washington Blvd'
                }                
            },

        ]
    })
}