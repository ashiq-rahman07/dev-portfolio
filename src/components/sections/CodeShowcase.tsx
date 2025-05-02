
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const CodeShowcase = () => {
  // Sample code snippets to display
  const snippets = [
    {
      language: "TypeScript",
      title: "React Custom Hook",
      code: `import { useState, useEffect } from 'react';

export const useLocalStorage = <T,>(key: string, initialValue: T) => {
  // Get from local storage then parse
  const readValue = () => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(\`Error reading localStorage key "\${key}":\`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(readValue);

  // Update local storage when state changes
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn(\`Error setting localStorage key "\${key}":\`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
};`
    },
    {
      language: "JavaScript",
      title: "API Data Fetching",
      code: `// Modern async/await API fetch example
const fetchDataWithRetry = async (url, retries = 3, delay = 1000) => {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    
    return await response.json();
  } catch (error) {
    if (retries > 0) {
      console.log(\`Retrying... \${retries} attempts left\`);
      await new Promise(resolve => setTimeout(resolve, delay));
      return fetchDataWithRetry(url, retries - 1, delay * 1.5);
    } else {
      console.error('Max retries reached:', error);
      throw error;
    }
  }
};

// Usage
fetchDataWithRetry('https://api.example.com/data')
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Failed to fetch:', error));`
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Code <span className="text-primary">Snippets</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A glimpse into my coding style and approach to problem-solving. These are examples of reusable components and functions I&apos;ve created.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {snippets.map((snippet, index) => (
            <Card key={index} className="animate-fade-in bg-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">{snippet.title}</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {snippet.language}
                  </span>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono">
                  <code>{snippet.code}</code>
                </pre>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeShowcase;
