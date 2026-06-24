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
        youtubeEmbed: "https://www.youtube.com/watch?v=2zIn-St_VaQ",
        youtubeUrl: "https://www.youtube.com/@%E3%82%A4%E3%83%81%E3%82%B4%E3%81%86/videos",
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
          youtubeEmbed: "https://www.youtube.com/watch?v=2zIn-St_VaQ",
        youtubeUrl: "https://www.youtube.com/@%E3%82%A4%E3%83%81%E3%82%B4%E3%81%86/videos",
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
     youtubeEmbed: "https://www.youtube.com/watch?v=2zIn-St_VaQ",
        youtubeUrl: "https://www.youtube.com/@%E3%82%A4%E3%83%81%E3%82%B4%E3%81%86/videos",
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
