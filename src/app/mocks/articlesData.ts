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
        departureDate: "05.04.19",
        returnDate: "20.04.19",
        mainPicture: "assets/Iceland/Iceland1.jpeg",
        secondaryImages: ["assets/Iceland/Iceland2.jpeg","assets/Iceland/Iceland3.jpeg","assets/Iceland/Iceland4.jpeg"],
        textAboutTravel: "Reykjavík est la capitale la plus septentrionale du monde, un peu au nord du 64e parallèle. \n\n Avec ses rues si tranquilles, bordées de maisons de tôle aux toits colorés, et son lac peuplé de canards, on a du mal à s’imaginer dans une capitale ! Pourtant, Reykjavík recèle de solides richesses culturelles, surtout dans le domaine de l’art contemporain. La vie nocturne en fin de semaine vaut également le détour.",
        goodPoints: ['Son vieux quartier, ses façades colorées et son street art, l’authenticité de son port, son ambiance festive et ses bonnes adresses', 'Loin de l’image un peu froide que nous pourrions en avoir, Reykjavík, qui signifie « la baie des fumées » en islandais, est en réalité une ville haute en couleur et pleine de vie qui mérite le détour lors d’un voyage en Islande.', 'Une ou deux journées sont suffisantes pour visiter la ville, et vous l’apprécierez d’autant plus que vous n’aurez pas encore été émerveillés par tout le reste du pays !'],
        badPoints: ["Pour Reykjavik, les température maximales sont de 25,7°C et d’un minimum de -19,7°C. ","L’Islande est un endroit où se forment et circulent de nombreuses dépressions qui ensuite arrivent en Europe. Cette situation provoque donc du vent et aussi de nombreuses précipitations.", "La force du vent peut être très violente lors des grosses tempêtes qui ont lieu principalement en hiver ou en été (ex-cyclone tropical qui remonte l’atlantique). Mais le vent n’est pas que fort, car les Islandais ont 8 dénominations pour les différentes forces du vent, de logn (faible) à rok (fort)."],
        advices: ["Une visite de Skógafoss. A quelques kilomètres de Slejalandsfoss, Skogafoss laisse apparaître un parfait rideau blanc. Derrière celui-ci se cacherait, selon la légende, le trésor du viking Drasi. Des marches vous permettront de gravir les 66 mètres de cette chute d’eau pour ainsi contempler plus en hauteur ce spectacle de la nature.","Une randonnée au Snaefell pour profiter du soleil de minuit depuis la plus haute montagne \"vierge\" d'Islande.","Le Vatnajökull est la plus grande calotte glaciaire d'Islande. C'est le deuxième glacier le plus volumineux d'Europe après la calotte glaciaire de l'île Severny et le deuxième le plus vaste d'Europe après l'Austfonna. ",],
        summary:"Reykjavik est le point de départ idéal pour découvrir l’Islande ! \n Vous découvrirez une ville colorée et pleine de vie, à la fois bordée par la mer et proche de la nature. Avec ses oeuvres de street art à tous les coins de rue, ses odeurs de cuisine du bout du monde, ses ateliers d’artistes et sa population jeune et ultra-branchée, vous découvrirez une ville attachante, bien loin d’être aussi reculée que sa situation géographique laisse à penser !",
        isOnHomePage:false 
    },
    
    {
        id:2,
        country: "Palaos",
        city: "Koror",
        departureDate: "13.05.20",
        returnDate: "27.05.20",
        mainPicture: "assets/Palau/Palau1.jpeg",
        secondaryImages: ["assets/Palau/Palau2.jpeg","assets/Palau/Palau3.jpeg","assets/Palau/Palau4.jpeg"],
        textAboutTravel: "Les Palaos sont un pays d’Océanie situé en Micronésie, à l’est des Philippines, au nord de la Nouvelle-Guinée occidentale en Indonésie, à l’ouest des États fédérés de Micronésie et occupant l’extrémité occidentale de l’archipel des Carolines. Le pays est découpé en seize États répartis sur plusieurs centaines d’îles dont seules quelques-unes sont habitées. \n Palau recèle de superbes fonds marins où plongeurs et simples baigneurs peuvent approcher des requins, des tortues et même des méduses. Sur terre, les maisons de réunion traditionnelles, appelées bai, racontent les mythes et légendes de ces îles par leurs fresques. \n\n Koror est l'ancienne capitale des Palaos, un État situé en Micronésie dans l'océan Pacifique. Elle est située sur l'île de Koror, une des nombreuses îles qui forment les Palaos.\n Koror compte environ 8 740 habitants (estimation de 2013), c'est la ville la plus importante des Palaos.",
        goodPoints: ['Avec ses eaux à 29 °C toute l\'année, la république des Palaos abrite une grande variété d\'espèces sous-marines.', 'Vous n’êtes pas plongeurs ?… Ne vous inquiétez pas, la visibilité avoisinant la plupart du temps les 30 m vous pourrez profiter pleinement du spectacle même en n’étant équipé que d’un masque et d’un tuba dans les secteurs où le récif est peu profond.', 'Face à l’élévation du niveau de la mer, de plus en plus perceptible localement, les habitants ont décidé d’aller de l’avant avec un développement plus durable.'],
        badPoints: ["Les pluies sont très abondantes, et s'élèvent à environ 3 800 millimètres par an ; les mois les plus pluvieux sont ceux de l'été (juin, juillet et août). Il peut être dangereux de conduire pendant la saison des pluies.","Il y a des crocodiles marins dans certaines parties des Palaos, mais aucun panneau d'avertissement n'indique leur présence.","Les plages ne sont généralement pas surveillées par des maîtres-nageurs. Les changements de marée peuvent provoquer de puissants courants dans les nombreux lagons côtiers qui entourent les îles. Les contre-courants sont fréquents. Plusieurs noyades ont lieu chaque année."],
        advices: ["Pratiquer de la plongée sous-marine sportive à Blue Corner, où patrouillent des requins gris, des barracudas et une kyrielle de poissons de récif, ou de la plongée profonde à Peleliu Express et son dédale de tombants piquant vers les abysses.","Des touristes du monde entier choisissent d’y aller pour nager dans un lac où vivent des milliers de méduses qui en l’absence de prédateurs ont au fil des siècles perdu leurs filaments urticants et sont désormais inoffensives. Flotter au milieu de ces créatures translucides, se faufiler entre elles, les frôler constitue il est vrai une expérience unique, presque irréelle.","Un paradis marin qui fait le bonheur des plongeurs assurés d’y croiser requins, barracudas, tortues, napoléons, nautiles, bénitiers géants et une myriade de poissons tropicaux. Des raies mantas sont également fréquemment visibles près du German Channel, chenal creusé dans la barrière de corail par les Allemands pour exporter le guano d’une île, et des requins baleines passent parfois dans les parages de l’Archipel. Mammifère marin herbivore devenu extrêmement rare, le dugong est quant à lui souvent observé autour du récif de Ngederrak.",],
        summary:"Un archipel d’île située à l’Est des Philippines, Palau (aussi appelé les ‘Palaos’) est une des meilleures destination au monde pour faire de la plongée. Palau est aussi connue pour son lac où il est possible de nager au milieu de centaines de méduses. A part ça, elle offre peu d’intérêt si vous êtes en tour du monde ou avec un budget de routard.",
        isOnHomePage:false  
    },

    {
        id:3,
        country: "Danemark",
        city: "Îles Féroé",
        departureDate: "10.01.21",
        returnDate: "21.01.21",
        mainPicture: "assets/Faroe_Islands/Faroe1.jpeg",
        secondaryImages: ["assets/Faroe_Islands/Faroe2.jpeg","assets/Faroe_Islands/Faroe3.jpeg","assets/Faroe_Islands/Faroe4.jpeg"],
        textAboutTravel: "Les Îles Féroé sont un archipel autonome faisant partie du Royaume du Danemark. Elles sont composées de 18 îles rocheuses volcaniques situées entre l'Islande et la Norvège, dans l'océan Atlantique Nord. Elles communiquent via des tunnels routiers, des ferrys, des routes et des ponts. Les randonneurs et les ornithologues apprécient les montagnes, vallées et landes verdoyantes des îles, ainsi que les falaises côtières escarpées peuplées de milliers d'oiseaux de mer.",
        goodPoints: ['Dépendance du Danemark, les îles Féroé sont d’ordinaire épargnées par le tourisme de masse. Un archipel qui demeure encore presque vierge et offre à voir des paysages exceptionnels.', 'Tout ici n’est que fjords, falaises grandioses et sommets balayés par les nuages, enserrant des vallées verdoyantes colonisées par des fermes isolées, des troupeaux de moutons (70 000 recensés pour environ 50 000 habitants !) et des maisons de bois aux toits d’herbe.', 'Les Iles Féroé sont l’une des premières nations du monde pour la production d’électricité durable avec plus de 50% de l’électricité provenant de sources d’énergie renouvelables. Le but est de parvenir à s’approvisionner uniquement de sources d’énergie renouvelables avant 2030.'],
        badPoints: ["Une météo changeante jusqu’au vertige. La langue féringienne compte près d'une centaine de mots pour décrire ses caprices.","Malgré un bon réseau de transports, d’excellentes routes et un service d’hélicoptères et de ferries qui relient les îles, une visite aux Féroé reste une entreprise audacieuse. L’isolement, les paysages intimidants et la persistance de certaines traditions démodées font de l’archipel un lieu à l’écart du reste de l’Europe, dont il a d’ailleurs choisi de ne pas faire partie.", "Chaque année, entre 800 et 1000 dauphins sont tués sur cet archipel d'îles du nord de l'Europe, mais les massacres s'intensifient durant l'été. Cette tradition ancestrale et la viande de dauphin-pilotes ont permis aux Féroïens de survivre sur leur territoire enclavé."],
        advices: ["Accédez à Mykineshólmur par un pont suspendu à 35 mètres au-dessus de l'océan. Au bout de l'îlot, un phare construit en 1909 marque le point le plus occidental des Féroé.","À 30 minutes de route de la capitale Tórshavn, sur l'île de Streymoy, Vestmanna est le point de départ de l'une des plus belles excursions aux Féroé. En bateau, vous vous approchez au plus près des Vestmannabjørgini, des falaises de plus de 600 mètres qui tombent à pic dans l'océan. Leur taille spectaculaire et leur côté vierge de toute trace humaine les rendent uniques dans tout l'archipel. Le bateau se faufile dans les nombreuses grottes creusées par l'érosion. Vous découvrez un monde à part, fait de cavernes obscures et de formations rocheuses étonnantes.","Si vous recherchez la tranquillité, le village de Viðareiði répondra à votre envie. Situé tout au nord de Viðoy, l'une des îles les plus reculées des Féroé, Viðareiði est un petit havre de paix."],
        summary:"Se rendre aux îles Féroé signifie faire un voyage dans le temps, un retour à la nature sauvage à la découverte des traditions et des origines du Danemark.\n\n Intactes, inexplorées, incroyables : les Îles Féroé sont une destination toute à découvrir. Un archipel de 18 îles dans l'Océan Atlantique du Nord et le territoire autonome danois le plus au Nord. Les Îles Féroé, avec ses 50.000 habitants, sont un paradis naturel extraordinaire qui révèle des paysages à couper le souffle, de pittoresques villages de pêcheurs, d'innombrables espèces d'oiseaux et de troupeaux de moutons.",
        isOnHomePage:false 
    },

    {
        id:4,
        country: "Seychelles",
        city: "Praslin",
        departureDate: "01.03.22",
        returnDate: "12.03.22",
        mainPicture: "assets/Seychelles/Seychelles3.jpeg",
        secondaryImages: ["assets/Seychelles/Seychelles2.jpeg","assets/Seychelles/Seychelles4.jpeg","assets/Seychelles/Seychelles1.jpeg"],
        textAboutTravel: "Vaste archipel d’environ 115 îles et îlots répartis dans l’océan Indien, les Seychelles sont une destination de rêve pour les amateurs de plages de sable fin et d’eau turquoise, et à juste titre ! \n\n Ce petit pays de 93 000 habitants est connu pour ses plages bordées de magnifiques affleurements de granit, souvent photographiés et généralement associés à des vacances de rêve et à des lunes de miel, et les amateurs de plongée sous-marine pourront découvrir de magnifiques coraux et poissons",
        goodPoints: ['Le climat tropical des Seychelles est agréable toute l’année, avec des températures stables autour de 29-30 °C.', 'Les Seychelles sont comme l’on peut s’en douter une destination très facile en individuel faite pour les voyageurs débutants grâce notamment à de bonnes infrastructures (transports, hébergements), une facilité par rapport à la langue', 'La meilleure période pour visiter les Seychelles est donc l’été, de juin à septembre, même si les périodes de transition entre les saisons sont aussi très agréables pour visiter le pays, et vous permettent d’éviter l’afflux de touristes en décembre, juillet et août.'],
        badPoints: ["Les vols sont chose courante sur les plages. Évitez de vous promener sur les plages désertes et de vous rendre seul sur d’autres plages que celles des grands hôtels. Une unité composée de policiers et de policières patrouille sur les principales plages publiques. Toutefois, ne laissez pas vos sacs sans surveillance.","La plupart des plages ne sont pas surveillées par un sauveteur. Lorsque disponibles, les services de sauvetage ne respectent pas toujours les normes internationales.", "Des pirates commettent des attaques et des vols à main armée contre des navires dans les eaux côtières, en particulier dans le golfe d’Aden et l’océan Indien. Bien que le nombre de cas de piraterie ait diminué, les navigateurs doivent prendre les précautions qui s’imposent."],
        advices: ["Il faut deux heures pour parcourir cette forêt tropicale inscrite au patrimoine mondial de l’UNESCO et découvrir le célèbre coco de mer, surnommé coco-fesse, et des oiseaux rares comme le perroquet noir.","Les plages à Anse Lazio et Anse Georgette sont paradisiaques et invitent au farniente, à la baignade et au snorkeling.","L’île Curieuse ne se trouve qu’à quelques encablures de Praslin. Actuellement inhabitée, l’île abrite de nombreuses tortues terrestres géantes et aussi des tortues marines qui viennent pondre sur les plages. Les mangroves, les cocos de mer et d’autres espèces animales et végétales y sont également préservées."],
        summary:"Avec 26 km², Praslin est la plus grande île après Mahé dont elle est distante de 37km. On s’y rend par avion ou bateau. Son relief consiste en collines ondulées recouvertes d’une forêt dense. La Vallée de Mai, dont l’entrée est payante, est la principale attraction. Il faut deux heures pour parcourir cette forêt tropicale inscrite au patrimoine mondial de l’UNESCO et découvrir le célèbre coco de mer, surnommé coco-fesse, et des oiseaux rares comme le perroquet noir. Les plages à Anse Lazio et Anse Georgette sont paradisiaques et invitent au farniente, à la baignade et au snorkeling.",
        isOnHomePage:false 
    },

    {   
        id:5,
        country: "Bolivie",
        city: "Uyuni",
        departureDate: "14.02.23",
        returnDate: "31.02.23",
        mainPicture: "assets/Bolivia/Bolivia_Uyuni _SaltFlat3.jpeg",
        secondaryImages: ["assets/Bolivia/Bolivia_Uyuni_pinkLake.jpeg","assets/Bolivia/Bolivia_Uyuni _SaltFlat2.jpeg","assets/Bolivia/Bolivia_Uyuni_SaltFlat1.jpeg","assets/Bolivia/Bolivia_Uyuni _SaltFlat5.jpg","assets/Bolivia/Bolivia_Uyuni _SaltFlat6.jpg","assets/Bolivia/Bolivia_Uyuni _SaltFlat7.jpg"],
        textAboutTravel: "À 3 656 m d’altitude, la ville d’Uyuni est le point de départ d’un périple à travers des paysages parmi les plus extraordinaires d’Amérique du Sud : le Salar d’Uyuni et la région du Sud-Lípez. \n Uyuni fut jadis un important nœud ferroviaire. Aujourd'hui, on y prend le train vers Oruro. \n\n La population est majoritairement indienne et il règne une atmosphère de far west, entre cimetière de locomotive et rue principale avec ses bars à routards.",
        goodPoints: ['Des paysages époustouflants : îles aux cactus géants, points de vue sans perspective, sol craquelé par la sécheresse et par le sel…','Un ciel imperturbablement bleu (comme tous les jours en Bolivie!)','Au-delà de la plaine de sel: les lagunes, les sources d’eau chaude….'],
        badPoints: ["Les temps de trajets s’avèrent relativement longs en raison des longues distances à traverser.","Les routes sont difficilement praticables et les conditions climatiques rudes (avec des changements de météo rapides)", "Les températures du désert de Salar d’Uyuni sont assez extrêmes. Il peut faire très chaud en journée et très froid durant la nuit (notamment de juin à août)."],
        advices: ["Randonner sur l’île de corail Incahuasi: plantée en plein milieu du Salar, cette île (aussi appelée « Maison de l’Inca »), est jonchée de cactus géants dont certains atteignent même une douzaine de mètres. En gravissant le sommet de sa colline, vous pourrez profiter d’une  vue  imprenable sur le désert de Salar d'Uyuni !","Admirer le coucher de soleil depuis le désert: à vous les couleurs majestueuses qui se reflètent sous vos pieds, notamment lorsque le désert est couvert d’eau et qu’il s’apparente alors à un véritable miroir !","Dormir dans un hôtel de sel: si vous souhaitez agrémenter votre excursion d’une expérience insolite, on ne peut que vous recommander de dormir dans l’un des hôtels de sel du désert. Une fois la nuit tombée, vous serez subjugué par l’atmosphère des lieux…"],
        summary:"Ce lieu, aux paysages indescriptibles, nous invite à entrer en contact avec cette immensité infinie entourée de montagnes et de volcans atteignant les 5 000 mètres.\n Le volcan Tunupa ne quittera pas votre vue lors de votre visite.  Pour ceux qui veulent profiter du calme et du silence, qui souhaitent profiter de la nature et se connecter à elle, c’est un endroit où l’on peut se retrouver avec soi comme le Lac Titicaca.\n On peut peut-être le comparer aux régions polaires où le bleu et le blanc se fondent, et où l’on peut voir des reflets dans l’eau.",
        isOnHomePage:true 
    }

]