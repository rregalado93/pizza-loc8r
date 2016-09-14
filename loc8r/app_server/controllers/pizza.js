/* GET 'home' page */
module.exports.pizzaList = function(req, res) {
    res.render('pizza-list', {
        title: 'PizzaFinder - find a place to eat Pizza',
        pageHeader: {
            title: 'PizzaLocat8r',
            strapline: 'Find Pizza'
        },
        sidebar: "Discover the top 3 places to eat pizza in Canyon,TX",
        locations: [{
            name: 'Pizza Hut',
            address: '110 23rd St, Canyon, TX 79015',
            rating: 4,
            facilities: ['Sit-in', 'Special drinks', 'Premium wifi'],
            distance: '100m'
        }, {
            name: 'Dominos Pizza',
            address: '2310 9th Ave, Canyon, TX 79015',
            rating: 5,
            facilities: ['Carry out', 'Delivery', 'Great wings'],
            distance: '200m'
        }, {
            name: 'La Bella Pizza',
            address: '700 23rd St, Canyon, TX 79015',
            rating: 2,
            facilities: ['Carry out', 'Delivery', 'Great ribs'],
            distance: '250m'
        }]
    });
};

/* GET 'Location info' page */
module.exports.pizzaInfo = function(req, res) {
    res.render('pizza-info', {
        title: 'Dominos Pizza',
        pageHeader: {
            title: 'Dominos Pizza'
        },
        sidebar: {
            context: 'Our delivery people drive more than 10 million miles every week to bring you the best pizza we can make. We operate over 9,000 pizza places in more than 60 countries dedicated to providing great tasting pizza for carryout or delivered to your door. How did we become such a powerhouse of pizza delivery? Lets look.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Dominos',
            address: '2310 9th Ave, Canyon, TX 79015',
            rating: 5,
            facilities: ['Carry out', 'Delivery', 'Great wings'],
            coords: {
                lat: 34.988981,
                lng: -101.916008
            },
            openingTimes: [{
                days: 'Sunday-Thursday',
                opening: '10:30am',
                closing: '12:00pm',
                closed: false
            }, {
                days: 'Friday-Saturday',
                opening: '10:30am',
                closing: '1:00am',
                closed: false
            },],
            reviews: [{
                author: 'Chery Vaughn',
                rating: 5,
                timestamp: '08 September 2016',
                reviewText: 'We love our Canyon location. They are a great team and make everything to our liking. Thank You guys for the being the best ever.'
            }, {
                author: 'Christopher Luck',
                rating: 5,
                timestamp: '14 September 2016',
                reviewText: 'The pizza we order from here is always perfect! It is very handy to order using the Dominos app, and it lets you see the different steps of your order in real time. The delivery people are always incredibly friendly and on time as well. If you order pizza from anywhere in Canyon, make it here!'
            }]
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Dominos Pizza on Loc8r',
        pageHeader: {
            title: 'Review Dominos Pizza'
        }
    });
};