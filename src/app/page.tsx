import ProductCard from "@/components/ProductCard";
import { parseStringPromise } from "xml2js";
import * as cheerio from "cheerio";

interface Product {
    name: string;
    link: string;
    imagesUrl: string[];
}

export default async function Home() {
    const products = await getProducts();

    return (
        <div>
            <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </div>
    );
}

export interface RssItem {
    title: string[];
    link: string[];
    description: string[];
    pubDate?: string[];
    guid?: string[];
}

async function getProducts(): Promise<Product[]> {
    const RSS_URL = "https://www.etsy.com/shop/Organiz3DFrance/rss";

    const rssResponse = await fetch(RSS_URL, { next: { revalidate: 3600 } });

    const rssText = await rssResponse.text();
    const parsed = await parseStringPromise(rssText);
    const items = parsed.rss.channel[0].item as RssItem[];

    return items.map((item) => {
        const name = item.title[0].trim();

        const rawLink = item.link[0].trim();
        const match = rawLink.match(/\/listing\/(\d+)/);
        const listingId = match ? match[1] : null;
        const link = listingId
            ? `https://organiz3dfrance.etsy.com/listing/${listingId}`
            : rawLink;

        const description = item.description[0];
        const $ = cheerio.load(description);
        const image = $("img").attr("src") ?? "";

        return { name, link, imagesUrl: [image, image] };
    });
}
