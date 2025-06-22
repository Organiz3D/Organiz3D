export type LogoVariant = "notext" | "horizontal" | "vertical"

export interface LogoProps extends Omit<React.SVGProps<SVGSVGElement>, "children"> {
    variant: LogoVariant,
    colored: boolean,
}

export default function Logo(props: LogoProps) {
    const {
        colored,
        variant,
        ...svgProps
    } = props

    return (
        <svg 
            width="250" 
            height="250" 
            viewBox="0 0 250 250" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            {...svgProps}
        >
            <path 
                d="M189.681 89.0657L125 125M125 125L60.3187 89.0657M125 125V197.291M193.486 155.883V94.1162C193.486 91.5089 193.486 90.2052 193.102 89.0425C192.762 88.0138 192.206 87.0696 191.472 86.273C190.642 85.3725 189.503 84.7393 187.223 83.4731L130.913 52.1895C128.755 50.9905 127.676 50.391 126.533 50.156C125.521 49.948 124.479 49.948 123.467 50.156C122.324 50.391 121.245 50.9905 119.087 52.1895L62.7766 83.4731C60.4974 84.7393 59.3578 85.3725 58.5279 86.273C57.7938 87.0696 57.2382 88.0138 56.8983 89.0425C56.5142 90.2052 56.5142 91.5089 56.5142 94.1162V155.883C56.5142 158.491 56.5142 159.795 56.8983 160.957C57.2382 161.986 57.7938 162.931 58.5279 163.726C59.3578 164.627 60.4974 165.261 62.7766 166.527L119.087 197.81C121.245 199.01 122.324 199.608 123.467 199.844C124.479 200.052 125.521 200.052 126.533 199.844C127.676 199.608 128.755 199.01 130.913 197.81L187.223 166.527C189.503 165.261 190.642 164.627 191.472 163.726C192.206 162.931 192.762 161.986 193.102 160.957C193.486 159.795 193.486 158.491 193.486 155.883Z" 
                stroke="url(#linear_gradiant)" 
                stroke-width="24"
            />
            <defs>
                <linearGradient 
                    id="linear_gradiant" 
                    x1="56.5142" 
                    y1="50" 
                    x2="193.486" 
                    y2="50" 
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#56CCF2"/>
                    <stop offset="1" stop-color="#2F80ED"/>
                </linearGradient>
            </defs>
        </svg>
    )
}
