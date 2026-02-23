/**
 * ReferenceCard component - Compact reference item with hotel name and city
 */
interface ReferenceCardProps {
  hotelName: string;
  city?: string;
}

export default function ReferenceCard({ 
  hotelName, 
  city,
}: ReferenceCardProps) {
  return (
    <div className="group bg-white rounded-lg border border-sage-100 hover:border-sage-300 shadow-sm hover:shadow-md transition-all duration-200 px-4 py-3 flex flex-col gap-1">
      <h3 className="text-sm font-semibold text-sage-900 group-hover:text-sage-700 transition-colors line-clamp-2 text-left">
        {hotelName}
      </h3>
      {city && (
        <p className="inline-flex items-center gap-1 text-xs text-sage-700 bg-sage-50 rounded-full px-2 py-0.5 w-fit">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-sage-500" />
          <span>{city}</span>
        </p>
      )}
    </div>
  );
}
