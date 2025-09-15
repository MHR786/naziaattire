'use client';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'All Products', count: 24 },
  { id: 'lawn-suits', name: 'Lawn Suits', count: 8 },
  { id: 'formal-wear', name: 'Formal Wear', count: 6 },
  { id: 'casual-wear', name: 'Casual Wear', count: 5 },
  { id: 'party-wear', name: 'Party Wear', count: 3 },
  { id: 'winter-collection', name: 'Winter Collection', count: 2 }
];

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <section className="py-8 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-rose-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-rose-50 hover:text-rose-600'
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}