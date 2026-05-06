// ========== SISÄLLÖT ==========
const calendarEvents = {
    "VK21": {
        title: "Suomenlinnan piknik",
        location: "Suomenlinna, Helsinki",
        recommender: "Toni suosittelee",
        tip: "Ilmaista ja ihanaa! Pakkaa mukaan peitto ja eväät. Lautta lähtee Kaivopuistosta. Varaa aikaa saaren kiertämiseen!",
        mapUrl: "https://www.google.com/maps/search/Suomenlinna+Helsinki",
        image: "img/suomenlinna.jpg",
        family: true,
        tiko: true
    },
    "VK22": {
        title: "Seurasaaren ulkoilmamuseo",
        location: "Seurasaari, Helsinki",
        recommender: "Toni suosittelee",
        tip: "Ulkomuseo vanhoine rakennuksineen. Kesällä myös perinteisiä käsityönäytöksiä!",
        mapUrl: "https://www.google.com/maps/search/Seurasaari+Helsinki",
        image: "img/seurasaari.jpg",
        family: true,
        tiko: false
    },
    "VK23": {
        title: "Hietaniemen uimaranta",
        location: "Hietaniemi, Helsinki",
        recommender: "",
        tip: "Klassikko! Hiekkaranta ja lähellä vähän isompi leikkipuisto. Sopii koko perheelle.",
        mapUrl: "https://www.google.com/maps/search/Hietaniemi+uimaranta+Helsinki",
        image: "img/hietaniemi.jpg",
        family: true,
        tiko: false
    },
    "VK24": {
        title: "Kauppatori Helsinki",
        location: "Kauppatori, Helsinki",
        recommender: "",
        tip: "Perinteinen kauppatori keskustassa! Tuoreita marjoja, kalaa ja käsitöitä. Hyvä meininki ja historiallinen miljöö!",
        mapUrl: "https://www.google.com/maps/search/Kauppatori+Helsinki",
        image: "img/kauppatori.jpg",
        family: true,
        tiko: false
    },
    "VK25": {
        title: "Linnanmäki",
        location: "Linnanmäki, Helsinki",
        recommender: "Toni suosittelee",
        tip: "Huvipuisto auki kesällä! Ota vauhdikkaat kyydit ja vieraile näköalatornissa. Perheelle myös Lastenleffa!",
        mapUrl: "https://www.google.com/maps/search/Linnanmäki+Helsinki",
        image: "img/linnanmäki.jpg",
        family: true,
        tiko: false
    },
    "VK26": {
        title: "Baarikierros Helsingissä",
        location: "Kallio, Helsinki",
        recommender: "",
        tip: "Kallion parhaat baarit yhden illan aikana! Aloita vaikka Karhumäestä.",
        mapUrl: "https://www.google.com/maps/search/Kallio+Helsinki",
        image: "img/kauppatori.jpg",
        family: false,
        tiko: true
    },
    "VK27": {
        title: "Juhannussalko",
        location: "Kaivopuisto, Helsinki",
        recommender: "",
        tip: "Perinteinen juhannussalko Kaivopuistossa! Tule katsomaan kun salko nostetaan.",
        mapUrl: "https://www.google.com/maps/search/Kaivopuisto+Helsinki",
        image: "img/juhannussalko.jpg",
        family: true,
        tiko: false
    },
    "VK28": {
        title: "Allas Sea Pool",
        location: "Allas Sea Pool, Helsinki",
        recommender: "",
        tip: "Uimahalli merivedellä keskustassa! Lämmin allas + merivesialtaat. Auki kesälläkin.",
        mapUrl: "https://www.google.com/maps/search/Allas+Sea+Pool+Helsinki",
        image: "img/allasseapool.jpg",
        family: true,
        tiko: false
    },
    "VK29": {
        title: "Kuninkaansaaren kierros",
        location: "Kuninkaansaari, Helsinki",
        recommender: "",
        tip: "Kaunis kävelyreitti saaressa! Luonto ja rauha keskellä kaupunkia.",
        mapUrl: "https://www.google.com/maps/search/Kuninkaansaari+Helsinki",
        image: "img/vallisaarikuninkaansaari.jpg",
        family: true,
        tiko: false
    },
    "VK30": {
        title: "Amos Rex Art Museum",
        location: "Mannerheimintie, Helsinki",
        recommender: "",
        tip: "Modernin taiteen näyttely! Uniikki arkkitehtuuri ja mielenkiintoisia teoksia.",
        mapUrl: "https://www.google.com/maps/search/Amos+Rex+Helsinki",
        image: "img/jkmm-architects-amos-rex-museum-mika-huisman2-scaled.jpg",
        family: false,
        tiko: true
    },
    "VK31": {
        title: "Korkeasaaren eläintarha",
        location: "Korkeasaari, Helsinki",
        recommender: "",
        tip: "Suomen suurin eläintarha! Täällä on kaikki leijonista apinoihin. Erinomainen perhepäivä!",
        mapUrl: "https://www.google.com/maps/search/Korkeasaari+Helsinki",
        image: "img/korkeasaari.jpg",
        family: true,
        tiko: false
    },
    "VK32": {
        title: "Kaisaniemen kasvitieteellinen puutarha",
        location: "Kaisaniemi, Helsinki",
        recommender: "",
        tip: "Upea kasvitieteellinen puutarha keskustan lähellä! Eksotiikkaa ja kauneutta.",
        mapUrl: "https://www.google.com/maps/search/Kaisaniemen+kasvitieteellinen+puutarha+Helsinki",
        image: "img/kaisaniemenkasvitieteellinenpuutarha.jpg",
        family: true,
        tiko: false
    },
    "VK33": {
        title: "Kesän lopetus Liberty or Death -baarissa",
        location: "Liberty or Death, Helsinki",
        recommender: "Toni suosittelee",
        tip: "Hyvää tyyliä ja tunnelmaa! Lopetetaan kesä kunnolla tässä historiallisessa baarissa.",
        mapUrl: "https://www.google.com/maps/search/Liberty+or+Death+Helsinki",
        image: "img/liberty_or_death32.jpg",
        family: false,
        tiko: true
    }
};

