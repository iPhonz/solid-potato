function Navigation({ activeTab, onTabChange, categories }) {
    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex space-x-4 overflow-x-auto">
                    <button
                        onClick={() => onTabChange('all')}
                        className={`px-3 py-2 text-sm font-medium ${
                            activeTab === 'all'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        All
                    </button>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => onTabChange(category)}
                            className={`px-3 py-2 text-sm font-medium whitespace-nowrap ${
                                activeTab === category
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
