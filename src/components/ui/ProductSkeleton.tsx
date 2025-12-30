import { Skeleton } from "@/components/ui/skeleton";

interface ProductSkeletonProps {
  count?: number;
}

export const ProductSkeleton = ({ count = 4 }: ProductSkeletonProps) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="group">
          <div className="relative overflow-hidden bg-gray-50 mb-3">
            <Skeleton className="w-full h-48 sm:h-64 md:h-80 lg:h-96" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
};

export const ProductCardSkeleton = () => (
  <div className="group">
    <div className="relative overflow-hidden bg-gray-50 mb-3">
      <Skeleton className="w-full h-48 sm:h-64 md:h-80 lg:h-96" />
    </div>
    <div className="space-y-2">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  </div>
);