const weeks = [
    { week: "VK21", date: "18.-24.5" },
    { week: "VK22", date: "25.5-31.5" },
    { week: "VK23", date: "1.6-7.6" },
    { week: "VK24", date: "8.6-14.6" },
    { week: "VK25", date: "15.6-21.6" },
    { week: "VK26", date: "22.6-28.6" },
    { week: "VK27", date: "29.6-5.7" },
    { week: "VK28", date: "6.7-12.7" },
    { week: "VK29", date: "13.7-19.7" },
    { week: "VK30", date: "20.7-26.7" },
    { week: "VK31", date: "27.7-2.8" },
    { week: "VK32", date: "3.8-9.8" },
    { week: "VK33", date: "10.8-16.8" }
];

// ========== ÄÄNI ==========
let soundEnabled = true;
const openSound = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2teleQAAAADIrXoAAA==');

function toggleSound() {
    soundEnabled = !soundEnabled;
    document.querySelector('.audio-btn').textContent = soundEnabled ? '🔊' : '🔇';
}

function playOpenSound() {
    if (soundEnabled) {
        try {
            openSound.currentTime = 0;
            openSound.play().catch(() => {});
        } catch(e) {}
    }
}

// ========== RENDERÖINTI ==========
function createDoor(weekData) {
    const event = calendarEvents[weekData.week];
    const weekNum = parseInt(weekData.week.replace("VK", ""));
    // Ensimmäiset 2 viikkoa (VK21, VK22) auki, loput lukossa
    const isLocked = weekNum > 22;
    const num = weekNum;

    // Avautumispäivämäärä lukituille oville
    let unlockDate = '';
    if (isLocked) {
        const unlockDates = {
            23: 'aukaisee 1.6',
            24: 'aukaisee 8.6',
            25: 'aukaisee 15.6',
            26: 'aukaisee 22.6',
            27: 'aukaisee 29.6',
            28: 'aukaisee 6.7',
            29: 'aukaisee 13.7',
            30: 'aukaisee 20.7',
            31: 'aukaisee 27.7',
            32: 'aukaisee 3.8',
            33: 'aukaisee 10.8'
        };
        unlockDate = unlockDates[num] || '';
    }

    let tags = '';
    if (event && event.family) tags += '<span class="tag family">🌳</span>';
    if (event && event.tiko) tags += '<span class="tag tiko">🎓</span>';

    return `
        <div class="door ${isLocked ? 'locked' : ''}"
             data-week="${weekData.week}"
             onclick="handleDoorClick(this)">
            ${tags}
            <div class="door-number">${num}</div>
            <div class="door-week">${weekData.week}</div>
            <div class="door-date">${weekData.date}</div>
        </div>
    `;
}

function handleDoorClick(el) {
    const week = el.dataset.week;
    const weekNum = parseInt(week.replace("VK", ""));

    // VK23 ja myöhemmät ovat lukossa
    if (weekNum > 22) {
        console.log("Lukossa: " + week);
        return;
    }

    const event = calendarEvents[week];

    if (!event || !event.title) {
        alert("Ei vielä sisältöä tälle viikolle!");
        return;
    }

    // Avaa modal
    openModal(event, week);
    playOpenSound();
}

function openModal(event, week) {
    document.getElementById('modalWeek').textContent = week;
    document.getElementById('modalTitle').textContent = event.title;
    document.getElementById('modalLocation').textContent = event.location;
    document.getElementById('modalRecommender').textContent = event.recommender || 'Suosittelija';
    document.getElementById('modalTip').textContent = event.tip;
    document.getElementById('modalMapLink').href = event.mapUrl || '#';

    // Aseta aiheeseen liittyvä kuva modalin yläosaan
    document.getElementById('modalImage').textContent = '';
    document.getElementById('modalImage').style.backgroundImage = `url('${event.image}')`;

    // Piilota suosittelija-osa jos tyhjä
    document.getElementById('modalRecommenderSection').style.display = event.recommender ? 'block' : 'none';

    document.getElementById('modalOverlay').classList.add('active');
}

function closeModal(e) {
    if (e && e.target !== e.currentTarget) return;
    document.getElementById('modalOverlay').classList.remove('active');
}

// Sulje ESC-näppäimellä
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Alusta kalenteri
document.getElementById("calendar").innerHTML = weeks.map(createDoor).join("");
