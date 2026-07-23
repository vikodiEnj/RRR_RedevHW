export const topics = [
  {
    id: "events",
    title: "Events и их методы",
    description:
      "В React обработка событий (events) очень похожа на обычный JavaScript, но имеет свою специфику. React использует систему кроссбраузерных обёрток и собственный синтаксис для эффективной работы с интерфейсом.",
    code: `function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Отправлена форма.');
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Отправить</button>
    </form>
  );
}`,
    pitfalls: [
      "События в React именуются в стиле camelCase вместо нижнего регистра.",
      "С JSX вы передаёте функцию как обработчик события вместо строки.",
    ],
    docsLink: "https://ru.react.dev/learn/responding-to-events",
  },
  {
    id: "extras",
    title: "Дополнения (key, Fragment, refs, StrictMode)",
    description:
      "<Fragment>, или <>...</>, позволяет группировать элементы без тега-обертки. <StrictMode> позволяет вам обнаружить распространенные баги в ваших компонентах на ранних этапах разработки.",
    code: `<>
  <OneChild />
  <AnotherChild />
</>

<StrictMode>
  <App />
</StrictMode>`,
    pitfalls: [
      "Если вы хотите передать key фрагменту, то воспользоваться краткой формой <>...</> не выйдет. Вы должны явно импортировать Fragment из 'react' и рендерить <Fragment key={yourKey}>...</Fragment>.",
      "Если вы используете <StrictMode>, то не сможете отключить его для части дерева. Это гарантирует, что все компоненты внутри <StrictMode> проходят проверки. Если две команды, работающие над продуктом, не могут прийти к соглашению, нужны ли им эти проверки, то они должны либо достичь компромисса, либо переместить <StrictMode> ниже по дереву.",
    ],
    docsLink: "https://ru.react.dev/reference/react/components",
  },
  {
    id: "optimization",
    title: "Оптимизация",
    description:
      "React даёт набор инструментов для оптимизации рендеров: React.memo мемоизирует компонент, useMemo и useCallback — вычисления и функции, lazy + Suspense позволяют грузить компоненты по требованию, а Profiler помогает измерить, что именно тормозит.",
    code: `const Child = React.memo(function Child({ onClick }) {
  return <button onClick={onClick}>Клик</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);
  return <Child onClick={handleClick} />;
}`,
    pitfalls: [
      "React.memo бесполезен, если в пропсы каждый рендер попадает новый объект или функция — сравнение по ссылке всегда даст false. Поэтому memo часто работает в паре с useCallback/useMemo.",
      "Не оптимизируй заранее: сначала измерь проблему (Profiler), потом лечи. Лишние мемоизации усложняют код и сами стоят памяти.",
      "lazy-компонент обязан быть обёрнут в <Suspense fallback={...}>, иначе при загрузке приложение упадёт.",
    ],
    docsLink: "https://ru.react.dev/reference/react/memo",
  },
  {
    id: "context",
    title: "Context",
    description:
      "Context позволяет передавать данные вглубь дерева компонентов без проброса пропсов через каждый уровень (prop drilling). Создаётся через createContext, значение раздаёт Provider, а читается через useContext.",
    code: `const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div className={theme}>Панель</div>;
}`,
    pitfalls: [
      "При изменении value перерендериваются все потребители контекста — не клади в один контекст всё подряд, лучше разделить на несколько.",
      "Если передавать в value новый объект прямо в JSX ({ theme, setTheme }), он создаётся заново на каждый рендер и вызывает лишние перерендеры — мемоизируй его через useMemo.",
      "useContext читает ближайший Provider выше по дереву; если Provider'а нет — вернётся значение по умолчанию из createContext.",
    ],
    docsLink: "https://ru.react.dev/learn/passing-data-deeply-with-context",
  },
  {
    id: "hoc",
    title: "HOC",
    description:
      "Higher-Order Component — это функция, которая принимает компонент и возвращает новый компонент с дополнительным поведением (логирование, проверка прав, отслеживание рендеров). Паттерн из эпохи классовых компонентов, сегодня чаще заменяется хуками, но встречается в библиотеках.",
    code: `function withLogger(Component) {
  return function Wrapped(props) {
    useEffect(() => {
      console.log("Рендер:", Component.name);
    });
    return <Component {...props} />;
  };
}

const ButtonWithLogger = withLogger(Button);`,
    pitfalls: [
      "Обязательно пробрасывай пропсы дальше через {...props}, иначе обёрнутый компонент их потеряет.",
      "Не вызывай HOC внутри рендера (const Wrapped = withLogger(Button) в теле компонента) — каждый рендер создаст новый компонент и React будет размонтировать и монтировать его заново.",
      "Порядок обёрток имеет значение: React.memo(withLogger(Component)) и withLogger(React.memo(Component)) ведут себя по-разному.",
    ],
    docsLink: "https://ru.legacy.reactjs.org/docs/higher-order-components.html",
  },
  {
    id: "routing",
    title: "Роутинг в React",
    description:
      "React Router позволяет строить SPA с несколькими страницами: роуты описываются через <Routes>/<Route>, переходы делаются через <Link>/<NavLink> или программно через useNavigate, динамические параметры URL читаются через useParams, а <Outlet> служит местом для вложенных роутов в layout-компоненте.",
    code: `<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/:id" element={<TopicPage />} />
</Routes>

function TopicPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  return <button onClick={() => navigate("/")}>Назад</button>;
}`,
    pitfalls: [
      "Значение из useParams — всегда строка, даже если в URL число.",
      "navigate(-1) ведёт на предыдущую страницу истории, а не «на главную» — если пользователь пришёл по прямой ссылке, его уведёт с сайта.",
      "При деплое SPA сервер должен отдавать index.html на любой путь, иначе прямой заход на /topic вернёт 404.",
      "В react-router v7 всё импортируется из пакета 'react-router', react-router-dom оставлен для совместимости.",
    ],
    docsLink: "https://reactrouter.com/",
  },
  {
    id: "forms",
    title: "react-hook-form vs formik",
    description:
      "Обе библиотеки решают одну задачу — формы с валидацией. React-hook-form строится на неконтролируемых инпутах и рефах, поэтому почти не вызывает перерендеров. Formik использует контролируемые инпуты и state, из-за чего перерендеривает форму на каждый ввод, но считается проще для понимания.",
    code: `const { register, handleSubmit, formState: { errors } } = useForm();

<form onSubmit={handleSubmit(onSubmit)}>
  <input
    {...register("email", {
      required: "Введите email",
      pattern: { value: /@/, message: "Неверный формат" },
    })}
  />
  {errors.email && <p>{errors.email.message}</p>}
</form>`,
    pitfalls: [
      "Для контролируемых компонентов (MUI RadioGroup, Select и т.п.) в react-hook-form нужен мост — компонент <Controller>.",
      "Задавай defaultValues, иначе инпут переключится из неконтролируемого в контролируемый и React выдаст предупреждение.",
      "Formik заметно медленнее на больших формах из-за перерендеров на каждое нажатие клавиши.",
    ],
    docsLink: "https://react-hook-form.com/",
  },
  {
    id: "storages",
    title: "Storages",
    description:
      "Браузер даёт три основных способа хранить данные на клиенте: localStorage (живёт до явного удаления, общий для вкладок), sessionStorage (живёт пока открыта вкладка) и cookies (отправляются на сервер с каждым запросом, подходят для авторизации).",
    code: `// сохранить (только строки!)
localStorage.setItem("user", JSON.stringify({ name: "Georg" }));

// прочитать
const user = JSON.parse(localStorage.getItem("user"));

// удалить
localStorage.removeItem("user");`,
    pitfalls: [
      "localStorage и sessionStorage хранят только строки — объекты нужно прогонять через JSON.stringify / JSON.parse.",
      "sessionStorage уникален для каждой вкладки: открыл ссылку в новой вкладке — данных там нет.",
      "Cookies ограничены ~4КБ и отправляются на сервер с каждым запросом — не храни в них большие данные.",
      "Изменение localStorage не вызывает перерендер React — состояние нужно синхронизировать вручную (useState + useEffect).",
    ],
    docsLink:
      "https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage",
  },
  {
    id: "hooks",
    title: "Хуки (useReducer и др.)",
    description:
      "Помимо useState и useEffect в React есть хуки для особых случаев: useReducer — сложное состояние с логикой переходов, useTransition — пометка обновлений как несрочных, useOptimistic — оптимистичное обновление UI до ответа сервера, useId — стабильные уникальные id для атрибутов разметки.",
    code: `function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <button onClick={() => dispatch({ type: "increment" })}>
      {state.count}
    </button>
  );
}`,
    pitfalls: [
      "useId предназначен для связки атрибутов (htmlFor/id, aria-*), а НЕ для ключей списков.",
      "Редьюсер должен быть чистой функцией: никаких мутаций state — всегда возвращай новый объект.",
      "useTransition не ускоряет сам код — он лишь позволяет React прервать несрочный рендер ради срочного (например, ввода в инпут).",
      "useOptimistic доступен начиная с React 19.",
    ],
    docsLink: "https://ru.react.dev/reference/react/hooks",
  },
  {
    id: "bundlers",
    title: "Сборщики (Webpack vs Vite)",
    description:
      "Сборщик превращает исходники (JSX, модули, стили) в файлы, понятные браузеру. Webpack — классика: максимально гибкий, огромная экосистема, но медленный старт и сложный конфиг. Vite — современный стандарт: в dev-режиме отдаёт нативные ES-модули без сборки, поэтому запускается почти мгновенно.",
    code: `# создать проект на Vite
npm create vite@latest my-app

# dev-сервер с мгновенным HMR
npm run dev

# продакшен-сборка (внутри — Rollup)
npm run build`,
    pitfalls: [
      "В dev-режиме Vite не собирает бандл (использует esbuild + нативные ESM), а в продакшене собирает через Rollup — поведение может немного отличаться, проверяй build перед деплоем.",
      "Переменные окружения в Vite должны начинаться с VITE_ и читаются через import.meta.env, а не process.env.",
      "Webpack всё ещё встречается в легаси-проектах и Next.js-подобных фреймворках — знать его базово полезно.",
    ],
    docsLink: "https://vite.dev/guide/",
  },
];
