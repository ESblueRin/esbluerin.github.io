const ANIME_ENTRIES = [
  {
    title: "이 사람이 나의 주인님",
    titleJa: "これが私の御主人様",
    titleEn: "He Is My Master",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "하늘의 유실물",
    titleJa: "そらのおとしもの",
    titleEn: "Heaven's Lost Property",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "인피니트 스트라토스",
    titleJa: "IS〈インフィニット・ストラトス〉",
    titleEn: "Infinite Stratos",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "나는 친구가 적다",
    titleJa: "僕は友達が少ない",
    titleEn: "Haganai: I Don't Have Many Friends",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "천원돌파 그렌라간",
    titleJa: "天元突破グレンラガン",
    titleEn: "Gurren Lagann",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "건담 더블오",
    titleJa: "機動戦士ガンダム00",
    titleEn: "Mobile Suit Gundam 00",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "소드 아트 온라인",
    titleJa: "ソードアート・オンライン",
    titleEn: "Sword Art Online",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "아바타:코라의 전설",
    titleJa: "レジェンド・オブ・コーラ",
    titleEn: "The Legend of Korra",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "아바타:아앙의 전설",
    titleJa: "アバター 伝説の少年アン",
    titleEn: "Avatar: The Last Airbender",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "로젠 메이든",
    titleJa: "ローゼンメイデン",
    titleEn: "Rozen Maiden",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "괴물왕녀",
    titleJa: "怪物王女",
    titleEn: "Princess Resurrection",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "스타워즈:클론전쟁",
    titleJa: "スター・ウォーズ/クローン・ウォーズ",
    titleEn: "Star Wars: The Clone Wars",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "나루토",
    titleJa: "NARUTO -ナルト-",
    titleEn: "Naruto",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "명탐정 코난",
    titleJa: "名探偵コナン",
    titleEn: "Detective Conan",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "진격의 거인",
    titleJa: "進撃の巨人",
    titleEn: "Attack on Titan",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "경계의 저편",
    titleJa: "境界の彼方",
    titleEn: "Beyond the Boundary",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "마요치키",
    titleJa: "まよチキ!",
    titleEn: "Mayo Chiki!",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "놀러왔어!",
    titleJa: "あそびにいくヨ!",
    titleEn: "Cat Planet Cuties",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "중2병이라도 사랑이 하고싶어",
    titleJa: "中二病でも恋がしたい!",
    titleEn: "Love, Chunibyo & Other Delusions!",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "도시락 전쟁",
    titleJa: "ベン・トー",
    titleEn: "Ben-To",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "기교소녀는 상처받지 않아",
    titleJa: "機巧少女は傷つかない",
    titleEn: "Unbreakable Machine-Doll",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "아웃브레이크 컴퍼니",
    titleJa: "アウトブレイク・カンパニー",
    titleEn: "Outbreak Company",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "이세계에서 문제아들이 온다는 모양인데요?",
    titleJa: "問題児たちが異世界から来るそうですよ?",
    titleEn: "Problem Children Are Coming from Another World, Aren't They?",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "데이트 어 라이브",
    titleJa: "デート・ア・ライブ",
    titleEn: "Date A Live",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "변태왕자와 웃지 않는 고양이",
    titleJa: "変態王子と笑わない猫。",
    titleEn: "The \"Hentai\" Prince and the Stony Cat.",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "바보와 시험과 소환수",
    titleJa: "バカとテストと召喚獣",
    titleEn: "Baka and Test: Summon the Beasts",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "액셀월드",
    titleJa: "アクセル・ワールド",
    titleEn: "Accel World",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "이것은 좀비입니까?",
    titleJa: "これはゾンビですか?",
    titleEn: "Is This a Zombie?",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "마법소녀 마도카 마기카",
    titleJa: "魔法少女まどか☆マギカ",
    titleEn: "Puella Magi Madoka Magica",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "사쿠라장의 애완그녀",
    titleJa: "さくら荘のペットな彼女",
    titleEn: "The Pet Girl of Sakurasou",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "어떤과학의 초전자포",
    titleJa: "とある科学の超電磁砲",
    titleEn: "A Certain Scientific Railgun",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "어떤마술의 금서목록",
    titleJa: "とある魔術の禁書目録",
    titleEn: "A Certain Magical Index",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "건담 철혈의 오펀스",
    titleJa: "機動戦士ガンダム 鉄血のオルフェンズ",
    titleEn: "Mobile Suit Gundam: Iron-Blooded Orphans",
    logs: [
      "감상 날짜 기록 없음",
    ],
  },
  {
    title: "데이트 어 라이브 2기",
    titleJa: "デート・ア・ライブⅡ",
    titleEn: "Date A Live II",
    logs: [
      "(2014.06.21~22)",
    ],
  },
  {
    title: "노 게임 노 라이프",
    titleJa: "ノーゲーム・ノーライフ",
    titleEn: "No Game No Life",
    logs: [
      "(2014.07.04) (2014년도 2분기 넘사벽)",
    ],
  },
  {
    title: "블랙 불릿",
    titleJa: "ブラック・ブレット",
    titleEn: "Black Bullet",
    logs: [
      "(2014.07.05) (2014년도 2분기 넘사벽)",
    ],
  },
  {
    title: "신만이 아는 세계1,2기",
    titleJa: "神のみぞ知るセカイ 第1期・第2期",
    titleEn: "The World God Only Knows Seasons 1 & 2",
    logs: [
      "(2014.07.27밤~29새벽)",
    ],
  },
  {
    title: "농림",
    titleJa: "のうりん",
    titleEn: "No-Rin",
    logs: [
      "(2014.08.05밤~15일9시 55분 완료)",
    ],
  },
  {
    title: "러브라이브 1기",
    titleJa: "ラブライブ！ School idol project 第1期",
    titleEn: "Love Live! School Idol Project Season 1",
    logs: [
      "(2014.08.09 오후 3시경~2014.08.09 7시 21분경)",
    ],
  },
  {
    title: "프리즈마 이리야",
    titleJa: "Fate/kaleid liner プリズマ☆イリヤ",
    titleEn: "Fate/kaleid liner Prisma Illya",
    logs: [
      "(2014.08.12 오전 10시경~같은날 3화 까지 보고 중단)",
    ],
  },
  {
    title: "최근 내 여동생의 상태가 이상한 것 같다만",
    titleJa: "最近、妹のようすがちょっとおかしいんだが。",
    titleEn: "Recently, My Sister Is Unusual",
    logs: [
      "(2014.08.13 오전 5시~ 6시 17분경 3화까지 보고 중단)",
    ],
  },
  {
    title: "기어나와라 냐루코양",
    titleJa: "這いよれ！ニャル子さん",
    titleEn: "Haiyore! Nyaruko-san",
    logs: [
      "(2014.08.22밤~2014.08.23 오전 9시경 7화 까지 보고 중단)",
      "(언젠진 모르지만 8화를 본 기억이 있음)",
      "(2014.10.11 오후 6시 16분 9화~ 오후 7시 38분 12화)",
    ],
  },
  {
    title: "내 여자친구와 소꿉친구가 완전 수라장",
    titleJa: "俺の彼女と幼なじみが修羅場すぎる",
    titleEn: "Oreshura",
    logs: [
      "(2014.08.26오후 7시 1화)",
      "(2014. 10.19 오후 1시28분 2화~ 오후 4시 17분 9화)",
      "(2014.10.24 오후 9시 3분 10화 ~ 오후 10 29분 13화)",
    ],
  },
  {
    title: "사랑과 선거와 초콜릿",
    titleJa: "恋と選挙とチョコレート",
    titleEn: "Love, Election and Chocolate",
    logs: [
      "(2014.08.29 저녁 9시 48분~",
    ],
  },
  {
    title: "러브라이브 2기",
    titleJa: "ラブライブ！ School idol project 第2期",
    titleEn: "Love Live! School Idol Project Season 2",
    logs: [
      "(2014.09.05 오후 9시 34분~2014.09.05 오전 00시 15분 7화)",
    ],
  },
  {
    title: "신만이 아는 세계 여신편",
    titleJa: "神のみぞ知るセカイ 女神篇",
    titleEn: "The World God Only Knows: Goddesses",
    logs: [
      "(2014.09.06 오후 8시 34분~ 2014.09.07 오전 1시)",
    ],
  },
  {
    title: "극장판 하늘의 유실물 final : 영원한 내 새장",
    titleJa: "そらのおとしものFinal 永遠の私の鳥籠",
    titleEn: "Heaven's Lost Property Final: Eternal My Master",
    logs: [
      "(2014.09.07 오후 6시 25분~2014.09.07 오후 8시 23분)",
    ],
  },
  {
    title: "길티 크라운",
    titleJa: "ギルティクラウン",
    titleEn: "Guilty Crown",
    logs: [
      "(2014.09.08 오후 9시 28분~ 2014.09.09 오전 12시 14분 8화)",
      "(2014.09.09 오후 9시 44분 9화~2014.09.10 오전 2시 33분 22화)",
    ],
  },
  {
    title: "오다 노부나의 야망",
    titleJa: "織田信奈の野望",
    titleEn: "The Ambition of Oda Nobuna",
    logs: [
      "(2014.09.12 오후 11시 ~2014.09.13 오전 1시 33분 6화)",
      "(2014.09.13 오후 3시 06분 7화~2014.09.13 오후 5시 13분 13화)",
    ],
  },
  {
    title: "니세코이",
    titleJa: "ニセコイ",
    titleEn: "Nisekoi",
    logs: [
      "(2014.10.01 오후 2시 45분~ 오후 4시 2분 4화)",
      "(2014.10.02 오후 9시 36분 5화~ 오후 11시 52분 10화)",
      "(2014.10.08 오후 8시 14분 11화~ 오후 10시 23분 16화)",
      "(2014.10.10 오후 9시 41분 17화~ 오후 11시 07분 20화)",
    ],
  },
  {
    title: "어떤마술의 금서목록 극장판",
    titleJa: "劇場版 とある魔術の禁書目録 エンデュミオンの奇蹟",
    titleEn: "A Certain Magical Index: The Movie – The Miracle of Endymion",
    logs: [
      "(2014.10.02 오전 10시 22분~ 오전 11시 49분)",
    ],
  },
  {
    title: "도쿄구울",
    titleJa: "東京喰種トーキョーグール",
    titleEn: "Tokyo Ghoul",
    logs: [
      "(2014.10.25 오후3시 54분~ 오후 8시 18분 12화)",
    ],
  },
  {
    title: "로그호라이즌1기",
    titleJa: "ログ・ホライズン 第1シリーズ",
    titleEn: "Log Horizon Season 1",
    logs: [
      "(2014.11.02 오전 8시 5분~ 오후 12시 21분 11화)",
      "(2014. 11.02 오후 1시 49분 12화~ 오후 3시 32분 16화 중간)",
      "(2014. 11.02 오후 3시 41분(16화 중간)~ 5시 12분 20화)",
      "(2014. 11. 07 오후 시 30분  21화~ 오후 11시 19분 25화)",
    ],
  },
  {
    title: "정령사의 검무",
    titleJa: "精霊使いの剣舞",
    titleEn: "Blade Dance of the Elementalers",
    logs: [
      "(2014.12.14 오후 12시 43분~ 오후 2시 07분 4화 후반)",
      "(2014.12.14 오후 2시 30분 4화 후반~ 오후 3시 10분 6화 후반)",
      "(2014.12.14오후 3시 21분 6화 후반~ 오후 5시 35분 12화)",
    ],
  },
  {
    title: "아마기 브릴리언트 파크",
    titleJa: "甘城ブリリアントパーク",
    titleEn: "Amagi Brilliant Park",
    logs: [
      "(2014.12.28 오후 1시 53분~ 오후 6시 20분 13화 중반)",
      "(2014.12.28 오후 6시 29분 13화 중반~ 오후 6시 38분 13화)",
    ],
  },
  {
    title: "니세코이 OVA 1화",
    titleJa: "ニセコイ OVA 第1話",
    titleEn: "Nisekoi OVA Episode 1",
    logs: [
      "(2014.12.31 오후 2시 3분~ 오후 2시 32분)",
    ],
  },
  {
    title: "류가조 나나나의 매장금",
    titleJa: "龍ヶ嬢七々々の埋蔵金",
    titleEn: "Nanana's Buried Treasure",
    logs: [
      "(2015년 1월 1일 오후 4시 44분~7시 58분 10화 중간 11분13초)",
      "(2014년 1월 1일 오후 11시 28분 10화~ 2014년 1월 2일  오전 0시 00분 11화)",
    ],
  },
  {
    title: "소드 아트 온라인 2기-팬텀불릿",
    titleJa: "ソードアート・オンラインII ファントム・バレット",
    titleEn: "Sword Art Online II: Phantom Bullet",
    logs: [
      "(2015년 1월 10일 오후 2시 51분~ 오후 5시 52분 9화 10분 27초)",
      "(2015년 1월 10일 오후 5시 55분 9화~ 오후 8시 11분 14.5화)",
    ],
  },
  {
    title: "역시 내 청춘 러브코미디는 잘못되었다. 1기",
    titleJa: "やはり俺の青春ラブコメはまちがっている。 第1期",
    titleEn: "My Teen Romantic Comedy SNAFU Season 1",
    logs: [
      "(2015년 1월 16일 오후 9시 53분~ 오후 10시 17분 1화)",
    ],
  },
  {
    title: "소드 아트 온라인 2기- 액스캘리버",
    titleJa: "ソードアート・オンラインII キャリバー",
    titleEn: "Sword Art Online II: Calibur",
    logs: [
      "(2015년 1월 17일 오전 10시 45분 15화 ~ 17화 11시 50분)",
    ],
  },
  {
    title: "소드 아트 온라인 2기- 마더즈 로자리오",
    titleJa: "ソードアート・オンラインII マザーズ・ロザリオ",
    titleEn: "Sword Art Online II: Mother's Rosario",
    logs: [
      "(2015년 1월 17일 1시 19분 18화~ 3시 48분 24화)",
    ],
  },
  {
    title: "단칸방의 침략자",
    titleJa: "六畳間の侵略者!?",
    titleEn: "Invaders of the Rokujouma!?",
    logs: [
      "(2015년 2월 07일 오전 9시 30분~ 8화 12분 59초 오후 12시 08분)",
      "2015년 2월 8일 오후 7시 9분  8화 12분 59초~ 오후 8시 44분)",
    ],
  },
  {
    title: "트리니티 세븐",
    titleJa: "トリニティセブン",
    titleEn: "Trinity Seven",
    logs: [
      "(2015년 2월 20일 오전 1시 6분~ 6화 오전 3시 13분)",
      "(2015년 2월 20일 오전 10시 2분 7화~ 11화 7분 53초 오전 11시 36분)",
      "(2015년 2월 20일 오후 6시 11화 7분  53초~ 12화 6시 36분)",
    ],
  },
  {
    title: "낙원 추방",
    titleJa: "楽園追放 -Expelled from Paradise-",
    titleEn: "Expelled from Paradise",
    logs: [
      "(2015년 3월 13일 오후 8시 ~ 9시 40분)",
    ],
  },
  {
    title: "시원찮은 그녀의 육성법",
    titleJa: "冴えない彼女の育てかた",
    titleEn: "Saekano: How to Raise a Boring Girlfriend",
    logs: [
      "(2015년 4월 04일 오후 6시 55분~ 9화 12분 49초 오후 9시 49분)",
      "(2015년 4월 4일 오후 10시 6분~ 12화 오후 11시 15분)",
    ],
  },
  {
    title: "구구레 코쿠리상",
    titleJa: "繰繰れ！コックリさん",
    titleEn: "Gugure! Kokkuri-san",
    logs: [
      "(2015년 5월 3일 오전 7시 39분~ 8화 오전 10시 27분)",
    ],
  },
  {
    title: "로그 호라이즌 2기",
    titleJa: "ログ・ホライズン 第2シリーズ",
    titleEn: "Log Horizon Season 2",
    logs: [
      "(2015년 5월 3일 오후 12시 56분~ 12화 오후 5시 9분)",
      "(2015년 5월 9일 오후 10시 17분 13화 ~ 5월 10일 오전 2시 51분 25화)",
    ],
  },
  {
    title: "알드노아 제로",
    titleJa: "アルドノア・ゼロ",
    titleEn: "Aldnoah.Zero",
    logs: [
      "(2015년 6월 6일 오후 8시 51분~ 12화 2015년 6월 7일 오전 1시 01분 )",
    ],
  },
  {
    title: "알드노아 제로 2기",
    titleJa: "アルドノア・ゼロ 第2期",
    titleEn: "Aldnoah.Zero Season 2",
    logs: [
      "(2015년 6월 7일 오전 9시 26분~ 12화 2015년 6월 7일 오후 1시 37분",
    ],
  },
  {
    title: "앱솔루트 듀오",
    titleJa: "アブソリュート・デュオ",
    titleEn: "Absolute Duo",
    logs: [
      "(2015년 6월 14일 오전 11시 05분~ 8화 14분 01초 2015년 6월 14일 오후 1시 32분)",
      "( 2015년 6월 20일  오후 4시 6분 8화~ 12화 2015년 6월 20일 오후 5시 55분)",
    ],
  },
  {
    title: "종말의 세라프",
    titleJa: "終わりのセラフ",
    titleEn: "Seraph of the End",
    logs: [
      "(2015년 7월 10일 오후 9시  18분~ 12화 2015년 7월 11일 오전 1시 24분)",
    ],
  },
  {
    title: "던전에서 만남을 추구하면 안되는 걸까?",
    titleJa: "ダンジョンに出会いを求めるのは間違っているだろうか",
    titleEn: "Is It Wrong to Try to Pick Up Girls in a Dungeon?",
    logs: [
      "(2015년 7월 11일 오전 11시 46분~ 2015년 7월 11일 오후 4시 15분)",
    ],
  },
  {
    title: "이능배틀은 일상계 속에서",
    titleJa: "異能バトルは日常系のなかで",
    titleEn: "When Supernatural Battles Became Commonplace",
    logs: [
      "(2015년 7월 18일 오후 9시 14분~ 7화 2015년 7월 18일 오후 11시 42분)",
    ],
  },
  {
    title: "니세코이2기",
    titleJa: "ニセコイ:",
    titleEn: "Nisekoi Season 2",
    logs: [
      "(2015년 7월 26일 오후 12시 01분~ 2화 10분 24초 2015년 7월 26일 오후 12시 35분)",
      "(2015년 7월 27일 오후 1시 02분 2화 10분 24초~ 2015년 7월 27일 오후 4시 32분)",
    ],
  },
  {
    title: "야마다군과 7인의 마녀",
    titleJa: "山田くんと7人の魔女",
    titleEn: "Yamada-kun and the Seven Witches",
    logs: [
      "(2015년 8월 9일 오후 4시 16분~ 12화 2015년 8월 9일 오후 8시 35분)",
      "(OAD 1 2015년 8월 9일 오후 8시 36분~ 2015년 8월 9일 오후 8시 59분)",
    ],
  },
  {
    title: "테라포마스",
    titleJa: "テラフォーマーズ",
    titleEn: "Terra Formars",
    logs: [
      "(2015년 8월 14일 오후 11시 17분~ 2015년 8월 15일 오전 3시 46분)",
    ],
  },
  {
    title: "암살교실",
    titleJa: "暗殺教室",
    titleEn: "Assassination Classroom",
    logs: [
      "(2015년 8월 23일 오전11시 28분~ 11화 2015년 8월 23일 오후 3시 10분)",
    ],
  },
  {
    title: "공전마도사 후보생의 교관",
    titleJa: "空戦魔導士候補生の教官",
    titleEn: "Sky Wizards Academy",
    logs: [
      "(2015년 9월 26일 오후 5시 52분~ 2015년 9월 26일 오후 9시 57분)",
    ],
  },
  {
    title: "샬롯",
    titleJa: "Charlotte",
    titleEn: "Charlotte",
    logs: [
      "(2015년 9월 29일 오후 08시 06분~ 3화 2015년 9월 29일 오후 9시 17분)",
      "(2015년 9월 30일 오전 08시 37분 4화~ 13화 2015년 9월 30일 오후 00시 19분)",
    ],
  },
  {
    title: "Gate- 자위대 그의 땅에서, 이처럼 싸우며",
    titleJa: "GATE 自衛隊 彼の地にて、斯く戦えり",
    titleEn: "Gate: Thus the JSDF Fought There!",
    logs: [
      "2015년 10월 3일 오후 11시 4분~ 2015년 10월 4일 오전 3시 17분)",
    ],
  },
  {
    title: "건어물 여동생 우마루",
    titleJa: "干物妹！うまるちゃん",
    titleEn: "Himouto! Umaru-chan",
    logs: [
      "(2015년 10월 18일 오후 12시 28분~ 2015년 10월 18일 오후 4시 34분)",
    ],
  },
  {
    title: "오버로드",
    titleJa: "オーバーロード",
    titleEn: "Overlord",
    logs: [
      "(2015년 10월 31일 오후 10시 54분~ 2015년 11월 01일 오전 3시 25분)",
    ],
  },
  {
    title: "갓 이터",
    titleJa: "ゴッドイーター",
    titleEn: "God Eater",
    logs: [
      "(2015년 11월 7일 오후 7시 23분~ 8화 2015년 11월 7일 오후 10시 14분)",
      "(2015년 11월 7일 오후 10시 22분 8화 ~ 9화 2015년 11월 7일 오후 10시 45분)",
    ],
  },
  {
    title: "낙제기사의 영웅담",
    titleJa: "落第騎士の英雄譚",
    titleEn: "Chivalry of a Failed Knight",
    logs: [
      "(2015년 12월 31일 오후 9시 10분~ 12화 2016년 1월 1일 오전 1시 26분)",
    ],
  },
  {
    title: "학전도시 애스터리스크",
    titleJa: "学戦都市アスタリスク",
    titleEn: "The Asterisk War",
    logs: [
      "(2016년 1월 2일 오후 9시 29분~ 7화 2016년 1월 2일 오후 11시 55분)",
      "2016년 1월 3일 오전 9시 06분 8화~ 12화 2016년 1월 3일 오전 10시 50분)",
    ],
  },
  {
    title: "원펀맨",
    titleJa: "ワンパンマン",
    titleEn: "One-Punch Man",
    logs: [
      "(2016년 1월 16일 오후 9시 00분~ 12화 2016년 1월 17일 오전 12시 13분)",
    ],
  },
  {
    title: "종말의 세라프 2기",
    titleJa: "終わりのセラフ 名古屋決戦編",
    titleEn: "Seraph of the End: Battle in Nagoya",
    logs: [
      "(2016년 1월 30일 오전 11시 19분~ 12화 2016년 1월 30일 오후 3시 32분)",
    ],
  },
  {
    title: "아르슬란 전기",
    titleJa: "アルスラーン戦記",
    titleEn: "The Heroic Legend of Arslan",
    logs: [
      "(2016년 2월 05일 오후 9시 17분~ 3화 2016년 2월 05일 오후10시 22분)",
      "(2016년 2월 5일 오후 10시 28분 4화 ~ 4화 2016년 2월 5일 오후 10시 49분)",
      "(2015년 2월 5일 오후 11시 03분 5화~ 12화 2016년 2월 6일 오전 1시 54분)",
      "(2016년 2월 6일 오후 3시 32분 13화~ 15화 2016년 2월 6일 오후 4시 56분)",
      "(2016년 2월 8일 오후 4시 05분 16화~ 25화 2016년 2월 8일 오후 7시 37분)",
    ],
  },
  {
    title: "시도니아의 기사",
    titleJa: "シドニアの騎士",
    titleEn: "Knights of Sidonia",
    logs: [
      "(2016년 2월 27일 오후 8시 11분~ 12화 2016년 2월 28일 오전 12시 21분)",
    ],
  },
  {
    title: "시도니아의 기사 제 9행성 전역",
    titleJa: "シドニアの騎士 第九惑星戦役",
    titleEn: "Knights of Sidonia: Battle for Planet Nine",
    logs: [
      "(2016년 2월 28일 오전 9시 59분~  12화 2016년 2월 28일 오후 2시 02분)",
    ],
  },
  {
    title: "아인",
    titleJa: "亜人",
    titleEn: "Ajin: Demi-Human",
    logs: [
      "(2016년 5월 28일 오후 9시 09분 ~ 13화 5월 29분 오전 1시 40분)",
    ],
  },
  {
    title: "학전도시 애스터리스크",
    titleJa: "学戦都市アスタリスク",
    titleEn: "The Asterisk War",
    logs: [
      "(2016년 10월 12일 오전 11시 36분 13화~ 16화 2016년 10월 12일 오후 1시 2분)",
      "(2016년 10월 13일 오전 5시 52분 17화~ 18화 2016년 10월 13일 오전 6시 34분)",
      "(2016년 10월 14일 오후 7시 5분 19화~ 24화 2016년 10월 14일  오후 9시 14분)",
    ],
  },
  {
    title: "Gate- 자위대 그의 땅에서, 이처럼 싸우며 (2기) - 우익주의",
    titleJa: "GATE 自衛隊 彼の地にて、斯く戦えり 炎龍編",
    titleEn: "Gate Season 2",
    logs: [
      "(2017년 1월 13일 오후 7시 05분 13화(1화) ~ 24화(12화) 2017년 1월 13일 오후 11시 15분)",
    ],
  },
  {
    title: "아인 2기",
    titleJa: "亜人 第2クール",
    titleEn: "Ajin Season 2",
    logs: [
      "(2017년 1월 23일 오후 5시 38분 14화~ 26화 2017년 1월 23일 오후 10시 12분)",
    ],
  },
  {
    title: "온라인 게임의 신부는 여자아이가 아니라고 생각한 거야?",
    titleJa: "ネトゲの嫁は女の子じゃないと思った？",
    titleEn: "And You Thought There Is Never a Girl Online?",
    logs: [
      "(2017년 1월 27일 오전 9시 56분 1화 ~ 2화 2017년 1월 27일 1월 27일)",
      "(2017년 1월 28일 오후 2시 25분 3화 ~ 2017년 1월 28일 오후 5시 51분)",
    ],
  },
  {
    title: "마사무네의 리벤지",
    titleJa: "政宗くんのリベンジ",
    titleEn: "Masamune-kun's Revenge",
    logs: [
      "2017년 03월 26일 오전 10시 42분 1화~ 5화 2017년 03월 26일 오후 12시 27분",
      "2017년 03월 26일 오후 12시 53분 6화~ 12화 2017년 03월 26일 오후 03시 22분",
    ],
  },
  {
    title: "테라포마스 리벤지",
    titleJa: "テラフォーマーズ リベンジ",
    titleEn: "Terra Formars Revenge",
    logs: [
      "2017년 05월 17일 오전 10시 42분 1화~ 13화 2017년 05월 17일 오후3시 13분",
    ],
  },
  {
    title: "변변찮은 마술강사와 금기교전",
    titleJa: "ロクでなし魔術講師と禁忌教典",
    titleEn: "Akashic Records of Bastard Magic Instructor",
    logs: [
      "2017년 07월 23일 오전 10시 32분 1화 ~ 10화 중간 2017년 07월 23일 오후 2시 15분",
      "2017년 07월 23일 오후 3시 15분 10화 중간 ~ 12화 2017년 07월 23일 오후 4시 12분",
    ],
  },
  {
    title: "최약무패의 신장기룡",
    titleJa: "最弱無敗の神装機竜",
    titleEn: "Undefeated Bahamut Chronicle",
    logs: [
      "2017년 12월 25일 오후 1시 44분 1화 ~ 10화 중간 2017년 12월 25일 오후 5시 06분",
      "2017년 12월 30일 오후 6시 06분 10화 중간~ 12화 2017년 12월 30일 오후 7시 03분",
    ],
  },
  {
    title: "아르슬란 전기 2기 풍진난무",
    titleJa: "アルスラーン戦記 風塵乱舞",
    titleEn: "The Heroic Legend of Arslan: Dust Storm Dance",
    logs: [
      "2017년 12월 31일 오후 3시 15분 1화~ 8화 2017년 12월 31일 오후 6시 09분",
    ],
  },
  {
    title: "이누야시키",
    titleJa: "いぬやしき",
    titleEn: "Inuyashiki",
    logs: [
      "2017년 1월 14일 오후 4시 00분 1화 ~  11화 초반 2017년1월 14일 7시 23분",
      "2017년1월 14일 7시 47분 11화 초반 ~ 11화 2017년1월 14일 8시 08분",
    ],
  },
  {
    title: "어서오세요 실력지상주의 교실에",
    titleJa: "ようこそ実力至上主義の教室へ",
    titleEn: "Classroom of the Elite",
    logs: [
      "2017년 1월 20일 오후 8시 31분 1화~ 7화 11분 39초 2017년 1월 20일 오후 10시 58분",
      "2017년 1월 20일 오후 11시 03분 7화 11분 40초 ~ 12화  2017년 1월 21일 오전 1시 07분",
    ],
  },
  {
    title: "블렌드 S",
    titleJa: "ブレンド・S",
    titleEn: "Blend S",
    logs: [
      "2018년 1월 28일 오후 9시 38분 1화 ~ 9화 2018년 1월 29일 오전 12시 43분",
      "2018년 2월 03일 오후 4시 54분 ~ 12화 2월 03일 오후 5시 58분",
    ],
  },
  {
    title: "진격의 거인 2기",
    titleJa: "進撃の巨人 Season 2",
    titleEn: "Attack on Titan Season 2",
    logs: [
      "2018년 1월 28일 오후 8시 46분 1화 ~ 12화  2018년 1월 29일 오전 12시 54분",
    ],
  },
  {
    title: "정해하는 카도",
    titleJa: "正解するカド",
    titleEn: "KADO: The Right Answer",
    logs: [
      "2018년 2월 8일 오후 10시 14분 1화 ~ 12화 2018년 2월 9일 오전 2시 19분",
    ],
  },
  {
    title: "극장판 데이트 어 라이브 마유리 저지먼트",
    titleJa: "劇場版デート・ア・ライブ 万由里ジャッジメント",
    titleEn: "Date A Live Movie: Mayuri Judgment",
    logs: [
      "2018년 2월 11일 오후 9시 42분 ~ 2018년 2월 11일 오후 10시 50분",
    ],
  },
  {
    title: "에로망가 선생",
    titleJa: "エロマンガ先生",
    titleEn: "Eromanga Sensei",
    logs: [
      "2018년 2월 16일 오후 10시 10분 1화 ~ 8화 2018년 2월 17일 오전 12시 58분",
      "2018년 2월 17일 오후 7시 02분 9화 ~ 12화 2018년 2월 17일 오후 8시 27분",
    ],
  },
  {
    title: "메이드 인 어비스",
    titleJa: "メイドインアビス",
    titleEn: "Made in Abyss",
    logs: [
      "2018년 3월 1일 오후 12시 51분 1화 ~ 13화 2018년 3월 1일 오후 5시 47분",
    ],
  },
  {
    title: "노 게임 노 라이프 제로",
    titleJa: "ノーゲーム・ノーライフ ゼロ",
    titleEn: "No Game No Life: Zero",
    logs: [
      "2018년 3월 18일 오후 7시 50분 ~ 2018년 03월 18일 9시 36분",
    ],
  },
  {
    title: "소드 아트 온라인 오디널 스케일",
    titleJa: "劇場版 ソードアート・オンライン -オーディナル・スケール-",
    titleEn: "Sword Art Online The Movie: Ordinal Scale",
    logs: [
      "2018년 4월 13일 오후 10시 46분 ~ 2018년 4월 14일 오전 12시 43분",
    ],
  },
  {
    title: "월요일의 타와와",
    titleJa: "月曜日のたわわ",
    titleEn: "Tawawa on Monday",
    logs: [
      "2018년 9월 16일 오전 12시 39분 1화 ~ 14화 2018년 9월 16일 오전 1시 33분",
    ],
  },
  {
    title: "데스마치에서 시작되는 이세계 광상곡",
    titleJa: "デスマーチからはじまる異世界狂想曲",
    titleEn: "Death March to the Parallel World Rhapsody",
    logs: [
      "2018년 11월 24일 오후 11시 09분 1화 ~ 12화 2018년 11월 25일 오전 3시 25분",
    ],
  },
  {
    title: "오버로드 2기",
    titleJa: "オーバーロードII",
    titleEn: "Overlord II",
    logs: [
      "2018년 12월 02일 오전 9시 32분 1화 ~ 10화 중간 2018년 12월 02일 오후 1시 00분",
      "2018년 12월 02일 오후 1시 07분 10화 중간 ~  12화 중간 2018년 12월 02일 오후 1시 43분",
      "2018년 12월 02일 오후 2시 26분 12화 중간 ~ 13화 2018년 12월 02일 오후 3시 11분",
    ],
  },
  {
    title: "오버로드 3기",
    titleJa: "オーバーロードIII",
    titleEn: "Overlord III",
    logs: [
      "2018년 12월 02일 오후 3시 29분 1화 ~ 13화 2018년 12월 02일 오후 8시 14분",
    ],
  },
  {
    title: "일하는 세포",
    titleJa: "はたらく細胞",
    titleEn: "Cells at Work!",
    logs: [
      "2018년 12월 05일 오후 2시 51분 1화 〜 3화 2018년 12월 05일 오후 03시 55분",
    ],
  },
  {
    title: "건어물 여동생! 우마루짱 R",
    titleJa: "干物妹！うまるちゃんR",
    titleEn: "Himouto! Umaru-chan R",
    logs: [
      "2018년 12월 08일 오후 2시 59분 1화 〜 2화 2018년 12월 08일 오후 3시 41분",
    ],
  },
  {
    title: "ssss.그리드맨",
    titleJa: "SSSS.GRIDMAN",
    titleEn: "SSSS.Gridman",
    logs: [
      "2018년 12월 30일 오후 12시 19분 1화 ~ 12화 2018년 12월 30일 오후 4시 40분",
    ],
  },
  {
    title: "팝팀에픽",
    titleJa: "ポプテピピック",
    titleEn: "Pop Team Epic",
    logs: [
      "2018년 12월 30일 오후 8시 32분 1화 ~ 8화 중간 2018년 12월 30일 오후 9시 43분",
    ],
  },
  {
    title: "청춘 돼지는 바니걸 선배의 꿈을 꾸지 않는다",
    titleJa: "青春ブタ野郎はバニーガール先輩の夢を見ない",
    titleEn: "Rascal Does Not Dream of Bunny Girl Senpai",
    logs: [
      "2019년 2월 9일 오후 2시 33분 1화 ~ 8화 22분 2019년 2월 9일 오후 5시 41분",
      "2019년 2월 9일 오후 5시 57분 8화 22분 ~ 13화 2019년 2월 9일 오후 7시 58분",
    ],
  },
  {
    title: "고블린 슬레이어",
    titleJa: "ゴブリンスレイヤー",
    titleEn: "Goblin Slayer",
    logs: [
      "2019년 2월 19일 오후 2시 38분 1화 ~ 12화 2019년 2월 19일 오후 6시 55분",
    ],
  },
  {
    title: "전생했더니 슬라임인 건에 대하여",
    titleJa: "転生したらスライムだった件",
    titleEn: "That Time I Got Reincarnated as a Slime",
    logs: [
      "2019년 3월 31일 오후 2시 26분 1화 ~ 21회 2019년 3월 31일 오후 9시 52분",
      "2019년 3월 31일 오후 10시 38분 22화 ~ 2019년 4월 1일 오전 12시 05분",
    ],
  },
  {
    title: "소드 아트 온라인 엘리시제이션",
    titleJa: "ソードアート・オンライン アリシゼーション",
    titleEn: "Sword Art Online: Alicization",
    logs: [
      "2019년 4월 06일 오후 1시 04분 1화 ~24화  2019년 4월 06일 오후 10시 27분",
    ],
  },
  {
    title: "이세계 마왕과 소환 소녀의 노예마술",
    titleJa: "異世界魔王と召喚少女の奴隷魔術",
    titleEn: "How Not to Summon a Demon Lord",
    logs: [
      "2019년 5월 08일 오후 9시 36분 1화 ~ 12화 2019년 5월 09일 오전 1시 52분",
    ],
  },
  {
    title: "카구야 님은 고백받고 싶어 ~천재들의 연애 두뇌전~ (연애물 명작)",
    titleJa: "かぐや様は告らせたい〜天才たちの恋愛頭脳戦〜",
    titleEn: "Kaguya-sama: Love Is War",
    logs: [
      "2019년 5월 25일 오후 2시 35분 1화 ~ 12화 2019년 5월 25일 오후 6시 59분",
    ],
  },
  {
    title: "진격의 거인 3기",
    titleJa: "進撃の巨人 Season 3",
    titleEn: "Attack on Titan Season 3",
    logs: [
      "2019년 6월 22일 오전 9시 38분 1화 ~ 9화 중간 2019년 6월 22일 오후 12시 41분",
      "2019년 6월 22일 오후 1시 10분 9화 중간 ~ 12화 2019년 6월 22일 오후 2시 19분",
    ],
  },
  {
    title: "방패용사 성공담",
    titleJa: "盾の勇者の成り上がり",
    titleEn: "The Rising of the Shield Hero",
    logs: [
      "2019년 6월 29일 오후 2시 53분 1화 ~ 13화 초반 2019년 6월 29일 오후 7시 29분",
      "2019년 6월 29일 오후 8시 10분 13화 초반  ~ 25화 2019년 6월 30일 오전 12시 44분",
    ],
  },
  {
    title: "5등분의 신부",
    titleJa: "五等分の花嫁",
    titleEn: "The Quintessential Quintuplets",
    logs: [
      "2019년 7월 05일 오후 3시 12분 1화 ~  5화 2019년 7월 05일 오후 5시 04분",
    ],
  },
  {
    title: "진격의 거인 season 3 (2019)",
    titleJa: "進撃の巨人 Season 3 (2019)",
    titleEn: "Attack on Titan Season 3 (2019)",
    logs: [
      "2019년 7월 27일 오전 10시 40분 1화 ~ 10화 2019년 7월 27일 오후 2시 12분",
    ],
  },
  {
    title: "백련의 패왕과 성약의 발키리",
    titleJa: "百錬の覇王と聖約の戦乙女",
    titleEn: "The Master of Ragnarok & Blesser of Einherjar",
    logs: [
      "2019년 8월 10일 오후 3시 04분 1화 ~ 12화  2019년 8월 10일 오후 7시 23분",
    ],
  },
  {
    title: "칠성의 스바루",
    titleJa: "七星のスバル",
    titleEn: "Seven Senses of the Re'Union",
    logs: [
      "2019년 9월 03일 오전 11시 33분 1화 ~ 12화 2019년 9월 03일 오후 3시 52분",
    ],
  },
  {
    title: "던전에서 만남을 추구하면 안되는 걸까 오리온의 화살",
    titleJa: "劇場版 ダンジョンに出会いを求めるのは間違っているだろうか -オリオンの矢-",
    titleEn: "Is It Wrong to Try to Pick Up Girls in a Dungeon?: Arrow of the Orion",
    logs: [
      "2019년 9월 05일 오후 2시 02분 ~ 2019년 9월 05일 오후 3시 20분",
    ],
  },
  {
    title: "현자의 손자",
    titleJa: "賢者の孫",
    titleEn: "Wise Man's Grandchild",
    logs: [
      "2019년 9월 10일 오후 9시 15분 1화 ~  12화 2019년 9월 11일 오전 1시 41분",
    ],
  },
  {
    title: "던전에서 만남을 추구하면 안되는 걸까? 2기",
    titleJa: "ダンジョンに出会いを求めるのは間違っているだろうかII",
    titleEn: "Is It Wrong to Try to Pick Up Girls in a Dungeon? II",
    logs: [
      "2019년 10월 03일 오전 8시 56분 1화 ~ 6화 2019년 10월 03일 오전 11시 1분",
      "2019년 10월 03일 오후 3시 45분 7화 ~ 12화 2019년 10월 03일 오후 5시 50분",
    ],
  },
  {
    title: "흔해빠진 직업으로 세계최강",
    titleJa: "ありふれた職業で世界最強",
    titleEn: "Arifureta: From Commonplace to World's Strongest",
    logs: [
      "2019년 12월 18일 오전 1시 38분 1화 ~ 12화 2019년 12월 18일 오전 5시 49분",
      "2019년 12월 27일 오전 9시 38분 13화 ~ 13화 2019년 12월 27일 오전 10시 01분",
    ],
  },
  {
    title: "저 능력치는 평균으로 해달라고 했잖아요",
    titleJa: "私、能力は平均値でって言ったよね！",
    titleEn: "Didn't I Say to Make My Abilities Average in the Next Life?!",
    logs: [
      "2020년 1월 2일 오전 2시 51분 1화 ~ 6화 2020년 1월 2일 오전 5시 05분",
    ],
  },
  {
    title: "전생했더니 슬라임인 건에 대하여 2기",
    titleJa: "転生したらスライムだった件 第2期",
    titleEn: "That Time I Got Reincarnated as a Slime Season 2",
    logs: [
      "2021년 06월 24일 오후 12시 49분 1화 ~ 13화 2021년 06월 24일 오후 5시 26분",
    ],
  },
  {
    title: "애니메이션 원룸 1기",
    titleJa: "One Room 第1期",
    titleEn: "One Room Season 1",
    logs: [
      "2021년 06월 27일 오후 2시 25분 1화 ~ 12화 2021년 06월 27일 오후 3시 10분",
    ],
  },
  {
    title: "애니메이션 원룸 2기",
    titleJa: "One Room セカンドシーズン",
    titleEn: "One Room Season 2",
    logs: [
      "2021년 06월 27일 오후 3시 12분 1화 ~ 13화 2021년 06월 27일 오후 4시 3분",
    ],
  },
  {
    title: "애니메이션 원룸 3기",
    titleJa: "One Room サードシーズン",
    titleEn: "One Room Season 3",
    logs: [
      "2021년 06월 27일 오후 4시 4분 1화 ~ 12화 2021년 06월 27일 오후 4시 50분",
    ],
  },
  {
    title: "소드 아트 온라인 엘리시제이션 : war of Underworld 1쿨",
    titleJa: "ソードアート・オンライン アリシゼーション War of Underworld 第1クール",
    titleEn: "Sword Art Online: Alicization – War of Underworld Part 1",
    logs: [
      "2021년 06월 28일 오후 2시 7분 1화 ~ 13화 2021년 06월 28일 오후 6시 40분",
    ],
  },
  {
    title: "소드 아트 온라인 엘리시제이션 : war of Underworld 2쿨",
    titleJa: "ソードアート・オンライン アリシゼーション War of Underworld 第2クール",
    titleEn: "Sword Art Online: Alicization – War of Underworld Part 2",
    logs: [
      "2021년 06월 30일 오후 1시 20분 1화 ~ 12화 2021년 06월 30일 오후 5시 34분",
    ],
  },
  {
    title: "카구야 님은 고백받고 싶어 ~천재들의 연애 두뇌전~ 2기",
    titleJa: "かぐや様は告らせたい？〜天才たちの恋愛頭脳戦〜",
    titleEn: "Kaguya-sama: Love Is War Season 2",
    logs: [
      "2021년 07월 14일 오후 2시 35분 1화 ~ 11화 2021년 07월 14일 06시 40분",
      "2021년 07월 14일 오후 7시 31분 12화 ~ 12화 2021년 07월 14일 오후 7시 59분",
    ],
  },
  {
    title: "던전에서 만남을 추구하면 안되는 걸까 3기",
    titleJa: "ダンジョンに出会いを求めるのは間違っているだろうかIII",
    titleEn: "Is It Wrong to Try to Pick Up Girls in a Dungeon? III",
    logs: [
      "2021년 07월 24일 오후 2시 13분 1화 ~ 10화 2021년 07월 24일 오후 5시 59분",
      "2021년 07월 24일 오후 9시 12분 11화 ~ 12화 2021년 07월 24일 오후 9시 56분",
    ],
  },
  {
    title: "무직전생 ~이세계에 갔으면 최선을 다한다~ 1쿨",
    titleJa: "無職転生 〜異世界行ったら本気だす〜 第1クール",
    titleEn: "Mushoku Tensei: Jobless Reincarnation Part 1",
    logs: [
      "2021년 08월 14일 오후 1시 07분 1화 ~ 2021년 08월 14일 오후 5시 16분 11화",
    ],
  },
  {
    title: "블랙 미궁 컴퍼니",
    titleJa: "迷宮ブラックカンパニー",
    titleEn: "The Dungeon of Black Company",
    logs: [
      "2021년 10월 10일 오후 1시 50분 1화 ~ 11화 중간 2021년 10월 10일 오후 5시 38분",
      "2021년 10월 10일 오후 6시 01분 11화 중간 ~ 12화 2021년 10월 10일 오후 6시 51분",
    ],
  },
  {
    title: "현실주의 용사의 왕국 재건기",
    titleJa: "現実主義勇者の王国再建記",
    titleEn: "How a Realist Hero Rebuilt the Kingdom",
    logs: [
      "2021년 10월 10일 오후 7시 20분 1화 ~ 13화 2021년 10월 10일 오후 11시 56분",
    ],
  },
  {
    title: "마녀의 여행",
    titleJa: "魔女の旅々",
    titleEn: "The Journey of Elaina",
    logs: [
      "2021년 10월 13일 오후 9시 14분 1화 ~ 5화 2021년 10월 13일 오후 11시 02분",
    ],
  },
  {
    title: "수염을 깎다. 그리고 여고생을 줍다",
    titleJa: "ひげを剃る。そして女子高生を拾う。",
    titleEn: "Higehiro: After Being Rejected, I Shaved and Took in a High School Runaway",
    logs: [
      "2021년 11월 05일 오후 6시 55분 1화 ~ 13화 2021년 11월 05일 오후 11시 38분",
    ],
  },
  {
    title: "전생했더니 슬라임인 건에 대하여 2기 파트2",
    titleJa: "転生したらスライムだった件 第2期 第2部",
    titleEn: "That Time I Got Reincarnated as a Slime Season 2 Part 2",
    logs: [
      "2021년 11월 06일 오후12시 22분 1화 ~ 12화 2021년 11월 06일 오후 4시 45분",
    ],
  },
  {
    title: "어쨌든 귀여워",
    titleJa: "トニカクカワイイ",
    titleEn: "TONIKAWA: Over the Moon for You",
    logs: [
      "2021년 12월 03일 오후 3시 55분 1화 ~ 4화 2021년 12월 03일 오후 5시 25분",
    ],
  },
  {
    title: "날씨의 아이",
    titleJa: "天気の子",
    titleEn: "Weathering with You",
    logs: [
      "2021년 12월 06일 오후 4시 12분 ~ 2021년 12월 06일 오후 5시 58분",
    ],
  },
  {
    title: "나는 100만 명의 목숨 위에 서 있다",
    titleJa: "100万の命の上に俺は立っている",
    titleEn: "I'm Standing on a Million Lives",
    logs: [
      "2021년 12월 13일 오후 2시 32분 1화 ~ 10화 2021년 12월 13일 오후 6시 02분",
      "2021년 12월 13일 오후 6시 47분 11화 ~ 12화 2021년 12월 13일 오후 7시 29분",
    ],
  },
  {
    title: "무직전생 ~이세계에 갔으면 최선을 다한다~ 2쿨",
    titleJa: "無職転生 〜異世界行ったら本気だす〜 第2クール",
    titleEn: "Mushoku Tensei: Jobless Reincarnation Part 2",
    logs: [
      "2022년 03월 13일 오후 2시 40분 1화 ~ 12화 2022년 03월 13일 오후 6시 56분",
    ],
  },
  {
    title: "흔해빠진 직업으로 세계최강 2기",
    titleJa: "ありふれた職業で世界最強 2nd season",
    titleEn: "Arifureta: From Commonplace to World's Strongest Season 2",
    logs: [
      "2022년 05월 08일 오전 9시 45분 1화 ~ 12화 2022년 05월 08일 오후 2시 23분",
    ],
  },
  {
    title: "용사 그만둡니다.",
    titleJa: "勇者、辞めます",
    titleEn: "I'm Quitting Heroing",
    logs: [
      "2022년 06월 26일 오후 2시 36분 1화 ~ 12화 2022년 06월 26일 오후 06시 20분",
    ],
  },
  {
    title: "사상 최강의 대마왕, 마을사람 A로 전생하다",
    titleJa: "史上最強の大魔王、村人Aに転生する",
    titleEn: "The Greatest Demon Lord Is Reborn as a Typical Nobody",
    logs: [
      "2022년 07월 31일 오후5시 29분 1화 ~ 12화 중간 2022년 07월 31일 오후 9시 40분",
      "2022년 07월 31일 오후10시 38분 12화 중간 ~ 12화 2022년 07월 31일 오후 10시 50분",
    ],
  },
  {
    title: "어서오세요 실력지상주의 교실에 2기",
    titleJa: "ようこそ実力至上主義の教室へ 2nd Season",
    titleEn: "Classroom of the Elite Season 2",
    logs: [
      "2022년 10월 28일 오후 1시 15분 1화 ~ 13화 2022년 10월 28일 오후 06시 02분",
    ],
  },
  {
    title: "월요일의 타와와 2기",
    titleJa: "月曜日のたわわ2",
    titleEn: "Tawawa on Monday Two",
    logs: [
      "2022년 10월 28일 오후 09시 14분 1화 ~ 13화 2022년 10월 28일 오후 10시 25분",
    ],
  },
  {
    title: "러브플롭스",
    titleJa: "恋愛フロップス",
    titleEn: "Love Flops",
    logs: [
      "2023년 06월 24일 오후 03시 33분 1화 ~ 2화 2023년 06월 24일 오후 04시 38분",
      "2023년 07월 01일 오후 01시 50분 3화 ~ 12화 2023년 07월 01일 오후 05시 25분",
    ],
  },
  {
    title: "힘내라 동기짱",
    titleJa: "がんばれ同期ちゃん",
    titleEn: "Ganbare Douki-chan",
    logs: [
      "2023년 07월 06일 오전 12시 23분 1화 ~ 12화 2023년 07월 07일 01시 08분",
    ],
  },
  {
    title: "한자와 나오키 1기",
    titleJa: "半沢直樹 第1期",
    titleEn: "Hanzawa Naoki Season 1",
    logs: [
      "2023년 07월 13일 오후 10시 38분 1화 ~ 2화 중간 2023년 07월 14일 12시 42분",
    ],
  },
  {
    title: "흑의 소환사",
    titleJa: "黒の召喚士",
    titleEn: "Black Summoner",
    logs: [
      "2023년 07월 21일 오후 3시 24분 1화 ~ 12화 2023년 07월 21일 오후 8시 17분",
    ],
  },
  {
    title: "성검학원의 마도사",
    titleJa: "聖剣学院の魔剣使い",
    titleEn: "The Demon Sword Master of Excalibur Academy",
    logs: [
      "2024년 01월 07일 오전 10시 11분 1화 ~ 12화 2024년 01월 07일 오후 02시 20분",
      "2024년 01월 07일 오후 3시 21분 12화 ~ 12화 2024년 01월 07일 오후 03시 33분",
    ],
  },
  {
    title: "러시아어로 부끄러워하는 옆자리의 아랴 양",
    titleJa: "時々ボソッとロシア語でデレる隣のアーリャさん",
    titleEn: "Alya Sometimes Hides Her Feelings in Russian",
    logs: [
      "2024년 12월 07일 오후 12시 51분 1화 ~ 12화 2024년 12월 07일 오후 5시 29분",
    ],
  },
  {
    title: "촌구석 아저씨 검성이 되다",
    titleJa: "片田舎のおっさん、剣聖になる",
    titleEn: "From Old Country Bumpkin to Master Swordsman",
    logs: [
      "2025년 09월 06일 오후 8시 38분 1화 ~ 12화 2025년 09월 07일 오전 12시 52분",
    ],
  },
  {
    title: "믿었던 동료들에게 던전 오지에서 살해당할 뻔했지만 기프트 『무한 뽑기』로 레벨 9999의 동료들을 손에 넣어 전 파티 멤버와 세계에 복수&『참교육!』합니다!",
    titleJa: "信じていた仲間達にダンジョン奥地で殺されかけたがギフト『無限ガチャ』でレベル9999の仲間達を手に入れて元パーティーメンバーと世界に復讐＆『ざまぁ！』します！",
    titleEn: "Backstabbed in a Backwater Dungeon, I Gained Level 9999 Companions Through Infinite Gacha and Will Have My Revenge!",
    logs: [
      "2026년 05월 02일 오후 3시 47분 1화 ~ 12화 2026년 05월 02일 오후 08시 07분",
    ],
  },
  {
    title: "친구 여동생이 나한테만 짜증나게 군다",
    titleJa: "友達の妹が俺にだけウザい",
    titleEn: "My Friend's Little Sister Has It In for Me!",
    logs: [
      "2026년 06월 19일 오후 10시 12분 1화 ~",
    ],
  },
];

