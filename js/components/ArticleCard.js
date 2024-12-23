function ArticleCard({ article }) {
    return (
        <article className="article-card bg-white rounded-lg shadow hover:shadow-md">
            {article.image && (
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
            )}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.description || article.summary}
                </p>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                        {new Date(article.published_at || article.date).toLocaleDateString()}
                    </span>
                    
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                        Read more
                    </a>
                </div>
            </div>
        </article>
    );
}
