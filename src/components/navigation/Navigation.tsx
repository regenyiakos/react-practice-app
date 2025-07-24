type LinkModel = {
    name: string;
    url: string;
}[];

export const Navigation = async () => {
    const LINKS: LinkModel = [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
    ];

    return (
        <nav className='w-full flex'>
            <div className='h-max flex p-5 bg-white justify-start items-center gap-5 '>
                <div className='grow shrink basis-0 h-[42px] px-2.5 justify-start items-center gap-[105px] flex mt-5'>
                    <div className='justify-center items-center gap-10 flex'>
                        {LINKS.map((link, index) => (
                            <a
                                key={index}
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
