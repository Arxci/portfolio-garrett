import { Suspense, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './sections/home/Home'
import Projects from './sections/projects/Projects'

function App() {
	const [currentTab, setCurrentTab] = useState(1)

	return (
		<div className="app">
			<BrowserRouter>
				<Header currentTab={currentTab} />
				<div className="app-sections">
					<Suspense>
						<Routes>
							<Route
								path="/"
								element={
									<>
										<Home setCurrentTab={setCurrentTab} />
										<Projects setCurrentTab={setCurrentTab} />
									</>
								}
							/>
						</Routes>
					</Suspense>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App
