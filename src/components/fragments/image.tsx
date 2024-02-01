
import Image from 'next/image';
import {Asset} from "contentful";

export default function ImageComponent({ image }: {image:Asset}) {
    const imageUrl = `https:${image.fields.file.url}`
    const imageWidth = image.fields.file.details.image?.width
    const imageHeight = image.fields.file.details.image?.height
    return (
        <div>
            <Image src={imageUrl} width={imageWidth} height={imageHeight} alt={image.fields.title} />

        </div>
    );
}