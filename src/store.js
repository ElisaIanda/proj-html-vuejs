import { reactive } from 'vue';

export const store = reactive({
    slideIndex: 0,

    navMenu: {
        home: {
            name: 'Home',
            menu: [
                'Driving School',
                'High School',
                'Kinder Garten',
                'Header Video'
            ]
        },
        courses: {
            name: 'Courses',
            menu: [
                'Our Courses',
                'Single Course',
                'Instructor Profile',
                'Become A Teacher'
            ]
        },
        aboutsUs: {
            name: 'Abouts Us'
        },
        news: {
            name: 'News',
            menu: [
                'Edu Prime Blog',
                'Single Post',
                'Category Posts'
            ]
        },
        pages: {
            name: 'Pages',
            menu: [
                'How It Works',
                'Single Event',
                'University Shop',
                'Single Product'
            ]
        },
        contact: {
            name: 'Contact',
        },
        purchase: {
            name: 'Purchase',
        }
    },

    slider: {
        showCase: {
            h1: 'Showcase your courses',
            img: 'theme_slider2_bg-1.jpg',
            description: 'EduPrime is the most versatile WordPress theme for educational purposes, showcasing universitiesm courses, secondary schools etc.'
        },
        key: {
            h1: 'Key to your success',
            img: 'theme_slider1_bg-1.jpg',
            description: 'EduPrime is the most versatile WordPress theme for educational purposes, showcasing universitiesm courses, secondary schools etc.'
        },
        lead: {
            h1: 'Lead. Inspire. Win!',
            img: 'theme_slider2_bg-1.jpg',
            description: 'EduPrime is the most versatile WordPress theme for educational purposes, showcasing universitiesm courses, secondary schools etc.'
        },
    },

    // footer

    footerMenu: {
        eduPrime: {
            title: 'Get EduePrime',
            menu: [
                'Request a website',
                'Browse Themes',
                'Payment options',
                'Support System',
                'Checkout',
                'Purchase Theme'
            ]
        },
        networking: {
            title: 'Networking',
            menu: [
                'Purchase Theme',
                'Our Benefits',
                'Our Team',
                'Our Services',
                'Other Products',
                'My account'
            ]
        }
    },

    footerTag: [
        'ECONOMY',
        'DESIGN',
        'COACHING',
        'BUSINESS',
        'MEDICINE',
        'LAW',
        'FITNESS'
    ]
})