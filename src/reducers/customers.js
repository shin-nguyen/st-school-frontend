let initalState = [
    {   "id":1,
        "name":"Đoàn Lộc",
        "email":"brois0@unicef.org",
        "location":"Bator",
        "phone":"+62 745 807 7685",
        "total_spend":"$557248.44",
        "total_orders":24011
    },
    {   "id":2,
        "name":"Matthew Junifer",
        "email":"mjunifer1@buzzfeed.com",
        "location":"Bromma",
        "phone":"+46 993 722 3008",
        "total_spend":"$599864.94",
        "total_orders":60195
    },
    {   "id":4,
        "name":"Beryle Monelli",
        "email":"bmonelli3@amazonaws.com",
        "location":"Martingança",
        "phone":"+351 734 876 8127",
        "total_spend":"$335862.78",
        "total_orders":78768
    }
];

const customers = (state = initalState, action) => {
    switch(action.type){
        default: return[...state]
    }
}

export default customers;
