'use client'
interface CardProps {
    title: string;
    children: React.ReactNode;
    icon?: React.ReactNode; // Indicate that icon is optional
  }
  
  const Card: React.FC<CardProps> = ({ title, children, icon }) => {
    return (
      <div className="max-w-xs w-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 m-4">
        <div className="bg-gray-100 p-4 flex items-center">
          {icon && <div className="mr-2">{icon}</div>} {/* Render icon if provided */}
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        </div>
        <div className="p-4">
          <p className="text-gray-600">{children}</p>
        </div>
      </div>
    );
  };

  export default Card;