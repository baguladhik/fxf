import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        howToBuy: "How to Buy",
        news: "News",
        dashboard: "Dashboard",
        connectWallet: "Connect Wallet",
        register: "Register",
        login: "Login",
      },
      auth: {
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm Password",
        registerButton: "Create Account",
        loginButton: "Sign In",
        forgotPassword: "Forgot Password?",
      },
      hero: {
        title: "FAST X FURIOUS",
        subtitle: "The first decentralized street racing metaverse",
        description:
          "Mint your NFT supercar, compete in high-stakes races, and earn real crypto rewards.",
        getStarted: "Get Started",
      },
      tokenSale: {
        title: "Token Sale",
        currentPrice: "Current Price",
        remaining: "Tokens Remaining",
        buyTokens: "Buy Tokens",
        amount: "Amount in FXF",
        buyNow: "Buy Now",
      },
      benefits: {
        title: "Benefits of Holding FXF",
        voting: {
          title: "Equal Voting Power",
          description:
            "Every token holder gets equal voting rights, ensuring fair platform changes.",
        },
        proposal: {
          title: "Proposal Creation",
          description:
            "Create and vote on proposals to shape the future of the platform.",
        },
        community: {
          title: "Community Access",
          description:
            "Exclusive access to private channels and early feature releases.",
        },
      },
      team: {
        title: "Meet Our Team",
      },
      blog: {
        title: "Latest News",
      },
    },
  },
  es: {
    translation: {
      nav: {
        howToBuy: "Cómo Comprar",
        news: "Noticias",
        dashboard: "Panel",
        connectWallet: "Conectar Billetera",
        register: "Registrarse",
        login: "Iniciar Sesión",
      },
      auth: {
        email: "Correo Electrónico",
        password: "Contraseña",
        confirmPassword: "Confirmar Contraseña",
        registerButton: "Crear Cuenta",
        loginButton: "Iniciar Sesión",
        forgotPassword: "¿Olvidaste tu Contraseña?",
      },
      hero: {
        title: "FAST X FURIOUS",
        subtitle: "El primer metaverso descentralizado de carreras callejeras",
        description:
          "Acuña tu superauto NFT, compite en carreras de alto riesgo y gana recompensas en criptomonedas.",
        getStarted: "Comenzar",
      },
      tokenSale: {
        title: "Venta de Tokens",
        currentPrice: "Precio Actual",
        remaining: "Tokens Restantes",
        buyTokens: "Comprar Tokens",
        amount: "Cantidad en FXF",
        buyNow: "Comprar Ahora",
      },
      benefits: {
        title: "Beneficios de Tener FXF",
        voting: {
          title: "Poder de Voto Igualitario",
          description:
            "Cada titular de tokens tiene los mismos derechos de voto, asegurando cambios justos en la plataforma.",
        },
        proposal: {
          title: "Creación de Propuestas",
          description:
            "Crea y vota propuestas para dar forma al futuro de la plataforma.",
        },
        community: {
          title: "Acceso a la Comunidad",
          description:
            "Acceso exclusivo a canales privados y lanzamientos anticipados de funciones.",
        },
      },
      team: {
        title: "Conoce a Nuestro Equipo",
      },
      blog: {
        title: "Últimas Noticias",
      },
    },
  },
  ru: {
    translation: {
      nav: {
        howToBuy: "Как Купить",
        news: "Новости",
        dashboard: "Панель",
        connectWallet: "Подключить Кошелек",
        register: "Регистрация",
        login: "Вход",
      },
      auth: {
        email: "Электронная Почта",
        password: "Пароль",
        confirmPassword: "Подтвердите Пароль",
        registerButton: "Создать Аккаунт",
        loginButton: "Войти",
        forgotPassword: "Забыли Пароль?",
      },
      hero: {
        title: "FAST X FURIOUS",
        subtitle: "Первый децентрализованный метавселенная уличных гонок",
        description:
          "Создайте свой NFT суперкар, участвуйте в гонках с высокими ставками и зарабатывайте криптовалюту.",
        getStarted: "Начать",
      },
      tokenSale: {
        title: "Продажа Токенов",
        currentPrice: "Текущая Цена",
        remaining: "Осталось Токенов",
        buyTokens: "Купить Токены",
        amount: "Количество в FXF",
        buyNow: "Купить Сейчас",
      },
      benefits: {
        title: "Преимущества Владения FXF",
        voting: {
          title: "Равное Право Голоса",
          description:
            "Каждый держатель токенов имеет равные права голоса, обеспечивая справедливые изменения платформы.",
        },
        proposal: {
          title: "Создание Предложений",
          description:
            "Создавайте и голосуйте за предложения, определяющие будущее платформы.",
        },
        community: {
          title: "Доступ к Сообществу",
          description:
            "Эксклюзивный доступ к приватным каналам и ранним релизам функций.",
        },
      },
      team: {
        title: "Наша Команда",
      },
      blog: {
        title: "Последние Новости",
      },
    },
  },
  zh: {
    translation: {
      nav: {
        howToBuy: "如何购买",
        news: "新闻",
        dashboard: "仪表板",
        connectWallet: "连接钱包",
        register: "注册",
        login: "登录",
      },
      auth: {
        email: "电子邮件",
        password: "密码",
        confirmPassword: "确认密码",
        registerButton: "创建账户",
        loginButton: "登录",
        forgotPassword: "忘记密码？",
      },
      hero: {
        title: "FAST X FURIOUS",
        subtitle: "首个去中心化街头赛车元宇宙",
        description:
          "铸造你的NFT超级跑车，参与高额奖励的比赛，赚取加密货币奖励。",
        getStarted: "开始使用",
      },
      tokenSale: {
        title: "代币销售",
        currentPrice: "当前价格",
        remaining: "剩余代币",
        buyTokens: "购买代币",
        amount: "FXF数量",
        buyNow: "立即购买",
      },
      benefits: {
        title: "持有FXF的好处",
        voting: {
          title: "平等投票权",
          description: "每个代币持有者都有平等的投票权，确保平台变更的公平性。",
        },
        proposal: {
          title: "提案创建",
          description: "创建和投票提案，塑造平台的未来。",
        },
        community: {
          title: "社区访问",
          description: "专享私人频道和早期功能发布。",
        },
      },
      team: {
        title: "认识我们的团队",
      },
      blog: {
        title: "最新新闻",
      },
    },
  },
  ar: {
    translation: {
      nav: {
        howToBuy: "كيفية الشراء",
        news: "أخبار",
        dashboard: "لوحة القيادة",
        connectWallet: "ربط المحفظة",
        register: "يسجل",
        login: "تسجيل الدخول",
      },
      auth: {
        email: "بريد إلكتروني",
        password: "كلمة المرور",
        confirmPassword: "تأكيد كلمة المرور",
        registerButton: "إنشاء حساب",
        loginButton: "تسجيل الدخول",
        forgotPassword: "هل نسيت كلمة السر؟",
      },
      hero: {
        title: "سريع وغاضب",
        subtitle: "أول عالم لامركزي لسباقات الشوارع",
        description:
          "قم بإنشاء سيارة NFT الخارقة الخاصة بك، وتنافس في سباقات عالية المخاطر، واكسب مكافآت تشفير حقيقية.",
        getStarted: "البدء",
      },
      tokenSale: {
        title: "بيع الرمز",
        currentPrice: "السعر الحالي",
        remaining: "الرموز المتبقية",
        buyTokens: "شراء الرموز",
        amount: "المبلغ بالدولار الأمريكي",
        buyNow: "اشتري الآن",
      },
      benefits: {
        title: "فوائد الاحتفاظ بـ FXF",
        voting: {
          title: "قوة التصويت المتساوية",
          description:
            "يحصل كل حامل رمز على حقوق تصويت متساوية، مما يضمن تغييرات عادلة في المنصة.",
        },
        proposal: {
          title: "إنشاء الاقتراح",
          description: "إنشاء المقترحات والتصويت عليها لتشكيل مستقبل المنصة.",
        },
        community: {
          title: "الوصول المجتمعي",
          description:
            "الوصول الحصري إلى القنوات الخاصة وإصدارات الميزات المبكرة.",
        },
      },
      team: {
        title: "تعرف على فريقنا",
      },
      blog: {
        title: "أحدث الأخبار",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
