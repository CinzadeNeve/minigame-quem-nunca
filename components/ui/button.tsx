


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    children: React.ReactNode;
};
export const ButtonPrimary = ({ className = '', children, ...props }: ButtonProps) => {
    return (
        <button className={`
                flex
                justify-center
                w-full max-w-[250px]
                p-[.3rem_1.5rem]
                text-[20px] max-md:text-[14px]
                rounded-[.25rem]
                bg-neutral-100 hover:bg-[transparent]
                text-white hover:text-neutral-100
                uppercase
                font-carter-one
                mt-[1.5rem] max-md:mt-[1rem]
                border-[2px] border-neutral-100 border-solid
                transition-[background,color] duration-[.3s] linear
                cursor-pointer
             ${className}`} {...props}>
            {children}
        </button>
    )
}

type ButtonSecundaryType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    children: React.ReactNode;
};
export const ButtonSecundary = ({ className = '', children, ...props }: ButtonSecundaryType) => {
    return (
        <button className={`cursor-pointer w-full p-[.5rem] text-center rounded-[.25rem] bg-neutral-100 text-primary text-[18px] max-sm:text-[14px] border-2 border-neutral-100 hover:border-neutral-50 focus-visible:border-neutral-50 hover:shadow-lg focus-visible:shadow-lg hover:shadow-amber-200 focus-visible:shadow-amber-200 hover:scale-[1.1] focus-visible:scale-[1.1] transition-all duration-200 ease-in-out focus-visible:outline-hidden ${className}`} {...props}>
            {children}
        </button>
    )
}