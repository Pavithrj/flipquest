
function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
            </div>
        </>
    )
}

export default App
