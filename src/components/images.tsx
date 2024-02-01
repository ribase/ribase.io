
import Image from 'next/image';
import {Asset} from "contentful";

export default function Images({ images } : {images:Array<any>}) {
    return (
        <div>
            {images.map((image: Asset) => (
                <div key={image.sys.id}>
                    <Image
                        src={`https:${image.fields.file.url}`}
                        alt={image.fields.title}
                        width={image.fields.file.details.image?.width}
                        height={image.fields.file.details.image?.height}
                    />
                </div>
            ))}
        </div>
    );
}