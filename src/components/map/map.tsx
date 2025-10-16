import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import classes from '@/components/contacts/contacts.module.scss';

export const YandexMap = () => {
    return (
        <YMaps>
            <div>
                <Map
                    defaultState={{
                        center: [57.166203, 65.487319],
                        zoom: 15,
                    }}
                    className={classes.map}
                >
                    <Placemark
                        geometry={[57.166203, 65.487319]}
                        options={{
                            preset: 'islands#blueIcon',
                        }}
                        properties={{
                            hintContent: 'Наш офис',
                            balloonContent: 'Наш офис',
                        }}
                    />
                </Map>
            </div>
        </YMaps>
    );
};
