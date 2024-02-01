import {BLOCKS, Document, MARKS} from "@contentful/rich-text-types";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export class TextHelpers {
    public renderRichText(content: Document) {
        return documentToReactComponents(content, {
            renderNode: {
                [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
                [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
                [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
                [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
                [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
                [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
                [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
                [BLOCKS.EMBEDDED_ASSET]: (node) => {
                    const { url, fileName } = node.data.target.fields.file;
                    return <Image src={url} alt={fileName} />;
                },
            },
            renderMark: {
                [MARKS.BOLD]: (text) => <strong>{text}</strong>,
                [MARKS.ITALIC]: (text) => <em>{text}</em>,
                [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
            },
        });
    }
}