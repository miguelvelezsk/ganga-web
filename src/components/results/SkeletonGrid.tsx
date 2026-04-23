import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-12 my-4 mt-10">
            {[...Array(6)].map((_, index) => (
                <Skeleton key={index} className="w-full h-50 rounded-3xl" />
            ))}
        </div>
    );
}