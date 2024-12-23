function Header({ searchTerm, onSearchChange }) {
    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 py-6">
                <h1 className="text-3xl font-bold text-gray-900">SPILL Trends</h1>
                <div className="mt-4 relative">
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <svg 
                        className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>
        </header>
    );
}
