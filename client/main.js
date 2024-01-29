const complimentBtn = document.querySelector("#complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4004/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.querySelector('#fortuneButton')

const getFortune = () => {
    axios.get("http://localhost:4004/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

const quoteBtn = document.querySelector('#quoteButton')

const getQuote = () => {
    axios.get("http://localhost:4004/api/quote/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

quoteBtn.addEventListener('click', getQuote)

const horoscopeBtn = document.querySelector('#zodiacForm')

const getHoroscope = (evt) => {
    evt.preventDefault();
    axios.get("http://localhost:4004/api/horoscope/")
    .then(res => {
        console.log(res);
        const data = res.data;
        alert(data);
    
    });
}

horoscopeBtn.addEventListener('submit', getHoroscope);

const selfCareBtn = document.querySelector('#careButton');

const getSelfCare = () => {
    axios.get("http://localhost:4004/api/selfcare/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

selfCareBtn.addEventListener('click', getSelfCare)

