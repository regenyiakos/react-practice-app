'use client';
import { LinkModel } from '@/models/navigation/types';
import {
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
} from 'lucide-react';
import '../../styles/navigation/styles.css';
import { useState } from 'react';

type NavigationProps = {
    links: LinkModel;
};

export const Navigation = ({ links }: NavigationProps) => {
    const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(
        null
    );

    const [openSubSubMenuIndex, setOpenSubSubMenuIndex] = useState<
        number | null
    >(null);

    const setCurrentDropDown = (index: number) => {
        setOpenSubSubMenuIndex(null);
        if (openSubMenuIndex === index) {
            setOpenSubMenuIndex(null);
        } else {
            setOpenSubMenuIndex(index);
        }
    };
    const setCurrentSubSubDropDown = (index: number) => {
        if (openSubSubMenuIndex === index) {
            setOpenSubSubMenuIndex(null);
        } else {
            setOpenSubSubMenuIndex(index);
        }
    };

    return (
        <nav className='w-full flex bg-[lightblue]'>
            <div className='h-max flex p-2 justify-start items-center gap-5 '>
                <div className='grow shrink basis-0 h-[30px] px-2.5 justify-start items-center gap-[50px] flex mt-2'>
                    <div className='justify-center items-center gap-10 flex'>
                        {links.map((link, index) =>
                            (link.subLinks?.length || 0) > 0 ? (
                                <div
                                    className='dropDownMenuContainer'
                                    key={index}
                                >
                                    <div
                                        className='dropDownMenuLink menuLinkText'
                                        onClick={() => {
                                            setCurrentDropDown(index);
                                        }}
                                    >
                                        <span>{link.name}</span>
                                        {openSubMenuIndex === index ? (
                                            <ChevronUp />
                                        ) : (
                                            <ChevronDown />
                                        )}
                                    </div>
                                    {openSubMenuIndex === index && (
                                        <div className='dropDownSubMenuContainer'>
                                            {link.subLinks?.map(
                                                (subLink, sIndex) =>
                                                    (subLink.subLinks?.length ||
                                                        0) > 0 ? (
                                                        <div
                                                            className='dropDownSubSubMenuContainer'
                                                            key={sIndex}
                                                        >
                                                            <div
                                                                className='dropDownSubSubMenuLink menuLinkText'
                                                                onClick={() => {
                                                                    setCurrentSubSubDropDown(
                                                                        sIndex
                                                                    );
                                                                }}
                                                            >
                                                                <span>
                                                                    {
                                                                        subLink.name
                                                                    }
                                                                </span>
                                                                {openSubSubMenuIndex ===
                                                                sIndex ? (
                                                                    <ChevronLeft />
                                                                ) : (
                                                                    <ChevronRight />
                                                                )}
                                                                {openSubSubMenuIndex ===
                                                                    sIndex && (
                                                                    <div className='dropDownSubSubMenuLinkContainer'>
                                                                        {subLink.subLinks?.map(
                                                                            (
                                                                                subsublink,
                                                                                ssIndex
                                                                            ) => (
                                                                                <a
                                                                                    key={
                                                                                        ssIndex
                                                                                    }
                                                                                    href={
                                                                                        subsublink.url
                                                                                    }
                                                                                    className='menuLinkText'
                                                                                >
                                                                                    {
                                                                                        subsublink.name
                                                                                    }
                                                                                </a>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <a
                                                            key={sIndex}
                                                            href={subLink.url}
                                                            className='menuLinkText'
                                                        >
                                                            {subLink.name}
                                                        </a>
                                                    )
                                            )}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <a
                                    key={'a' + index}
                                    href={link.url}
                                    className='menuLinkText'
                                >
                                    {link.name}
                                </a>
                            )
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