window.SITE_CONTENT = {
  ui: {
    en: {
      nav: {
        home: "Home",
        projects: "Projects",
        profile: "Profile",
        hobby: "Hobby",
      },
      music: {
        nowPlaying: "Now Playing",
        scanning: "Scanning BGM...",
        noBgm: "No BGM found",
        pressPlay: "Press Play",
      },
    },

    ko: {
      nav: {
        home: "대문",
        projects: "프로젝트",
        profile: "프로필",
        hobby: "취미",
      },
      music: {
        nowPlaying: "Now Playing",
        scanning: "BGM 검색 중...",
        noBgm: "BGM 없음",
        pressPlay: "재생 대기",
      },
    },

    ja: {
      nav: {
        home: "ホーム",
        projects: "プロジェクト",
        profile: "プロフィール",
        hobby: "趣味",
      },
      music: {
        nowPlaying: "Now Playing",
        scanning: "BGM検索中...",
        noBgm: "BGMなし",
        pressPlay: "再生待機",
      },
    },
  },

  home: {
    en: {
      eyebrow: "Robotics · AI · Creative Engineering",
      title: "ESblueRin",
      titleAccent: "building a bridge between intelligence and machines.",
      description:
        "A personal website for research, projects, hobbies, and experimental ideas.",
      primaryButton: "View Project RIN",
      secondaryButton: "View Profile",
      floatingCards: [
        ["Project RIN", "Robotic Intelligence Network"],
        ["Frozen VLM", "Vision-language feature extraction"],
        ["Continual Learning", "Adapter-only update"],
      ],
      cards: [
        {
          number: "01",
          title: "Project RIN",
          text: "A robotics intelligence project using a frozen VLM, action adapter, safety filter, and continual learning.",
          link: "Explore →",
          route: "projects",
        },
        {
          number: "02",
          title: "Profile",
          text: "Education, work experience, skills, patents, achievements, and previous development projects.",
          link: "Read more →",
          route: "profile",
        },
        {
          number: "03",
          title: "Hobby",
          text: "AI virtual YouTuber project, animation viewing log, and composition notes.",
          link: "Open page →",
          route: "hobby",
        },
      ],
    },

    ko: {
      eyebrow: "Robotics · AI · Creative Engineering",
      title: "ESblueRin",
      titleAccent: "지능과 기계 사이의 다리를 만드는 공간.",
      description:
        "연구, 프로젝트, 취미, 실험적인 아이디어를 정리하는 개인 웹사이트입니다.",
      primaryButton: "Project RIN 보기",
      secondaryButton: "Profile 보기",
      floatingCards: [
        ["Project RIN", "Robotic Intelligence Network"],
        ["Frozen VLM", "시각·언어 특징 추출"],
        ["Continual Learning", "Adapter 중심 지속 학습"],
      ],
      cards: [
        {
          number: "01",
          title: "Project RIN",
          text: "Frozen VLM, Action Adapter, Safety Filter, Continual Learning을 결합한 로봇 지능 프로젝트입니다.",
          link: "탐색하기 →",
          route: "projects",
        },
        {
          number: "02",
          title: "Profile",
          text: "학력, 경험, 기술 스택, 특허, 수상, 기존 개발 프로젝트를 정리한 페이지입니다.",
          link: "읽기 →",
          route: "profile",
        },
        {
          number: "03",
          title: "Hobby",
          text: "AI 버츄얼 유튜버 프로젝트, 애니메이션 감상 기록, 작곡 기록을 정리하는 공간입니다.",
          link: "열기 →",
          route: "hobby",
        },
      ],
    },

    ja: {
      eyebrow: "Robotics · AI · Creative Engineering",
      title: "ESblueRin",
      titleAccent: "知能と機械をつなぐための場所。",
      description:
        "研究、プロジェクト、趣味、実験的なアイデアを整理する個人サイトです。",
      primaryButton: "Project RINを見る",
      secondaryButton: "Profileを見る",
      floatingCards: [
        ["Project RIN", "Robotic Intelligence Network"],
        ["Frozen VLM", "視覚・言語特徴抽出"],
        ["Continual Learning", "Adapter中心の継続学習"],
      ],
      cards: [
        {
          number: "01",
          title: "Project RIN",
          text: "Frozen VLM、Action Adapter、Safety Filter、Continual Learningを組み合わせたロボット知能プロジェクトです。",
          link: "見る →",
          route: "projects",
        },
        {
          number: "02",
          title: "Profile",
          text: "学歴、経験、技術、特許、実績、既存開発プロジェクトをまとめたページです。",
          link: "読む →",
          route: "profile",
        },
        {
          number: "03",
          title: "Hobby",
          text: "AIバーチャルYouTuber、アニメ視聴記録、作曲メモをまとめるページです。",
          link: "開く →",
          route: "hobby",
        },
      ],
    },
  },

  projects: {
  en: {
    eyebrow: "Robotic Intelligence Network",
    title: "Project RIN",
    subtitle:
      "Project RIN is a research project about helping a robot understand visual scenes and human commands, then turn that understanding into safe movement.",
    diagramTitle: "How Project RIN Works",
    diagram: [
      "A camera, a language command, and robot sensor data are given as input.",
      "A frozen vision-language model reads the scene and the command.",
      "A small Action Adapter converts that understanding into robot actions.",
      "A Safety Filter blocks or corrects dangerous actions.",
      "The robot moves in ROS2, Nav2, or Gazebo.",
      "The robot stores what happened during the attempt.",
      "The Action Adapter learns from successful moves, failures, and safety corrections.",
      "Over time, the robot becomes safer and more efficient without retraining the large AI model.",
    ],
    coreTitle: "Core Idea",
    coreText:
      "Instead of retraining a huge AI model every time the robot enters a new environment, Project RIN keeps the large vision-language model fixed and trains only a small module called the Action Adapter. This makes the system cheaper, safer, and more realistic for robotics research.",
    sections: [
      {
        title: "What problem does this solve?",
        items: [
          "Large AI models can understand images and language, but they do not automatically know how to move a real robot.",
          "Robots also need to avoid dangerous actions such as moving forward into an obstacle.",
          "Project RIN studies how to connect AI understanding with robot control in a practical and safe way.",
        ],
      },
      {
        title: "Simple example",
        items: [
          "A user says: Go to the desk.",
          "The camera sees the room, obstacles, and the approximate target direction.",
          "The AI model understands the scene and the command.",
          "The Action Adapter chooses a movement such as move forward, turn left, turn right, or stop.",
          "If the chosen action is dangerous, the Safety Filter corrects it before the robot moves.",
        ],
      },
      {
        title: "Why keep the VLM frozen?",
        items: [
          "Training the whole vision-language model is expensive and difficult.",
          "A frozen VLM can still provide useful scene and language features.",
          "Training only the Action Adapter makes the research easier to control and much more realistic for a master’s-level robotics project.",
        ],
      },
      {
        title: "How does the robot improve?",
        items: [
          "When the robot makes a bad decision, the Safety Filter corrects it.",
          "That correction is saved as training data.",
          "The Action Adapter learns that similar situations should lead to safer actions.",
          "This means the safety system is not only a guardrail, but also a teacher.",
        ],
      },
      {
        title: "Continual learning",
        items: [
          "The robot first learns in a simple empty room.",
          "Then it moves to environments with obstacles, narrow corridors, and more complex layouts.",
          "The Action Adapter keeps learning from new experience while trying not to forget older environments.",
          "A Replay Buffer stores old and new experiences together to reduce forgetting.",
        ],
      },
      {
        title: "Research questions",
        items: [
          "Can a robot improve if only the Action Adapter is continuously updated?",
          "Can safety correction data reduce dangerous actions over time?",
          "Can a Replay Buffer help the robot adapt to new rooms without forgetting old ones?",
          "Which inputs are most useful: vision, language, robot state, or previous action?",
        ],
      },
      {
        title: "Evaluation",
        items: [
          "Goal success rate: how often the robot reaches the target.",
          "Collision rate: how often the robot hits obstacles.",
          "Time to goal: how quickly the robot completes the task.",
          "Path efficiency: how direct and efficient the movement is.",
          "Safety intervention rate: how often the Safety Filter has to correct the robot.",
          "A key sign of learning is that safety interventions decrease over time.",
        ],
      },
      {
        title: "Expected research scope",
        items: [
          "Simulation-first experiment using ROS2, Nav2, Gazebo, and TurtleBot3.",
          "Discrete actions such as move_forward, turn_left, turn_right, stop, and backward.",
          "Frozen VLM, trainable Action Adapter, Safety Filter, Experience Logger, and Replay Buffer.",
          "The goal is not to build a perfect general robot, but to test whether adapter-only continual learning improves safe robot control.",
        ],
      },
    ],
  },

  ko: {
    eyebrow: "Robotic Intelligence Network",
    title: "Project RIN",
    subtitle:
      "Project RIN은 로봇이 카메라로 주변을 보고, 사람의 명령을 이해한 뒤, 그 이해를 안전한 움직임으로 바꾸는 방법을 연구하는 프로젝트입니다.",
    diagramTitle: "Project RIN의 작동 흐름",
    diagram: [
      "카메라, 자연어 명령, 로봇 센서 정보가 입력됩니다.",
      "고정된 Vision-Language Model이 장면과 명령을 이해합니다.",
      "작은 Action Adapter가 이해된 정보를 로봇 행동으로 변환합니다.",
      "Safety Filter가 위험한 행동을 차단하거나 수정합니다.",
      "로봇은 ROS2, Nav2, Gazebo 환경에서 움직입니다.",
      "실행 결과, 실패, 충돌 위험, 안전 필터 개입 여부를 저장합니다.",
      "Action Adapter는 성공 경험과 실패 경험, 안전 보정 데이터를 통해 학습합니다.",
      "큰 AI 모델을 다시 학습하지 않고도 로봇의 행동이 점점 안전하고 효율적으로 변합니다.",
    ],
    coreTitle: "핵심 아이디어",
    coreText:
      "Project RIN의 핵심은 거대한 AI 모델 전체를 다시 학습시키지 않는 것입니다. VLM은 고정해두고, 그 사이에 있는 작은 Action Adapter만 학습합니다. 이렇게 하면 계산 비용이 줄고, 실험 통제가 쉬워지며, 로봇 연구 주제로도 훨씬 현실적인 구조가 됩니다.",
    sections: [
      {
        title: "이 프로젝트가 해결하려는 문제",
        items: [
          "요즘 AI 모델은 이미지와 언어를 잘 이해하지만, 그것만으로 로봇이 안전하게 움직일 수 있는 것은 아닙니다.",
          "예를 들어 AI가 '앞으로 가라'고 판단해도, 로봇 앞에 장애물이 있으면 실제로는 멈추거나 돌아가야 합니다.",
          "Project RIN은 AI의 이해 능력과 로봇 제어 사이를 안전하게 연결하는 방법을 연구합니다.",
        ],
      },
      {
        title: "간단한 예시",
        items: [
          "사람이 로봇에게 '책상 쪽으로 가줘'라고 말합니다.",
          "카메라는 방 구조와 장애물, 목표 방향을 봅니다.",
          "VLM은 장면과 명령을 이해합니다.",
          "Action Adapter는 move_forward, turn_left, turn_right, stop 같은 행동 중 하나를 고릅니다.",
          "만약 그 행동이 위험하면 Safety Filter가 실행 전에 수정합니다.",
        ],
      },
      {
        title: "왜 VLM을 고정하는가?",
        items: [
          "거대한 VLM 전체를 학습시키는 것은 비용이 크고 실험 난이도도 높습니다.",
          "하지만 고정된 VLM도 장면과 언어에 대한 유용한 특징을 뽑아낼 수 있습니다.",
          "따라서 VLM은 고정하고, 로봇 제어에 필요한 작은 Action Adapter만 학습시키는 것이 현실적입니다.",
        ],
      },
      {
        title: "로봇은 어떻게 개선되는가?",
        items: [
          "처음에는 Adapter가 위험하거나 비효율적인 행동을 선택할 수 있습니다.",
          "예를 들어 전방 장애물이 가까운데 move_forward를 선택할 수 있습니다.",
          "이때 Safety Filter가 stop 또는 turn_left로 수정합니다.",
          "이 수정 경험을 저장하면, Adapter는 다음에 비슷한 상황에서 더 안전한 행동을 고르게 됩니다.",
          "즉 Safety Filter는 단순한 보호 장치가 아니라 학습을 도와주는 교사 역할도 합니다.",
        ],
      },
      {
        title: "지속 학습 구조",
        items: [
          "로봇은 처음에는 빈 방 같은 쉬운 환경에서 시작합니다.",
          "이후 장애물이 많은 방, 좁은 복도, 복합 장애물 환경으로 이동합니다.",
          "새 환경에서 얻은 경험을 통해 Action Adapter를 조금씩 업데이트합니다.",
          "이때 과거 환경을 잊지 않도록 Replay Buffer에 과거 성공/실패 경험도 함께 저장합니다.",
        ],
      },
      {
        title: "연구 질문",
        items: [
          "VLM을 고정하고 Action Adapter만 지속 학습해도 로봇 제어 성능이 좋아지는가?",
          "Safety Filter가 수정한 데이터를 학습에 사용하면 위험 행동이 줄어드는가?",
          "Replay Buffer를 사용하면 새 환경에 적응하면서도 이전 환경 성능을 유지할 수 있는가?",
          "카메라 정보, 언어 명령, 로봇 상태, 이전 행동 중 어떤 입력 조합이 가장 효과적인가?",
        ],
      },
      {
        title: "평가 방법",
        items: [
          "목표 도달률: 로봇이 목표 지점에 얼마나 잘 도착하는지 봅니다.",
          "충돌률: 장애물과 충돌하는 비율을 측정합니다.",
          "목표 도달 시간: 얼마나 빠르게 목표에 도착하는지 측정합니다.",
          "경로 효율: 돌아가지 않고 효율적으로 이동했는지 봅니다.",
          "Safety Filter 개입률: 안전 필터가 얼마나 자주 로봇 행동을 수정했는지 측정합니다.",
          "학습이 잘 되었다면 시간이 지날수록 Safety Filter 개입률이 줄어들어야 합니다.",
        ],
      },
      {
        title: "예상 실험 범위",
        items: [
          "ROS2, Nav2, Gazebo, TurtleBot3 기반의 시뮬레이션 실험을 우선합니다.",
          "행동은 처음에는 move_forward, turn_left, turn_right, stop, backward처럼 단순한 discrete action으로 제한합니다.",
          "구성 요소는 Frozen VLM, Action Adapter, Safety Filter, Experience Logger, Replay Buffer입니다.",
          "목표는 완벽한 범용 로봇을 만드는 것이 아니라, Adapter만 지속 학습해도 안전한 로봇 제어 성능이 개선되는지 검증하는 것입니다.",
        ],
      },
    ],
  },

  ja: {
    eyebrow: "Robotic Intelligence Network",
    title: "Project RIN",
    subtitle:
      "Project RINは、ロボットが周囲を見て、人の命令を理解し、その理解を安全な動きに変えるための研究プロジェクトです。",
    diagramTitle: "Project RINの流れ",
    diagram: [
      "カメラ、自然言語命令、ロボットセンサ情報を入力します。",
      "固定されたVision-Language Modelがシーンと命令を理解します。",
      "小さなAction Adapterがその理解をロボット行動に変換します。",
      "Safety Filterが危険な行動を止める、または修正します。",
      "ロボットはROS2、Nav2、Gazebo上で動きます。",
      "成功、失敗、危険回避、Safety Filterの介入を記録します。",
      "Action Adapterは経験データから少しずつ学習します。",
      "大きなAIモデルを再学習せずに、ロボットの動きがより安全で効率的になります。",
    ],
    coreTitle: "核心アイデア",
    coreText:
      "Project RINでは、大規模なVision-Language Model全体を再学習しません。VLMは固定し、その出力とロボット制御の間にある小さなAction Adapterだけを学習します。これにより、計算コストを抑えつつ、現実的なロボット研究として扱いやすくなります。",
    sections: [
      {
        title: "解決したい問題",
        items: [
          "AIモデルは画像と言語を理解できますが、それだけでロボットが安全に動けるわけではありません。",
          "前に障害物がある場合、単に前進するのではなく停止や回避が必要です。",
          "Project RINはAIの理解能力とロボット制御を安全につなぐ方法を研究します。",
        ],
      },
      {
        title: "簡単な例",
        items: [
          "人がロボットに「机の方へ行って」と命令します。",
          "カメラが部屋、障害物、目標方向を見ます。",
          "VLMがシーンと命令を理解します。",
          "Action Adapterがmove_forward、turn_left、turn_right、stopなどの行動を選びます。",
          "危険な行動はSafety Filterが実行前に修正します。",
        ],
      },
      {
        title: "VLMを固定する理由",
        items: [
          "大規模VLM全体の学習は高コストで、実験も難しくなります。",
          "固定されたVLMでも、シーンと言語に関する有用な特徴を取り出せます。",
          "そのため、小さなAction Adapterだけを学習する方が現実的です。",
        ],
      },
      {
        title: "ロボットはどう改善されるか",
        items: [
          "初期のAdapterは危険または非効率な行動を選ぶかもしれません。",
          "Safety Filterがその行動を修正し、修正データを保存します。",
          "Adapterは似た状況でより安全な行動を選ぶようになります。",
          "つまりSafety Filterは保護装置であると同時に学習の教師にもなります。",
        ],
      },
      {
        title: "研究質問",
        items: [
          "VLMを固定し、Action Adapterだけを継続学習して制御性能は改善するか。",
          "Safety Filterの修正データは危険行動を減らすか。",
          "Replay Bufferは新しい環境への適応と過去環境の保持を両立できるか。",
          "視覚、言語、ロボット状態、前回行動のどの入力が有効か。",
        ],
      },
      {
        title: "実験範囲",
        items: [
          "ROS2、Nav2、Gazebo、TurtleBot3を用いたシミュレーションを中心にします。",
          "行動はmove_forward、turn_left、turn_right、stop、backwardなどの離散行動から始めます。",
          "目的は汎用ロボットを完成させることではなく、Adapterのみの継続学習が安全な制御を改善するかを検証することです。",
        ],
      },
    ],
  },
},

  profile: {
    en: {
      eyebrow: "Personal Profile",
      name: "Lee Juho",
      koreanName: "이주호",
      role: "Mechatronics Engineering Student · Director at Mori",
      summary:
        "Application development, AI engineering, startup projects, patents, research experience, and academic activities.",
      tabs: {
        overview: "Overview",
        experience: "Experience",
        projects: "Previous Projects",
        patents: "Patents",
        achievements: "Achievements",
      },
      contactTitle: "Contact",
      contactNote: "Phone number and personal address are not displayed publicly.",
      contact: {
        office: ["12 Gaetbeol-ro, Yeonsu-gu, Incheon", "mori@mori-corp.io", "juho.lee@mori-corp.io"],
        personal: ["joholee123@gmail.com", "juholee@inu.ac.kr"],
      },
      skills: [
        ["Flutter Application Development", "2/5", 40],
        ["PyTorch AI Engineering Programming", "4/5", 80],
      ],
      languages: [
        ["Korean", "Native", 100],
        ["English", "TOEIC 700 ~ ", 60],
        ["Japanese", "JLPT N2", 60],
      ],
      overview: [
        {
          title: "Director at Mori",
          date: "Feb. 2023 ~ Present",
          text: "INU Start-up Team.",
        },
        {
          title: "PINCOM’s President",
          date: "Aug. 2023 ~ Dec. 2024",
          text: "Operation and advisory of INU central programming academic organization.",
        },
        {
          title: "Incheon National University",
          date: "Entrance in 2020 · Senior",
          text: "Department of Mechatronics Engineering.",
        },
      ],
      experience: [
        {
          title: "Application Development",
          date: "Start-up Mori · July 2021 ~ Present",
          items: [
            "Developing Android and iOS cross-platform applications using Flutter.",
            "Structuring and connecting layouts within applications.",
            "Application engineering, mainly front-end development, for 4 years.",
          ],
        },
        {
          title: "NFT & Blockchain Development",
          date: "KLAYMAKERS 23",
          items: [
            "Digital Art and Design Ownership & Equity NFT smart contract transaction protocol service development.",
          ],
        },
        {
          title: "AI Engineering Programming",
          date: "Start-up Mori · Feb. 2024 ~ Present",
          items: [
            "Deep learning study based on artificial neural networks.",
            "Researching algorithms for preventing AI image learning.",
            "Technology stack: PyTorch.",
          ],
        },
      ],
      previousProjects: [
        {
          title: "CSI-based Human Activity Captioning",
          text: "Research project on generating semantic descriptions of human activity from WiFi CSI signals.",
          tags: ["WiFi CSI", "Multimodal AI", "PyTorch"],
        },
        {
          title: "Mori Application Development",
          text: "Cross-platform application development using Flutter for Android and iOS.",
          tags: ["Flutter", "Mobile App", "Front-end"],
        },
        {
          title: "AI Learning Protection Research",
          text: "Researching noise insertion methods to protect visual content from AI learning.",
          tags: ["AI Protection", "Image Noise", "Patent"],
        },
        {
          title: "KLAYMAKERS 23",
          text: "NFT smart contract and transaction protocol service development experience.",
          tags: ["Blockchain", "NFT", "Hackathon"],
        },
      ],
      patents: [
        ["PATENT-2024-0160072", "Noise inserting system and method for protecting content from being mimicked by AI."],
        ["PATENT-2025-0016180", "Efficient image noise insertion system and method for preventing AI learning."],
      ],
      achievements: [
        "KLAYMAKERS 23 Hackathon participation.",
        "Grand Prize, INU Engineering Education Innovation Center competition.",
        "Completed mentoring program at Seoul National University College of Education Affiliated Gifted Education Center.",
        "Civil Diplomat Representative of Siheung City, Gyeonggi-do, 2024–2025.",
        "Special Auditing Student at Hokkaido University, until 2025.",
        "Korea–Japan Exchange Scholarship Student, 2025–2026.",
        "Special Auditing Research Student under Professor Emaru.",
      ],
    },

    ko: {
      eyebrow: "Personal Profile",
      name: "Lee Juho",
      koreanName: "이주호",
      role: "메카트로닉스공학 전공 · Mori 이사",
      summary:
        "앱 개발, AI 엔지니어링, 스타트업 프로젝트, 특허, 연구 경험, 학술 활동을 정리한 프로필입니다.",
      tabs: {
        overview: "개요",
        experience: "경험",
        projects: "기존 프로젝트",
        patents: "특허",
        achievements: "성과",
      },
      contactTitle: "Contact",
      contactNote: "전화번호와 개인 주소는 공개하지 않습니다.",
      contact: {
        office: ["12 Gaetbeol-ro, Yeonsu-gu, Incheon", "mori@mori-corp.io", "juho.lee@mori-corp.io"],
        personal: ["joholee123@gmail.com", "juholee@inu.ac.kr"],
      },
      skills: [
        ["Flutter Application Development", "2/5", 40],
        ["PyTorch AI Engineering Programming", "4/5", 80],
      ],
      languages: [
        ["Korean", "Native", 100],
        ["English", "TOEIC 700 ~ ", 60],
        ["Japanese", "JLPT N2", 60],
      ],
      overview: [
        {
          title: "Director at Mori",
          date: "2023.02 ~ 현재",
          text: "INU Start-up Team.",
        },
        {
          title: "PINCOM’s President",
          date: "2023.08 ~ 2024.12",
          text: "인천대학교 중앙 프로그래밍 학술 조직 운영 및 자문.",
        },
        {
          title: "Incheon National University",
          date: "2020 입학 · Senior",
          text: "Department of Mechatronics Engineering.",
        },
      ],
      experience: [
        {
          title: "Application Development",
          date: "Start-up Mori · 2021.07 ~ 현재",
          items: [
            "Flutter를 이용한 Android, iOS 크로스 플랫폼 애플리케이션 개발.",
            "애플리케이션 내부 구조 및 레이아웃 연결.",
            "Application Engineering, mainly front-end development, 4 years.",
          ],
        },
        {
          title: "NFT & Blockchain-related Development Experience",
          date: "KLAYMAKERS 23",
          items: [
            "Digital Art and Design Ownership & Equity NFT smart contract transaction protocol service development.",
          ],
        },
        {
          title: "AI Engineering Programming",
          date: "Start-up Mori · 2024.02 ~ 현재",
          items: [
            "Artificial Neural Network 기반 Deep Learning Study.",
            "AI image learning 방지 알고리즘 연구.",
            "Technology stack: PyTorch.",
          ],
        },
      ],
      previousProjects: [
        {
          title: "CSI-based Human Activity Captioning",
          text: "WiFi CSI 신호로부터 사람의 행동을 의미적으로 설명하는 captioning 연구 프로젝트.",
          tags: ["WiFi CSI", "Multimodal AI", "PyTorch"],
        },
        {
          title: "Mori Application Development",
          text: "Flutter 기반 Android/iOS 크로스 플랫폼 애플리케이션 개발.",
          tags: ["Flutter", "Mobile App", "Front-end"],
        },
        {
          title: "AI Learning Protection Research",
          text: "AI가 이미지 콘텐츠를 모방하거나 학습하는 것을 방지하기 위한 noise insertion 연구.",
          tags: ["AI Protection", "Image Noise", "Patent"],
        },
        {
          title: "KLAYMAKERS 23",
          text: "NFT smart contract 및 transaction protocol service development 경험.",
          tags: ["Blockchain", "NFT", "Hackathon"],
        },
      ],
      patents: [
        ["PATENT-2024-0160072", "NOISE INSERTING SYSTEM AND METHOD FOR PROTECTING CONTENT FROM BEING MIMICKED BY AI."],
        ["PATENT-2025-0016180", "Efficient image noise insertion system and method for preventing AI learning."],
      ],
      achievements: [
        "KLAYMAKERS 23 Hackerthon Participation.",
        "Incheon National University Engineering Education Innovation Center, Motion Capture System Bio Healthcare Application & Rehabilitation Robotics Connection Competition Grand Prize.",
        "Seoul National University College of Education Affiliated Gifted Education Center Finished Mentoring Program.",
        "Civil Diplomat Representative of Siheung City, Gyeonggi-do, 2024–2025.",
        "Special Auditing Student at Hokkaido University, until 2025.",
        "Korea–Japan Exchange Scholarship Student, 2025–2026.",
        "Special Auditing Research Student under Professor Emaru.",
      ],
    },

    ja: {
      eyebrow: "Personal Profile",
      name: "Lee Juho",
      koreanName: "イ・ジュホ",
      role: "メカトロニクス工学専攻 · Mori Director",
      summary:
        "アプリ開発、AIエンジニアリング、スタートアップ、特許、研究経験、学術活動をまとめたプロフィールです。",
      tabs: {
        overview: "概要",
        experience: "経験",
        projects: "過去プロジェクト",
        patents: "特許",
        achievements: "実績",
      },
      contactTitle: "Contact",
      contactNote: "電話番号と個人住所は公開していません。",
      contact: {
        office: ["12 Gaetbeol-ro, Yeonsu-gu, Incheon", "mori@mori-corp.io", "juho.lee@mori-corp.io"],
        personal: ["joholee123@gmail.com", "juholee@inu.ac.kr"],
      },
      skills: [
        ["Flutter Application Development", "2/5", 40],
        ["PyTorch AI Engineering Programming", "4/5", 80],
      ],
      languages: [
        ["Korean", "Native", 100],
        ["English", "TOEIC 700 ~ ", 60],
        ["Japanese", "JLPT N2", 60],
      ],
      overview: [
        {
          title: "Director at Mori",
          date: "2023.02 ~ 現在",
          text: "INU Start-up Team.",
        },
        {
          title: "PINCOM’s President",
          date: "2023.08 ~ 2024.12",
          text: "大学中央プログラミング学術組織の運営およびアドバイザリー。",
        },
        {
          title: "Incheon National University",
          date: "2020 入学 · Senior",
          text: "Department of Mechatronics Engineering.",
        },
      ],
      experience: [
        {
          title: "Application Development",
          date: "Start-up Mori · 2021.07 ~ 現在",
          items: [
            "Flutterを用いたAndroid/iOSクロスプラットフォームアプリ開発。",
            "アプリ内構造とレイアウト接続。",
            "主にフロントエンド開発を中心としたアプリケーションエンジニアリング。",
          ],
        },
        {
          title: "NFT & Blockchain Development",
          date: "KLAYMAKERS 23",
          items: [
            "NFTスマートコントラクトおよび取引プロトコルサービス開発経験。",
          ],
        },
        {
          title: "AI Engineering Programming",
          date: "Start-up Mori · 2024.02 ~ 現在",
          items: [
            "ニューラルネットワークに基づくDeep Learning Study。",
            "AI画像学習を防ぐアルゴリズム研究。",
            "Technology stack: PyTorch.",
          ],
        },
      ],
      previousProjects: [
        {
          title: "CSI-based Human Activity Captioning",
          text: "WiFi CSI信号から人間行動を意味的に説明する研究プロジェクト。",
          tags: ["WiFi CSI", "Multimodal AI", "PyTorch"],
        },
        {
          title: "Mori Application Development",
          text: "FlutterベースのAndroid/iOSクロスプラットフォームアプリ開発。",
          tags: ["Flutter", "Mobile App", "Front-end"],
        },
        {
          title: "AI Learning Protection Research",
          text: "AIによる画像コンテンツの学習や模倣を防ぐためのノイズ挿入研究。",
          tags: ["AI Protection", "Image Noise", "Patent"],
        },
        {
          title: "KLAYMAKERS 23",
          text: "NFTスマートコントラクトおよび取引プロトコル開発経験。",
          tags: ["Blockchain", "NFT", "Hackathon"],
        },
      ],
      patents: [
        ["PATENT-2024-0160072", "AIによる模倣からコンテンツを保護するノイズ挿入システムおよび方法。"],
        ["PATENT-2025-0016180", "AI学習を防ぐための効率的な画像ノイズ挿入システムおよび方法。"],
      ],
      achievements: [
        "KLAYMAKERS 23 Hackathon participation.",
        "INU Engineering Education Innovation Center competition Grand Prize.",
        "Seoul National University College of Education Affiliated Gifted Education Center mentoring program completed.",
        "Civil Diplomat Representative of Siheung City, 2024–2025.",
        "Special Auditing Student at Hokkaido University, until 2025.",
        "Korea–Japan Exchange Scholarship Student, 2025–2026.",
        "Special Auditing Research Student under Professor Emaru.",
      ],
    },
  },

  hobby: {
    en: {
      eyebrow: "Personal Space",
      title: "Hobby",
      titleAccent: "Notes",
      subtitle:
        "AI virtual YouTuber project, animation viewing log, composition notes, music samples, and creative records.",
      sections: {
        vtuber: "AI Virtual YouTuber Project",
        anime: "Animation Viewing Log",
        compose: "Composition",
      },
      vtuber: {
        title: "AI Virtual YouTuber Project",
        text:
          "A personal project for experimenting with AI characters, voice, real-time interaction, short-form content, and virtual entertainment workflows.",
        youtubeEmbed: "https://www.youtube.com/embed/2zIn-St_VaQ",
        youtubeUrl: "https://www.youtube.com/@%E3%82%A4%E3%83%81%E3%82%B4%E3%81%86/videos",
        note:
          "Replace VIDEO_ID with your actual YouTube video ID. You can also edit this text in data/content.js.",
      },
      animeEntries: ANIME_ENTRIES,
      composition: [
        {
          title: "I wonder(arrangement)",
          text: "A simple arrangement with FL Studio",
          image: "assets/compositions/composition-01.png",
          audio: "assets/compositions/composition-01.mp3",
        },
      ],
    },

    ko: {
      eyebrow: "Personal Space",
      title: "잡담 및 취미",
      titleAccent: "Notes",
      subtitle:
        "AI 버츄얼 유튜버 프로젝트, 애니메이션 감상 기록, 작곡 프로젝트와 샘플 음악을 정리하는 공간입니다.",
      sections: {
        vtuber: "AI 버츄얼 유튜버 프로젝트",
        anime: "애니메이션 감상 기록",
        compose: "작곡",
      },
      vtuber: {
        title: "AI 버츄얼 유튜버 프로젝트",
        text:
          "AI 캐릭터, 음성, 실시간 상호작용, 쇼츠 콘텐츠, 버츄얼 엔터테인먼트 흐름을 실험하기 위한 개인 프로젝트입니다.",
          youtubeEmbed: "https://www.youtube.com/embed/2zIn-St_VaQ",
        youtubeUrl: "https://www.youtube.com/@%E3%82%A4%E3%83%81%E3%82%B4%E3%81%86/videos",
        note:
          "VIDEO_ID 부분을 실제 유튜브 영상 ID로 바꾸면 페이지 안에서 재생됩니다. 설명 문구는 data/content.js에서 수정하면 됩니다.",
      },
      animeEntries: ANIME_ENTRIES,
      composition: [
        {
          title: "I wonder(arrangement)",
          text:  "FL Studio를 통한 간단한 편곡을 진행합니다.",
          image: "assets/compositions/composition-01.png",
          audio: "assets/compositions/composition-01.mp3",
        },
      ],
    },

    ja: {
      eyebrow: "Personal Space",
      title: "趣味",
      titleAccent: "Notes",
      subtitle:
        "AIバーチャルYouTuber、アニメ視聴記録、作曲プロジェクトとサンプル音源をまとめる場所です。",
      sections: {
        vtuber: "AIバーチャルYouTuberプロジェクト",
        anime: "アニメ視聴記録",
        compose: "作曲",
      },
      vtuber: {
        title: "AIバーチャルYouTuberプロジェクト",
        text:
          "AIキャラクター、音声、リアルタイム対話、ショート動画、バーチャルエンターテインメントの流れを実験する個人プロジェクトです。",
     youtubeEmbed: "https://www.youtube.com/embed/2zIn-St_VaQ",
        youtubeUrl: "https://www.youtube.com/@%E3%82%A4%E3%83%81%E3%82%B4%E3%81%86/videos",
        note:
          "VIDEO_IDを実際のYouTube動画IDに置き換えるとページ内で再生できます。",
      },
      animeEntries: ANIME_ENTRIES,
      composition: [
        {
         title: "I wonder(arrangement)",
          text: "FL Studioを使って簡単な編曲を行います。",
          image: "assets/compositions/composition-01.png",
          audio: "assets/compositions/composition-01.mp3",
        },
      ],
    },
  },
};
