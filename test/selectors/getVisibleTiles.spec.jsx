import getVisibleTiles from '../../src/selectors/getVisibleTiles';

describe("testing selectors ", () => {

    const data = [
        {
            "id": 5,
            "imgSrc": "/data/images/tata_logo.jpg",
            "description": "Tata Group is an Indian multinational conglomerate holding company headquartered in Mumbai, Maharashtra, India. It was founded in 1868 by Jamsetji Tata and gained international recognition after purchasing several global companies. It is India's largest conglomerate.",
            "name": "TATA",
            "shareTrend": false,
            "price": "118.59"
        },
        {
            "id": 8,
            "imgSrc": "/data/images/cipla_logo.jpg",
            "description": "pla Limited is an Indian multinational pharmaceutical and biotechnology company, headquartered in Mumbai, India.[3][4][5] Belgium, Surrey in the European Union, Miami, Florida, in the United States and Cape Town in South Africa; with manufacturing facilities in Goa (eleven), Bengaluru (one), Baddi (one), Indore (one), Kurkumbh (one), Patalganga (one), and Sikkim (one), along with field stations in Delhi, Pune, and Hyderabad[6] and Durban, South Africa.",
            "name": "CIPLA",
            "shareTrend": false,
            "price": "99.2"
        },
        {
            "id": 2,
            "imgSrc": "/data/images/barc_logo.png",
            "description": " Bhabha Atomi Research Centre (BARC) is India's premier nuclear research facility based in Tarapur and Trombay, Mumbai, Maharashtra. BARC is a multi-disciplinary research centre with extensive infrastructure for advanced research and development covering the entire spectrum of nuclear science, engineering and related areas.",
            "name": "BARC",
            "shareTrend": true,
            "price": "198.78"
        },
        {
            "id": 4,
            "imgSrc": "/data/images/rolex_logo.jpg",
            "description": "Rolex SA (/ˈroʊlɛks/) is a Swiss luxury watchmaker. The company and its subsidiary Montres Tudor SA design, manufacture, distribute and service wristwatches sold under the Rolex and Tudor brands. Founded by Hans Wilsdorf and Alfred Davis in London, England in 1905 as Wilsdorf and Davis, Rolex moved its base of operations to Geneva, Switzerland in 1919.",
            "name": "ROLEX",
            "shareTrend": true,
            "price": "99.35"
        },
        {
            "id": 3,
            "imgSrc": "/data/images/flipkart_logo.png",
            "description": "Flipkart is an electronic commerce company headquartered in Bangalore, Karnataka. It was founded in October 2007 by Sachin Bansal and Binny Bansal (no relation).[4] Flipkart has launched its own product range under the name 'DigiFlip' with products including tablets, USBs, and laptop bags.[5][6][7] As of April 2017, the company was valued at $11.6 billion.",
            "name": "FLIPKART",
            "shareTrend": false,
            "price": "54.27"
        },
        {
            "id": 1,
            "imgSrc": "/data/images/ongc_logo.png",
            "description": "Oil and Natural Gas Corporation Limited (ONGC) is an Indian multinational oil and gas company headquartered in Dehradun, Uttarakhand, India. It is a Public Sector Undertaking (PSU) of the Government of India, under the administrative control of the Ministry of Petroleum and Natural Gas. It is India's largest oil and gas exploration and production company. It produces around 77% of India's crude oil (equivalent to around 30% of the country's total demand) and around 62% of its natural gas",
            "name": "ONGC",
            "shareTrend": true,
            "price": "161.02"
        },
        {
            "id": 7,
            "imgSrc": "/data/images/airtel_logo.png",
            "description": "Bharti Airtel Limited is an Indian global telecommunications services company based in New Delhi, India. It operates in 18 countries across South Asia and Africa. Airtel provides GSM, 3G and 4G LTE mobile services, fixed line broadband and voice services depending upon the country of operation.",
            "name": "AIRTEL",
            "shareTrend": false,
            "price": "321.56"
        },
        {
            "id": 6,
            "imgSrc": "/data/images/reliance_logo.jpg",
            "description": "Reliance Industries Limited (RIL) is an Indian conglomerate holding company headquartered in Mumbai, Maharashtra, India. Reliance owns businesses across India engaged in energy, petrochemicals, textiles, natural resources, retail, and telecommunications.",
            "name": "RELIANCE",
            "shareTrend": true,
            "price": "63.54"
        }
    ];

    const resultWithfl = [{
        "id": 3,
        "imgSrc": "/data/images/flipkart_logo.png",
        "description": "Flipkart is an electronic commerce company headquartered in Bangalore, Karnataka. It was founded in October 2007 by Sachin Bansal and Binny Bansal (no relation).[4] Flipkart has launched its own product range under the name 'DigiFlip' with products including tablets, USBs, and laptop bags.[5][6][7] As of April 2017, the company was valued at $11.6 billion.",
        "name": "FLIPKART",
        "shareTrend": false,
        "price": "54.27"
    }];

    it("testing getVisibleTiles selector with blank data", () => {
        let tiles = getVisibleTiles(data, '');
        expect(tiles).toEqual(data);
    });

    it("testing getVisibleTiles selector", () => {
        let tiles = getVisibleTiles(data, 'fl');
        expect(tiles).toEqual(resultWithfl);
    });

     it("testing getVisibleTiles selector", () => {
        let tiles = getVisibleTiles(data, 'fl');
        // for the same input , the selector should not recompute and hence the total number of computations should be 2 instead of 3.
        expect(getVisibleTiles.recomputations()).toEqual(2);
    });

});