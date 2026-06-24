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
        "A research-oriented architecture for controlling mobile robots with a frozen VLM, lightweight action adapter, safety correction, and continual learning.",
      diagramTitle: "Overall Architecture",
      diagram: [
        "Camera / Video / Natural Language / Robot State",
        "Frozen VLM",
        "Action Adapter",
        "Safety Filter",
        "ROS2 Controller / Nav2 / Gazebo",
        "Experience Logger",
        "Replay Buffer",
        "Continual Learning",
      ],
      coreTitle: "Core Idea",
      coreText:
        "The VLM is not fine-tuned. Only the Action Adapter between the VLM features and the robot controller is trained, updated, and improved from experience.",
      sections: [
        {
          title: "Why continual learning?",
          items: [
            "The adapter may initially understand commands but choose inefficient or unsafe actions.",
            "Safety Filter interventions are stored as learning signals.",
            "The adapter gradually learns to avoid risky actions in similar states.",
          ],
        },
        {
          title: "Learning Types",
          items: [
            "Environment-adaptive continual learning: empty room, obstacles, narrow corridor, dynamic obstacles.",
            "Task-adaptive continual learning: navigation, obstacle avoidance, stopping near objects, patrol, following people.",
            "Robot-adaptive learning: TurtleBot3, other differential-drive robots, Ackermann vehicles, and robot arms.",
          ],
        },
        {
          title: "Recommended Training Flow",
          items: [
            "1. Behavior Cloning from Nav2 or a rule-based controller.",
            "2. Safety Correction Learning using Safety Filter interventions.",
            "3. Replay Buffer based Continual Learning.",
            "4. Limited Offline RL or DAgger-style extension.",
          ],
        },
        {
          title: "Research Questions",
          items: [
            "RQ1. Can adapter-only continual learning improve robot control under a frozen VLM?",
            "RQ2. Can Safety Filter intervention data reduce collision and risky action rates?",
            "RQ3. Can a Replay Buffer balance new environment adaptation and old environment retention?",
            "RQ4. How do vision, language, and robot state inputs affect continual learning performance?",
          ],
        },
        {
          title: "Evaluation Metrics",
          items: [
            "Success Rate, Collision Rate, Time to Goal, Path Efficiency.",
            "Safety Intervention Rate, Adaptation Speed, Forgetting Rate.",
            "Sample Efficiency, Online Improvement, Correction Reduction.",
          ],
        },
        {
          title: "Final Recommended Scope",
          items: [
            "Frozen VLM, trainable Action Adapter only.",
            "ROS2 Gazebo and TurtleBot3 simulation.",
            "Discrete action space: move_forward, turn_left, turn_right, stop, backward.",
            "Safety Filter and Replay Buffer for continual learning evaluation.",
          ],
        },
      ],
    },

    ko: {
      eyebrow: "Robotic Intelligence Network",
      title: "Project RIN",
      subtitle:
        "Frozen VLM, Action Adapter, Safety Filter, Replay Buffer 기반 Continual Learning을 결합한 이동로봇 지능 구조입니다.",
      diagramTitle: "전체 구조",
      diagram: [
        "카메라 / 영상 / 자연어 명령 / 로봇 상태",
        "Frozen VLM",
        "Action Adapter",
        "Safety Filter",
        "ROS2 Controller / Nav2 / Gazebo",
        "Experience Logger",
        "Replay Buffer",
        "Continual Learning",
      ],
      coreTitle: "핵심 아이디어",
      coreText:
        "Gemma4 또는 VLM 본체는 학습하지 않고 고정합니다. 학습하는 것은 VLM 특징과 로봇 제어기 사이의 Action Adapter입니다. 계산 비용을 줄이면서도 로봇 경험을 통해 제어 성능을 점진적으로 개선하는 구조입니다.",
      sections: [
        {
          title: "지속 학습이 들어가면 좋은 점",
          items: [
            "처음에는 Adapter가 명령을 이해해도 움직임이 비효율적이거나 위험할 수 있습니다.",
            "예를 들어 전방 장애물이 가까운데 move_forward를 선택하면 Safety Filter가 stop 또는 turn_left로 수정합니다.",
            "이 수정 경험을 버리지 않고 학습 데이터로 저장하면, Adapter는 비슷한 상황에서 위험 행동을 덜 선택하게 됩니다.",
            "즉 Safety Filter는 단순 보호 장치가 아니라 학습 교사가 됩니다.",
          ],
        },
        {
          title: "가능한 Continual Learning 유형",
          items: [
            "환경 적응형 지속 학습: 빈 방 → 장애물 많은 방 → 좁은 복도 → 동적 장애물 환경.",
            "작업 적응형 지속 학습: 목표 지점 이동 → 장애물 회피 → 특정 물체 앞 정지 → 순찰 → 사람 따라가기.",
            "로봇 적응형 지속 학습: TurtleBot3 → 다른 차동구동 로봇 → Ackermann steering 차량 → 로봇팔.",
            "석사 연구 범위에서는 환경 적응형 지속 학습이 가장 현실적입니다.",
          ],
        },
        {
          title: "추천 학습 단계",
          items: [
            "1단계 Behavior Cloning: Nav2나 rule-based controller를 teacher로 사용합니다.",
            "2단계 Safety Correction Learning: Safety Filter가 수정한 action을 학습 신호로 사용합니다.",
            "3단계 Replay Buffer 기반 Continual Learning: 최근 데이터와 과거 데이터를 섞어 망각을 줄입니다.",
            "4단계 DAgger 또는 제한적 Offline RL: 로봇이 직접 만든 이상 상황에 대해 teacher가 더 좋은 action을 제공합니다.",
          ],
        },
        {
          title: "Replay Buffer 구성 예시",
          items: [
            "최근 데이터 60%",
            "과거 성공 데이터 20%",
            "과거 실패 데이터 10%",
            "Safety Filter 개입 데이터 10%",
            "새 환경에 적응하면서도 이전 환경 성능을 보존하기 위한 핵심 장치입니다.",
          ],
        },
        {
          title: "연구 질문",
          items: [
            "RQ1. Frozen VLM과 Action Adapter 구조에서 Adapter만 지속 학습해도 이동로봇 제어 성능이 개선되는가?",
            "RQ2. Safety Filter의 개입 데이터를 학습 신호로 사용하면 충돌률과 위험 행동 비율이 감소하는가?",
            "RQ3. Replay Buffer를 사용하면 새로운 환경 적응과 기존 환경 성능 보존을 동시에 달성할 수 있는가?",
            "RQ4. Vision + Language + Robot State 입력 조합은 지속 학습 성능에 어떤 영향을 주는가?",
          ],
        },
        {
          title: "평가 지표",
          items: [
            "기본 로봇 지표: Success Rate, Collision Rate, Time to Goal, Path Efficiency, Safety Intervention Rate.",
            "지속 학습 지표: Adaptation Speed, Forgetting Rate, Sample Efficiency, Online Improvement, Correction Reduction.",
            "특히 Safety Filter 개입률 감소는 Adapter가 점점 위험 행동을 덜 선택한다는 의미라서 중요한 지표입니다.",
          ],
        },
        {
          title: "실험 설계 예시",
          items: [
            "World A: 빈 공간",
            "World B: 정적 장애물",
            "World C: 좁은 복도",
            "World D: 복합 장애물",
            "World A에서 초기 학습 후 B, C, D에서 지속 학습하고 다시 A/B에서 성능을 평가합니다.",
          ],
        },
        {
          title: "비교군",
          items: [
            "Frozen VLM + No Learning Adapter",
            "Frozen VLM + Offline Trained Adapter",
            "Frozen VLM + Continual Learning Adapter",
            "Frozen VLM + Continual Learning Adapter + Replay Buffer",
            "Frozen VLM + Continual Learning Adapter + Safety Correction",
            "Nav2 또는 Rule-based Controller",
          ],
        },
        {
          title: "추천 최종 구조",
          items: [
            "Frozen Gemma4 Vision → Feature Extractor → Action Adapter.",
            "입력: VLM feature + LiDAR summary + pose + previous action.",
            "출력: discrete action.",
            "Safety Filter → ROS2 /cmd_vel → Gazebo TurtleBot3 → Experience Logger → Replay Buffer → Adapter Continual Update.",
            "Action은 move_forward, turn_left, turn_right, stop, backward부터 시작합니다.",
          ],
        },
        {
          title: "석사 레벨의 적절한 범위",
          items: [
            "VLM 본체 학습 X.",
            "Action Adapter만 학습 O.",
            "ROS2 Gazebo 기반 실험.",
            "TurtleBot3 이동로봇.",
            "Discrete action space.",
            "Safety Filter와 Replay Buffer.",
            "환경 변화에 따른 continual learning 평가.",
          ],
        },
      ],
    },

    ja: {
      eyebrow: "Robotic Intelligence Network",
      title: "Project RIN",
      subtitle:
        "Frozen VLM、Action Adapter、Safety Filter、Replay Bufferを用いた移動ロボット向けの継続学習アーキテクチャです。",
      diagramTitle: "全体構造",
      diagram: [
        "カメラ / 映像 / 自然言語命令 / ロボット状態",
        "Frozen VLM",
        "Action Adapter",
        "Safety Filter",
        "ROS2 Controller / Nav2 / Gazebo",
        "Experience Logger",
        "Replay Buffer",
        "Continual Learning",
      ],
      coreTitle: "核心アイデア",
      coreText:
        "VLM本体は学習せず固定します。学習対象はVLM特徴とロボット制御器の間にあるAction Adapterのみです。計算コストを抑えながら、経験データによって制御性能を継続的に改善します。",
      sections: [
        {
          title: "継続学習の価値",
          items: [
            "初期段階ではAdapterが非効率または危険な行動を選ぶ可能性があります。",
            "Safety Filterが危険行動を修正し、その修正データを学習信号として保存します。",
            "Adapterは似た状況で危険な行動を選ばないように改善されます。",
          ],
        },
        {
          title: "学習タイプ",
          items: [
            "環境適応型: 空室、障害物環境、狭い廊下、動的障害物。",
            "タスク適応型: ナビゲーション、障害物回避、停止、巡回、人追従。",
            "ロボット適応型: TurtleBot3、差動駆動ロボット、Ackermann車両、ロボットアーム。",
          ],
        },
        {
          title: "研究質問",
          items: [
            "RQ1. Frozen VLM構造でAdapterのみを継続学習して制御性能は改善するか。",
            "RQ2. Safety Filterの介入データは危険行動を減らすか。",
            "RQ3. Replay Bufferは新環境への適応と過去環境の保持を両立できるか。",
            "RQ4. Vision、Language、Robot Stateの入力構成は性能にどう影響するか。",
          ],
        },
        {
          title: "推奨範囲",
          items: [
            "VLM本体は固定。",
            "Action Adapterのみ学習。",
            "ROS2 GazeboとTurtleBot3を使用。",
            "Discrete action spaceから開始。",
            "Safety FilterとReplay Bufferで継続学習を評価。",
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
        office: ["12 Gaetbeol-ro, Yeonsu-gu, Incheon", "mori@mori-corp.io", "chzhdndbaoq@inu.ac.kr"],
        personal: ["joholee123@gmail.com", "chzhdndbaoq@naver.com"],
      },
      skills: [
        ["Flutter Application Development", "2 / 5", 40],
        ["PyTorch AI Engineering Programming", "4 / 5", 80],
      ],
      languages: [
        ["Korean", "Native", 100],
        ["English", "Simple conversation", 60],
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
        office: ["12 Gaetbeol-ro, Yeonsu-gu, Incheon", "mori@mori-corp.io", "chzhdndbaoq@inu.ac.kr"],
        personal: ["joholee123@gmail.com", "chzhdndbaoq@naver.com"],
      },
      skills: [
        ["Flutter Application Development", "2 / 5", 40],
        ["PyTorch AI Engineering Programming", "4 / 5", 80],
      ],
      languages: [
        ["Korean", "Native", 100],
        ["English", "Simple conversation", 60],
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
        office: ["12 Gaetbeol-ro, Yeonsu-gu, Incheon", "mori@mori-corp.io", "chzhdndbaoq@inu.ac.kr"],
        personal: ["joholee123@gmail.com", "chzhdndbaoq@naver.com"],
      },
      skills: [
        ["Flutter Application Development", "2 / 5", 40],
        ["PyTorch AI Engineering Programming", "4 / 5", 80],
      ],
      languages: [
        ["Korean", "Native", 100],
        ["English", "Simple conversation", 60],
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
        youtubeEmbed: "https://www.youtube.com/embed/VIDEO_ID",
        youtubeUrl: "https://www.youtube.com/@Morichanneru",
        note:
          "Replace VIDEO_ID with your actual YouTube video ID. You can also edit this text in data/content.js.",
      },
      animeEntries: [
        {
          title: "That Time I Got Reincarnated as a Slime Season 2 Part 2",
          logs: ["2021-11-06 12:22 EP 1 ~ 12, 2021-11-06 16:45"],
        },
        {
          title: "TONIKAWA: Over the Moon for You",
          logs: ["2021-12-03 15:55 EP 1 ~ 4, 2021-12-03 17:25"],
        },
        {
          title: "Weathering with You",
          logs: ["2021-12-06 16:12 ~ 2021-12-06 17:58"],
        },
      ],
      composition: [
        {
          title: "Composition Project 01",
          text: "A place for screenshots, demo audio, and notes about music production.",
          image: "assets/composition-01.png",
          audio: "assets/composition-demo-01.mp3",
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
        youtubeEmbed: "https://www.youtube.com/embed/VIDEO_ID",
        youtubeUrl: "https://www.youtube.com/@Morichanneru",
        note:
          "VIDEO_ID 부분을 실제 유튜브 영상 ID로 바꾸면 페이지 안에서 재생됩니다. 설명 문구는 data/content.js에서 수정하면 됩니다.",
      },
      animeEntries: [
        {
          title: "전생했더니 슬라임인 건에 대하여 2기 파트2",
          logs: ["2021년 11월 06일 오후12시 22분 1화 ~ 12화 2021년 11월 06일 오후 4시 45분"],
        },
        {
          title: "어쨌든 귀여워",
          logs: ["2021년 12월 03일 오후 3시 55분 1화 ~ 4화 2021년 12월 03일 오후 5시 25분"],
        },
        {
          title: "날씨의 아이",
          logs: ["2021년 12월 06일 오후 4시 12분 ~ 2021년 12월 06일 오후 5시 58분"],
        },
        {
          title: "나는 100만 명의 목숨 위에 서 있다",
          logs: [
            "2021년 12월 13일 오후 2시 32분 1화 ~ 10화 2021년 12월 13일 오후 6시 02분",
            "2021년 12월 13일 오후 6시 47분 11화 ~ 12화 2021년 12월 13일 오후 7시 29분",
          ],
        },
        {
          title: "무직전생 ~이세계에 갔으면 최선을 다한다~ 2쿨",
          logs: ["2022년 03월 13일 오후 2시 40분 1화 ~ 12화 2022년 03월 13일 오후 6시 56분"],
        },
        {
          title: "흔해빠진 직업으로 세계최강 2기",
          logs: ["2022년 05월 08일 오전 9시 45분 1화 ~ 12화 2022년 05월 08일 오후 2시 23분"],
        },
        {
          title: "용사 그만둡니다.",
          logs: ["2022년 06월 26일 오후 2시 36분 1화 ~ 12화 2022년 06월 26일 오후 06시 20분"],
        },
        {
          title: "사상 최강의 대마왕, 마을사람 A로 전생하다",
          logs: [
            "2022년 07월 31일 오후5시 29분 1화 ~ 12화 중간 2022년 07월 31일 오후 9시 40분",
            "2022년 07월 31일 오후10시 38분 12화 중간 ~ 12화 2022년 07월 31일 오후 10시 50분",
          ],
        },
      ],
      composition: [
        {
          title: "Composition Project 01",
          text: "작곡 중인 프로젝트의 스크린샷, 샘플 오디오, 메모를 정리하는 공간입니다.",
          image: "assets/composition-01.png",
          audio: "assets/composition-demo-01.mp3",
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
        youtubeEmbed: "https://www.youtube.com/embed/VIDEO_ID",
        youtubeUrl: "https://www.youtube.com/@Morichanneru",
        note:
          "VIDEO_IDを実際のYouTube動画IDに置き換えるとページ内で再生できます。",
      },
      animeEntries: [
        {
          title: "転生したらスライムだった件 第2期 Part 2",
          logs: ["2021-11-06 12:22 EP 1 ~ 12, 2021-11-06 16:45"],
        },
        {
          title: "トニカクカワイイ",
          logs: ["2021-12-03 15:55 EP 1 ~ 4, 2021-12-03 17:25"],
        },
        {
          title: "天気の子",
          logs: ["2021-12-06 16:12 ~ 2021-12-06 17:58"],
        },
      ],
      composition: [
        {
          title: "Composition Project 01",
          text: "作曲プロジェクトのスクリーンショット、サンプル音源、メモを整理する場所です。",
          image: "assets/composition-01.png",
          audio: "assets/composition-demo-01.mp3",
        },
      ],
    },
  },
};
