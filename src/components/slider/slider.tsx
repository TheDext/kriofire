import React, { useState, useRef, type FC } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import classes from './slider.module.scss';
import { useClickAway } from 'react-use';
import classNames from '@/utils/classNames';
import chevroneRightIcon from '@icons/chevroneRight.png';
import { Title } from '@/components/title';
import { Subtitle } from '@/components/subtitle';
import { useInView } from 'react-intersection-observer';

interface ISlider {
    images: string[];
    title: string;
    subtitle: string;
    label: string;
    anchor: string;
}
type SlierType = { config: ISlider };

const Slider: FC<SlierType> = ({ config }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [initControllMainSlider, setInitControllMainSlider] =
        useState<SwiperClass | null>(null);
    const [initControllModalSlider, setInitControllModalSlider] =
        useState<SwiperClass | null>(null);
    const refOne = useRef<HTMLDivElement>(null);
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
        delay: 200,
    });
    const { images, title, subtitle, label, anchor } = config;

    const openModal = (index: number) => {
        setActiveIndex(index);
        setIsModalOpen(true);
        const body = document.querySelector('.app');
        if (body) {
            body.classList.add('_isLock');
        }
    };

    useClickAway(refOne, () => {
        setIsModalOpen(false);

        const body = document.querySelector('.app');
        if (body) {
            body.classList.remove('_isLock');
        }
    }, ['click']);

    const handleRightClick = () => {
        if (initControllMainSlider) {
            initControllMainSlider.slideNext();
        }
    };

    const handleLeftClick = () => {
        if (initControllMainSlider) {
            initControllMainSlider.slidePrev();
        }
    };

    const handleModalRightClick = () => {
        if (initControllModalSlider) {
            initControllModalSlider.slideNext();
        }
    };

    const handleModalLeftClick = () => {
        if (initControllModalSlider) {
            initControllModalSlider.slidePrev();
        }
    };

    return (
        <div id={anchor} className={classes.slider}>
            <div className="_container-default">
                <Title>{title}</Title>
                <div className={classes.subtitle}>
                    <Subtitle>{subtitle}</Subtitle>
                </div>
                <div
                    ref={ref}
                    className={classNames(
                        classes.label,
                        { [classes._inView]: inView },
                        []
                    )}
                >
                    {label}
                </div>

                <Swiper
                    // centeredSlides={true}
                    centerInsufficientSlides={true}
                    className={classes.mainSlider}
                    modules={[Pagination]}
                    onSwiper={(swiper: SwiperClass) =>
                        setInitControllMainSlider(swiper)
                    }
                    breakpoints={{
                        320: {
                            slidesPerView: 1.3,
                            spaceBetween: 10,
                        },
                        425: {
                            slidesPerView: 2.5,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 4.2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 5.4,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {images.map((image: string, index: number) => (
                        <SwiperSlide key={index} className={classes.slide}>
                            <div
                                onClick={() => openModal(index)}
                                className={classes.img}
                            >
                                <img src={image} alt={`Slide ${index + 1}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={classes.mainControll}>
                    <div
                        className={classNames(classes.navBtn, {}, [
                            classes._next,
                        ])}
                        onClick={handleLeftClick}
                    >
                        <img
                            src={chevroneRightIcon}
                            className={classes._reverse}
                            alt="arrow"
                        />
                    </div>
                    <div
                        className={classNames(classes.navBtn, {}, [
                            classes._prev,
                        ])}
                        onClick={handleRightClick}
                    >
                        <img src={chevroneRightIcon} alt="arrow" />
                    </div>
                </div>

                {isModalOpen && (
                    <div className={classes.modal}>
                        <div className={classes.modalContent}>
                            <div className={classes.modalBody} ref={refOne}>
                                <Swiper
                                    initialSlide={activeIndex}
                                    spaceBetween={15}
                                    slidesPerView={1}
                                    className={classes.modalSlider}
                                    onSwiper={(swiper: SwiperClass) =>
                                        setInitControllModalSlider(swiper)
                                    }
                                >
                                    {images.map(
                                        (image: string, index: number) => (
                                            <SwiperSlide
                                                key={index}
                                                className={classes.slide}
                                            >
                                                <div className={classes.img}>
                                                    <img
                                                        src={image}
                                                        alt={`Slide ${index + 1}`}
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        )
                                    )}
                                </Swiper>
                                <div className={classes.mainControll}>
                                    <div
                                        className={classNames(
                                            classes.navBtn,
                                            {},
                                            [classes._next]
                                        )}
                                        onClick={handleModalLeftClick}
                                    >
                                        <img
                                            src={chevroneRightIcon}
                                            className={classes._reverse}
                                            alt="arrow"
                                        />
                                    </div>
                                    <div
                                        className={classNames(
                                            classes.navBtn,
                                            {},
                                            [classes._prev]
                                        )}
                                        onClick={handleModalRightClick}
                                    >
                                        <img
                                            src={chevroneRightIcon}
                                            alt="arrow"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Slider;
