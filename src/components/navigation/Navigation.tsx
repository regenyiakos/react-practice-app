import { LinkModel } from '@/models/navigation/types';
type NavigationProps = {
    links: LinkModel;
};
export const Navigation = ({ links }: NavigationProps) => {
    return (
        <nav className='w-full flex bg-blue-400'>
            <div className='h-max flex p-2 justify-start items-center gap-5 '>
                <div className='grow shrink basis-0 h-[30px] px-2.5 justify-start items-center gap-[50px] flex mt-2'>
                    <div className='justify-center items-center gap-10 flex'>
                        {links.map((link, index) => (
                            <a
                                key={'a' + index}
                                href={link.url}
                                className='text-gray-800 hover:text-blue-600 transition-colors duration-300'
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
