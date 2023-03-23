const CATEGORIES_LIST = [
    {
        name: "general",
        icon: "ri-store-3-fill"
    },
    {
        name: "technology",
        icon: "ri-code-s-slash-fill"
    },
    {
        name: "business",
        icon: "ri-line-chart-fill",
    },
    {
        name: "entertainment",
        icon: "ri-movie-2-line",
    },
    {
        name: "sports",
        icon: "ri-football-line",
    },
]

const colors: { [key: string]: string } = {
    "general": "text-white/50",
    "technology": "text-green-400",
    "business": "text-blue-400",
    "entertainment": "text-orange-400",
    "sports": "text-amber-500",
}

export {
    CATEGORIES_LIST, colors
}