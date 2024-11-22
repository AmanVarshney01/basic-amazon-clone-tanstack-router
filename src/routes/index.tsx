import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export const Route = createFileRoute("/")({
  component: Index,
  loaderDeps: ({ search }) => ({ q: search.q }),
  loader: async ({ deps: { q } }) => {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    const products: Product[] = await res.json();

    const filteredProducts = q
      ? products.filter(
          (product) =>
            product.title.toLowerCase().includes(q.toLowerCase()) ||
            product.description.toLowerCase().includes(q.toLowerCase()),
        )
      : products;

    return { products: filteredProducts };
  },
  pendingComponent: () => (
    <div className="flex justify-center items-center">
      <div className="size-8 rounded-full border-2 border-b-0 border-blue-500 animate-spin"></div>
    </div>
  ),
});

function Index() {
  const { products } = Route.useLoaderData();
  const { q } = Route.useSearch();

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold tracking-tight">
          {q ? `Search results for "${q}"` : "Welcome to Our Store"}
        </h2>
        <Badge>{products.length} Products</Badge>
      </div>

      {products.length === 0 ? (
        <div className="text-center text-gray-500 py-12">
          No products found for "{q}"
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col h-min">
              <CardHeader className="space-y-4 flex-none">
                <div className="h-48 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <CardTitle className="line-clamp-1">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
              </CardContent>
              <Separator className="my-4" />
              <CardFooter className="flex justify-between items-center pb-3 flex-none">
                <span className="text-lg font-semibold">
                  ${product.price.toFixed(2)}
                </span>
                <Badge className="hover:bg-primary hover:text-primary-foreground cursor-pointer">
                  Add to Cart
                </Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
