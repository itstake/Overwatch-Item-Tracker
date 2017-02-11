const EVENTS = {
  SUMMER16: 'SUMMER_GAMES_2016',
  HALLOWEEN16: 'HALLOWEEN_2016',
  CHRISTMAS16: 'WINTER_WONDERLAND_2016',
  ROOSTER17: 'YEAR_OF_THE_ROOSTER_2017'
}

const EVENTNAMES = {
  [EVENTS.SUMMER16]: '2016 하계 스포츠 대회',
  [EVENTS.HALLOWEEN16]: '2016 공포의 할로윈',
  [EVENTS.CHRISTMAS16]: '2016 환상의 겨울나라',
  [EVENTS.ROOSTER17]: '2017 붉은 닭의 해'
}

const EVENTTIMES = {
  [EVENTS.SUMMER16]: {
    "start": "1470164400000",
    "end": "1471928400000"
  },
  [EVENTS.HALLOWEEN16]: {
    "start": "1476208800000",
    "end": "1478059200000"
  },
  [EVENTS.CHRISTMAS16]: {
    "start": "1481652000000",
    "end": "1483416000000"
  },
  [EVENTS.ROOSTER17]: {
    "start": "1485280800000",
    "end": "1487044800000"
  }
}

module.exports = { EVENTS, EVENTNAMES, EVENTTIMES }
