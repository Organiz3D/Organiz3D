import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { AnchorHTMLAttributes } from "react";

export interface LinkProps
    extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
    isPrimary: boolean;
    icon: IconDefinition;
    text: string;
}

export default function Link(props: LinkProps) {
    const { isPrimary, icon, text, className, ...otherProps } = props;

    return (
        <a
            className={clsx(
                "btn btn-block btn-primary",
                !isPrimary && "btn-outline",
                className,
            )}
            {...otherProps}
        >
            <FontAwesomeIcon icon={icon} className="size-[1.2em]" />
            {text}
        </a>
    );
}
