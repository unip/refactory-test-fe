const moment = require('moment');
const data = [
  {
    "id": 323,
    "username": "rinood30",
    "profile": {
      "full_name": "Shabrina Fauzan",
      "birthday": "1988-10-30",
      "phones": [
        "08133473821",
        "082539163912"
      ]
    },
    "articles:": [
      {
        "id": 3,
        "title": "Tips Berbagi Makanan",
        "published_at": "2019-01-03T16:00:00"
      },
      {
        "id": 7,
        "title": "Cara Membakar Ikan",
        "published_at": "2019-01-07T14:00:00"
      }
    ]
  },
  {
    "id": 201,
    "username": "norisa",
    "profile": {
      "full_name": "Noor Annisa",
      "birthday": "1986-08-14",
      "phones": []
    },
    "articles:": [
      {
        "id": 82,
        "title": "Cara Membuat Kue Kering",
        "published_at": "2019-10-08T11:00:00"
      },
      {
        "id": 91,
        "title": "Cara Membuat Brownies",
        "published_at": "2019-11-11T13:00:00"
      },
      {
        "id": 31,
        "title": "Cara Membuat Brownies",
        "published_at": "2019-11-11T13:00:00"
      }
    ]
  },
  {
    "id": 42,
    "username": "karina",
    "profile": {
      "full_name": "Karina Triandini",
      "birthday": "1986-04-14",
      "phones": [
        "06133929341"
      ]
    },
    "articles:": []
  },
  {
    "id": 201,
    "username": "icha",
    "profile": {
      "full_name": "Annisa Rachmawaty",
      "birthday": "1987-12-30",
      "phones": []
    },
    "articles:": [
      {
        "id": 39,
        "title": "Tips Berbelanja Bulan Tua",
        "published_at": "2019-04-06T07:00:00"
      },
      {
        "id": 43,
        "title": "Cara Memilih Permainan di Steam",
        "published_at": "2019-06-11T05:00:00"
      },
      {
        "id": 58,
        "title": "Cara Membuat Brownies",
        "published_at": "2019-09-12T04:00:00"
      }
    ]
  }
];

const articles = data.reduce((sum, x) => sum.concat(x['articles:']), []);

const userNoPhoneNumber = data.filter(x => x.profile.phones.length === 0).map(x => x.username);
const userHaveArticle = data.filter(x => x["articles:"].length !== 0).map(x => x.username);
const userHaveAnnisName = data.filter(x => x.profile.full_name.toLowerCase().includes('annis')).map(x => x.username);
const userHaveArticleIn2020 = data.filter(x => x['articles:'].some(x => moment(x.published_at).format('YYYY') === '2020')).map(x => x.username);
const userBornIn1986 = data.filter(x => moment(x.profile.birthday).format('YYYY') === '1986').map(x => x.username);
const articlesContainTips = articles.filter(x => x.title.toLowerCase().includes('tips'));
const articlesBeforeAug2019 = articles.filter(x => moment(x.published_at).isBefore('2019-08-01'));

console.log(`1. Users who doesn't have any phone numbers:`, userNoPhoneNumber);
console.log(`2. Users who have articles:`, userHaveArticle);
console.log(`3. Users who have "annis" on their name:`, userHaveAnnisName);
console.log(`4. Users who have articles on year 2020:`, userHaveArticleIn2020);
console.log(`5. Users who are born on 1986:`, userBornIn1986);
console.log(`6. Articles that contain "tips" on the title:`, articlesContainTips);
console.log(`7. Articles published before August 2019:`, articlesBeforeAug2019);
