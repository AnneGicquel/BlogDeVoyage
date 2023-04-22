export interface IarticlesData {
    
    id:number;
    country: string;
    city: string;
    departureDate: string;
    returnDate: string;
    mainPicture: string;
    secondaryImages: string[];
    textAboutTravel: string;
    goodPoints: string[];
    badPoints: string[];
    advices: string[];
    summary:string;
    isOnHomePage: boolean;
}


export const ARTICLESDATA : IarticlesData[]=[
    
    {
        id:1,
        country: "Islande",
        city: "Reykyavik",
        departureDate: "14.04.20",
        returnDate: "31.04.20",
        mainPicture: "assets/Iceland/Iceland1.jpeg",
        secondaryImages: ["assets/Iceland/Iceland2.jpeg","assets/Iceland/Iceland3.jpeg","assets/Iceland/Iceland4.jpeg"],
        textAboutTravel: "Islande \n est l'une des îles habitées de l'atoll de Gaafu Alif , aux Maldives. /n Il est situé sur le bord nord-est de l'atoll de Huvadu. Il détient l' aéroport de Kooddoo. L'atoll nord de Huvadhu ou Gaafu Alifu est une division administrative créée le 8 février 1962, lorsque l'atoll de Huvadhu a été divisé en deux districts. L'île abrite une conserverie, une fabrique de glace, des restaurants, une station-service et se trouve sur la chaussée qui la relie aux îles Vilingili et Raaverrehaa.",
        goodPoints: ['ICELAND1', 'ICELAND2', 'ICELAND3'],
        badPoints: ["iceland1","iceland2", "iceland3"],
        advices: ["ICELANDConseil1","ICELANDConseil2","ICELANDConseil3",],
        summary:"Islande un territoire \n s'étendant sur environ 90 000 kilomètres carrés (35 000 milles carrés), y compris la mer, la superficie de toutes les îles comprend 298 kilomètres carrés (115 milles carrés), les Maldives sont l'un des États souverains les plus dispersés géographiquement au monde et le plus petit pays asiatique ",
        isOnHomePage:false 
    },
    
    {
        id:2,
        country: "Palau",
        city: "Koror",
        departureDate: "14.05.19",
        returnDate: "31.05.19",
        mainPicture: "assets/Palau/Palau1.jpeg",
        secondaryImages: ["assets/Palau/Palau2.jpeg","assets/Palau/Palau3.jpeg","assets/Palau/Palau4.jpeg"],
        textAboutTravel: "Palau \n est l'une des îles habitées de l'atoll de Gaafu Alif , aux Maldives. /n Il est situé sur le bord nord-est de l'atoll de Huvadu. Il détient l' aéroport de Kooddoo. L'atoll nord de Huvadhu ou Gaafu Alifu est une division administrative créée le 8 février 1962, lorsque l'atoll de Huvadhu a été divisé en deux districts. L'île abrite une conserverie, une fabrique de glace, des restaurants, une station-service et se trouve sur la chaussée qui la relie aux îles Vilingili et Raaverrehaa.",
        goodPoints: ['PALAU1', 'PALAU2', 'PALAU3'],
        badPoints: ["Palau1","Palau2", "Palau3"],
        advices: ["PALAUConseil1","PALAUConseil2","PALAUConseil3",],
        summary:"Palau un territoire \n s'étendant sur environ 90 000 kilomètres carrés (35 000 milles carrés), y compris la mer, la superficie de toutes les îles comprend 298 kilomètres carrés (115 milles carrés), les Maldives sont l'un des États souverains les plus dispersés géographiquement au monde et le plus petit pays asiatique ",
        isOnHomePage:false  
    },

    {
        id:3,
        country: "Kingdom of Denmark",
        city: "Faroe Islands",
        departureDate: "14.01.23",
        returnDate: "31.01.23",
        mainPicture: "assets/Faroe_Islands/Faroe1.jpeg",
        secondaryImages: ["assets/Faroe_Islands/Faroe2.jpeg","assets/Faroe_Islands/Faroe3.jpeg","assets/Faroe_Islands/Faroe4.jpeg"],
        textAboutTravel: "TESTTTTTT \n of Thailand, you're likely \n to spend at least one night in its capital city on the way. Bangkok might be noisy and polluted but it's also an exciting city with plenty of things to see and do.",
        goodPoints: ['FAROE1', 'FAROE2', 'FAROE3'],
        badPoints: ["faroe1","faroe2", "faroe3"],
        advices: ["FAROEConseil1","FAROEConseil2","FAROEConseil3",],
        summary:"After you've seen \n the main sites like the Giant Buddha at the temple of Wat Pho and the spectacular Grand Palace, and shopped at Chatuchak market, check out the snake farm and watch the live snake show. You can even touch a snake yourself if you want to!",
        isOnHomePage:false 
    },

    {
        id:4,
        country: "Seychelles",
        city: "Praslin",
        departureDate: "14.03.21",
        returnDate: "31.03.21",
        mainPicture: "assets/Seychelles/Seychelles3.jpeg",
        secondaryImages: ["assets/Seychelles/Seychelles2.jpeg","assets/Seychelles/Seychelles4.jpeg","assets/Seychelles/Seychelles1.jpeg"],
        textAboutTravel: "Seychelles \n est l'une des îles habitées de l'atoll de Gaafu Alif , aux Maldives. /n Il est situé sur le bord nord-est de l'atoll de Huvadu. Il détient l' aéroport de Kooddoo. L'atoll nord de Huvadhu ou Gaafu Alifu est une division administrative créée le 8 février 1962, lorsque l'atoll de Huvadhu a été divisé en deux districts. L'île abrite une conserverie, une fabrique de glace, des restaurants, une station-service et se trouve sur la chaussée qui la relie aux îles Vilingili et Raaverrehaa.",
        goodPoints: ['Sey1', 'Sey2', 'Sey3'],
        badPoints: ["SEY1","SEY2", "SEY3"],
        advices: ["SConseil1","SConseil2","SConseil3",],
        summary:"Seychelles un territoire s'étendant sur environ 90 000 kilomètres carrés (35 000 milles carrés), y compris la mer, la superficie de toutes les îles comprend 298 kilomètres carrés (115 milles carrés), les Maldives sont l'un des États souverains les plus dispersés géographiquement au monde et le plus petit pays asiatique ",
        isOnHomePage:false 
    },

    {   
        id:5,
        country: "Bolivia",
        city: "Uyuni",
        departureDate: "14.02.22",
        returnDate: "31.02.22",
        mainPicture: "assets/Bolivia/Bolivia_Uyuni _SaltFlat3.jpeg",
        secondaryImages: ["assets/Bolivia/Bolivia_Uyuni_pinkLake.jpeg","assets/Bolivia/Bolivia_Uyuni _SaltFlat2.jpeg","assets/Bolivia/Bolivia_Uyuni_SaltFlat1.jpeg"],
        textAboutTravel: "Bolivia you're travelling to the islands \n or the mountains of Thailand, you're likely to spend at least one night in its capital city on the way. Bangkok might be noisy and polluted but it's also an exciting city with plenty of things to see and do.",
        goodPoints: ['BOL1', 'BOL2', 'BOL3'],
        badPoints: ["bol1","bol2", "bol3"],
        advices: ["BConseil1","BConseil2","BConseil3",],
        summary:"Bolivia you've seen \n the main sites like the Giant Buddha at the temple of Wat Pho and the spectacular Grand Palace, and shopped at Chatuchak market, check out the snake farm and watch the live snake show. You can even touch a snake yourself if you want to!",
        isOnHomePage:true 
    }

]