OWI.factory('Data', function() {
  var items = `{"skinsLegendary":{},"skinsEpic":{},"emotes":{},"intros":{},"sprays":{},"voicelines":{},"poses":{},"icons":{}}`
  return {
    checked: {
      SUMMER_GAMES_2016: JSON.parse(items),
      HALLOWEEN_2016: JSON.parse(items),
      WINTER_WONDERLAND_2016: JSON.parse(items),
      YEAR_OF_THE_ROOSTER_2017: JSON.parse(items)
    },
    prices: {
      'common': 75,
      'rare': 225,
      'epic': 750,
      'legendary': 3000
    },
    updates: {
               "SUMMER_GAMES_2016": {
                 "name": "2016 하계 스포츠 대회",
                 "id": "SUMMER_GAMES_2016",
                 "dates": {
                   "start": "1470164400000",
                   "end": "1471928400000"
                 },
                 "items": {
                   "icons": [
                     {
                       "name": "양궁",
                       "id": "hanzo-archery",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/hanzo-archery.png"
                     },
                     {
                       "name": "호주",
                       "id": "australia",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/australia.png"
                     },
                     {
                       "name": "BMX",
                       "id": "reaper-bmx",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/reaper-bmx.png"
                     },
                     {
                       "name": "배드민턴",
                       "id": "mercy-badminton",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/mercy-badminton.png"
                     },
                     {
                       "name": "농구",
                       "id": "pharah-basketball",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/pharah-basketball.png"
                     },
                     {
                       "name": "복싱",
                       "id": "bastion-boxing",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/bastion-boxing.png"
                     },
                     {
                       "name": "브라질",
                       "id": "brazil",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/brazil.png"
                     },
                     {
                       "name": "중국",
                       "id": "china",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/china.png"
                     },
                     {
                       "name": "사이클",
                       "id": "dva-cycling",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/dva-cycling.png"
                     },
                     {
                       "name": "다이빙",
                       "id": "roadhog-diving",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/roadhog-diving.png"
                     },
                     {
                       "name": "이집트",
                       "id": "egypt",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/egypt.png"
                     },
                     {
                       "name": "승마",
                       "id": "mccree-equestrian",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/mccree-equestrian.png"
                     },
                     {
                       "name": "펜싱",
                       "id": "genji-fencing",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/genji-fencing.png"
                     },
                     {
                       "name": "축구",
                       "id": "lucio-football",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/lucio-football.png"
                     },
                     {
                       "name": "프랑스",
                       "id": "france",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/france.png"
                     },
                     {
                       "name": "독일",
                       "id": "germany",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/germany.png"
                     },
                     {
                       "name": "골프",
                       "id": "soldier-76-golf",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/soldier-76-golf.png"
                     },
                     {
                       "name": "그리스",
                       "id": "greece",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/greece.png"
                     },
                     {
                       "name": "체조",
                       "id": "widowmaker-gymnastics",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/widowmaker-gymnastics.png"
                     },
                     {
                       "name": "일본",
                       "id": "japan",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/japan.png"
                     },
                     {
                       "name": "멕시코",
                       "id": "mexico",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/mexico.png"
                     },
                     {
                       "name": "네팔",
                       "id": "nepal",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/nepal.png"
                     },
                     {
                       "name": "눔바니",
                       "id": "numbani",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/numbani.png"
                     },
                     {
                       "name": "리듬체조",
                       "id": "symmetra-rhythmic-gymnastics",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/symmetra-rhythmic-gymnastics.png"
                     },
                     {
                       "name": "러시아",
                       "id": "russia",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/russia.png"
                     },
                     {
                       "name": "사격",
                       "id": "ana-shooting",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/ana-shooting.png"
                     },
                     {
                       "name": "대한민국",
                       "id": "south-korea",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/south-korea.png"
                     },
                     {
                       "name": "2016 하계 스포츠 대회",
                       "id": "summer-games",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/summer-games.png"
                     },
                     {
                       "name": "스웨덴",
                       "id": "sweden",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/sweden.png"
                     },
                     {
                       "name": "스위스",
                       "id": "switzerland",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/switzerland.png"
                     },
                     {
                       "name": "탁구",
                       "id": "mei-table-tennis",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/mei-table-tennis.png"
                     },
                     {
                       "name": "태권도",
                       "id": "zenyatta-taekwondo",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/zenyatta-taekwondo.png"
                     },
                     {
                       "name": "테니스",
                       "id": "junkrat-tennis",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/junkrat-tennis.png"
                     },
                     {
                       "name": "육상",
                       "id": "tracer-track",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/tracer-track.png"
                     },
                     {
                       "name": "영국",
                       "id": "united-kingdom",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/united-kingdom.png"
                     },
                     {
                       "name": "미국",
                       "id": "united-states",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/united-states.png"
                     },
                     {
                       "name": "배구",
                       "id": "winston-volleyball",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/winston-volleyball.png"
                     },
                     {
                       "name": "수구",
                       "id": "torbjorn-water-polo",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/torbjorn-water-polo.png"
                     },
                     {
                       "name": "역도",
                       "id": "zarya-weightlifting",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/zarya-weightlifting.png"
                     },
                     {
                       "name": "레슬링",
                       "id": "reinhardt-wrestling",
                       "img": "./resources/updates/SUMMER_GAMES_2016/icons/reinhardt-wrestling.png"
                     }
                   ],
                   "sprays": [
                     {
                       "hero": "아나",
                       "name": "사격",
                       "id": "ana-shooting",
                       "quality": "common",
                       "img": "./resources/updates/SUMMER_GAMES_2016/sprays/ana-shooting.png"
                     },
                     {
                       "hero": "바스티온",
                       "name": "복싱",
                       "id": "bastion-boxing",
                       "quality": "common",
                       "img": "./resources/updates/SUMMER_GAMES_2016/sprays/bastion-boxing.png"
                     },
                     {
                       "hero": "D.Va",
                       "name": "사이클",
                       "id": "dva-cycling",
                       "quality": "common",
                       "img": "./resources/updates/SUMMER_GAMES_2016/sprays/dva-cycling.png"
                     },
                     {
                       "hero": "겐지",
                       "name": "펜싱",
                       "id": "genji-fencing",
                       "quality": "common",
                       "img": "./resources/updates/SUMMER_GAMES_2016/sprays/genji-fencing.png"
                     },
                     {
                       "hero": "한조",
                       "name": "양궁",
                       "id": "hanzo-archery",
                       "quality": "common",
                       "img": "./resources/updates/SUMMER_GAMES_2016/sprays/hanzo-archery.png"
                     },
                     {
                       "hero": "정크랫",
                       "name": "테니스",
                       "id": "junkrat-tennis",
                       "quality": "common",
                       "img": "./resources/updates/SUMMER_GAMES_2016/sprays/junkrat-tennis.png"
                     },
                     {
                       "hero": "루시우",
                       "name": "축구",
                       "id": "lucio-football",
                       "quality": "common",
                       "img": "./resources/updates/SUMMER_GAMES_2016/sprays/lucio-football.png"
                     },
                     {
                       "hero": "맥크리",
                       "name": "승마",
                       "id": "mccree-equestrian",
                       "quality": "common",
                       "img": "./resources/updates/SUMMER_GAMES_2016/sprays/mccree-equestrian.png"
                     },
                     {
                       "hero": "메이",
                       "name": "탁구",
                       "id": "mei-table-tennis",
                       "quality": "common",
                       "img": "./resources/updates/SUMMER_GAMES_2016/sprays/mei-table-tennis.png"
                     },
                     {
                       "hero": "메르시",
                       "name": "배드민턴",
                       "id": "mercy-badminton",
                       "quality": "common",
                       "img": "./resources/updates/SUMMER_GAMES_2016/sprays/mercy-badminton.png"
                     },
                     {
                       "hero": "파라",
                       "name": "농구",
                       "id": "pharah-basketball",
                       "quality": "common",
                       "img": "./resources/updates/SUMMER_GAMES_2016/sprays/pharah-basketball.png"
                     },
                     {
                       "hero": "리퍼",
                       "name": "BMX",
                       "id": "reaper-bmx",
                       "quality": "common",
                       "img": "./resources/updates/SUMMER_GAMES_2016/sprays/reaper-bmx.png"
                     },
                     {
                       "hero": "라인하르트",
                       "name": "레슬링",
                       "id": "reinhardt-wrestling",
                       "quality": "common",
                       "img": "./resources/updates/SUMMER_GAMES_2016/sprays/reinhardt-wrestling.png"
                     },
                     {
                       "hero": "로드호그",
                       "name": "다이빙",
                       "id": "roadhog-diving",
                       "quality": "common",
                       "img": "./resources/updates/SUMMER_GAMES_2016/sprays/roadhog-diving.png"
                     },
                     {
                       "hero": "솔저: 76",
                       "name": "골프",
                       "id": "soldier-76-golf",
                       "quality": "common",
                       "img": "./resources/updates/SUMMER_GAMES_2016/sprays/soldier-76-golf.png"
                     },
                     {
                       "hero": "시메트라",
                       "name": "리듬체조",
                       "id": "symmetra-rhythmic",
                       "quality": "common",
                       "img": "./resources/updates/SUMMER_GAMES_2016/sprays/symmetra-rhythmic.png"
                     },
                     {
                       "hero": "토르비욘",
                       "name": "수구",
                       "id": "torbjorn-water-polo",
                       "quality": "common",
                       "img": "./resources/updates/SUMMER_GAMES_2016/sprays/torbjorn-water-polo.png"
                     },
                     {
                       "hero": "트레이서",
                       "name": "육상",
                       "id": "tracer-track",
                       "quality": "common",
                       "img": "./resources/updates/SUMMER_GAMES_2016/sprays/tracer-track.png"
                     },
                     {
                       "hero": "위도우메이커",
                       "name": "기계체조",
                       "id": "widowmaker-gymnastics",
                       "quality": "common",
                       "img": "./resources/updates/SUMMER_GAMES_2016/sprays/widowmaker-gymnastics.png"
                     },
                     {
                       "hero": "윈스턴",
                       "name": "배구",
                       "id": "winston-volleyball",
                       "quality": "common",
                       "img": "./resources/updates/SUMMER_GAMES_2016/sprays/winston-volleyball.png"
                     },
                     {
                       "hero": "자리야",
                       "name": "역도",
                       "id": "zarya-weightlifting",
                       "quality": "common",
                       "img": "./resources/updates/SUMMER_GAMES_2016/sprays/zarya-weightlifting.png"
                     },
                     {
                       "hero": "젠야타",
                       "name": "태권도",
                       "id": "zenyatta-taekwondo",
                       "quality": "common",
                       "img": "./resources/updates/SUMMER_GAMES_2016/sprays/zenyatta-taekwondo.png"
                     },
                     {
                       "name": "2016 하계 스포츠 대회",
                       "id": "summer-games",
                       "img": "./resources/updates/SUMMER_GAMES_2016/sprays/summer-games.png"
                     }
                   ],
                   "voicelines": [
                     {
                       "hero": "아나",
                       "name": "아픈 만큼 성숙할 거다",
                       "id": "ana-learn-from-the-pain",
                       "quality": "common"
                     },
                     {
                       "hero": "바스티온",
                       "name": "쀼잉 쀼 쀼쀼쀼쀼",
                       "id": "bastion-whoovweeeeee",
                       "quality": "common"
                     },
                     {
                       "hero": "D.Va",
                       "name": "내가 최고야",
                       "id": "dva-im-1",
                       "quality": "common"
                     },
                     {
                       "hero": "겐지",
                       "name": "멋진 승부를 바랐건만",
                       "id": "genji-i-was-hoping-for-a-challenge",
                       "quality": "common"
                     },
                     {
                       "hero": "한조",
                       "name": "상념을 버려라",
                       "id": "hanzo-ignore-all-distractions",
                       "quality": "common"
                     },
                     {
                       "hero": "정크랫",
                       "name": "10점 드릴게",
                       "id": "junkrat-i-give-it-a-10",
                       "quality": "common"
                     },
                     {
                       "hero": "루시우",
                       "name": "우승은 우리의 것",
                       "id": "lucio-be-champions",
                       "quality": "common"
                     },
                     {
                       "hero": "맥크리",
                       "name": "지는 건 딱 질색이야",
                       "id": "mccree-i-dont-much-like-losing",
                       "quality": "common"
                     },
                     {
                       "hero": "메이",
                       "name": "어떤 어려움도",
                       "id": "mei-overcome-all-obstacles",
                       "quality": "common"
                     },
                     {
                       "hero": "메르시",
                       "name": "별거 아니군요",
                       "id": "mercy-piece-of-cake",
                       "quality": "common"
                     },
                     {
                       "hero": "파라",
                       "name": "함께 헤쳐나갑시다",
                       "id": "pharah-we-are-in-this-together",
                       "quality": "common"
                     },
                     {
                       "hero": "리퍼",
                       "name": "포기하면 편해",
                       "id": "reaper-its-in-the-refrigerator",
                       "quality": "common"
                     },
                     {
                       "hero": "라인하르트",
                       "name": "백 퍼센트 완벽한 독일의 힘",
                       "id": "reinhardt-100-german-power",
                       "quality": "common"
                     },
                     {
                       "hero": "로드호그",
                       "name": "다 내 거야",
                       "id": "roadhog-whats-mine-is-mine",
                       "quality": "common"
                     },
                     {
                       "hero": "솔저: 76",
                       "name": "훈장을 받고 싶나?",
                       "id": "soldier-76-you-want-a-medal",
                       "quality": "common"
                     },
                     {
                       "hero": "시메트라",
                       "name": "노력하고 헌신한 보람",
                       "id": "symmetra-hard-work-and-dedication",
                       "quality": "common"
                     },
                     {
                       "hero": "토르비욘",
                       "name": "이게 전부가 아니란다",
                       "id": "torbjorn-more-where-that-came-from",
                       "quality": "common"
                     },
                     {
                       "hero": "트레이서",
                       "name": "먼지 퍼먹어!",
                       "id": "tracer-eat-my-dust",
                       "quality": "common"
                     },
                     {
                       "hero": "위도우메이커",
                       "name": "난 빗맞히지 않아",
                       "id": "widowmaker-i-dont-miss",
                       "quality": "common"
                     },
                     {
                       "hero": "윈스턴",
                       "name": "장난은 여기까지",
                       "id": "winston-playtimes-over",
                       "quality": "common"
                     },
                     {
                       "hero": "자리야",
                       "name": "고통 없인 성과도 없는 법",
                       "id": "zarya-no-pain-no-gain",
                       "quality": "common"
                     },
                     {
                       "hero": "젠야타",
                       "name": "늘 나아지려고 애써야 하오",
                       "id": "zenyatta-strive-for-improvement",
                       "quality": "common"
                     }
                   ],
                   "emotes": [
                     {
                       "hero": "바스티온",
                       "name": "복싱",
                       "id": "bastion-boxing",
                       "quality": "epic",
                       "video": "./resources/updates/SUMMER_GAMES_2016/emotes/bastion-boxing.webm"
                     },
                     {
                       "hero": "루시우",
                       "name": "저글링",
                       "id": "lucio-juggle",
                       "quality": "epic",
                       "video": "./resources/updates/SUMMER_GAMES_2016/emotes/lucio-juggle.webm"
                     },
                     {
                       "hero": "시메트라",
                       "name": "리본 체조",
                       "id": "symmetra-ribbon",
                       "quality": "epic",
                       "video": "./resources/updates/SUMMER_GAMES_2016/emotes/symmetra-ribbon.webm"
                     }
                   ],
                   "skinsEpic": [
                     {
                       "hero": "D.Va",
                       "name": "태극기",
                       "id": "dva-taegeukgi",
                       "quality": "epic",
                       "img": "./resources/updates/SUMMER_GAMES_2016/skinsEpic/dva-taegeukgi.jpg"
                     },
                     {
                       "hero": "겐지",
                       "name": "니혼",
                       "id": "genji-nihon",
                       "quality": "epic",
                       "img": "./resources/updates/SUMMER_GAMES_2016/skinsEpic/genji-nihon.jpg"
                     },
                     {
                       "hero": "맥크리",
                       "name": "아메리칸",
                       "id": "mccree-american",
                       "quality": "epic",
                       "img": "./resources/updates/SUMMER_GAMES_2016/skinsEpic/mccree-american.jpg"
                     },
                     {
                       "hero": "메르시",
                       "name": "아이트게노센",
                       "id": "mercy-eidgenossin",
                       "quality": "epic",
                       "img": "./resources/updates/SUMMER_GAMES_2016/skinsEpic/mercy-eidgenossin.jpg"
                     },
                     {
                       "hero": "토르비욘",
                       "name": "트레 크로노르",
                       "id": "torbjorn-tre-kronor",
                       "quality": "epic",
                       "img": "./resources/updates/SUMMER_GAMES_2016/skinsEpic/torbjorn-tre-kronor.jpg"
                     },
                     {
                       "hero": "위도우메이커",
                       "name": "트리콜로",
                       "id": "widowmaker-tricolore",
                       "quality": "epic",
                       "img": "./resources/updates/SUMMER_GAMES_2016/skinsEpic/widowmaker-tricolore.jpg"
                     }
                   ],
                   "intros": [
                     {
                       "hero": "정크랫",
                       "name": "포환던지기",
                       "id": "junkrat-shot-put",
                       "quality": "epic",
                       "video": "./resources/updates/SUMMER_GAMES_2016/intros/junkrat-shot-put.webm"
                     },
                     {
                       "hero": "루시우",
                       "name": "바이시클 킥",
                       "id": "lucio-bicycle-kick",
                       "quality": "epic",
                       "video": "./resources/updates/SUMMER_GAMES_2016/intros/lucio-bicycle-kick.webm"
                     },
                     {
                       "hero": "트레이서",
                       "name": "장애물 경주",
                       "id": "tracer-hurdle",
                       "quality": "epic",
                       "video": "./resources/updates/SUMMER_GAMES_2016/intros/tracer-hurdle.webm"
                     }
                   ],
                   "skinsLegendary": [
                     {
                       "hero": "루시우",
                       "name": "셀레상",
                       "id": "lucio-selecao",
                       "quality": "legendary",
                       "img": "./resources/updates/SUMMER_GAMES_2016/skinsLegendary/lucio-selecao.jpg"
                     },
                     {
                       "hero": "루시우",
                       "name": "공격수",
                       "id": "lucio-striker",
                       "quality": "legendary",
                       "img": "./resources/updates/SUMMER_GAMES_2016/skinsLegendary/lucio-striker.jpg"
                     },
                     {
                       "hero": "트레이서",
                       "name": "단거리 선수",
                       "id": "tracer-sprinter",
                       "quality": "legendary",
                       "img": "./resources/updates/SUMMER_GAMES_2016/skinsLegendary/tracer-sprinter.jpg"
                     },
                     {
                       "hero": "트레이서",
                       "name": "육상선수",
                       "id": "tracer-track-and-field",
                       "quality": "legendary",
                       "img": "./resources/updates/SUMMER_GAMES_2016/skinsLegendary/tracer-track-and-field.jpg"
                     },
                     {
                       "hero": "자리야",
                       "name": "챔피언",
                       "id": "zarya-champion",
                       "quality": "legendary",
                       "img": "./resources/updates/SUMMER_GAMES_2016/skinsLegendary/zarya-champion.jpg"
                     },
                     {
                       "hero": "자리야",
                       "name": "역도 선수",
                       "id": "zarya-weightlifter",
                       "quality": "legendary",
                       "img": "./resources/updates/SUMMER_GAMES_2016/skinsLegendary/zarya-weightlifter.jpg"
                     }
                   ],
                   "poses": [
                     {
                       "hero": "메이",
                       "name": "메달",
                       "id": "mei-medal",
                       "quality": "rare",
                       "img": "./resources/updates/SUMMER_GAMES_2016/poses/mei-medal.jpg"
                     },
                     {
                       "hero": "파라",
                       "name": "메달",
                       "id": "pharah-medal",
                       "quality": "rare",
                       "img": "./resources/updates/SUMMER_GAMES_2016/poses/pharah-medal.jpg"
                     },
                     {
                       "hero": "리퍼",
                       "name": "메달",
                       "id": "reaper-medal",
                       "quality": "rare",
                       "img": "./resources/updates/SUMMER_GAMES_2016/poses/reaper-medal.jpg"
                     },
                     {
                       "hero": "로드호그",
                       "name": "메달",
                       "id": "roadhog-medal",
                       "quality": "rare",
                       "img": "./resources/updates/SUMMER_GAMES_2016/poses/roadhog-medal.jpg"
                     },
                     {
                       "hero": "솔저: 76",
                       "name": "골프 스윙",
                       "id": "soldier-76-golf-swing",
                       "quality": "rare",
                       "img": "./resources/updates/SUMMER_GAMES_2016/poses/soldier-76-golf-swing.jpg"
                     },
                     {
                       "hero": "토르비욘",
                       "name": "메달",
                       "id": "torbjorn-medal",
                       "quality": "rare",
                       "img": "./resources/updates/SUMMER_GAMES_2016/poses/torbjorn-medal.jpg"
                     },
                     {
                       "hero": "위도우메이커",
                       "name": "메달",
                       "id": "widowmaker-medal",
                       "quality": "rare",
                       "img": "./resources/updates/SUMMER_GAMES_2016/poses/widowmaker-medal.jpg"
                     },
                     {
                       "hero": "윈스턴",
                       "name": "메달",
                       "id": "winston-medal",
                       "quality": "rare",
                       "img": "./resources/updates/SUMMER_GAMES_2016/poses/winston-medal.jpg"
                     },
                     {
                       "hero": "젠야타",
                       "name": "Medals",
                       "id": "zenyatta-medals",
                       "quality": "rare",
                       "img": "./resources/updates/SUMMER_GAMES_2016/poses/zenyatta-medals.jpg"
                     }
                   ]
                 }
               },
               "HALLOWEEN_2016": {
                 "name": "2016 공포의 할로윈",
                 "id": "HALLOWEEN_2016",
                 "dates": {
                   "start": "1476208800000",
                   "end": "1478059200000"
                 },
                 "items": {
                   "skinsEpic": [
                     {
                       "hero": "아나",
                       "name": "Ghoul",
                       "id": "ana-ghoul",
                       "quality": "epic",
                       "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/ana-ghoul.jpg"
                     },
                     {
                       "hero": "바스티온",
                       "name": "Tombstone",
                       "id": "bastion-tombstone",
                       "quality": "epic",
                       "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/bastion-tombstone.jpg"
                     },
                     {
                       "hero": "한조",
                       "name": "Demon",
                       "id": "hanzo-demon",
                       "quality": "epic",
                       "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/hanzo-demon.jpg"
                     },
                     {
                       "hero": "파라",
                       "name": "Possessed",
                       "id": "pharah-possessed",
                       "quality": "epic",
                       "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/pharah-possessed.jpg"
                     },
                     {
                       "hero": "라인하르트",
                       "name": "Coldhardt",
                       "id": "reinhardt-coldhardt",
                       "quality": "epic",
                       "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/reinhardt-coldhardt.jpg"
                     },
                     {
                       "hero": "솔저: 76",
                       "name": "Immortal",
                       "id": "soldier-76-immortal",
                       "quality": "epic",
                       "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/soldier-76-immortal.jpg"
                     },
                     {
                       "hero": "시메트라",
                       "name": "Vampire",
                       "id": "symmetra-vampire",
                       "quality": "epic",
                       "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/symmetra-vampire.jpg"
                     },
                     {
                       "hero": "젠야타",
                       "name": "Skullyatta",
                       "id": "zenyatta-skullyatta",
                       "quality": "epic",
                       "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/zenyatta-skullyatta.jpg"
                     }
                   ],
                   "emotes": [
                     {
                       "hero": "아나",
                       "name": "Candy",
                       "id": "ana-candy",
                       "quality": "epic",
                       "video": "./resources/updates/HALLOWEEN_2016/emotes/ana-candy.webm"
                     },
                     {
                       "hero": "라인하르트",
                       "name": "Pumpkin Smash",
                       "id": "reinhardt-pumpkin-smash",
                       "quality": "epic",
                       "video": "./resources/updates/HALLOWEEN_2016/emotes/reinhardt-pumpkin-smash.webm"
                     },
                     {
                       "hero": "윈스턴",
                       "name": "Shadow Puppets",
                       "id": "winston-shadow-puppets",
                       "quality": "epic",
                       "video": "./resources/updates/HALLOWEEN_2016/emotes/winston-shadow-puppets.webm"
                     }
                   ],
                   "sprays": [
                     {
                       "hero": "아나",
                       "name": "Trick or Treat",
                       "id": "ana-trick-or-treat",
                       "quality": "common",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/ana-trick-or-treat.png"
                     },
                     {
                       "hero": "바스티온",
                       "name": "Trick or Treat",
                       "id": "bastion-trick-or-treat",
                       "quality": "common",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/bastion-trick-or-treat.png"
                     },
                     {
                       "hero": "D.Va",
                       "name": "Trick or Treat",
                       "id": "dva-trick-or-treat",
                       "quality": "common",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/dva-trick-or-treat.png"
                     },
                     {
                       "hero": "겐지",
                       "name": "Trick or Treat",
                       "id": "genji-trick-or-treat",
                       "quality": "common",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/genji-trick-or-treat.png"
                     },
                     {
                       "hero": "한조",
                       "name": "Trick or Treat",
                       "id": "hanzo-trick-or-treat",
                       "quality": "common",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/hanzo-trick-or-treat.png"
                     },
                     {
                       "hero": "정크랫",
                       "name": "Trick or Treat",
                       "id": "junkrat-trick-or-treat",
                       "quality": "common",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/junkrat-trick-or-treat.png"
                     },
                     {
                       "hero": "루시우",
                       "name": "Trick or Treat",
                       "id": "lucio-trick-or-treat",
                       "quality": "common",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/lucio-trick-or-treat.png"
                     },
                     {
                       "hero": "맥크리",
                       "name": "Trick or Treat",
                       "id": "mccree-trick-or-treat",
                       "quality": "common",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/mccree-trick-or-treat.png"
                     },
                     {
                       "hero": "메이",
                       "name": "Trick or Treat",
                       "id": "mei-trick-or-treat",
                       "quality": "common",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/mei-trick-or-treat.png"
                     },
                     {
                       "hero": "메르시",
                       "name": "Trick or Treat",
                       "id": "mercy-trick-or-treat",
                       "quality": "common",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/mercy-trick-or-treat.png"
                     },
                     {
                       "hero": "파라",
                       "name": "Trick or Treat",
                       "id": "pharah-trick-or-treat",
                       "quality": "common",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/pharah-trick-or-treat.png"
                     },
                     {
                       "hero": "리퍼",
                       "name": "Trick or Treat",
                       "id": "reaper-trick-or-treat",
                       "quality": "common",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/reaper-trick-or-treat.png"
                     },
                     {
                       "hero": "라인하르트",
                       "name": "Trick or Treat",
                       "id": "reinhardt-trick-or-treat",
                       "quality": "common",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/reinhardt-trick-or-treat.png"
                     },
                     {
                       "hero": "로드호그",
                       "name": "Trick or Treat",
                       "id": "roadhog-trick-or-treat",
                       "quality": "common",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/roadhog-trick-or-treat.png"
                     },
                     {
                       "hero": "솔저: 76",
                       "name": "Trick or Treat",
                       "id": "soldier-76-trick-or-treat",
                       "quality": "common",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/soldier-76-trick-or-treat.png"
                     },
                     {
                       "hero": "시메트라",
                       "name": "Trick or Treat",
                       "id": "symmetra-trick-or-treat",
                       "quality": "common",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/symmetra-trick-or-treat.png"
                     },
                     {
                       "hero": "토르비욘",
                       "name": "Trick or Treat",
                       "id": "torbjorn-trick-or-treat",
                       "quality": "common",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/torbjorn-trick-or-treat.png"
                     },
                     {
                       "name": "Boo!",
                       "id": "boo",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/boo.png"
                     },
                     {
                       "hero": "트레이서",
                       "name": "Trick or Treat",
                       "id": "tracer-trick-or-treat",
                       "quality": "common",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/tracer-trick-or-treat.png"
                     },
                     {
                       "hero": "위도우메이커",
                       "name": "Trick or Treat",
                       "id": "widowmaker-trick-or-treat",
                       "quality": "common",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/widowmaker-trick-or-treat.png"
                     },
                     {
                       "name": "Boop!",
                       "id": "boop",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/boop.png"
                     },
                     {
                       "hero": "윈스턴",
                       "name": "Trick or Treat",
                       "id": "winston-trick-or-treat",
                       "quality": "common",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/winston-trick-or-treat.png"
                     },
                     {
                       "hero": "자리야",
                       "name": "Trick or Treat",
                       "id": "zarya-trick-or-treat",
                       "quality": "common",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/zarya-trick-or-treat.png"
                     },
                     {
                       "hero": "젠야타",
                       "name": "Trick or Treat",
                       "id": "zenyatta-trick-or-treat",
                       "quality": "common",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/zenyatta-trick-or-treat.png"
                     },
                     {
                       "name": "Witch's Brew",
                       "id": "witchs-brew",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/witchs-brew.png"
                     },
                     {
                       "name": "Pumpkins",
                       "id": "pumpkins",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/pumpkins.png"
                     },
                     {
                       "name": "Halloween Terror 2016",
                       "id": "halloween-terror-2016",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/halloween-terror-2016.png"
                     },
                     {
                       "name": "Gummy Hog",
                       "id": "gummy-hog",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/gummy-hog.png"
                     },
                     {
                       "name": "Fangs",
                       "id": "fangs",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/fangs.png"
                     },
                     {
                       "name": "Candyball",
                       "id": "candyball",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/candyball.png"
                     },
                     {
                       "name": "Bats",
                       "id": "bats",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/bats.png"
                     },
                     {
                       "name": "...Never Die",
                       "id": "never-die",
                       "img": "./resources/updates/HALLOWEEN_2016/sprays/never-die.png"
                     }
                   ],
                   "voicelines": [
                     {
                       "hero": "아나",
                       "name": "Are you scared?",
                       "id": "ana-are-you-scared",
                       "quality": "common"
                     },
                     {
                       "hero": "바스티온",
                       "name": "W-W-Wooooo...?",
                       "id": "bastion-wwwooooo",
                       "quality": "common"
                     },
                     {
                       "hero": "D.Va",
                       "name": "Happy Halloween!",
                       "id": "dva-happy-halloween",
                       "quality": "common"
                     },
                     {
                       "hero": "겐지",
                       "name": "My Halloween costume?",
                       "id": "genji-my-halloween-costume",
                       "quality": "common"
                     },
                     {
                       "hero": "한조",
                       "name": "You are already dead",
                       "id": "hanzo-you-are-already-dead",
                       "quality": "common"
                     },
                     {
                       "hero": "정크랫",
                       "name": "Happy Halloween",
                       "id": "junkrat-happy-halloween",
                       "quality": "common"
                     },
                     {
                       "hero": "루시우",
                       "name": "Killed it!",
                       "id": "lucio-killed-it",
                       "quality": "common"
                     },
                     {
                       "hero": "맥크리",
                       "name": "It's your funeral",
                       "id": "mccree-its-your-funeral",
                       "quality": "common"
                     },
                     {
                       "hero": "메이",
                       "name": "Scary!",
                       "id": "mei-scary",
                       "quality": "common"
                     },
                     {
                       "hero": "메르시",
                       "name": "Superstition",
                       "id": "mercy-superstition",
                       "quality": "common"
                     },
                     {
                       "hero": "파라",
                       "name": "Dead or alive",
                       "id": "pharah-dead-or-alive",
                       "quality": "common"
                     },
                     {
                       "hero": "리퍼",
                       "name": "I work the graveyard shift",
                       "id": "reaper-i-work-the-graveyard-shift",
                       "quality": "common"
                     },
                     {
                       "hero": "라인하르트",
                       "name": "Smashing",
                       "id": "reinhardt-smashing",
                       "quality": "common"
                     },
                     {
                       "hero": "로드호그",
                       "name": "Want some candy?",
                       "id": "roadhog-want-some-candy",
                       "quality": "common"
                     },
                     {
                       "hero": "솔저: 76",
                       "name": "Knock knock",
                       "id": "soldier-76-knock-knock",
                       "quality": "common"
                     },
                     {
                       "hero": "시메트라",
                       "name": "A frightening thought",
                       "id": "symmetra-a-frightening-thought",
                       "quality": "common"
                     },
                     {
                       "hero": "토르비욘",
                       "name": "If you build it",
                       "id": "torbjorn-if-you-build-it",
                       "quality": "common"
                     },
                     {
                       "hero": "트레이서",
                       "name": "Ooh, Scary!",
                       "id": "tracer-ooh-scary",
                       "quality": "common"
                     },
                     {
                       "hero": "위도우메이커",
                       "name": "The party is over",
                       "id": "widowmaker-the-party-is-over",
                       "quality": "common"
                     },
                     {
                       "hero": "윈스턴",
                       "name": "This is not a costume",
                       "id": "winston-this-is-not-a-costume",
                       "quality": "common"
                     },
                     {
                       "hero": "자리야",
                       "name": "Never forget the fallen",
                       "id": "zarya-never-forget-the-fallen",
                       "quality": "common"
                     },
                     {
                       "hero": "젠야타",
                       "name": "Trick or treat?",
                       "id": "zenyatta-trick-or-treat",
                       "quality": "common"
                     }
                   ],
                   "poses": [
                     {
                       "hero": "아나",
                       "name": "R.I.P.",
                       "id": "ana-rip",
                       "quality": "rare",
                       "img": "./resources/updates/HALLOWEEN_2016/poses/ana-rip.jpg"
                     },
                     {
                       "hero": "바스티온",
                       "name": "R.I.P.",
                       "id": "bastion-rip",
                       "quality": "rare",
                       "img": "./resources/updates/HALLOWEEN_2016/poses/bastion-rip.jpg"
                     },
                     {
                       "hero": "D.Va",
                       "name": "R.I.P.",
                       "id": "dva-rip",
                       "quality": "rare",
                       "img": "./resources/updates/HALLOWEEN_2016/poses/dva-rip.jpg"
                     },
                     {
                       "hero": "겐지",
                       "name": "R.I.P.",
                       "id": "genji-rip",
                       "quality": "rare",
                       "img": "./resources/updates/HALLOWEEN_2016/poses/genji-rip.jpg"
                     },
                     {
                       "hero": "한조",
                       "name": "R.I.P.",
                       "id": "hanzo-rip",
                       "quality": "rare",
                       "img": "./resources/updates/HALLOWEEN_2016/poses/hanzo-rip.jpg"
                     },
                     {
                       "hero": "정크랫",
                       "name": "R.I.P.",
                       "id": "junkrat-rip",
                       "quality": "rare",
                       "img": "./resources/updates/HALLOWEEN_2016/poses/junkrat-rip.jpg"
                     },
                     {
                       "hero": "루시우",
                       "name": "R.I.P.",
                       "id": "lucio-rip",
                       "quality": "rare",
                       "img": "./resources/updates/HALLOWEEN_2016/poses/lucio-rip.jpg"
                     },
                     {
                       "hero": "맥크리",
                       "name": "R.I.P.",
                       "id": "mccree-rip",
                       "quality": "rare",
                       "img": "./resources/updates/HALLOWEEN_2016/poses/mccree-rip.jpg"
                     },
                     {
                       "hero": "메이",
                       "name": "R.I.P.",
                       "id": "mei-rip",
                       "quality": "rare",
                       "img": "./resources/updates/HALLOWEEN_2016/poses/mei-rip.jpg"
                     },
                     {
                       "hero": "메르시",
                       "name": "R.I.P.",
                       "id": "mercy-rip",
                       "quality": "rare",
                       "img": "./resources/updates/HALLOWEEN_2016/poses/mercy-rip.jpg"
                     },
                     {
                       "hero": "파라",
                       "name": "R.I.P.",
                       "id": "pharah-rip",
                       "quality": "rare",
                       "img": "./resources/updates/HALLOWEEN_2016/poses/pharah-rip.jpg"
                     },
                     {
                       "hero": "리퍼",
                       "name": "R.I.P.",
                       "id": "reaper-rip",
                       "quality": "rare",
                       "img": "./resources/updates/HALLOWEEN_2016/poses/reaper-rip.jpg"
                     },
                     {
                       "hero": "라인하르트",
                       "name": "R.I.P.",
                       "id": "reinhardt-rip",
                       "quality": "rare",
                       "img": "./resources/updates/HALLOWEEN_2016/poses/reinhardt-rip.jpg"
                     },
                     {
                       "hero": "로드호그",
                       "name": "R.I.P.",
                       "id": "roadhog-rip",
                       "quality": "rare",
                       "img": "./resources/updates/HALLOWEEN_2016/poses/roadhog-rip.jpg"
                     },
                     {
                       "hero": "솔저: 76",
                       "name": "R.I.P.",
                       "id": "soldier-76-rip",
                       "quality": "rare",
                       "img": "./resources/updates/HALLOWEEN_2016/poses/soldier-76-rip.jpg"
                     },
                     {
                       "hero": "시메트라",
                       "name": "R.I.P.",
                       "id": "symmetra-rip",
                       "quality": "rare",
                       "img": "./resources/updates/HALLOWEEN_2016/poses/symmetra-rip.jpg"
                     },
                     {
                       "hero": "토르비욘",
                       "name": "R.I.P.",
                       "id": "torbjorn-rip",
                       "quality": "rare",
                       "img": "./resources/updates/HALLOWEEN_2016/poses/torbjorn-rip.jpg"
                     },
                     {
                       "hero": "트레이서",
                       "name": "R.I.P.",
                       "id": "tracer-rip",
                       "quality": "rare",
                       "img": "./resources/updates/HALLOWEEN_2016/poses/tracer-rip.jpg"
                     },
                     {
                       "hero": "위도우메이커",
                       "name": "R.I.P.",
                       "id": "widowmaker-rip",
                       "quality": "rare",
                       "img": "./resources/updates/HALLOWEEN_2016/poses/widowmaker-rip.jpg"
                     },
                     {
                       "hero": "윈스턴",
                       "name": "R.I.P.",
                       "id": "winston-rip",
                       "quality": "rare",
                       "img": "./resources/updates/HALLOWEEN_2016/poses/winston-rip.jpg"
                     },
                     {
                       "hero": "자리야",
                       "name": "R.I.P.",
                       "id": "zarya-rip",
                       "quality": "rare",
                       "img": "./resources/updates/HALLOWEEN_2016/poses/zarya-rip.jpg"
                     },
                     {
                       "hero": "젠야타",
                       "name": "R.I.P.",
                       "id": "zenyatta-rip",
                       "quality": "rare",
                       "img": "./resources/updates/HALLOWEEN_2016/poses/zenyatta-rip.jpg"
                     }
                   ],
                   "intros": [
                     {
                       "hero": "겐지",
                       "name": "Pumpkin Carving",
                       "id": "genji-pumpkin-carving",
                       "quality": "epic",
                       "video": "./resources/updates/HALLOWEEN_2016/intros/genji-pumpkin-carving.webm"
                     },
                     {
                       "hero": "메이",
                       "name": "Ice Scream",
                       "id": "mei-ice-scream",
                       "quality": "epic",
                       "video": "./resources/updates/HALLOWEEN_2016/intros/mei-ice-scream.webm"
                     },
                     {
                       "hero": "리퍼",
                       "name": "Eternal Rest",
                       "id": "reaper-eternal-rest",
                       "quality": "epic",
                       "video": "./resources/updates/HALLOWEEN_2016/intros/reaper-eternal-rest.webm"
                     }
                   ],
                   "skinsLegendary": [
                     {
                       "hero": "정크랫",
                       "name": "Dr. Junkenstein",
                       "id": "junkrat-dr-junkenstein",
                       "quality": "legendary",
                       "img": "./resources/updates/HALLOWEEN_2016/skinsLegendary/junkrat-dr-junkenstein.jpg"
                     },
                     {
                       "hero": "메르시",
                       "name": "Witch",
                       "id": "mercy-witch",
                       "quality": "legendary",
                       "img": "./resources/updates/HALLOWEEN_2016/skinsLegendary/mercy-witch.jpg"
                     },
                     {
                       "hero": "리퍼",
                       "name": "Pumpkin",
                       "id": "reaper-pumpkin",
                       "quality": "legendary",
                       "img": "./resources/updates/HALLOWEEN_2016/skinsLegendary/reaper-pumpkin.jpg"
                     },
                     {
                       "hero": "로드호그",
                       "name": "Junkenstein's Monster",
                       "id": "roadhog-junkensteins-monster",
                       "quality": "legendary",
                       "img": "./resources/updates/HALLOWEEN_2016/skinsLegendary/roadhog-junkensteins-monster.jpg"
                     }
                   ],
                   "icons": [
                     {
                       "name": "...Never Die",
                       "id": "never-die",
                       "img": "./resources/updates/HALLOWEEN_2016/icons/never-die.png"
                     },
                     {
                       "name": "Bewitching",
                       "id": "bewitching",
                       "img": "./resources/updates/HALLOWEEN_2016/icons/bewitching.png"
                     },
                     {
                       "name": "Calavera",
                       "id": "calavera",
                       "img": "./resources/updates/HALLOWEEN_2016/icons/calavera.png"
                     },
                     {
                       "name": "Candle",
                       "id": "candle",
                       "img": "./resources/updates/HALLOWEEN_2016/icons/candle.png"
                     },
                     {
                       "name": "Eyeball",
                       "id": "eyeball",
                       "img": "./resources/updates/HALLOWEEN_2016/icons/eyeball.png"
                     },
                     {
                       "name": "Ghostymari",
                       "id": "ghostymari",
                       "img": "./resources/updates/HALLOWEEN_2016/icons/ghostymari.png"
                     },
                     {
                       "name": "Halloween Terror",
                       "id": "halloween-terror",
                       "img": "./resources/updates/HALLOWEEN_2016/icons/halloween-terror.png"
                     },
                     {
                       "name": "Spider",
                       "id": "spider",
                       "img": "./resources/updates/HALLOWEEN_2016/icons/spider.png"
                     },
                     {
                       "name": "Superstition",
                       "id": "superstition",
                       "img": "./resources/updates/HALLOWEEN_2016/icons/superstition.png"
                     },
                     {
                       "name": "The Doctor",
                       "id": "junkrat-the-doctor",
                       "img": "./resources/updates/HALLOWEEN_2016/icons/junkrat-the-doctor.png"
                     },
                     {
                       "name": "The Monster",
                       "id": "roadhog-the-monster",
                       "img": "./resources/updates/HALLOWEEN_2016/icons/roadhog-the-monster.png"
                     },
                     {
                       "name": "The Reaper",
                       "id": "reaper-the-reaper",
                       "img": "./resources/updates/HALLOWEEN_2016/icons/reaper-the-reaper.png"
                     },
                     {
                       "name": "The Witch",
                       "id": "mercy-the-witch",
                       "img": "./resources/updates/HALLOWEEN_2016/icons/mercy-the-witch.png"
                     },
                     {
                       "name": "Tombstone",
                       "id": "tombstone",
                       "img": "./resources/updates/HALLOWEEN_2016/icons/tombstone.png"
                     },
                     {
                       "name": "Vampachimari",
                       "id": "vampachimari",
                       "img": "./resources/updates/HALLOWEEN_2016/icons/vampachimari.png"
                     },
                     {
                       "name": "Witch's Brew",
                       "id": "witchs-brew",
                       "img": "./resources/updates/HALLOWEEN_2016/icons/witchs-brew.png"
                     },
                     {
                       "name": "Witch's Hat",
                       "id": "witchs-hat",
                       "img": "./resources/updates/HALLOWEEN_2016/icons/witchs-hat.png"
                     },
                     {
                       "name": "Wolf",
                       "id": "wolf",
                       "img": "./resources/updates/HALLOWEEN_2016/icons/wolf.png"
                     }
                   ]
                 }
               },
               "WINTER_WONDERLAND_2016": {
                 "name": "2016 환상의 겨울나라",
                 "id": "WINTER_WONDERLAND_2016",
                 "dates": {
                   "start": "1481652000000",
                   "end": "1483416000000"
                 },
                 "items": {
                   "sprays": [
                     {
                       "hero": "아나",
                       "name": "Warm",
                       "id": "ana-warm",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/ana-warm.png",
                       "ornamentID": "ana-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/ana-ornament.png"
                     },
                     {
                       "hero": "아나",
                       "name": "Ornament",
                       "id": "ana-ornament",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/ana-ornament.png",
                       "ornamentID": "ana-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/ana-ornament.png"
                     },
                     {
                       "hero": "바스티온",
                       "name": "ORNAMENT",
                       "id": "bastion-ornament",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/bastion-ornament.png",
                       "ornamentID": "bastion-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/bastion-ornament.png"
                     },
                     {
                       "hero": "바스티온",
                       "name": "FESTIVE",
                       "id": "bastion-festive",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/bastion-festive.png",
                       "ornamentID": "bastion-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/bastion-ornament.png"
                     },
                     {
                       "hero": "D.Va",
                       "name": "ORNAMENT",
                       "id": "dva-ornament",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/dva-ornament.png",
                       "ornamentID": "dva-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/dva-ornament.png"
                     },
                     {
                       "hero": "D.Va",
                       "name": "COOKIE",
                       "id": "dva-cookie",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/dva-cookie.png",
                       "ornamentID": "dva-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/dva-ornament.png"
                     },
                     {
                       "hero": "겐지",
                       "name": "Kadomatsu",
                       "id": "genji-kadomatsu",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/genji-kadomatsu.png",
                       "ornamentID": "genji-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/genji-ornament.png"
                     },
                     {
                       "hero": "겐지",
                       "name": "Ornament",
                       "id": "genji-ornament",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/genji-ornament.png",
                       "ornamentID": "genji-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/genji-ornament.png"
                     },
                     {
                       "hero": "한조",
                       "name": "Kadomatsu",
                       "id": "hanzo-kadomatsu",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/hanzo-kadomatsu.png",
                       "ornamentID": "hanzo-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/hanzo-ornament.png"
                     },
                     {
                       "hero": "한조",
                       "name": "Ornament",
                       "id": "hanzo-ornament",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/hanzo-ornament.png",
                       "ornamentID": "hanzo-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/hanzo-ornament.png"
                     },
                     {
                       "hero": "정크랫",
                       "name": "\"WINTER\"",
                       "id": "junkrat-winter",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/junkrat-winter.png",
                       "ornamentID": "junkrat-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/junkrat-ornament.png"
                     },
                     {
                       "hero": "정크랫",
                       "name": "Ornament",
                       "id": "junkrat-ornament",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/junkrat-ornament.png",
                       "ornamentID": "junkrat-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/junkrat-ornament.png"
                     },
                     {
                       "hero": "루시우",
                       "name": "Ornament",
                       "id": "lucio-ornament",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/lucio-ornament.png",
                       "ornamentID": "lucio-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/lucio-ornament.png"
                     },
                     {
                       "hero": "루시우",
                       "name": "Hockey",
                       "id": "lucio-hockey",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/lucio-hockey.png",
                       "ornamentID": "lucio-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/lucio-ornament.png"
                     },
                     {
                       "hero": "맥크리",
                       "name": "Ornament",
                       "id": "mccree-ornament",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mccree-ornament.png",
                       "ornamentID": "mccree-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mccree-ornament.png"
                     },
                     {
                       "hero": "맥크리",
                       "name": "Ugly Sweater",
                       "id": "mccree-ugly-sweater",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mccree-ugly-sweater.png",
                       "ornamentID": "mccree-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mccree-ornament.png"
                     },
                     {
                       "hero": "메이",
                       "name": "Sculpting",
                       "id": "mei-sculpting",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mei-sculpting.png",
                       "ornamentID": "mei-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mei-ornament.png"
                     },
                     {
                       "hero": "메이",
                       "name": "Ornament",
                       "id": "mei-ornament",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mei-ornament.png",
                       "ornamentID": "mei-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mei-ornament.png"
                     },
                     {
                       "hero": "메르시",
                       "name": "Snow Angel",
                       "id": "mercy-snow-angel",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mercy-snow-angel.png",
                       "ornamentID": "mercy-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mercy-ornament.png"
                     },
                     {
                       "hero": "메르시",
                       "name": "Ornament",
                       "id": "mercy-ornament",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mercy-ornament.png",
                       "ornamentID": "mercy-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mercy-ornament.png"
                     },
                     {
                       "hero": "파라",
                       "name": "Ice Fishing",
                       "id": "pharah-ice-fishing",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/pharah-ice-fishing.png",
                       "ornamentID": "pharah-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/pharah-ornament.png"
                     },
                     {
                       "hero": "파라",
                       "name": "Ornament",
                       "id": "pharah-ornament",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/pharah-ornament.png",
                       "ornamentID": "pharah-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/pharah-ornament.png"
                     },
                     {
                       "hero": "리퍼",
                       "name": "Stocking",
                       "id": "reaper-stocking",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reaper-stocking.png",
                       "ornamentID": "reaper-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reaper-ornament.png"
                     },
                     {
                       "hero": "리퍼",
                       "name": "Ornament",
                       "id": "reaper-ornament",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reaper-ornament.png",
                       "ornamentID": "reaper-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reaper-ornament.png"
                     },
                     {
                       "hero": "라인하르트",
                       "name": "Ice Fishing",
                       "id": "reinhardt-ice-fishing",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reinhardt-ice-fishing.png",
                       "ornamentID": "reinhardt-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reinhardt-ornament.png"
                     },
                     {
                       "hero": "라인하르트",
                       "name": "Ornament",
                       "id": "reinhardt-ornament",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reinhardt-ornament.png",
                       "ornamentID": "reinhardt-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reinhardt-ornament.png"
                     },
                     {
                       "hero": "로드호그",
                       "name": "\"Winter\"",
                       "id": "roadhog-winter",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/roadhog-winter.png",
                       "ornamentID": "roadhog-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/roadhog-ornament.png"
                     },
                     {
                       "hero": "로드호그",
                       "name": "Ornament",
                       "id": "roadhog-ornament",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/roadhog-ornament.png",
                       "ornamentID": "roadhog-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/roadhog-ornament.png"
                     },
                     {
                       "hero": "솔저: 76",
                       "name": "Ornament",
                       "id": "soldier-76-ornament",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/soldier-76-ornament.png",
                       "ornamentID": "soldier-76-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/soldier-76-ornament.png"
                     },
                     {
                       "hero": "솔저: 76",
                       "name": "Army Man: 76",
                       "id": "soldier-76-army-man-76",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/soldier-76-army-man-76.png",
                       "ornamentID": "soldier-76-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/soldier-76-ornament.png"
                     },
                     {
                       "hero": "솜브라",
                       "name": "Puppet",
                       "id": "sombra-puppet",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/sombra-puppet.png",
                       "ornamentID": "sombra-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/sombra-ornament.png"
                     },
                     {
                       "hero": "솜브라",
                       "name": "Ornament",
                       "id": "sombra-ornament",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/sombra-ornament.png",
                       "ornamentID": "sombra-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/sombra-ornament.png"
                     },
                     {
                       "hero": "시메트라",
                       "name": "Snowflake",
                       "id": "symmetra-snowflake",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/symmetra-snowflake.png",
                       "ornamentID": "symmetra-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/symmetra-ornament.png"
                     },
                     {
                       "hero": "시메트라",
                       "name": "Ornament",
                       "id": "symmetra-ornament",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/symmetra-ornament.png",
                       "ornamentID": "symmetra-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/symmetra-ornament.png"
                     },
                     {
                       "hero": "토르비욘",
                       "name": "Workshop",
                       "id": "torbjorn-workshop",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/torbjorn-workshop.png",
                       "ornamentID": "torbjorn-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/torbjorn-ornament.png"
                     },
                     {
                       "hero": "토르비욘",
                       "name": "Ornament",
                       "id": "torbjorn-ornament",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/torbjorn-ornament.png",
                       "ornamentID": "torbjorn-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/torbjorn-ornament.png"
                     },
                     {
                       "hero": "트레이서",
                       "name": "Snowboarding",
                       "id": "tracer-snowboarding",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/tracer-snowboarding.png",
                       "ornamentID": "tracer-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/tracer-ornament.png"
                     },
                     {
                       "hero": "트레이서",
                       "name": "Ornament",
                       "id": "tracer-ornament",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/tracer-ornament.png",
                       "ornamentID": "tracer-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/tracer-ornament.png"
                     },
                     {
                       "hero": "위도우메이커",
                       "name": "Skiing",
                       "id": "widowmaker-skiing",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/widowmaker-skiing.png",
                       "ornamentID": "widowmaker-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/widowmaker-ornament.png"
                     },
                     {
                       "hero": "위도우메이커",
                       "name": "Ornament",
                       "id": "widowmaker-ornament",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/widowmaker-ornament.png",
                       "ornamentID": "widowmaker-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/widowmaker-ornament.png"
                     },
                     {
                       "hero": "윈스턴",
                       "name": "Presents",
                       "id": "winston-presents",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/winston-presents.png",
                       "ornamentID": "winston-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/winston-ornament.png"
                     },
                     {
                       "hero": "윈스턴",
                       "name": "Ornament",
                       "id": "winston-ornament",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/winston-ornament.png",
                       "ornamentID": "winston-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/winston-ornament.png"
                     },
                     {
                       "hero": "자리야",
                       "name": "Matryoshka",
                       "id": "zarya-matryoshka",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zarya-matryoshka.png",
                       "ornamentID": "zarya-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zarya-ornament.png"
                     },
                     {
                       "hero": "자리야",
                       "name": "Ornament",
                       "id": "zarya-ornament",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zarya-ornament.png",
                       "ornamentID": "zarya-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zarya-ornament.png"
                     },
                     {
                       "hero": "젠야타",
                       "name": "Snowball Fight",
                       "id": "zenyatta-snowball-fight",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zenyatta-snowball-fight.png",
                       "ornamentID": "zenyatta-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zenyatta-ornament.png"
                     },
                     {
                       "hero": "젠야타",
                       "name": "Ornament",
                       "id": "zenyatta-ornament",
                       "quality": "common",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zenyatta-ornament.png",
                       "ornamentID": "zenyatta-ornament",
                       "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zenyatta-ornament.png"
                     },
                     {
                       "name": "Winter Wonderland",
                       "id": "winter-wonderland",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/winter-wonderland.png",
                       "quality": "common"
                     },
                     {
                       "name": "SnowReaper",
                       "id": "snowreaper",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/snowreaper.png"
                     },
                     {
                       "name": "SnowMei",
                       "id": "snowmei",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/snowmei.png"
                     },
                     {
                       "name": "SnowHog",
                       "id": "snowhog",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/snowhog.png"
                     },
                     {
                       "name": "SnowCree",
                       "id": "snowcree",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/snowcree.png"
                     }
                   ],
                   "voicelines": [
                     {
                       "hero": "아나",
                       "name": "I'm watching out for you",
                       "id": "ana-im-watching-out-for-you",
                       "quality": "common"
                     },
                     {
                       "hero": "바스티온",
                       "name": "DWEE DOO HOO",
                       "id": "bastion-dwee-doo-hoo",
                       "quality": "common"
                     },
                     {
                       "hero": "D.Va",
                       "name": "Aw, you shouldn't have",
                       "id": "dva-aw-you-shouldnt-have",
                       "quality": "common"
                     },
                     {
                       "hero": "겐지",
                       "name": "Merry Christmas!",
                       "id": "genji-merry-christmas",
                       "quality": "common"
                     },
                     {
                       "hero": "한조",
                       "name": "A gift for you",
                       "id": "hanzo-a-gift-for-you",
                       "quality": "common"
                     },
                     {
                       "hero": "정크랫",
                       "name": "Merry Christmas",
                       "id": "junkrat-merry-christmas",
                       "quality": "common"
                     },
                     {
                       "hero": "루시우",
                       "name": "Happy holidays!",
                       "id": "lucio-happy-holidays",
                       "quality": "common"
                     },
                     {
                       "hero": "맥크리",
                       "name": "Had to break the ice",
                       "id": "mccree-had-to-break-the-ice",
                       "quality": "common"
                     },
                     {
                       "hero": "메이",
                       "name": "I got you something!",
                       "id": "mei-i-got-you-something",
                       "quality": "common"
                     },
                     {
                       "hero": "메르시",
                       "name": "Your guardian angel",
                       "id": "mercy-your-guardian-angel",
                       "quality": "common"
                     },
                     {
                       "hero": "파라",
                       "name": "The forecast",
                       "id": "pharah-the-forecast",
                       "quality": "common"
                     },
                     {
                       "hero": "리퍼",
                       "name": "Holiday spirit",
                       "id": "reaper-holiday-spirit",
                       "quality": "common"
                     },
                     {
                       "hero": "라인하르트",
                       "name": "You're on my naughty list",
                       "id": "reinhardt-youre-on-my-naughty-list",
                       "quality": "common"
                     },
                     {
                       "hero": "로드호그",
                       "name": "Ho ho ho",
                       "id": "roadhog-ho-ho-ho",
                       "quality": "common"
                     },
                     {
                       "hero": "솔저: 76",
                       "name": "Stay frosty",
                       "id": "soldier-76-stay-frosty",
                       "quality": "common"
                     },
                     {
                       "hero": "솜브라",
                       "name": "I know who's been naughty",
                       "id": "sombra-i-know-whos-been-naughty",
                       "quality": "common"
                     },
                     {
                       "hero": "시메트라",
                       "name": "I made you something",
                       "id": "symmetra-i-made-you-something",
                       "quality": "common"
                     },
                     {
                       "hero": "토르비욘",
                       "name": "Made to order",
                       "id": "torbjorn-made-to-order",
                       "quality": "common"
                     },
                     {
                       "hero": "트레이서",
                       "name": "It's in the bag",
                       "id": "tracer-its-in-the-bag",
                       "quality": "common"
                     },
                     {
                       "hero": "위도우메이커",
                       "name": "Exquisite",
                       "id": "widowmaker-exquisite",
                       "quality": "common"
                     },
                     {
                       "hero": "윈스턴",
                       "name": "I... got you something",
                       "id": "winston-i-got-you-something",
                       "quality": "common"
                     },
                     {
                       "hero": "자리야",
                       "name": "For the Motherland",
                       "id": "zarya-for-the-motherland",
                       "quality": "common"
                     },
                     {
                       "hero": "젠야타",
                       "name": "No snowflake",
                       "id": "zenyatta-no-snowflake",
                       "quality": "common"
                     }
                   ],
                   "poses": [
                     {
                       "hero": "아나",
                       "name": "Toast",
                       "id": "ana-toast",
                       "quality": "rare",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/ana-toast.jpg"
                     },
                     {
                       "hero": "D.Va",
                       "name": "Festive",
                       "id": "dva-festive",
                       "quality": "rare",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/dva-festive.jpg"
                     },
                     {
                       "hero": "메르시",
                       "name": "Mistletoe",
                       "id": "mercy-mistletoe",
                       "quality": "rare",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/mercy-mistletoe.jpg"
                     },
                     {
                       "hero": "파라",
                       "name": "Toast",
                       "id": "pharah-toast",
                       "quality": "rare",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/pharah-toast.jpg"
                     },
                     {
                       "hero": "라인하르트",
                       "name": "Toast",
                       "id": "reinhardt-toast",
                       "quality": "rare",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/reinhardt-toast.jpg"
                     },
                     {
                       "hero": "솔저: 76",
                       "name": "Toast",
                       "id": "soldier-76-toast",
                       "quality": "rare",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/soldier-76-toast.jpg"
                     },
                     {
                       "hero": "토르비욘",
                       "name": "Toast",
                       "id": "torbjorn-toast",
                       "quality": "rare",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/torbjorn-toast.jpg"
                     }
                   ],
                   "skinsEpic": [
                     {
                       "hero": "루시우",
                       "name": "Andes",
                       "id": "lucio-andes",
                       "quality": "epic",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/lucio-andes.jpg"
                     },
                     {
                       "hero": "맥크리",
                       "name": "Scrooge",
                       "id": "mccree-scrooge",
                       "quality": "epic",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/mccree-scrooge.jpg"
                     },
                     {
                       "hero": "파라",
                       "name": "Frostbite",
                       "id": "pharah-frostbite",
                       "quality": "epic",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/pharah-frostbite.jpg"
                     },
                     {
                       "hero": "리퍼",
                       "name": "Shiver",
                       "id": "reaper-shiver",
                       "quality": "epic",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/reaper-shiver.jpg"
                     },
                     {
                       "hero": "로드호그",
                       "name": "Rudolph",
                       "id": "roadhog-rudolph",
                       "quality": "epic",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/roadhog-rudolph.jpg"
                     },
                     {
                       "hero": "솜브라",
                       "name": "Peppermint",
                       "id": "sombra-peppermint",
                       "quality": "epic",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/sombra-peppermint.jpg"
                     },
                     {
                       "hero": "자리야",
                       "name": "Frosted",
                       "id": "zarya-frosted",
                       "quality": "epic",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/zarya-frosted.jpg"
                     }
                   ],
                   "emotes": [
                     {
                       "hero": "맥크리",
                       "name": "Hat Trick",
                       "id": "mccree-hat-trick",
                       "quality": "epic",
                       "video": "./resources/updates/WINTER_WONDERLAND_2016/emotes/mccree-hat-trick.webm"
                     },
                     {
                       "hero": "메이",
                       "name": "Snowman",
                       "id": "mei-snowman",
                       "quality": "epic",
                       "video": "./resources/updates/WINTER_WONDERLAND_2016/emotes/mei-snowman.webm"
                     },
                     {
                       "hero": "자리야",
                       "legendary": true,
                       "name": "Mystery Gift",
                       "id": "zarya-mystery-gift",
                       "quality": "legendary",
                       "video": "./resources/updates/WINTER_WONDERLAND_2016/emotes/zarya-mystery-gift.webm"
                     }
                   ],
                   "skinsLegendary": [
                     {
                       "hero": "메이",
                       "name": "Mei-rry",
                       "id": "mei-meirry",
                       "quality": "legendary",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsLegendary/mei-meirry.jpg"
                     },
                     {
                       "hero": "토르비욘",
                       "name": "Santaclad",
                       "id": "torbjorn-santaclad",
                       "quality": "legendary",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsLegendary/torbjorn-santaclad.jpg"
                     },
                     {
                       "hero": "트레이서",
                       "name": "Jingle",
                       "id": "tracer-jingle",
                       "quality": "legendary",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsLegendary/tracer-jingle.jpg"
                     },
                     {
                       "hero": "윈스턴",
                       "name": "Yeti",
                       "id": "winston-yeti",
                       "quality": "legendary",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsLegendary/winston-yeti.jpg"
                     },
                     {
                       "hero": "젠야타",
                       "name": "Nutcracker",
                       "id": "zenyatta-nutcracker",
                       "quality": "legendary",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsLegendary/zenyatta-nutcracker.jpg"
                     }
                   ],
                   "intros": [
                     {
                       "hero": "시메트라",
                       "name": "Snowflakes",
                       "id": "symmetra-snowflakes",
                       "quality": "epic",
                       "video": "./resources/updates/WINTER_WONDERLAND_2016/intros/symmetra-snowflakes.webm"
                     },
                     {
                       "hero": "위도우메이커",
                       "name": "Under the Mistletoe",
                       "id": "widowmaker-under-the-mistletoe",
                       "quality": "epic",
                       "video": "./resources/updates/WINTER_WONDERLAND_2016/intros/widowmaker-under-the-mistletoe.webm"
                     }
                   ],
                   "icons": [
                     {
                       "name": "2017",
                       "id": "2017",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/2017.png"
                     },
                     {
                       "name": "Bells",
                       "id": "bells",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/bells.png"
                     },
                     {
                       "name": "Bubbly",
                       "id": "bubbly",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/bubbly.png"
                     },
                     {
                       "name": "Candy Cane",
                       "id": "candy-cane",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/candy-cane.png"
                     },
                     {
                       "name": "Cheers!",
                       "id": "cheers",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/cheers.png"
                     },
                     {
                       "name": "Dreidel",
                       "id": "dreidel",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/dreidel.png"
                     },
                     {
                       "name": "Gingerbread",
                       "id": "gingerbread",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/gingerbread.png"
                     },
                     {
                       "name": "Gingermari",
                       "id": "gingermari",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/gingermari.png"
                     },
                     {
                       "name": "Holly",
                       "id": "holly",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/holly.png"
                     },
                     {
                       "name": "Hot Cocoa",
                       "id": "hot-cocoa",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/hot-cocoa.png"
                     },
                     {
                       "name": "Jingle",
                       "id": "tracer-jingle",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/tracer-jingle.png"
                     },
                     {
                       "name": "Mochi",
                       "id": "mochi",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/mochi.png"
                     },
                     {
                       "name": "Nutcracker",
                       "id": "zenyatta-nutcracker",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/zenyatta-nutcracker.png"
                     },
                     {
                       "name": "Ornament",
                       "id": "ornament",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/ornament.png"
                     },
                     {
                       "name": "Pachimerry",
                       "id": "pachimerry",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/pachimerry.png"
                     },
                     {
                       "name": "Pachireindeer",
                       "id": "pachireindeer",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/pachireindeer.png"
                     },
                     {
                       "name": "Peppermint",
                       "id": "peppermint",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/peppermint.png"
                     },
                     {
                       "name": "Present",
                       "id": "present",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/present.png"
                     },
                     {
                       "name": "Santaclad",
                       "id": "torbjorn-santaclad",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/torbjorn-santaclad.png"
                     },
                     {
                       "name": "Snow Globe",
                       "id": "snow-globe",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/snow-globe.png"
                     },
                     {
                       "name": "Snowman",
                       "id": "snowman",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/snowman.png"
                     },
                     {
                       "name": "Stocking",
                       "id": "stocking",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/stocking.png"
                     },
                     {
                       "name": "Tannenbaum",
                       "id": "tannenbaum",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/tannenbaum.png"
                     },
                     {
                       "name": "Winter Wonderland",
                       "id": "winter-wonderland",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/winter-wonderland.png"
                     },
                     {
                       "name": "Wreath",
                       "id": "wreath",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/wreath.png"
                     },
                     {
                       "name": "Yeti",
                       "id": "winston-yeti",
                       "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/winston-yeti.png"
                     }
                   ]
                 }
               },
               "YEAR_OF_THE_ROOSTER_2017": {
                 "name": "2017 붉은 닭의 해",
                 "id": "YEAR_OF_THE_ROOSTER_2017",
                 "dates": {
                   "start": "1485280800000",
                   "end": "1487044800000"
                 },
                 "items": {
                   "skinsEpic": [
                     {
                       "hero": "아나",
                       "name": "Tal",
                       "id": "ana-tal",
                       "quality": "epic",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsEpic/ana-tal.jpg"
                     },
                     {
                       "hero": "바스티온",
                       "name": "Rooster",
                       "id": "bastion-rooster",
                       "quality": "epic",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsEpic/bastion-rooster.jpg"
                     },
                     {
                       "hero": "정크랫",
                       "name": "Firework",
                       "id": "junkrat-firework",
                       "quality": "epic",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsEpic/junkrat-firework.jpg"
                     },
                     {
                       "hero": "메르시",
                       "name": "Golden",
                       "id": "mercy-golden",
                       "quality": "epic",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsEpic/mercy-golden.jpg"
                     },
                     {
                       "hero": "시메트라",
                       "name": "Qipao",
                       "id": "symmetra-qipao",
                       "quality": "epic",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsEpic/symmetra-qipao.jpg"
                     },
                     {
                       "hero": "트레이서",
                       "name": "Rose",
                       "id": "tracer-rose",
                       "quality": "epic",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsEpic/tracer-rose.jpg"
                     }
                   ],
                   "sprays": [
                     {
                       "hero": "아나",
                       "name": "Dance",
                       "id": "ana-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/ana-dance.png",
                       "dragonID": "ana-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/ana-dragon-dance.png"
                     },
                     {
                       "hero": "아나",
                       "name": "Dragon Dance",
                       "id": "ana-dragon-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/ana-dragon-dance.png",
                       "dragonID": "ana-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/ana-dragon-dance.png"
                     },
                     {
                       "hero": "바스티온",
                       "name": "Dragon Dance",
                       "id": "bastion-dragon-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/bastion-dragon-dance.png",
                       "dragonID": "bastion-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/bastion-dragon-dance.png"
                     },
                     {
                       "hero": "바스티온",
                       "name": "Bast-yum",
                       "id": "bastion-bastyum",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/bastion-bastyum.png",
                       "dragonID": "bastion-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/bastion-dragon-dance.png"
                     },
                     {
                       "hero": "D.Va",
                       "name": "Seesaw",
                       "id": "dva-seesaw",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/dva-seesaw.png",
                       "dragonID": "dva-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/dva-dragon-dance.png"
                     },
                     {
                       "hero": "D.Va",
                       "name": "Dragon Dance",
                       "id": "dva-dragon-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/dva-dragon-dance.png",
                       "dragonID": "dva-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/dva-dragon-dance.png"
                     },
                     {
                       "hero": "겐지",
                       "name": "Dragon Dance",
                       "id": "genji-dragon-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/genji-dragon-dance.png",
                       "dragonID": "genji-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/genji-dragon-dance.png"
                     },
                     {
                       "hero": "겐지",
                       "name": "Green Dragon",
                       "id": "genji-green-dragon",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/genji-green-dragon.png",
                       "dragonID": "genji-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/genji-dragon-dance.png"
                     },
                     {
                       "hero": "한조",
                       "name": "Blue Dragon",
                       "id": "hanzo-blue-dragon",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/hanzo-blue-dragon.png",
                       "dragonID": "hanzo-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/hanzo-dragon-dance.png"
                     },
                     {
                       "hero": "한조",
                       "name": "Dragon Dance",
                       "id": "hanzo-dragon-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/hanzo-dragon-dance.png",
                       "dragonID": "hanzo-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/hanzo-dragon-dance.png"
                     },
                     {
                       "hero": "정크랫",
                       "name": "Dragon Dance",
                       "id": "junkrat-dragon-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/junkrat-dragon-dance.png",
                       "dragonID": "junkrat-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/junkrat-dragon-dance.png"
                     },
                     {
                       "hero": "정크랫",
                       "name": "I'm flying!",
                       "id": "junkrat-im-flying",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/junkrat-im-flying.png",
                       "dragonID": "junkrat-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/junkrat-dragon-dance.png"
                     },
                     {
                       "hero": "루시우",
                       "name": "Keep Ups",
                       "id": "lucio-keep-ups",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/lucio-keep-ups.png",
                       "dragonID": "lucio-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/lucio-dragon-dance.png"
                     },
                     {
                       "hero": "루시우",
                       "name": "Dragon Dance",
                       "id": "lucio-dragon-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/lucio-dragon-dance.png",
                       "dragonID": "lucio-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/lucio-dragon-dance.png"
                     },
                     {
                       "hero": "맥크리",
                       "name": "Call It",
                       "id": "mccree-call-it",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mccree-call-it.png",
                       "dragonID": "mccree-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mccree-dragon-dance.png"
                     },
                     {
                       "hero": "맥크리",
                       "name": "Dragon Dance",
                       "id": "mccree-dragon-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mccree-dragon-dance.png",
                       "dragonID": "mccree-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mccree-dragon-dance.png"
                     },
                     {
                       "hero": "메이",
                       "name": "Fortune",
                       "id": "mei-fortune",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mei-fortune.png",
                       "dragonID": "mei-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mei-dragon-dance.png"
                     },
                     {
                       "hero": "메이",
                       "name": "Dragon Dance",
                       "id": "mei-dragon-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mei-dragon-dance.png",
                       "dragonID": "mei-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mei-dragon-dance.png"
                     },
                     {
                       "hero": "메르시",
                       "name": "Dragon Dance",
                       "id": "mercy-dragon-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mercy-dragon-dance.png",
                       "dragonID": "mercy-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mercy-dragon-dance.png"
                     },
                     {
                       "hero": "메르시",
                       "name": "Parasol",
                       "id": "mercy-parasol",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mercy-parasol.png",
                       "dragonID": "mercy-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mercy-dragon-dance.png"
                     },
                     {
                       "hero": "파라",
                       "name": "Happy New Year",
                       "id": "pharah-happy-new-year",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/pharah-happy-new-year.png",
                       "dragonID": "pharah-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/pharah-dragon-dance.png"
                     },
                     {
                       "hero": "파라",
                       "name": "Dragon Dance",
                       "id": "pharah-dragon-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/pharah-dragon-dance.png",
                       "dragonID": "pharah-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/pharah-dragon-dance.png"
                     },
                     {
                       "hero": "리퍼",
                       "name": "Fire Blossom",
                       "id": "reaper-fire-blossom",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/reaper-fire-blossom.png",
                       "dragonID": "reaper-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/reaper-dragon-dance.png"
                     },
                     {
                       "hero": "리퍼",
                       "name": "Dragon Dance",
                       "id": "reaper-dragon-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/reaper-dragon-dance.png",
                       "dragonID": "reaper-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/reaper-dragon-dance.png"
                     },
                     {
                       "hero": "라인하르트",
                       "name": "Lion Dance",
                       "id": "reinhardt-lion-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/reinhardt-lion-dance.png",
                       "dragonID": "reinhardt-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/reinhardt-dragon-dance.png"
                     },
                     {
                       "hero": "라인하르트",
                       "name": "Dragon Dance",
                       "id": "reinhardt-dragon-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/reinhardt-dragon-dance.png",
                       "dragonID": "reinhardt-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/reinhardt-dragon-dance.png"
                     },
                     {
                       "hero": "로드호그",
                       "name": "Steamed Buns",
                       "id": "roadhog-steamed-buns",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/roadhog-steamed-buns.png",
                       "dragonID": "roadhog-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/roadhog-dragon-dance.png"
                     },
                     {
                       "hero": "로드호그",
                       "name": "Dragon Dance",
                       "id": "roadhog-dragon-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/roadhog-dragon-dance.png",
                       "dragonID": "roadhog-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/roadhog-dragon-dance.png"
                     },
                     {
                       "hero": "솔저: 76",
                       "name": "Folded Hands",
                       "id": "soldier-76-folded-hands",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/soldier-76-folded-hands.png",
                       "dragonID": "soldier-76-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/soldier-76-dragon-dance.png"
                     },
                     {
                       "hero": "솔저: 76",
                       "name": "Dragon Dance",
                       "id": "soldier-76-dragon-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/soldier-76-dragon-dance.png",
                       "dragonID": "soldier-76-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/soldier-76-dragon-dance.png"
                     },
                     {
                       "hero": "솜브라",
                       "name": "Dragon Dance",
                       "id": "sombra-dragon-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/sombra-dragon-dance.png",
                       "dragonID": "sombra-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/sombra-dragon-dance.png"
                     },
                     {
                       "hero": "솜브라",
                       "name": "Fortunate",
                       "id": "sombra-fortunate",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/sombra-fortunate.png",
                       "dragonID": "sombra-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/sombra-dragon-dance.png"
                     },
                     {
                       "hero": "시메트라",
                       "name": "Lantern",
                       "id": "symmetra-lantern",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/symmetra-lantern.png",
                       "dragonID": "symmetra-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/symmetra-dragon-dance.png"
                     },
                     {
                       "hero": "시메트라",
                       "name": "Dragon Dance",
                       "id": "symmetra-dragon-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/symmetra-dragon-dance.png",
                       "dragonID": "symmetra-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/symmetra-dragon-dance.png"
                     },
                     {
                       "hero": "토르비욘",
                       "name": "Gold",
                       "id": "torbjorn-gold",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/torbjorn-gold.png",
                       "dragonID": "torbjorn-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/torbjorn-dragon-dance.png"
                     },
                     {
                       "hero": "토르비욘",
                       "name": "Dragon Dance",
                       "id": "torbjorn-dragon-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/torbjorn-dragon-dance.png",
                       "dragonID": "torbjorn-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/torbjorn-dragon-dance.png"
                     },
                     {
                       "hero": "트레이서",
                       "name": "Fan Dance",
                       "id": "tracer-fan-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/tracer-fan-dance.png",
                       "dragonID": "tracer-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/tracer-dragon-dance.png"
                     },
                     {
                       "hero": "트레이서",
                       "name": "Dragon Dance",
                       "id": "tracer-dragon-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/tracer-dragon-dance.png",
                       "dragonID": "tracer-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/tracer-dragon-dance.png"
                     },
                     {
                       "hero": "위도우메이커",
                       "name": "Hairpin",
                       "id": "widowmaker-hairpin",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/widowmaker-hairpin.png",
                       "dragonID": "widowmaker-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/widowmaker-dragon-dance.png"
                     },
                     {
                       "hero": "위도우메이커",
                       "name": "Dragon Dance",
                       "id": "widowmaker-dragon-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/widowmaker-dragon-dance.png",
                       "dragonID": "widowmaker-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/widowmaker-dragon-dance.png"
                     },
                     {
                       "hero": "윈스턴",
                       "name": "Kite",
                       "id": "winston-kite",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/winston-kite.png",
                       "dragonID": "winston-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/winston-dragon-dance.png"
                     },
                     {
                       "hero": "윈스턴",
                       "name": "Dragon Dance",
                       "id": "winston-dragon-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/winston-dragon-dance.png",
                       "dragonID": "winston-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/winston-dragon-dance.png"
                     },
                     {
                       "hero": "자리야",
                       "name": "Calories",
                       "id": "zarya-calories",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/zarya-calories.png",
                       "dragonID": "zarya-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/zarya-dragon-dance.png"
                     },
                     {
                       "hero": "자리야",
                       "name": "Dragon Dance",
                       "id": "zarya-dragon-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/zarya-dragon-dance.png",
                       "dragonID": "zarya-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/zarya-dragon-dance.png"
                     },
                     {
                       "hero": "젠야타",
                       "name": "Yut Nori",
                       "id": "zenyatta-yut-nori",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/zenyatta-yut-nori.png",
                       "dragonID": "zenyatta-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/zenyatta-dragon-dance.png"
                     },
                     {
                       "hero": "젠야타",
                       "name": "Dragon Dance",
                       "id": "zenyatta-dragon-dance",
                       "quality": "common",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/zenyatta-dragon-dance.png",
                       "dragonID": "zenyatta-dragon-dance",
                       "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/zenyatta-dragon-dance.png"
                     },
                     {
                       "name": "Year of the Rooster",
                       "id": "year-of-the-rooster",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/year-of-the-rooster.png",
                       "quality": "common"
                     },
                     {
                       "name": "Red Envelope",
                       "id": "red-envelope",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/red-envelope.png",
                       "quality": "common"
                     },
                     {
                       "name": "Lucky Pouch",
                       "id": "lucky-pouch",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/lucky-pouch.png",
                       "quality": "common"
                     },
                     {
                       "name": "Dragon's Head",
                       "id": "dragons-head",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/dragons-head.png",
                       "quality": "common"
                     },
                     {
                       "name": "Awakened Lion",
                       "id": "awakened-lion",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/awakened-lion.png"
                     },
                     {
                       "name": "Auspicious Lion",
                       "id": "auspicious-lion",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/auspicious-lion.png"
                     }
                   ],
                   "voicelines": [
                     {
                       "hero": "아나",
                       "name": "The moon in winter",
                       "id": "ana-the-moon-in-winter",
                       "quality": "common"
                     },
                     {
                       "hero": "바스티온",
                       "name": "Woop doo woo dun woop",
                       "id": "bastion-woop-doo-woo-dun-woop",
                       "quality": "common"
                     },
                     {
                       "hero": "D.Va",
                       "name": "The best things in life",
                       "id": "dva-the-best-things-in-life",
                       "quality": "common"
                     },
                     {
                       "hero": "겐지",
                       "name": "To know yourself",
                       "id": "genji-to-know-yourself",
                       "quality": "common"
                     },
                     {
                       "hero": "한조",
                       "name": "When the moon is full",
                       "id": "hanzo-when-the-moon-is-full",
                       "quality": "common"
                     },
                     {
                       "hero": "정크랫",
                       "name": "Gong Xi Fa Cai",
                       "id": "junkrat-gong-xi-fa-cai",
                       "quality": "common"
                     },
                     {
                       "hero": "루시우",
                       "name": "I make this look good...",
                       "id": "lucio-i-make-this-look-good",
                       "quality": "common"
                     },
                     {
                       "hero": "맥크리",
                       "name": "Calls for a celebration",
                       "id": "mccree-calls-for-a-celebration",
                       "quality": "common"
                     },
                     {
                       "hero": "메이",
                       "name": "Wishing you prosperity",
                       "id": "mei-wishing-you-prosperity",
                       "quality": "common"
                     },
                     {
                       "hero": "메르시",
                       "name": "A most impressive display",
                       "id": "mercy-a-most-impressive-display",
                       "quality": "common"
                     },
                     {
                       "hero": "파라",
                       "name": "I keep the peace",
                       "id": "pharah-i-keep-the-peace",
                       "quality": "common"
                     },
                     {
                       "hero": "리퍼",
                       "name": "Now those are fireworks",
                       "id": "reaper-now-those-are-fireworks",
                       "quality": "common"
                     },
                     {
                       "hero": "라인하르트",
                       "name": "Are you chicken?",
                       "id": "reinhardt-are-you-chicken",
                       "quality": "common"
                     },
                     {
                       "hero": "로드호그",
                       "name": "You chicken?",
                       "id": "roadhog-you-chicken",
                       "quality": "common"
                     },
                     {
                       "hero": "솔저: 76",
                       "name": "The rooster crows",
                       "id": "soldier-76-the-rooster-crows",
                       "quality": "common"
                     },
                     {
                       "hero": "솜브라",
                       "name": "You're easily impressed",
                       "id": "sombra-youre-easily-impressed",
                       "quality": "common"
                     },
                     {
                       "hero": "시메트라",
                       "name": "Good fortune",
                       "id": "symmetra-good-fortune",
                       "quality": "common"
                     },
                     {
                       "hero": "토르비욘",
                       "name": "Too hot for you?",
                       "id": "torbjorn-too-hot-for-you",
                       "quality": "common"
                     },
                     {
                       "hero": "트레이서",
                       "name": "Ready for some fireworks?",
                       "id": "tracer-ready-for-some-fireworks",
                       "quality": "common"
                     },
                     {
                       "hero": "위도우메이커",
                       "name": "You have my attention",
                       "id": "widowmaker-you-have-my-attention",
                       "quality": "common"
                     },
                     {
                       "hero": "윈스턴",
                       "name": "That was awesome!",
                       "id": "winston-that-was-awesome",
                       "quality": "common"
                     },
                     {
                       "hero": "자리야",
                       "name": "Get pumped",
                       "id": "zarya-get-pumped",
                       "quality": "common"
                     },
                     {
                       "hero": "젠야타",
                       "name": "Every rooster crows",
                       "id": "zenyatta-every-rooster-crows",
                       "quality": "common"
                     }
                   ],
                   "poses": [
                     {
                       "hero": "아나",
                       "name": "Folded hands",
                       "id": "ana-folded-hands",
                       "quality": "rare",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/poses/ana-folded-hands.jpg"
                     },
                     {
                       "hero": "바스티온",
                       "name": "Firework",
                       "id": "bastion-firework",
                       "quality": "rare",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/poses/bastion-firework.jpg"
                     },
                     {
                       "hero": "D.Va",
                       "name": "Lucky Pouch",
                       "id": "dva-lucky-pouch",
                       "quality": "rare",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/poses/dva-lucky-pouch.jpg"
                     },
                     {
                       "hero": "정크랫",
                       "name": "Bad for Your Health",
                       "id": "junkrat-bad-for-your-health",
                       "quality": "rare",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/poses/junkrat-bad-for-your-health.jpg"
                     },
                     {
                       "hero": "메이",
                       "name": "Lucky!",
                       "id": "mei-lucky",
                       "quality": "rare",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/poses/mei-lucky.jpg"
                     },
                     {
                       "hero": "로드호그",
                       "name": "What's mine is mine",
                       "id": "roadhog-whats-mine-is-mine",
                       "quality": "rare",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/poses/roadhog-whats-mine-is-mine.jpg"
                     },
                     {
                       "hero": "솜브라",
                       "name": "Sparklers",
                       "id": "sombra-sparklers",
                       "quality": "rare",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/poses/sombra-sparklers.jpg"
                     }
                   ],
                   "skinsLegendary": [
                     {
                       "hero": "D.Va",
                       "name": "Palanquin",
                       "id": "dva-palanquin",
                       "quality": "legendary",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsLegendary/dva-palanquin.jpg"
                     },
                     {
                       "hero": "메이",
                       "name": "Chang'e",
                       "id": "mei-change",
                       "quality": "legendary",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsLegendary/mei-change.jpg"
                     },
                     {
                       "hero": "메이",
                       "name": "Luna",
                       "id": "mei-luna",
                       "quality": "legendary",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsLegendary/mei-luna.jpg"
                     },
                     {
                       "hero": "라인하르트",
                       "name": "Wujing",
                       "id": "reinhardt-wujing",
                       "quality": "legendary",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsLegendary/reinhardt-wujing.jpg"
                     },
                     {
                       "hero": "로드호그",
                       "name": "Bajie",
                       "id": "roadhog-bajie",
                       "quality": "legendary",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsLegendary/roadhog-bajie.jpg"
                     },
                     {
                       "hero": "윈스턴",
                       "name": "Wukong",
                       "id": "winston-wukong",
                       "quality": "legendary",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsLegendary/winston-wukong.jpg"
                     },
                     {
                       "hero": "젠야타",
                       "name": "Sanzang",
                       "id": "zenyatta-sanzang",
                       "quality": "legendary",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsLegendary/zenyatta-sanzang.jpg"
                     }
                   ],
                   "emotes": [
                     {
                       "hero": "D.Va",
                       "name": "Bow",
                       "id": "dva-bow",
                       "quality": "epic",
                       "video": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/emotes/dva-bow.webm"
                     },
                     {
                       "hero": "정크랫",
                       "name": "Dud?",
                       "id": "junkrat-dud",
                       "quality": "epic",
                       "video": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/emotes/junkrat-dud.webm"
                     },
                     {
                       "hero": "메이",
                       "name": "So Excited",
                       "id": "mei-so-excited",
                       "quality": "epic",
                       "video": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/emotes/mei-so-excited.webm"
                     }
                   ],
                   "icons": [
                     {
                       "name": "Bokimari",
                       "id": "bokimari",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/bokimari.png"
                     },
                     {
                       "name": "Chang'e",
                       "id": "mei-change",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/mei-change.png"
                     },
                     {
                       "name": "Coin",
                       "id": "coin",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/coin.png"
                     },
                     {
                       "name": "Dragon Dance",
                       "id": "dragon-dance",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/dragon-dance.png"
                     },
                     {
                       "name": "Fortune",
                       "id": "fortune",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/fortune.png"
                     },
                     {
                       "name": "Fuchimari",
                       "id": "fuchimari",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/fuchimari.png"
                     },
                     {
                       "name": "Gold",
                       "id": "gold",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/gold.png"
                     },
                     {
                       "name": "Hanbok",
                       "id": "dva-hanbok",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/dva-hanbok.png"
                     },
                     {
                       "name": "Have Fish",
                       "id": "have-fish",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/have-fish.png"
                     },
                     {
                       "name": "Lantern",
                       "id": "lantern",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/lantern.png"
                     },
                     {
                       "name": "Lion Dance",
                       "id": "lion-dance",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/lion-dance.png"
                     },
                     {
                       "name": "Lucky Pouch",
                       "id": "lucky-pouch",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/lucky-pouch.png"
                     },
                     {
                       "name": "Lunamari",
                       "id": "lunamari",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/lunamari.png"
                     },
                     {
                       "name": "Monkey",
                       "id": "winston-monkey",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/winston-monkey.png"
                     },
                     {
                       "name": "New Year Cake",
                       "id": "new-year-cake",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/new-year-cake.png"
                     },
                     {
                       "name": "Pachilantern",
                       "id": "pachilantern",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/pachilantern.png"
                     },
                     {
                       "name": "Piggy",
                       "id": "roadhog-piggy",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/roadhog-piggy.png"
                     },
                     {
                       "name": "Red Envelope",
                       "id": "red-envelope",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/red-envelope.png"
                     },
                     {
                       "name": "Sandy",
                       "id": "reinhardt-sandy",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/reinhardt-sandy.png"
                     },
                     {
                       "name": "Sanzang",
                       "id": "zenyatta-sanzang",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/zenyatta-sanzang.png"
                     },
                     {
                       "name": "Seollal",
                       "id": "seollal",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/seollal.png"
                     },
                     {
                       "name": "Tangerines",
                       "id": "tangerines",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/tangerines.png"
                     },
                     {
                       "name": "Year of the Rooster",
                       "id": "year-of-the-rooster",
                       "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/year-of-the-rooster.png"
                     }
                   ],
                   "intros": [
                     {
                       "hero": "메르시",
                       "name": "Fortune",
                       "id": "mercy-fortune",
                       "quality": "epic",
                       "video": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/intros/mercy-fortune.webm"
                     },
                     {
                       "hero": "로드호그",
                       "name": "Feast",
                       "id": "roadhog-feast",
                       "quality": "epic",
                       "video": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/intros/roadhog-feast.webm"
                     },
                     {
                       "hero": "트레이서",
                       "name": "Lion Dance",
                       "id": "tracer-lion-dance",
                       "quality": "epic",
                       "video": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/intros/tracer-lion-dance.webm"
                     }
                   ]
                 }
               }
             }
  }
})
