interface SimplePageProps {
  title: string;
  description: string;
}

const SimplePage = ({ title, description }: SimplePageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-6xl font-serif text-gray-900 mb-6">{title}</h1>
        <p className="text-xl text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default SimplePage;
