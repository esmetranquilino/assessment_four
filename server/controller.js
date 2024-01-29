module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
       const fortunes = ['All your hard work will soon pay off!', 'A lifetime of happiness lies ahead of you.','All will go well with Assessment Four!'];

       let randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

       res.status(200).send(randomFortune);

    },

    getQuote: (req, res ) => {
        const quotes = ['Believe you can and you are halfway there. - Theodore Roosevelt', 'It always seems impossible until it is done. - Nelson Mandela', 'Failure is the condiment that gives success its flavor. - Truman Capote'];
        
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        res.status(200).send(randomQuote);

    },

    getHoroscope: (req, res) => {
        const horoscopes = [
            'This is an optimal time for exploring your interests!',
            'This is a great time to start thinking outside the box and taking bold leaps of faith!',
            'Time to reset! Create routines that make your life easier. Make sure to schedule some fun time for yourself!',
            'It is time to start expressing yourself freely! Engage in activities that encourage you to think bigger',
            'Focus your energy on improving your wellness and good vibes will follow!',
            'It is essential that you live in an environment that gives you room to grow and evolve.',
            'Pick up some new books, or tune into a podcast that helps to educate you on the new topic that is grabbed your attention',
            'It is important that you keep an open mind regarding how you invest your money.',
            'You will be able to communicate your thoughts, opinions, and ideas with a clear mind.',
            'You feel your freest when in solitude!',
            'It is important that you surround yourself with people who inspire and enlighten you!',
            'You will gain clarity around your plans and aspirations for your career and professional pursuits.'
        ]
        
        let randomHoroscope = horoscopes[Math.floor(Math.random() * horoscopes.length)];

        res.status(200).send(randomHoroscope);

    },

    getSelfCare: (req, res) => {
        const tips = ['Sleep: Try to create a sleeping schedule to ensure you get enough sleep.', 'Exercise: 30-minutes of walking can help improve mood and health.', 'Nutrition: A balanced diet and water can improve energy levels.']
        
        let randomTips = tips[Math.floor(Math.random() * tips.length)];

        res.status(200).send(randomTips);
    }

}