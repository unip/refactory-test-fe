const moment = require('moment');
const data = [
  {
    "inventory_id": 9382,
    "name": "Brown Chair",
    "type": "furniture",
    "tags": [
      "chair",
      "furniture",
      "brown"
    ],
    "purchased_at": 1579190471,
    "placement": {
      "room_id": 3,
      "name": "Meeting Room"
    }
  },
  {
    "inventory_id": 9380,
    "name": "Big Desk",
    "type": "furniture",
    "tags": [
      "desk",
      "furniture",
      "brown"
    ],
    "purchased_at": 1579190642,
    "placement": {
      "room_id": 3,
      "name": "Meeting Room"
    }
  },
  {
    "inventory_id": 2932,
    "name": "LG Monitor 50 inch",
    "type": "electronic",
    "tags": [
      "monitor"
    ],
    "purchased_at": 1579017842,
    "placement": {
      "room_id": 3,
      "name": "Lavender"
    }
  },
  {
    "inventory_id": 232,
    "name": "Sharp Pendingin Ruangan 2PK",
    "type": "electronic",
    "tags": [
      "ac"
    ],
    "purchased_at": 1578931442,
    "placement": {
      "room_id": 5,
      "name": "Dhanapala"
    }
  },
  {
    "inventory_id": 9382,
    "name": "Alat Makan",
    "type": "tableware",
    "tags": [
      "spoon",
      "fork",
      "tableware"
    ],
    "purchased_at": 1578672242,
    "placement": {
      "room_id": 10,
      "name": "Rajawali"
    }
  }
];

const itemInMeetingRoom = data.filter(x => x.placement.name === 'Meeting Room').map(x => x.name);
const electronicDevices = data.filter(x => x.type === 'electronic').map(x => x.name);
const furnitures = data.filter(x => x.type === 'furniture').map(x => x.name);
const itemsPurchasedAt20200116 = data.filter(x => moment.utc(x.purchased_at).format('YYYY-MM-DD') === '2020-01-16').map(x => x.name);
const itemsWithBrownColor = data.filter(x => x.tags.some(x => x === 'brown')).map(x => x.name);

console.log('1. Find items in Meeting Room:', itemInMeetingRoom);
console.log('2. Find all electronic devices:', electronicDevices);
console.log('3. Find all furnitures:', furnitures);
console.log('4. Find all items was purchased at 16 Januari 2020:', itemsPurchasedAt20200116);
console.log('5. Find all items with brown color:', itemsWithBrownColor);
