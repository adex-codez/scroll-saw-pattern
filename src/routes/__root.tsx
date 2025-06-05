import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useState } from "react";

export const Route = createRootRoute({
	component: () => {
		const [isMenuOpen, setIsMenuOpen] = useState(false);

		return (
			<>
				<nav className="h-18 bg-primary-400 p-4 flex items-center justify-between">
					<p className="text-2xl md:mr-8">Logo</p>
					{/* Hamburger button for small screens */}
					<div className="md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
							type="button"
						>
							<svg
								className="h-6 w-6 fill-current"
								viewBox="0 0 24 24"
								aria-label="Menu toggle button"
							>
								{isMenuOpen ? (
									<g>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
										/>
										<title>close</title>
									</g>
								) : (
									<g>
										<path
											fillRule="evenodd"
											d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
										/>
										<title>menu</title>
									</g>
								)}
							</svg>
						</button>
					</div>
					{/* Navigation links for medium and larger screens */}
					<ul className="hidden md:flex gap-6 text-lg font-bold text-secondary-900">
						<Link to="/">Home</Link>
						<Link to="/about">About</Link>
						<Link to="/gallery">Gallery</Link>
					</ul>
				</nav>
				{/* Mobile menu, shown when isMenuOpen is true */}
				{isMenuOpen && (
					<div className="md:hidden">
						<ul className="flex flex-col items-center gap-4 text-lg font-bold bg-primary-400 p-4">
							<Link to="/" onClick={() => setIsMenuOpen(false)}>
								Home
							</Link>
							<Link to="/about" onClick={() => setIsMenuOpen(false)}>
								About
							</Link>
							<Link to="/gallery" onClick={() => setIsMenuOpen(false)}>
								Gallery
							</Link>
						</ul>
					</div>
				)}
				<Outlet />
				<TanStackRouterDevtools />
			</>
		);
	},
});
