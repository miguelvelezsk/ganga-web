import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/productService";
import type { Product } from "../types/product";

export function useProductSearch(productName: string): { data: Product[] | undefined, isLoading: boolean, isError: boolean } {
    const { data, isLoading, isError } = useQuery<Product[]>({
        queryKey: ['products', productName],
        retry: false,
        enabled: !!productName,
        queryFn: () => getProducts(productName),
    })
    return { data, isLoading, isError }
}