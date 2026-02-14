import ContourPattern from '../components/ContourPattern';
import { Coffee, Cookie, Sandwich, IceCream } from 'lucide-react';

const Menu = () => {
  const menuCategories = [
    {
      title: 'Coffee',
      icon: Coffee,
      items: [
        { name: 'Espresso', price: '$3.50', description: 'Rich and bold single shot' },
        { name: 'Cappuccino', price: '$4.50', description: 'Espresso with steamed milk foam' },
        { name: 'Latte', price: '$4.75', description: 'Smooth espresso with steamed milk' },
        { name: 'Americano', price: '$3.75', description: 'Espresso with hot water' },
        { name: 'Cold Brew', price: '$4.25', description: 'Smooth cold-steeped coffee' },
      ],
    },
    {
      title: 'Pastries',
      icon: Cookie,
      items: [
        { name: 'Croissant', price: '$3.25', description: 'Buttery and flaky' },
        { name: 'Blueberry Muffin', price: '$3.50', description: 'Fresh baked daily' },
        { name: 'Chocolate Chip Cookie', price: '$2.75', description: 'Warm and gooey' },
        { name: 'Cinnamon Roll', price: '$4.00', description: 'With cream cheese frosting' },
      ],
    },
    {
      title: 'Sandwiches',
      icon: Sandwich,
      items: [
        { name: 'Turkey & Avocado', price: '$8.50', description: 'On artisan bread' },
        { name: 'Caprese', price: '$7.75', description: 'Fresh mozzarella and basil' },
        { name: 'Veggie Wrap', price: '$7.25', description: 'Hummus and fresh vegetables' },
      ],
    },
    {
      title: 'Desserts',
      icon: IceCream,
      items: [
        { name: 'Tiramisu', price: '$5.50', description: 'Classic Italian dessert' },
        { name: 'Cheesecake', price: '$5.25', description: 'New York style' },
        { name: 'Brownie', price: '$3.75', description: 'Rich chocolate fudge' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1d] relative overflow-hidden">
      <ContourPattern />
      
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-16">
          <h1 className="font-space-grotesk text-4xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#e9c46a] to-[#f4a261] mb-4">
            Our Menu
          </h1>
          <p className="font-manrope text-lg text-gray-300 max-w-2xl mx-auto">
            Carefully crafted beverages and delicious treats
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {menuCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="backdrop-blur-xl bg-[#252529]/60 border border-[#2a9d8f]/20 rounded-xl p-8 hover:border-[#2a9d8f]/40 transition-all hover:shadow-[0_8px_32px_rgba(42,157,143,0.2)]"
                data-testid={`menu-category-${category.title.toLowerCase()}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[#2a9d8f]/20 rounded-full">
                    <Icon className="w-6 h-6 text-[#2a9d8f]" />
                  </div>
                  <h2 className="font-space-grotesk text-2xl font-bold text-white">
                    {category.title}
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="group cursor-pointer"
                      data-testid={`menu-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-manrope font-semibold text-white group-hover:text-[#e9c46a] transition-colors">
                          {item.name}
                        </h3>
                        <span className="font-space-grotesk font-bold text-[#e9c46a]">
                          {item.price}
                        </span>
                      </div>
                      <p className="font-manrope text-sm text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
