import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './sections/home/Home'
import Projects from './sections/projects/Projects'

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Header />
				<div className="app-sections">
					<Suspense>
						<Routes>
							<Route
								path="/"
								element={
									<>
										<Home />
										<Projects />
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
