import { GroupItems } from "../models/group.model";

export const GlobalDB = {
    ourCoreServices: [
        new GroupItems("Haldi", "A Splash of Sunshine! The vibrant Haldi ceremony is where the fun begins", "assets/haldi.jpg", "#"),
        new GroupItems("Menhdi", "Let the Colors Bloom! Join us for a vibrant evening of music, dancing, and intricate henna designs.", "assets/menhdi.jpg", "#"),
        new GroupItems("Birthday", "A Special Day! We raise a toast to another incredible year! Come share in the joy", "assets/birthday.jpg", "#")
    ],
    imageGallery: [
        new GroupItems("Stage", "Reflect your unique style. We design a bespoke wedding stage that beautifully highlights the ceremony and celebrates your union.", "assets/w_stage.jpg", "/stage"),
        new GroupItems("Home", "Start your forever surrounded by beauty. Curate a newlywed home filled with cherished memories, comfort, and elegant style.", "assets/w_home.jpg", "/house"),
        new GroupItems("Festival", "Embrace the festive spirit. Adorn your home with traditional decor to create a vibrant, welcoming atmosphere for family and friends.", "assets/w_fest.jpg", "/festival"),
        new GroupItems("Balloon", "Reflect your unique style. We design a bespoke wedding stage that beautifully highlights the ceremony and celebrates your union.", "assets/w_balloon.jpg", "/balloon"),
        new GroupItems("Entry", "Reflect your unique style. We design a bespoke wedding stage that beautifully highlights the ceremony and celebrates your union.", "assets/w_entry.jpg", "/entry"),
        new GroupItems("Anniversary", "Reflect your unique style. We design a bespoke wedding stage that beautifully highlights the ceremony and celebrates your union.", "assets/w_anniversary.jpg", "/anniversary")
    ],

    circleGallery: [
        new GroupItems("Wedding", "Reflect your unique style. We design a bespoke wedding stage that beautifully highlights the ceremony and celebrates your union.", "assets/w_wedding.jpg", "/wedding"),
        new GroupItems("Festival", "Embrace the festive spirit. Adorn your home with traditional decor to create a vibrant, welcoming atmosphere for family and friends.", "assets/w_fest.jpg", "/festival"),
        new GroupItems("School", "Start your forever surrounded by beauty. Curate a newlywed home filled with cherished memories, comfort, and elegant style.", "assets/w_school.jpg", "/school")
    ],

    stats: [
        { number: '500+', label: 'Events Decorated', icon: 'fa-solid fa-party-balloons', color: 'linear-gradient(135deg, #fdeff9, #ec38bc, #7303c0)' },
        { number: '300+', label: 'Happy Clients', icon: 'fa-solid fa-face-smile-beam', color: 'linear-gradient(135deg, #f6f9d4, #e6f0a3)' },
        { number: '25+', label: 'Successful Events', icon: 'fa-solid fa-calendar-check', color: 'linear-gradient(135deg, #f9f9f9, #d7e1ec)' },
        { number: '5+', label: 'Years of Experience', icon: 'fa-solid fa-award', color: 'linear-gradient(135deg, #fdfbfb, #ebedee)' }
    ]
}
