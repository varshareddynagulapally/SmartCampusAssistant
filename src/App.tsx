import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ChatInterface } from './components/ChatInterface';
import { CategoryView } from './components/CategoryView';

function App() {
  const [activeCategory, setActiveCategory] = useState<string>('chat');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setSidebarOpen(false);
  };

  const handleBackToChat = () => {
    setActiveCategory('chat');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar 
        onCategoryClick={handleCategoryClick}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      
      <div className="flex-1 flex flex-col lg:ml-0">
        {activeCategory === 'chat' ? (
          <ChatInterface onMenuClick={() => setSidebarOpen(true)} />
        ) : (
          <CategoryView 
            category={activeCategory} 
            onBack={handleBackToChat}
          />
        )}
      </div>
    </div>
  );
}

export default App;