const FEEDS = {
    movies: 'https://rss.app/feeds/v1.1/_6QzByBP0Y0E9bL0O.json',
    music: 'https://rss.app/feeds/v1.1/_p1hbSzosU9dbDQWx.json',
    money: 'https://rss.app/feeds/v1.1/_fcZVOvvC7xA6iz8u.json',
    popCulture: 'https://rss.app/feeds/v1.1/_8Tib7bkE02swlmp7.json',
    sports: 'https://rss.app/feeds/v1.1/_5pZybCiMDbl5fBo8.json',
    tech: 'https://rss.app/feeds/v1.1/_GNEAg9D5CvYRIxAQ.json'
};

function SpillTrends() {
    const [articles, setArticles] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [activeTab, setActiveTab] = React.useState('all');

    React.useEffect(() => {
        const fetchAllFeeds = async () => {
            setLoading(true);
            const articlesByTopic = {};
            
            for (const [topic, url] of Object.entries(FEEDS)) {
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    articlesByTopic[topic] = data.items || [];
                } catch (error) {
                    console.error(`Error fetching ${topic} feed:`, error);
                    articlesByTopic[topic] = [];
                }
            }
            
            setArticles(articlesByTopic);
            setLoading(false);
        };

        fetchAllFeeds();
    }, []);

    const getDisplayArticles = () => {
        let displayArticles = activeTab === 'all' 
            ? Object.values(articles).flat()
            : articles[activeTab] || [];

        if (searchTerm) {
            const searchLower = searchTerm.toLowerCase();
            displayArticles = displayArticles.filter(article => 
                article.title.toLowerCase().includes(searchLower) ||
                (article.description || '').toLowerCase().includes(searchLower)
            );
        }

        return displayArticles;
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <Navigation 
                activeTab={activeTab} 
                onTabChange={setActiveTab}
                categories={Object.keys(FEEDS)}
            />
            <main className="max-w-7xl mx-auto px-4 py-6">
                {loading ? (
                    <div className="text-center py-12">
                        <div className="text-gray-500">Loading articles...</div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {getDisplayArticles().map((article, index) => (
                            <ArticleCard key={article.id || index} article={article} />
                        ))}
                    </div>
                )}
                
                {!loading && getDisplayArticles().length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No articles found matching your search.</p>
                    </div>
                )}
            </main>
        </div>
    );
}
