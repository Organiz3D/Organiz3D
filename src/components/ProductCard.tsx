import Image from "next/image";

export interface ProductCardProps {
    name: string;
    link: string;
    imagesUrl: string[];
}

export default function ProductCard(props: ProductCardProps) {
    const { name, link, imagesUrl } = props;

    console.log(name, link, imagesUrl);

    return (
        <a href={link} target="_blank" className="rounded-box">
            <figure className="hover-gallery rounded-[inherit]">
                {imagesUrl.map((imageUrl, index) => (
                    <Image
                        key={index}
                        src={imageUrl}
                        width={500}
                        height={500}
                        alt={name}
                        className="aspect-square object-cover rounded-[inherit]"
                    />
                ))}
            </figure>
        </a>
    );
}
