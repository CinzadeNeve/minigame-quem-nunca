


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    children: React.ReactNode;
};
export const ButtonPrimary = ({className = '', children, ...props}: ButtonProps) =>{
    return(
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